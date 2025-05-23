import { NextRequest, NextResponse } from 'next/server';
import { addLead } from '@/lib/airtable';

export async function POST(request: NextRequest) {
  try {
    console.log('API Route: Processing request');
    const body = await request.json();
    
    // Validate required fields
    const { name, email, company, budget, description } = body;
    console.log('Received data:', { name, email, company });
    
    if (!name || !email || !company) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Debug environment variables
    console.log('Environment variable check:', { 
      hasApiKey: !!process.env.AIRTABLE_API_KEY,
      hasPublicApiKey: !!process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
      hasBaseId: !!process.env.AIRTABLE_BASE_ID,
      hasPublicBaseId: !!process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
    });
    
    // Add lead to Airtable
    try {
      const result = await addLead({
        name,
        email,
        company,
        budget: budget || 'Not specified',
        description: description || 'No description provided',
      });
      
      if (result.success) {
        console.log('Successfully saved lead with ID:', result.id);
        return NextResponse.json({ success: true, id: result.id });
      } else {
        console.error('Failed to save lead with error:', result.error);
        return NextResponse.json({ 
          success: false, 
          error: 'Failed to save to database',
          details: result.error
        }, { status: 500 });
      }
    } catch (airtableError) {
      console.error('Airtable error:', airtableError);
      return NextResponse.json({ 
        error: 'Error with database connection', 
        details: airtableError instanceof Error ? airtableError.message : String(airtableError)
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { 
        error: 'Unexpected server error', 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 