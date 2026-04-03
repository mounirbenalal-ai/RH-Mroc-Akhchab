import React from 'react';

const SecurityPage = () => (
  <div className="animate-in slide-in-from-bottom duration-500 font-noto text-right" dir="rtl">
    <h2 className="text-3xl font-bold text-akhchab-green mb-8">بوابة الأمن والحماية</h2>
    <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-akhchab-green/10">
      <h3 className="text-xl font-bold text-akhchab-green mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> السجل المباشر
      </h3>
      <div className="space-y-4">
        {['ياسين', 'زكرياء', 'فاطمة'].map((name, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-xl flex justify-between items-center border border-gray-100">
            <span className="font-bold text-akhchab-green">{name}</span>
            <span className="text-gray-500 text-sm">{i === 2 ? 'خروج' : 'دخول'} - البوابة الرئيسية</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default SecurityPage;
