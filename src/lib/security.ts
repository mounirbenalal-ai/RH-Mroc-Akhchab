export const sanitizeInput = (input: string) => {
  // منع حقن الأكواد الضارة لضمان أمن المشروع
  return input.replace(/[<>]/g, "").trim();
};
