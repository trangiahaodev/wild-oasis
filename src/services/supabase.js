import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://shzhhqychlfbsktjgage.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoemhocXljaGxmYnNrdGpnYWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NzgzMTgsImV4cCI6MjAyMzQ1NDMxOH0.3L6deE-s_Pnhp_iNVvn_KTF-fpyaKL0MAUxNUUNyAWA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
