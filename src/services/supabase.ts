import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dnpvawuigaxhncxszrmb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucHZhd3VpZ2F4aG5jeHN6cm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNzgzNjcsImV4cCI6MjA0Nzg1NDM2N30.kf6vBInDguF3qvcktgMCoHyyTS0AMLftvziN7rBDy3M";
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
