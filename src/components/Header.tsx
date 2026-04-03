import React from 'react';

const Header = () => (
  <header className="bg-white/80 backdrop-blur-md p-5 shadow-sm flex items-center justify-between border-b border-akhchab-green/10 sticky top-0 z-50 font-noto" dir="rtl">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-akhchab-green rounded-lg flex items-center justify-center text-white text-xs font-black">AR</div>
      <h1 className="text-xl font-black text-akhchab-green tracking-tighter">Akhchab <span className="opacity-50">RH</span></h1>
    </div>
    <div className="flex items-center gap-4">
      <div className="text-left ml-4 hidden md:block">
        <p className="font-bold text-gray-900 leading-none mb-1">سيدي منير</p>
        <p className="text-[10px] font-bold text-akhchab-green uppercase tracking-widest opacity-70">مشرف النظام • طنجة</p>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-akhchab-green text-akhchab-creme flex items-center justify-center text-lg font-black shadow-lg border-2 border-white">MB</div>
    </div>
  </header>
);

export default Header;
