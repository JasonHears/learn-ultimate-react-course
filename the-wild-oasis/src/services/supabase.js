import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fpmugahjohehlyishser.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbXVnYWhqb2hlaGx5aXNoc2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NzI3MTksImV4cCI6MjAyNzE0ODcxOX0.chXyojkivA1Bl0qhK4dYTZpPjH2lpSNu4G3uXBDZJl0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
