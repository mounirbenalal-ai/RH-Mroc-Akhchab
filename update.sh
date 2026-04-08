#!/data/data/com.termux/files/usr/bin/bash
echo "🚀 جاري تحديث نظام المغربية للأخشاب..."
cd ~/projects/RH-Mroc-Akhchab
npm run build
git add .
git commit -m "System auto-update: $(date)"
git push origin main
npx gh-pages -d dist
echo "✅ تم التحديث والنشر بنجاح!"
