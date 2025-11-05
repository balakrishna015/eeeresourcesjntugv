import { createClient } from '@supabase/supabase-js'

// Read the variables from our .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create the "client" - this is our official connection
export const supabase = createClient(supabaseUrl, supabaseKey)