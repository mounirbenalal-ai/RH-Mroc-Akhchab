import React from 'react';
import { Wallet, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

const Finance = () => {
  const financialSummary = [
    { title: 'إجمالي الرواتب الشهرية', value: '145,000 DH', icon: Wallet, color: 'text-blue-600' },
    { title: 'كفاءة الإنتاج', value: '94%', icon: TrendingUp, color: 'text-emerald-600' },
  ];

  return (
    <div className="p-6 bg-stone-50 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
        <Wallet className="text-emerald-600" /> الإدارة المالية والرواتب
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {financialSummary.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex items-center justify-between">
            <div>
              <p className="text-stone-500 text-sm">{item.title}</p>
              <h3 className={`text-2xl font-black mt-1 ${item.color}`}>{item.value}</h3>
            </div>
            <div className={`p-4 rounded-2xl bg-stone-50 ${item.color}`}>
              <item.icon size={28} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
          <h2 className="font-bold text-slate-700 text-lg">كشف صرف المستحقات</h2>
          <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold">قيد المراجعة - أبريل 2026</span>
        </div>
        <div className="p-0">
          <table className="w-full text-right">
            <thead className="bg-stone-50 text-stone-400 text-xs uppercase">
              <tr>
                <th className="px-6 py-4">الموظف</th>
                <th className="px-6 py-4">الأجر الأساسي</th>
                <th className="px-6 py-4">الساعات الإضافية</th>
                <th className="px-6 py-4">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-medium text-slate-700">عامل إنتاج - خط Steinemann</td>
                <td className="px-6 py-4 text-stone-600 font-mono">5,500 DH</td>
                <td className="px-6 py-4 text-emerald-600 font-mono">+12h</td>
                <td className="px-6 py-4"><CheckCircle2 className="text-emerald-500" size={18} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;
