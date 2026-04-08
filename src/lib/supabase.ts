import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://أدخل_هنا_رابط_مشروعك.supabase.co';
const supabaseAnonKey = 'أدخل_هنا_مفتاح_الأمان_الخاص_بك';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
