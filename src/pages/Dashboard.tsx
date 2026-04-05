import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Package, TreePine } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E9] w-full p-4 md:p-8" dir="rtl">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border-r-8 border-[#2D5A27]">
        <div>
          <h1 className="text-3xl font-bold text-[#2D5A27] flex items-center gap-3">
            <TreePine size={32} />
            المغربية للأخشاب
          </h1>
          <p className="text-gray-600 mt-1 font-medium">نظام الإدارة - طنجة</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-xl text-white"><Users /></div>
          <div><p className="text-sm text-gray-500">الموظفين</p><p className="text-xl font-bold">124</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="bg-green-700 p-3 rounded-xl text-white"><Shield /></div>
          <div><p className="text-sm text-gray-500">حالة الأمن</p><p className="text-xl font-bold">نشط</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="bg-amber-800 p-3 rounded-xl text-white"><Package /></div>
          <div><p className="text-sm text-gray-500">المخزون</p><p className="text-xl font-bold">جاهز</p></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
