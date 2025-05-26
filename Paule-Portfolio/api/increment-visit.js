// api/increment-visit.js
import { createClient } from '@supabase/supabase-js';

// Check for required environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable');
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default async (req, res) => { // Standard Vercel Serverless Function signature
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Fetch current count
    const { data: row, error: fetchError } = await supabase
      .from('visits')
      .select('count')
      .eq('id', 1)
      .single();

    if (fetchError) {
      console.error('Error fetching current count:', fetchError);
      return res.status(500).json({ error: 'Failed to fetch current count' });
    }
    if (!row) {
      console.error('No row with id=1 found in visits table.');
      return res.status(404).json({ error: 'No row with id=1 found in visits table.' });
    }

    // Increment count
    const newCount = (row.count || 0) + 1;
    const { error: updateError } = await supabase
      .from('visits')
      .update({ count: newCount })
      .eq('id', 1);

    if (updateError) {
      console.error('Error updating count:', updateError);
      return res.status(500).json({ error: 'Failed to increment visit' });
    }

    return res.status(200).json({ message: 'Visit incremented successfully', count: newCount });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};