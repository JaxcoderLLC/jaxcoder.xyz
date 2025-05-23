import Airtable from "airtable";

// Use either server-side or client-side environment variables
const getApiKey = () => {
  return process.env.AIRTABLE_API_KEY || process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
};

const getBaseId = () => {
  return process.env.AIRTABLE_BASE_ID || process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
};

// Initialize Airtable with API key
const airtable = new Airtable({
  apiKey: getApiKey(),
});

// Get the base with the ID from env vars
export const base = airtable.base(
  getBaseId() as string
);

// Table name for leads
export const LEADS_TABLE = "Contact Interest";

// Function to add a new lead to Airtable
export async function addLead(data: {
  name: string;
  email: string;
  company: string;
  budget: string;
  description: string;
}) {
  try {
    console.log('Airtable addLead called with:', {
      data,
      hasBase: !!base,
      tableExists: !!LEADS_TABLE
    });
    
    // Create fields object without the CreatedAt field
    const fields = {
      Name: data.name,
      Email: data.email,
      Company: data.company,
      Budget: data.budget,
      Description: data.description,
      Source: "Website Strategy Call Form",
      // Airtable often expects dates in their own format or as a string
      // Let's try without a CreatedAt field and let Airtable use its default
    };
    
    console.log('Sending fields to Airtable:', fields);
    
    const response = await base(LEADS_TABLE).create([
      {
        fields: fields,
      },
    ]);

    return { success: true, id: response[0].id };
  } catch (error) {
    console.error("Error saving to Airtable:", error);
    return { success: false, error };
  }
}
