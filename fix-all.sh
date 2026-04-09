#!/bin/bash
echo "🧹 تنظيف الذاكرة المؤقتة لـ npm..."
rm -rf node_modules package-lock.json
echo "📦 تثبيت المكتبات مع معالجة التعارضات..."
npm install --legacy-peer-deps
echo "🔄 مزامنة المسارات مع GitHub..."
git add .
git commit -m "Fix: Unified paths and auto-import system"
git push origin main
echo "🚀 المشروع الآن ينعم بالتلقائية الكاملة!"
