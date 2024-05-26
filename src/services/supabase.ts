// F2KZOz4essPsk3v9
/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hlvlrjcpyjwnzlbsoloy.supabase.co" as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
