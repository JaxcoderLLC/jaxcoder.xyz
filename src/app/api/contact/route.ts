import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, projectType, budget, timeline, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !projectType || !budget || !timeline || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const priority = getPriority(budget, timeline);
    const dealValue = getDealValue(budget);

    // Prepare contact data - using only basic standard properties
    const contactData = {
      properties: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        company: company,
        lifecyclestage: 'lead',
        hs_lead_status: 'NEW',
      }
    };

    let contactId: string;

    // Try to create contact, handle if already exists
    const contactResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (contactResponse.ok) {
      const contact = await contactResponse.json();
      contactId = contact.id;
      console.log('Contact created successfully:', contactId);
    } else if (contactResponse.status === 409) {
      // Contact already exists, extract ID from error message
      const errorData = await contactResponse.json();
      console.log('Contact already exists, using existing contact');
      
      // Try to extract the existing ID from the error message
      const existingIdMatch = errorData.message?.match(/Existing ID: (\d+)/);
      if (existingIdMatch) {
        contactId = existingIdMatch[1];
        console.log('Using existing contact ID:', contactId);
        
        // Update the existing contact with new information
        await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });
      } else {
        // If we can't extract ID from error, search by email
        const searchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/search`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filterGroups: [{
              filters: [{
                propertyName: 'email',
                operator: 'EQ',
                value: email
              }]
            }]
          }),
        });

        if (searchResponse.ok) {
          const searchResult = await searchResponse.json();
          if (searchResult.results && searchResult.results.length > 0) {
            contactId = searchResult.results[0].id;
            console.log('Found existing contact via search:', contactId);
          } else {
            throw new Error('Could not find or create contact');
          }
        } else {
          throw new Error('Could not search for existing contact');
        }
      }
    } else {
      const error = await contactResponse.json();
      console.error('HubSpot contact creation error:', error);
      throw new Error(`HubSpot Contact API error: ${contactResponse.status} - ${error.message}`);
    }

    // Create deal in HubSpot
    const dealData = {
      properties: {
        dealname: `${company} - ${projectType}`,
        dealstage: 'appointmentscheduled', // Adjust based on your pipeline
        pipeline: 'default', // Use your pipeline ID
        amount: dealValue,
        closedate: getCloseDate(timeline),
        hubspot_owner_id: process.env.HUBSPOT_OWNER_ID, // Your user ID
        dealtype: 'newbusiness',
        // Add project details to deal description
        description: `Project Type: ${projectType}\nBudget Range: ${budget}\nTimeline: ${timeline}\nPriority: ${priority}\nProject Details: ${message}\nSource: Website Contact Form`,
      },
      associations: [
        {
          to: {
            id: contactId
          },
          types: [
            {
              associationCategory: 'HUBSPOT_DEFINED',
              associationTypeId: 3 // Contact to Deal association
            }
          ]
        }
      ]
    };

    const dealResponse = await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dealData),
    });

    let deal = null;
    if (dealResponse.ok) {
      deal = await dealResponse.json();
      console.log('Deal created successfully:', deal.id);
    } else {
      const error = await dealResponse.json();
      console.error('HubSpot deal creation error:', error);
      // Don't fail the entire request if deal creation fails
      console.log('Continuing without deal creation...');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      contactId: contactId,
      dealId: deal?.id || null
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: `Failed to submit form: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}

// Helper function to determine lead priority
function getPriority(budget: string, timeline: string): string {
  if (budget === '250k+' && timeline === 'asap') return 'Hot Lead';
  if (budget === '250k+' || timeline === 'asap') return 'Warm Lead';
  if (budget === '100k-250k') return 'Qualified Lead';
  return 'Standard Lead';
}

// Helper function to convert budget range to deal value
function getDealValue(budget: string): number {
  switch (budget) {
    case '25k-50k': return 37500; // Midpoint
    case '50k-100k': return 75000;
    case '100k-250k': return 175000;
    case '250k+': return 350000; // Conservative estimate
    default: return 50000;
  }
}

// Helper function to set close date based on timeline
function getCloseDate(timeline: string): string {
  const now = new Date();
  switch (timeline) {
    case 'asap':
      now.setMonth(now.getMonth() + 1);
      break;
    case '1-3months':
      now.setMonth(now.getMonth() + 2);
      break;
    case '3-6months':
      now.setMonth(now.getMonth() + 4);
      break;
    case '6months+':
      now.setMonth(now.getMonth() + 8);
      break;
    default:
      now.setMonth(now.getMonth() + 3);
  }
  return now.toISOString().split('T')[0]; // YYYY-MM-DD format
} 