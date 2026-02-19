
const  { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

exports.supabase = createClient(supabaseUrl, supabaseKey);
        