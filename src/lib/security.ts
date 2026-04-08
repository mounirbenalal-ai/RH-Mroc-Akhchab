// وظيفة الملف: تنظيف البيانات ومنع حقن الكود الضار
export const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, ""); 
};

export const validateAccess = (role: string) => {
  return role === 'admin' || role === 'manager';
};
