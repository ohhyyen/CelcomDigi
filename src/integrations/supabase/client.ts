import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dlfztrxnkfozxqebngxo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZnp0cnhua2ZvenhxZWJuZ3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNDQwOTUsImV4cCI6MjA2NzgyMDA5NX0.MDGAW5GrUZNFMskzkePK3dwK94wcIIDMLCJmVSpzyW8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);