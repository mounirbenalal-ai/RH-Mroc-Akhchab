import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Package, TreePine, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'إجمالي الموظفين', value: '124', icon: Users, color: 'bg-amber-700' },
    { label: 'حالة المخزون', value: 'جيد', icon: Package, color: 'bg-green-700' },
    { label: 'تنبيهات أمنية', value: '0', icon: Shield, color: 'bg-red-800' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6">
      <header className="flex justify-between items-center mb-10 border-b-2 border-amber-800 pb-4">
        <div>
          <h1 className="text-4xl font-bold text-amber-900 flex items-center gap-2">
            <TreePine size={40} /> المغربية للأخشاب
          </h1>
          <p className="text-gray-600 font-medium">نظام إدارة الموارد البشرية والأمان</p>
        </div>
        <div className="text-right text-amber-900 font-bold">
          {new Date().toLocaleDateString('ar-MA')}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg border-r-8 border-amber-800"
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold">{stat.label}</p>
                <p className="text-2xl font-black text-gray-800">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-amber-900 p-4 text-white font-bold flex justify-between">
          <span>سجل الحضور الأخير</span>
          <TrendingUp size={20} />
        </div>
        <div className="p-6">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-3 px-4">الموظف</th>
                <th className="py-3 px-4">القسم</th>
                <th className="py-3 px-4">وقت الدخول</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-amber-50">
                <td className="py-3 px-4 font-bold">أحمد العلمي</td>
                <td className="py-3 px-4 text-gray-600">النجارة العامة</td>
                <td className="py-3 px-4 text-green-700">08:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
