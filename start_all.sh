#!/bin/bash
echo "🚦 جاري تشغيل منظومة TIMO AI..."
pkill python
cd ~/SmartDeals
# تشغيل السيرفر في الخلفية
python gatekeeper.py & 
sleep 2
echo "🚀 السيرفر يعمل الآن على http://127.0.0.1:5000"
echo "📱 يمكنك فتح المتصفح الآن."
