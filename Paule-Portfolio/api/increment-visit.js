// api/increment-visit.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default async (req, res) => { // Standard Vercel Serverless Function signature
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Vercel's default parser might handle req.body directly,
    // but for safety, ensure it's a JSON object if you're sending one
    // const body = req.body; // If your client-side sends a body, otherwise not needed for counter

    // Increment the 'count' for the single row in the 'visits' table
    const { data, error } = await supabase
      .from('visits')
      .update({ count: supabase.raw('count + 1') })
      .eq('id', 1); // Assuming your counter row has ID 1

    if (error) {
      console.error('Error incrementing visit:', error);
      return res.status(500).json({ error: 'Failed to increment visit' });
    }

    return res.status(200).json({ message: 'Visit incremented successfully' });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};