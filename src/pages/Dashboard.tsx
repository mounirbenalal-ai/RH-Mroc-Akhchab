import React from 'react';
import { 
  Users, Clock, AlertTriangle, TrendingUp, 
  Cpu, Zap, ShieldCheck, Activity 
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'إجمالي الموظفين', value: '124', icon: Users, bg: 'bg-blue-500', color: 'text-blue-500' },
    { label: 'ساعات العمل', value: '98%', icon: Clock, bg: 'bg-emerald-500', color: 'text-emerald-500' },
    { label: 'تنبيهات أمنية', value: '0', icon: AlertTriangle, bg: 'bg-amber-500', color: 'text-amber-500' },
    { label: 'كفاءة الإنتاج', value: '92%', icon: TrendingUp, bg: 'bg-indigo-500', color: 'text-indigo-500' },
  ];

  return (
    <div className="p-8 space-y-8 bg-stone-50 min-h-screen text-right" dir="rtl">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900">نظام الإدارة الذكي 2026</h1>
          <p className="text-slate-500 mt-1">المغربية للأخشاب - مراقبة الأداء الفوري</p>
        </div>
        <div className="flex gap-2">
           <span className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
             <Activity size={16} /> نظام AI نشط
           </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className={`${stat.bg} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
              <stat.icon size={24} />
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* الإصدار الأقوى: AI Advanced Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-[2rem] text-white border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <Cpu className="text-indigo-400 animate-pulse" size={32} />
              <span className="text-[10px] bg-indigo-500/30 border border-indigo-400/50 px-3 py-1 rounded-full font-bold">CORE AI ACTIVE</span>
            </div>
            <h4 className="text-sm opacity-70 mb-1">تحليل كفاءة خط Steinemann</h4>
            <div className="flex items-end gap-4">
              <h2 className="text-5xl font-black tracking-tighter">98.4%</h2>
              <div className="text-emerald-400 text-sm font-bold mb-2 flex items-center">
                <TrendingUp size={16} /> +2.4%
              </div>
            </div>
            <div className="mt-8 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 w-[98.4%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 p-8 rounded-[2rem] text-white border border-emerald-500/30 relative overflow-hidden">
          <ShieldCheck className="text-emerald-400 mb-6" size={32} />
          <p className="text-sm opacity-70">حالة التحصين الأمني</p>
          <h4 className="text-3xl font-black mb-4">MAXIMUM</h4>
          <div className="space-y-3">
             <div className="flex items-center gap-2 text-xs text-emerald-300">
               <Zap size={12} /> تشفير البيانات: نشط
             </div>
             <div className="flex items-center gap-2 text-xs text-emerald-300">
               <Zap size={12} /> جدار حماية 2026: مؤمن
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
