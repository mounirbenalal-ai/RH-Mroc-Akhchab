import { useState } from 'react';
import { LayoutDashboard, Users, Banknote, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Dashboard from './Dashboard';
import Payroll from './Payroll';
import Settings from './Settings';

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, signOut } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'payroll': return <Payroll />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen font-cairo bg-slate-50" dir="rtl">
      <aside className="w-72 bg-slate-900 text-white p-6 flex flex-col shadow-2xl">
        <h1 className="text-2xl font-black text-emerald-400 mb-8">المغربية للأخشاب</h1>
        <nav className="flex-1 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold ${activeTab === 'dashboard' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
            <LayoutDashboard size={20} /> لوحة التحكم
          </button>
          <button onClick={() => setActiveTab('payroll')} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold ${activeTab === 'payroll' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
            <Banknote size={20} /> الرواتب
          </button>
          <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold ${activeTab === 'settings' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
            <SettingsIcon size={20} /> الإعدادات
          </button>
        </nav>
        <button onClick={signOut} className="flex items-center gap-2 p-4 text-rose-400 font-bold hover:bg-rose-500/10 rounded-xl mt-auto">
          <LogOut size={18} /> تسجيل الخروج
        </button>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        {renderContent()}
      </main>
    </div>
  );
}
