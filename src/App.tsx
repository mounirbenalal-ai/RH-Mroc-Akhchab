import React, { useState } from 'react';
import { LayoutDashboard, Users, ClipboardCheck, Settings, Trees, FolderOpen, Camera } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Documents from './pages/Documents';
import Cameras from './pages/Cameras';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { id: 'employees', label: 'إدارة الموظفين', icon: Users },
    { id: 'attendance', label: 'سجل الحضور', icon: ClipboardCheck },
    { id: 'documents', label: 'الذاكرة السحابية', icon: FolderOpen },
    { id: 'cameras', label: 'المراقبة الحية', icon: Camera },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-stone-50 font-sans text-right" style={{ direction: 'rtl' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col shadow-xl">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="p-2 bg-emerald-600 rounded-lg text-white"><Trees size={24}/></div>
          <span className="font-bold text-lg tracking-tight">المغربية للأخشاب</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id ? 'bg-emerald-600 text-white shadow-lg' : 'hover:bg-slate-800'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-white border-b border-stone-200 flex items-center px-8 shadow-sm justify-between">
          <h2 className="text-stone-800 font-semibold text-lg">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="text-sm text-stone-400 font-medium font-mono">SYSTEM_v1.0.4_LIVE</div>
        </header>

        <div className="p-0">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'employees' && <Employees />}
          {activeTab === 'attendance' && <Attendance />}
          {activeTab === 'documents' && <Documents />}
          {activeTab === 'cameras' && <Cameras />}
          {activeTab === 'settings' && (
            <div className="p-10 text-center">
              <Settings size={48} className="mx-auto text-stone-300 mb-4" />
              <p className="text-stone-500 italic">الإعدادات قيد المزامنة...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
