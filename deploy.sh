#!/bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 تحديث مشروع أخشاب المغرب...${NC}"

# تجميع الملفات
git add .
git commit -m "Update system - Moroccan Woods Branding"

# الرفع المباشر (سيستخدم الرابط المدمج فيه التوكن)
echo -e "${BLUE}📤 جاري الرفع إلى GitHub...${NC}"
git push -f origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ تم الرفع والتحديث بنجاح!${NC}"
else
    echo -e "\033[0;31m❌ فشل الرفع. تأكد من صحة التوكن في إعدادات git remote.${NC}"
fi
