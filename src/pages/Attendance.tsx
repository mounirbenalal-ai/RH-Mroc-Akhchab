import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const Attendance = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-amber-900 mb-6">سجل الحضور والغياب اليومي</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl border border-green-200 shadow-sm">
        <p className="text-gray-500">الحاضرون اليوم</p>
        <p className="text-3xl font-bold text-green-600">24</p>
      </div>
    </div>
    <div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm text-center">
      <Calendar className="mx-auto mb-4 text-amber-600" size={48} />
      <p className="text-gray-600">لوحة تسجيل الحضور الذكية قيد التشغيل...</p>
    </div>
  </div>
);
export default Attendance;
