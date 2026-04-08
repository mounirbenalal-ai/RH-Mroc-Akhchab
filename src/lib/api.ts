import { supabase } from './supabase';
import { Employee } from '../types/database';

export const getEmployees = async () => {
  const { data, error } = await supabase
    .from('employees')
    .select('*')
    .order('full_name', { ascending: true });
  
  if (error) throw error;
  return data as Employee[];
};

export const addEmployee = async (employee: Omit<Employee, 'id'>) => {
  const { data, error } = await supabase
    .from('employees')
    .insert([employee]);
  
  if (error) throw error;
  return data;
};
