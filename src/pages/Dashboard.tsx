import React from 'react';
import { Users, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'إجمالي الموظفين', value: '124', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'حضور اليوم', value: '98', icon: Clock, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'تأخيرات', value: '12', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'كفاءة الإنتاج', value: '92%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4 transition-transform hover:scale-105">
            <div className={`${stat.bg} p-3 rounded-xl ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-stone-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">تنبيه ذكي: المغربية للأخشاب</h3>
          <p className="text-slate-400 max-w-md">النظام يعمل بكفاءة عالية. تم مزامنة آخر سجلات الحضور قبل 5 دقائق مع السحابة.</p>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
      </div>
    </div>
  );
};
export default Dashboard;
