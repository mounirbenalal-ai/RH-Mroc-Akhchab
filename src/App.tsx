import React, { useState } from 'react';
import { LayoutDashboard, Users, ClipboardCheck, Settings, Banknote, Camera } from 'lucide-react';
import { AuthProvider } from './contexts/AuthContext'; // استدعاء الملف الجديد

// استيراد الصفحات
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import Cameras from './pages/Cameras';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

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
    <AuthProvider>
      <div className="flex h-screen bg-stone-50 font-sans text-right" dir="rtl">
        {/* Sidebar - القائمة الجانبية */}
        <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col shadow-xl">
          <div className="p-6 border-b border-slate-800 font-black text-xl text-white">
            المغربية للأخشاب
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'hover:bg-slate-800'}`}
            >
              <LayoutDashboard size={20} />
              <span>لوحة التحكم</span>
            </button>

            <button 
              onClick={() => setActiveTab('payroll')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'payroll' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'hover:bg-slate-800'}`}
            >
              <Banknote size={20} />
              <span>سجل الرواتب</span>
            </button>

            <button 
              onClick={() => setActiveTab('cameras')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'cameras' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'hover:bg-slate-800'}`}
            >
              <Camera size={20} />
              <span>أمن و AI</span>
            </button>
          </nav>
        </aside>

        {/* Main Content - المحتوى الرئيسي */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </AuthProvider>
  );
}
