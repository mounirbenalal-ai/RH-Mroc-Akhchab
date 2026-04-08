import React from 'react';
import { ShieldCheck, Globe, UserCog, Camera, Ban, FileText } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="p-4 space-y-6 text-right" dir="rtl">
      {/* قسم الملف الشخصي والكاميرا */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="flex items-center gap-2 font-bold mb-4"> <UserCog /> الملف الشخصي </h2>
        <div className="flex justify-between items-center border-b pb-2">
          <span>حالة النشاط: <span className="text-green-500">متصل</span></span>
          <button className="bg-blue-100 p-2 rounded-full"><Camera size={20} /></button>
        </div>
      </section>

      {/* شروط الخدمة والخصوصية */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="flex items-center gap-2 font-bold mb-4"> <ShieldCheck /> الأمان والقانون </h2>
        <ul className="space-y-3">
          <li className="flex justify-between border-b py-2"> <span>قانون العمل</span> <FileText size={18} /> </li>
          <li className="flex justify-between border-b py-2"> <span>سياسة الخصوصية</span> <ShieldCheck size={18} /> </li>
          <li className="flex justify-between text-red-600 py-2"> <span>حالة الحظر</span> <Ban size={18} /> </li>
        </ul>
      </section>

      {/* اللغات ودمج الأعمال */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="flex items-center gap-2 font-bold mb-4"> <Globe /> النظام واللغات </h2>
        <select className="w-full p-2 border rounded">
          <option>العربية (المغرب)</option>
          <option>Français</option>
        </select>
      </section>
    </div>
  );
};

