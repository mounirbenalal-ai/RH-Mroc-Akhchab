import React, { useState } from 'react';
import { LayoutDashboard, Users, ClipboardCheck, Settings, Camera, Banknote } from 'lucide-react';

// استدعاء كافة الصفحات التي برمجناها في Termux
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll'; // ملف الرواتب
import Cameras from './pages/Cameras'; // ملف الكاميرات الذكية

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
    <div className="flex h-screen bg-stone-50 font-sans text-right" dir="rtl">
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-800 font-bold text-emerald-500">المغربية للأخشاب v3.0</div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 p-3 rounded-xl ${activeTab === 'dashboard' ? 'bg-emerald-600' : ''}`}>
            <LayoutDashboard size={20}/> لوحة التحكم
          </button>
          <button onClick={() => setActiveTab('payroll')} className={`w-full flex items-center gap-3 p-3 rounded-xl ${activeTab === 'payroll' ? 'bg-emerald-600' : ''}`}>
            <Banknote size={20}/> سجل الرواتب
          </button>
          <button onClick={() => setActiveTab('cameras')} className={`w-full flex items-center gap-3 p-3 rounded-xl ${activeTab === 'cameras' ? 'bg-emerald-600' : ''}`}>
            <Camera size={20}/> الأمن و AI
          </button>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">{renderContent()}</main>
    </div>
  );
}
