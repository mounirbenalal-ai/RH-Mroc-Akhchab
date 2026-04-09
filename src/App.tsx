import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Banknote, ClipboardCheck, 
  Camera, Settings as SettingsIcon, LogOut, Menu, X 
} from 'lucide-react';

// استيراد الصفحات التي تعبنا في بنائها
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Payroll from './pages/Payroll';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // مصفوفة القائمة الجانبية - تعكس هوية المشروع
  const navItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { id: 'employees', label: 'الموظفون', icon: Users },
    { id: 'attendance', label: 'الحضور والغياب', icon: ClipboardCheck },
    { id: 'payroll', label: 'الرواتب والحسابات', icon: Banknote },
    { id: 'cameras', label: 'المراقبة', icon: Camera },
    { id: 'settings', label: 'الإعدادات', icon: SettingsIcon },
  ];

  // دالة عرض المحتوى بناءً على التبويب النشط
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'employees': return <Employees />;
      case 'attendance': return <Attendance />;
      case 'payroll': return <Payroll />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-cairo" dir="rtl">
      {/* غطاء خلفي للموبايل عند فتح القائمة */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* القائمة الجانبية الذكية (Sidebar) */}
      <aside className={`fixed md:static z-50 h-full w-72 bg-slate-900 text-white flex flex-col transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}>
        <div className="p-8 border-b border-slate-800">
          <h1 className="text-xl font-black text-emerald-400">المغربية للأخشاب</h1>
          <p className="text-[10px] text-slate-400 mt-1 tracking-widest font-mono">RH SYSTEM v3.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all font-bold text-sm ${
                activeTab === item.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* معلومات المستخدم والخروج */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/50">
          <button className="w-full flex items-center gap-2 p-3 text-rose-400 font-bold hover:bg-rose-500/10 rounded-xl transition">
            <LogOut size={18} />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* المحتوى الرئيسي (Main Content) */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* هيدر الموبايل */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-100 sticky top-0 z-30">
          <h2 className="font-black text-slate-900">المغربية للأخشاب</h2>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 bg-slate-100 rounded-xl"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* منطقة عرض الصفحات */}
        <div className="flex-1 overflow-auto bg-stone-50/50">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
