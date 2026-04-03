import React from 'react';

interface SidebarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
  company: {
    name: string;
    branding: {
      primaryColor: string;
      secondaryColor: string;
    }
  };
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage, currentPage, company }) => {
  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'employees', label: 'قائمة الموظفين', icon: '👥' },
    { id: 'security', label: 'بوابة الأمن', icon: '🛡️' },
    { id: 'hr', label: 'إدارة الموارد', icon: '📊' },
  ];

  return (
    <div className="w-72 bg-[#2D5A27] text-[#F5F1E9] flex flex-col shadow-2xl h-screen sticky top-0" dir="rtl">
      {/* رأس القائمة - شعار الشركة */}
      <div className="p-8 text-center border-b border-[#F5F1E9]/10 shadow-lg">
        <div className="w-16 h-16 bg-[#F5F1E9]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F5F1E9]/20">
          <span className="text-3xl">🌲</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-1" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
          {company.name}
        </h2>
        <div className="flex items-center justify-center gap-1 opacity-70">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Tanger Branch</span>
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
        </div>
      </div>

      {/* روابط التنقل */}
      <nav className="flex-1 mt-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-300 group ${
              currentPage === item.id 
                ? 'bg-[#F5F1E9] text-[#2D5A27] font-bold shadow-xl scale-[1.02]' 
                : 'hover:bg-[#1E3E1B] hover:translate-x-[-5px]'
            }`}
          >
            <span className={`ml-4 text-2xl transition-transform group-hover:scale-110 ${
              currentPage === item.id ? 'filter-none' : 'grayscale'
            }`}>
              {item.icon}
            </span>
            <span className="text-lg font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* تذييل القائمة */}
      <div className="p-6 mt-auto border-t border-[#F5F1E9]/10">
        <div className="bg-[#1E3E1B] p-4 rounded-lg text-center">
          <p className="text-[10px] opacity-50 mb-1">نسخة النظام v1.0.4</p>
          <p className="text-xs font-bold text-[#F5F1E9]/80">فرع طنجة - المنطقة الصناعية</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
