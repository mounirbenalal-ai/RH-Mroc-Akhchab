import { createClient } from '@supabase/supabase-js';

// بيانات الربط مع الذاكرة السحابية
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
