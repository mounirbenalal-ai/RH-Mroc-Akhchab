#!/bin/bash

# ألوان للتنسيق
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 بدء عملية الرفع لمشروع أخشاب المغرب (طنجة)...${NC}"

# 1. إضافة التغييرات
git add .

# 2. تسجيل الحفظ (Commit)
echo -e "${BLUE}📝 تسجيل التغييرات...${NC}"
read -p "أدخل وصف التعديل (أو اضغط Enter للوصف الافتراضي): " msg
if [ -z "$msg" ]; then
  msg="Complete system rebuild - Moroccan Woods Branding (Tanger)"
fi
git commit -m "$msg"

# 3. التأكد من الفرع
git branch -M main

# 4. الرفع الإجباري
echo -e "${BLUE}📤 جاري الرفع إلى GitHub...${NC}"
git push -f origin main

echo -e "${GREEN}✅ تم الرفع بنجاح! موقعك سيتحدث خلال دقيقة.${NC}"
