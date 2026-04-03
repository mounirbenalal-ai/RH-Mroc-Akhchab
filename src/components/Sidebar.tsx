import React from 'react';

const Sidebar = ({ setCurrentPage, currentPage }: any) => {
  const navLinks = [
    { id: 'home', title: 'الرئيسية', icon: '🏠' },
    { id: 'employees', title: 'الموظفون', icon: '👥' },
    { id: 'security', title: 'الأمن', icon: '🛡️' },
    { id: 'hr', title: 'إدارة HR', icon: '📊' },
  ];

  return (
    <aside className="w-72 bg-akhchab-green p-8 text-akhchab-creme flex flex-col h-screen sticky top-0 shadow-2xl font-noto" dir="rtl">
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-inner text-3xl">🌲</div>
        <h1 className="text-2xl font-black tracking-tight">المغربية للأخشاب</h1>
        <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1">فرع طنجة</p>
      </div>
      <nav className="space-y-3 flex-1">
        {navLinks.map(link => (
          <button key={link.id} onClick={() => setCurrentPage(link.id)}
            className={`w-full text-right p-4 rounded-xl flex items-center gap-4 transition-all ${
              currentPage === link.id ? 'bg-akhchab-creme text-akhchab-green font-bold shadow-xl scale-[1.05]' : 'hover:bg-[#1E3E1B]'
            }`}>
            <span className="text-xl">{link.icon}</span>
            <span className="text-lg">{link.title}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-white/10 text-center text-[10px] opacity-50">© 2026 المغربية للأخشاب. طنجة.</div>
    </aside>
  );
};

export default Sidebar;
