import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, ClipboardCheck, Settings, 
  Camera, Megaphone, ScanFace, ShieldCheck 
} from 'lucide-react';

// استيراد الصفحات التي أنشأتها في Termux
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import SettingsPage from './pages/Settings';
import Announcements from './pages/Announcements';
import Cameras from './pages/Cameras';
import FaceAuth from './pages/FaceAuth';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { id: 'employees', label: 'الموظفون', icon: Users },
    { id: 'attendance', label: 'الحضور', icon: ClipboardCheck },
    { id: 'news', label: 'الإعلانات', icon: Megaphone },
    { id: 'cameras', label: 'المراقبة', icon: Camera },
    { id: 'face-auth', label: 'بصمة الوجه', icon: ScanFace },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'employees': return <Employees />;
      case 'attendance': return <Attendance />;
      case 'news': return <Announcements />;
      case 'cameras': return <Cameras />;
      case 'face-auth': return <FaceAuth />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-stone-50 font-sans text-right" dir="rtl">
      {/* Sidebar - الشريط الجانبي */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col border-l border-slate-800">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="p-2 bg-emerald-600 rounded-lg shadow-lg">
            <ShieldCheck className="text-white" size={24} />
          </div>
          <span className="font-bold text-lg tracking-tight">المغربية للأخشاب</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/20' 
                : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <div className="text-[10px] text-slate-500 font-mono text-center">
            SYSTEM v2.0.6 - SECURE MODE
          </div>
        </div>
      </aside>

      {/* Main Content - المحتوى الرئيسي */}
      <main className="flex-1 overflow-auto flex flex-col">
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-xl font-bold text-stone-800">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
             <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">بث مباشر نشط</span>
          </div>
        </header>

        <div className="p-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
