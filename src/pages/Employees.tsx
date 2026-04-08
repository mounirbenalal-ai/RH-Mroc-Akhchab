import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UserPlus, Search, Mail, Phone, Briefcase, MoreVertical, Trash2, Edit } from 'lucide-react';

interface Employee {
  id: string;
  full_name: string;
  position: string;
  department: string;
  phone: string;
  status: 'active' | 'on_leave' | 'terminated';
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // جلب الموظفين من قاعدة البيانات (Profiles)
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, position, department, phone');
    
    if (data) {
      // قمنا بمحاكاة "الحالة" هنا لأنها غير موجودة في الـ Schema الأساسي
      const formatted = data.map(emp => ({
        ...emp,
        status: 'active' as const
      }));
      setEmployees(formatted);
    }
    setLoading(false);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-6 text-right" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">إدارة الموظفين</h2>
          <p className="text-slate-500 text-sm mt-1">عرض وتعديل بيانات الكادر البشري</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20">
          <UserPlus size={20} />
          إضافة موظف جديد
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="ابحث عن موظف بالاسم أو المنصب..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pr-12 pl-4 py-4 bg-white border border-slate-100 rounded-[2rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition"
        />
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-full py-10 text-slate-400">جاري تحميل البيانات...</p>
        ) : filteredEmployees.map((emp) => (
          <div key={emp.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 font-black text-xl">
                {emp.full_name?.[0]}
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-900 transition">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="font-black text-lg text-slate-900">{emp.full_name}</h3>
              <p className="text-emerald-600 text-sm font-bold flex items-center gap-1">
                <Briefcase size={14} />
                {emp.position || 'موظف'}
              </p>
              <p className="text-slate-400 text-xs">{emp.department || 'القسم العام'}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Phone size={16} className="text-slate-400" />
                <span>{emp.phone || 'لا يوجد هاتف'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Mail size={16} className="text-slate-400" />
                <span className="truncate">example@mroc-wood.com</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-slate-50 text-slate-600 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-100 transition">
                تعديل الملف
              </button>
              <button className="p-2.5 text-rose-500 bg-rose-50 rounded-xl hover:bg-rose-100 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
