import React, { useState } from 'react';
import { Banknote, Download, Filter, CheckCircle2, Clock, ArrowUpRight, ArrowDownRight, Calculator, FileText, TrendingUp } from 'lucide-react';

export default function Payroll() {
  // البيانات الأساسية المدمجة من ملفك الأصلي
  const [salaryData] = useState([
    { id: 1, name: 'أحمد الفاسي', base: 6000, hours: 190, status: 'تم الدفع', bonus: 500 },
    { id: 2, name: 'سارة العلمي', base: 4500, hours: 176, status: 'قيد الانتظار', bonus: 0 },
    { id: 3, name: 'محمد التازي', base: 5500, hours: 185, status: 'تم الدفع', bonus: 200 },
  ]);

  // منطق الحساب الدقيق (CNSS & AMO) من كودك السابق
  const calculateNet = (base: number, bonus: number = 0) => {
    const totalBase = base + bonus;
    const cnss = totalBase * 0.0448; // نسبة الضمان الاجتماعي
    const amo = totalBase * 0.0226;  // نسبة التأمين الصحي
    return (totalBase - cnss - amo).toFixed(2);
  };

  const stats = [
    { label: 'إجمالي المستحقات', value: '16,000', icon: ArrowUpRight, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'صافي الرواتب (Net)', value: '14,920', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'عدد الموظفين', value: salaryData.length.toString(), icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 text-right" dir="rtl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">سجل الرواتب (المغربية للأخشاب)</h2>
          <p className="text-slate-500 text-sm mt-1">إدارة المستحقات المالية بعد اقتطاعات CNSS و AMO</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-2xl font-bold hover:bg-slate-50 transition">
            <Download size={18} /> تصدير PDF
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20">
            <Calculator size={20} /> حساب الشهر الحالي
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm mb-1">{s.label}</p>
              <h3 className={`text-2xl font-black ${s.color}`}>{s.value} <span className="text-xs opacity-60 text-slate-400">DH</span></h3>
            </div>
            <div className={`${s.bg} ${s.color} p-4 rounded-2xl`}>
              <s.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Combined Payroll Table */}
      <div className="bg-white rounded-[3xl] border border-slate-100 shadow-sm overflow-hidden">
        <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
          <h3 className="font-bold flex items-center gap-2">
            <FileText size={20} className="text-emerald-400" />
            كشف الرواتب التفصيلي
          </h3>
          <span className="text-xs opacity-70 italic font-mono uppercase">Mroc-Wood-Payroll-2026</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 text-slate-500 font-bold text-sm">الموظف</th>
                <th className="p-4 text-slate-500 font-bold text-sm text-center">الأساسي</th>
                <th className="p-4 text-slate-500 font-bold text-sm text-center">ساعات العمل</th>
                <th className="p-4 text-slate-500 font-bold text-sm text-center">المكافأة</th>
                <th className="p-4 text-emerald-600 font-black text-sm text-center underline decoration-emerald-200 decoration-2">الصافي (Net)</th>
                <th className="p-4 text-slate-500 font-bold text-sm text-center">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {salaryData.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{emp.name}</td>
                  <td className="p-4 text-center text-slate-600 font-mono">{emp.base} DH</td>
                  <td className="p-4 text-center text-slate-600 font-mono">{emp.hours}س</td>
                  <td className="p-4 text-center text-blue-600 font-bold">+{emp.bonus} DH</td>
                  <td className="p-4 text-center font-black text-emerald-600 bg-emerald-50/30">
                    {calculateNet(emp.base, emp.bonus)} DH
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      emp.status === 'تم الدفع' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
