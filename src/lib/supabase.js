import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rjcvswokjgsnjlcwwbkd.supabase.com",
  "YOUR_PUBLISHABLE_KEY"
);