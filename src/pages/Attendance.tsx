import React, { useState } from 'react';
import { ClipboardCheck, Clock, UserCheck, LogOut } from 'lucide-react';

const Attendance = () => {
  const [currentTime] = useState(new Date().toLocaleTimeString('ar-MA'));

  const stats = [
    { label: 'حاضر الآن', count: '42', color: 'bg-emerald-500' },
    { label: 'متأخر', count: '3', color: 'bg-amber-500' },
    { label: 'غائب', count: '5', color: 'bg-rose-500' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
            <p className="text-stone-500 text-sm mb-1">{stat.label}</p>
            <h3 className={`text-3xl font-bold ${stat.color.replace('bg-', 'text-')}`}>{stat.count}</h3>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white mb-8 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2">تسجيل الحضور السريع</h2>
          <p className="text-slate-400 mb-6">التوقيت الحالي في طنجة: {currentTime}</p>
          <div className="flex gap-4">
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 p-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all">
              <UserCheck size={24} /> تسجيل دخول
            </button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 p-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all border border-slate-700">
              <LogOut size={24} /> تسجيل خروج
            </button>
          </div>
        </div>
        <Clock className="absolute -left-10 -bottom-10 text-slate-800" size={200} />
      </div>
    </div>
  );
};

export default Attendance;
