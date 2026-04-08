import React from 'react';
import { Plus, Search, User } from 'lucide-react';

const Employees = () => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-amber-900">سجل الموظفين</h1>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <Plus size={20}/> إضافة موظف جديد
      </button>
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
      <table className="w-full text-right">
        <thead className="bg-amber-50">
          <tr>
            <th className="p-4">الموظف</th>
            <th className="p-4">المنصب</th>
            <th className="p-4">الحالة</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-amber-50">
            <td className="p-4 flex items-center gap-2"><User size={16}/> أحمد الفاسي</td>
            <td className="p-4">فني نجارة</td>
            <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">نشط</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Employees;
