import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Package, TreePine } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E9] w-full p-4 md:p-8" dir="rtl">
      {/* Header - المغربية للأخشاب */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border-r-8 border-[#2D5A27]">
        <div>
          <h1 className="text-3xl font-bold text-[#2D5A27] flex items-center gap-3">
            <TreePine size={32} />
            المغربية للأخشاب
          </h1>
          <p className="text-gray-600 mt-1 font-medium">نظام إدارة الموارد البشرية - فرع طنجة</p>
        </div>
        <div className="mt-4 md:mt-0 bg-[#2D5A27] text-white px-4 py-2 rounded-full text-sm">
          مرحباً، منير بنعلال
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard icon={<Users />} title="إجمالي الموظفين" value="124" color="bg-blue-500" />
        <StatCard icon={<Shield />} title="أمن المنشأة" value="نشط" color="bg-green-600" />
        <StatCard icon={<Package />} title="طلبات الخشب" value="12 طلب" color="bg-orange-700" />
      </div>

      {/* Main Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">آخر تحديثات الموظفين</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-semibold">تحديث ملف التأمين</span>
              <span className="text-xs text-gray-400">منذ ساعتين</span>
            </li>
            <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-semibold">طلب إجازة - قسم النجارة</span>
              <span className="text-xs text-gray-400">منذ 5 ساعات</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#2D5A27] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">حالة أمن المصنع</h3>
            <p className="text-green-100 mb-4 text-sm">جميع أنظمة المراقبة في طنجة تعمل بشكل طبيعي</p>
            <button className="bg-white text-[#2D5A27] px-6 py-2 rounded-lg font-bold hover:bg-green-50 transition-colors">
              عرض الكاميرات
            </button>
          </div>
          <Shield className="absolute -bottom-4 -left-4 text-white/10 w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }: { icon: any, title: string, value: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5"
  >
    <div className={`${color} p-4 rounded-xl text-white`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </motion.div>
);

export default Dashboard;
