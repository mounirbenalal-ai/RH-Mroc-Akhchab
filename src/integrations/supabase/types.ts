export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]
export interface Database {
  public: {
    Tables: {
      employees: {
        Row: { id: string; user_id: string; full_name: string; role: string; salary: number };
        Insert: { id?: string; user_id: string; full_name: string; role: string; salary: number };
        Update: { id?: string; user_id?: string; full_name?: string; role?: string; salary?: number };
      };
    };
  };
}
