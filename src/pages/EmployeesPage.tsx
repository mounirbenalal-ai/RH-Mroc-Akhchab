import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('employees').select('*');
      setEmployees(data || []);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="animate-in fade-in duration-500 font-noto text-right" dir="rtl">
      <h2 className="text-3xl font-bold text-akhchab-green mb-8">إدارة الكفاءات (Tanger)</h2>
      {loading ? <p>جاري التحميل...</p> : (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-akhchab-green/10">
          <table className="w-full">
            <thead className="bg-akhchab-creme text-akhchab-green">
              <tr><th className="p-4">الاسم</th><th className="p-4">القسم</th><th className="p-4">الحالة</th></tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-4">{emp.first_name} {emp.last_name}</td>
                  <td className="p-4">{emp.department}</td>
                  <td className="p-4 text-green-600 font-bold">نشط</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default EmployeesPage;
