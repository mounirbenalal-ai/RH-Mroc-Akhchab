#!/data/data/com.termux/files/usr/bin/bash

echo "🛠️ جاري إصلاح تعارضات الحزم والرفع القسري..."

# 1. تنصيب الحزم مع تجاوز التعارضات
npm install gh-pages --save-dev --force
npm install --force

# 2. بناء المشروع
echo "🏗️ جاري بناء نسخة المتصفح..."
npm run build

# 3. الرفع إلى GitHub Pages
echo "🚀 جاري الرفع إلى الإنترنت..."
./node_modules/.bin/gh-pages -d dist

echo "------------------------------------------------"
echo "✅ اكتملت العملية بنجاح!"
echo "🌐 الرابط: https://benalal-ai.github.io/RH-Mroc-Akhchab/"
echo "------------------------------------------------"
