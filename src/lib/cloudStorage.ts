import { supabase } from './supabase';

export const uploadToCloud = async (file: File, folder: string) => {
  const path = `${folder}/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from('company-files')
    .upload(path, file);

  if (error) throw error;
  return data?.path;
};
