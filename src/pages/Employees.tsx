import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Search, MoreVertical } from 'lucide-react';
import { getEmployees, addEmployee } from '../lib/api';
import { Employee } from '../types/database';

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data || []);
    } catch (err) {
      console.error("Error fetching employees:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Users className="text-emerald-600" /> إدارة الكفاءات
        </h1>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-md">
          <UserPlus size={20} /> إضافة موظف جديد
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-100 bg-stone-50/50">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input 
              type="text" 
              placeholder="البحث عن موظف بالاسم أو القسم..." 
              className="w-full pr-10 pl-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        <table className="w-full text-right">
          <thead className="bg-stone-50 text-stone-500 text-sm">
            <tr>
              <th className="p-4 font-semibold">الموظف</th>
              <th className="p-4 font-semibold">المنصب</th>
              <th className="p-4 font-semibold">القسم</th>
              <th className="p-4 font-semibold">الحالة</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {loading ? (
              <tr><td colSpan={5} className="p-10 text-center text-stone-400">جاري جلب البيانات من السحابة...</td></tr>
            ) : employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-stone-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">
                      {emp.full_name[0]}
                    </div>
                    <span className="font-medium text-slate-700">{emp.full_name}</span>
                  </div>
                </td>
                <td className="p-4 text-stone-600">{emp.position}</td>
                <td className="p-4 text-stone-600">{emp.department}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    emp.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {emp.status === 'active' ? 'نشط' : 'إجازة'}
                  </span>
                </td>
                <td className="p-4 text-stone-400"><MoreVertical size={18} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
