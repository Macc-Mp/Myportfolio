// api/get-visits.js
import { createClient } from '@supabase/supabase-js';

// Check for required environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable');
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default async (req, res) => { // Standard Vercel Serverless Function signature
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Fetch the 'count' from the single row in the 'visits' table
    const { data, error } = await supabase
      .from('visits')
      .select('count')
      .eq('id', 1) // Assuming your counter row has ID 1
      .single(); // Expecting only one row

    console.log('Supabase get-visits data:', data, 'error:', error);

    if (error) {
      console.error('Error fetching visits:', error);
      return res.status(500).json({ error: 'Failed to fetch visits' });
    }

    if (!data || typeof data.count !== 'number') {
      console.error('No row with id=1 found or count is not a number.');
      return res.status(404).json({ message: 'Counter not found or empty. Ensure row with id=1 exists in Supabase.' });
    }

    return res.status(200).json({ count: data.count });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};