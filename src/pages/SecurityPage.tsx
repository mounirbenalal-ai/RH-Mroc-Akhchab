import React from 'react';
import { Camera, MapPin, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-red-500">
        <Camera /> مركز الرصد الأمني - المغربية للأخشاب
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-red-600">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-yellow-500" /> آخر محاولة دخول
          </h3>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-gray-700">
             <p className="text-gray-500">جاري انتظار التنبيه القادم من التليجرام...</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-blue-600">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="text-blue-500" /> الموقع الجغرافي (GPS)
          </h3>
          <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-sm text-gray-400">الإحداثيات: يتم جلبها عند حدوث التنبيه</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
