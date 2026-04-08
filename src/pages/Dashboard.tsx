import React from 'react';
import { 
  Users, Clock, AlertTriangle, TrendingUp, 
  Cpu, ShieldCheck, Activity, Zap 
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts';

// البيانات التي قدمتها
const productionData = [
  { day: 'الأحد', إنتاج: 980, هدف: 1000 },
  { day: 'الإثنين', إنتاج: 1120, هدف: 1000 },
  { day: 'الثلاثاء', إنتاج: 1050, هدف: 1000 },
  { day: 'الأربعاء', إنتاج: 1240, هدف: 1100 },
  { day: 'الخميس', إنتاج: 1180, هدف: 1100 },
  { day: 'الجمعة', إنتاج: 890, هدف: 900 },
  { day: 'السبت', إنتاج: 1340, هدف: 1200 },
];

const salesData = [
  { month: 'يناير', مبيعات: 420000 },
  { month: 'فبراير', مبيعات: 380000 },
  { month: 'مارس', مبيعات: 510000 },
  { month: 'أبريل', مبيعات: 620000 },
];

const productMix = [
  { name: 'MDF', value: 40 },
  { name: 'خشب صلب', value: 25 },
  { name: 'أبلكاش', value: 20 },
  { name: 'خشب مضغوط', value: 15 },
];

const PIE_COLORS = ['#10b981', '#6366f1', '#f59e0b', '#ef4444'];

export default function Dashboard() {
  // دمج أيقونات وألوان الصورة مع بياناتك المحدثة
  const stats = [
    { label: 'إجمالي الموظفين', value: '124', icon: Users, bg: 'bg-indigo-50 text-indigo-600', change: '+2' },
    { label: 'ساعات العمل', value: '98%', icon: Clock, bg: 'bg-emerald-50 text-emerald-600', change: 'نشط' },
    { label: 'تنبيهات الآلات', value: '0', icon: AlertTriangle, bg: 'bg-amber-50 text-amber-600', change: 'مستقر' },
    { label: 'كفاءة الإنتاج', value: '92%', icon: TrendingUp, bg: 'bg-rose-50 text-rose-600', change: '+2.4%' },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 bg-stone-50 min-h-screen text-right" dir="rtl">
      {/* Header Section من الصورة */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900">مركز التحكم الذكي</h1>
          <p className="text-slate-500 mt-1">نظام الإدارة المتكامل لعام 2026</p>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full text-xs font-bold">
            <Activity size={16} className="animate-pulse" />
            نظام AI نشط
          </span>
        </div>
      </div>

      {/* Stats Grid - مستوحى من الصورة 19:10 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className={`${stat.bg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
              <stat.icon size={24} />
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <div className="flex items-end justify-between mt-1">
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
              <span className="text-[10px] font-bold opacity-60">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* الرسوم البيانية الكبرى */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* مخطط الإنتاج - يأخذ مساحة أكبر */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <Zap size={20} className="text-amber-500" />
            تحليل الإنتاج الأسبوعي (لوح)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={productionData}>
              <defs>
                <linearGradient id="gradProd" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
              <Area type="monotone" dataKey="إنتاج" stroke="#10b981" fill="url(#gradProd)" strokeWidth={3} />
              <Area type="monotone" dataKey="هدف" stroke="#6366f1" fill="none" strokeWidth={2} strokeDasharray="6 3" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* توزيع المنتجات Pie Chart */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <h3 className="text-lg font-black text-slate-900 mb-6 text-center">مزيج المنتجات</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={productMix} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={8}>
                {productMix.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Advanced Section من الصورة (التصميم الداكن المبدع) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-[3rem] text-white shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <Cpu className="text-indigo-400 animate-pulse" size={32} />
              <span className="text-[10px] bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">STEINEMANN AI</span>
            </div>
            <p className="text-sm opacity-60 mb-1">كفاءة خط الإنتاج الرئيسي</p>
            <div className="flex items-end gap-3">
              <h2 className="text-6xl font-black tracking-tighter">98.4%</h2>
              <span className="text-emerald-400 text-sm font-bold mb-2 flex items-center gap-1">
                <TrendingUp size={16} /> +2.4%
              </span>
            </div>
            <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400" style={{ width: '98.4%' }} />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 p-8 rounded-[3rem] text-white shadow-2xl border border-white/5">
          <ShieldCheck className="text-emerald-400 mb-6" size={32} />
          <p className="text-sm opacity-60">حالة نظام الأمان الذكي</p>
          <h4 className="text-3xl font-black mt-2">التحصين القصوى</h4>
          <p className="text-xs opacity-50 mt-4 leading-relaxed">
            تم فحص كافة المداخل بنجاح عبر نظام FaceAuth. لا توجد تهديدات نشطة حالياً.
          </p>
          <div className="mt-6 flex gap-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-1.5 h-6 bg-emerald-500/30 rounded-full animate-bounce" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
