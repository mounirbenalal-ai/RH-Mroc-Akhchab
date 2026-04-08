import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const useStorage = () => {
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file: File, bucket: string) => {
    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;
      return filePath;
    } catch (error) {
      console.error('Error uploading:', error);
    } finally {
      setUploading(false);
    }
  };

  return { uploading, uploadFile };
};
