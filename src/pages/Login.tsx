import { useState } from "react";
import { useNavigate } from "react-router-dom";
// استيراد الحارس الذي برمجناه في المجلد المحلي
import { logAuthAttempt } from '../lib/auth-audit';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // أضفنا حقل كلمة المرور
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    
    // محاكاة عملية التحقق - يمكنك ربطها بـ Supabase لاحقاً
    if (email === "admin@akhchab.ma" && password === "Tanger2026") {
      await logAuthAttempt('SUCCESS');
      localStorage.setItem("mb_session", btoa(email));
      navigate("/dashboard");
    } else {
      // إطلاق الحارس الرقمي: سيسجل في Supabase ويرسل لتليجرام فوراً
      await logAuthAttempt('FAILED');
      alert("خطأ في البيانات! تم تسجيل محاولة الدخول وتنبيه المسؤول.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center" dir="rtl">
      <form onSubmit={handleLogin} className="p-8 border border-gray-800 rounded-2xl w-full max-w-md bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">نظام المغربية للأخشاب</h2>
        
        <input 
          type="email" 
          placeholder="البريد الإلكتروني" 
          className="w-full p-4 mb-4 bg-black border border-gray-700 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input 
          type="password" 
          placeholder="كلمة المرور" 
          className="w-full p-4 mb-6 bg-black border border-gray-700 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full py-4 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-all">
          تسجيل الدخول الآمن
        </button>
        
        <p className="mt-4 text-center text-gray-500 text-sm">
          محمي بواسطة نظام Smart Tanger Bot 🛡️
        </p>
      </form>
    </div>
  );
}
