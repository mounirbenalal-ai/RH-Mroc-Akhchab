cat << 'EOF' > src/pages/SecurityPage.tsx
import React, { useState } from 'react';
import { Shield, Truck, AlertTriangle, UserCheck, Camera } from 'lucide-react';

const SecurityPage = () => {
  const [isAlertActive, setIsAlertActive] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8" dir="rtl">
      {/* رأس الصفحة - أمن المغربية للأخشاب */}
      <div className="flex items-center justify-between mb-8 bg-[#2D5A27] text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4">
          <Shield size={40} className="text-green-200" />
          <div>
            <h1 className="text-2xl font-bold">بوابة أمن المصنع</h1>
            <p className="text-green-100 text-sm">نظام المراقبة والتحقق - طنجة</p>
          </div>
        </div>
        <div className="text-left">
          <span className="bg-red-500 animate-pulse px-3 py-1 rounded-full text-xs font-bold">بث مباشر</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* قسم الشاحنات */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              <Truck className="text-[#2D5A27]" /> تسجيل دخول شاحنة خشب
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="رقم اللوحة (مثلاً: أ-12345)" className="p-3 border rounded-xl bg-gray-50 text-right" />
              <select className="p-3 border rounded-xl bg-gray-50 text-right">
                <option>نوع الحمولة: خشب خام</option>
                <option>نوع الحمولة: نشارة</option>
                <option>نوع الحمولة: خشب مصنع</option>
              </select>
              <button className="md:col-span-2 flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700">
                <Camera size={20} /> التقاط صورة للحمولة
              </button>
            </div>
          </div>

          {/* سجل الزوار الأخير */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-700 mb-4">آخر الزوار المصرح لهم</h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-[#2D5A27]">
                      <UserCheck size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">زائر تجاري - شركة شحن</p>
                      <p className="text-xs text-gray-500">دخول: 14:20</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-600">داخل المصنع</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* لوحة التحكم السريع بالأمان */}
        <div className="space-y-6">
          <button 
            onClick={() => setIsAlertActive(!isAlertActive)}
            className={`w-full p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center gap-4 transition-all ${isAlertActive ? 'bg-red-600 animate-bounce' : 'bg-red-50'}`}
          >
            <AlertTriangle size={60} className={isAlertActive ? 'text-white' : 'text-red-600'} />
            <span className={`text-xl font-black ${isAlertActive ? 'text-white' : 'text-red-600'}`}>
              {isAlertActive ? 'إلغاء الإنذار' : 'إرسال بلاغ طوارئ'}
            </span>
          </button>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">حالة المصنع الحالية</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">نظام المراقبة:</span>
                <span className="text-green-600 font-bold italic">متصل</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">حراس المناوبة:</span>
                <span className="text-gray-800 font-bold">4 موظفين</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
EOF
