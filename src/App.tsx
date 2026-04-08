import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, ClipboardCheck, 
  Settings, Camera, Banknote, ShieldAlert 
} from 'lucide-react';

// استيراد الصفحات الجديدة التي برمجناها
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import Cameras from './pages/Cameras';
import FaceAuth from './pages/FaceAuth';

export default function App() {
  // جعل "لوحة التحكم" هي الصفحة الافتتاحية بدلاً من إدارة الموظفين
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم الذكية', icon: LayoutDashboard },
    { id: 'employees', label: 'إدارة الطاقم', icon: Users },
    { id: 'attendance', label: 'سجل الحضور', icon: ClipboardCheck },
    { id: 'payroll', label: 'الرواتب (المغرب)', icon: Banknote },
    { id: 'cameras', label: 'الأمان و AI', icon: Camera },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'employees': return <Employees />;
      case 'attendance': return <Attendance />;
      case 'payroll': return <Payroll />;
      case 'cameras': return <Cameras />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-stone-50 font-sans text-right" dir="rtl">
      {/* Sidebar المطور لعام 2026 */}
      <aside className="w-72 bg-slate-950 text-slate-200 flex flex-col shadow-2xl">
        <div className="p-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
             <div className="bg-emerald-500 p-2 rounded-xl shadow-lg shadow-emerald-500/20">
               <ShieldAlert className="text-white" size={24} />
             </div>
             <span className="font-black text-xl tracking-tighter text-white">المغربية للأخشاب</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">Enterprise AI v3.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 translate-x-[-8px]' 
                : 'hover:bg-slate-900 text-slate-400'
              }`}
            >
              <item.icon size={22} className={activeTab === item.id ? 'animate-pulse' : 'group-hover:text-emerald-400'} />
              <span className="font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto relative">
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-200 h-16 flex items-center px-8 justify-between">
           <h2 className="text-stone-800 font-black text-lg">
             {menuItems.find(i => i.id === activeTab)?.label}
           </h2>
           <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> SERVER: ONLINE</span>
           </div>
        </div>
        <div className="p-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
