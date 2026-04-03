import React from 'react';

const HomePage = ({ company }: any) => (
  <div className="animate-in fade-in duration-700 font-noto" dir="rtl">
    <div className="mb-10 text-right">
      <h2 className="text-4xl font-black text-akhchab-green tracking-tight">لوحة التحكّم الرئيسية</h2>
      <p className="text-gray-500 font-medium">مرحباً بك في نظام {company.name}</p>
    </div>
    
    <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-akhchab-green/5 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-akhchab-green opacity-20"></div>
      
      <div className="relative">
        <div className="w-48 h-48 rounded-full bg-akhchab-creme border-[6px] border-akhchab-green flex items-center justify-center text-center p-6 shadow-inner transform hover:rotate-12 transition-transform duration-500">
          <h1 className="text-3xl font-black text-akhchab-green leading-tight">أخشاب<br/><span className="text-lg opacity-60">المغرب</span></h1>
        </div>
        <div className="absolute -bottom-2 -right-2 bg-akhchab-green text-white p-2 rounded-lg text-[10px] font-bold uppercase tracking-widest">فرع طنجة</div>
      </div>

      <div className="flex-1 text-right">
        <h3 className="text-3xl font-extrabold text-akhchab-green mb-4">إدارة الموارد البشرية — <span className="underline decoration-amber-500 underline-offset-8 text-2xl">طنجة</span></h3>
        <p className="text-gray-600 leading-loose text-lg font-medium max-w-3xl">
          المنصة الرقمية لشركة "المغربية للأخشاب". نجمع هنا بين أصالة الحرفة ودقة التكنولوجيا، لضمان كفاءة تشغيلية تليق بمكانة شركتنا.
        </p>
        <div className="mt-8 flex gap-4">
          <div className="px-4 py-2 bg-green-50 text-akhchab-green rounded-xl text-sm font-bold border border-green-100">✓ نظام مؤمن</div>
          <div className="px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm font-bold border border-amber-100">✓ تحديثات حية</div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
