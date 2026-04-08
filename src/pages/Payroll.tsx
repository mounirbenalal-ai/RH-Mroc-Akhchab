import React, { useState } from 'react';
import { Banknote, Calculator, FileText, TrendingUp } from 'lucide-react';

const Payroll = () => {
  // بيانات تجريبية لموظفي "المغربية للأخشاب"
  const [salaryData] = useState([
    { id: 1, name: 'منير ب.', base: 6000, hours: 190, status: 'مدفوع' },
    { id: 2, name: 'أحمد ع.', base: 4500, hours: 176, status: 'معلق' },
  ]);

  const calculateNet = (base: number) => {
    const cnss = base * 0.0448; // نسبة الضمان الاجتماعي
    const amo = base * 0.0226;  // نسبة التأمين الصحي
    return (base - cnss - amo).toFixed(2);
  };

  return (
    <div className="p-6 bg-white min-h-screen text-right" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
          <p className="text-emerald-600 text-sm">إجمالي الرواتب الشهرية</p>
          <h3 className="text-2xl font-bold text-emerald-900">10,500.00 DH</h3>
        </div>
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
          <p className="text-blue-600 text-sm">عدد الموظفين النشطين</p>
          <h3 className="text-2xl font-bold text-blue-900">12 موظف</h3>
        </div>
      </div>

      <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
        <table className="w-full text-right">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4">الموظف</th>
              <th className="p-4">الأجر الأساسي</th>
              <th className="p-4">ساعات العمل</th>
              <th className="p-4">الصافي (Net)</th>
              <th className="p-4">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((emp) => (
              <tr key={emp.id} className="border-b border-slate-200 hover:bg-white transition-colors">
                <td className="p-4 font-bold">{emp.name}</td>
                <td className="p-4">{emp.base} DH</td>
                <td className="p-4">{emp.hours} س</td>
                <td className="p-4 text-emerald-600 font-bold">{calculateNet(emp.base)} DH</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${emp.status === 'مدفوع' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
