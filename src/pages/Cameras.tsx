import React from 'react';
import { Camera, Maximize2, ShieldCheck, Radio } from 'lucide-react';

const Cameras = () => {
  // هنا يمكنك وضع روابط البث الحقيقية (IP Cameras)
  const cameraFeeds = [
    { id: 1, name: 'بوابة المصنع الرئيسية', status: 'مباشر' },
    { id: 2, name: 'خط إنتاج Steinemann', status: 'مباشر' },
    { id: 3, name: 'مخزن الأخشاب الخام', status: 'مباشر' },
    { id: 4, name: 'منطقة الشحن والتفريغ', status: 'مباشر' },
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <ShieldCheck className="text-emerald-500" /> مركز المراقبة والتحكم
        </h1>
        <div className="flex gap-2">
          <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs flex items-center gap-1 animate-pulse">
            <Radio size={14} /> تسجيل نشط
          </span>
        </div>
      </div>

      {/* شبكة الكاميرات - حجم كبير وجودة عالية */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cameraFeeds.map((cam) => (
          <div key={cam.id} className="relative group bg-black rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* مكان البث - فيديو افتراضي كمثال */}
            <div className="aspect-video bg-slate-900 flex items-center justify-center relative overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=1000`} 
                alt={cam.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* تفاصيل الكاميرا */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
              <div>
                <p className="text-emerald-400 text-xs font-mono mb-1">CAM_{cam.id.toString().padStart(2, '0')} // 4K_ULTRA_HD</p>
                <h3 className="text-white font-bold text-lg">{cam.name}</h3>
              </div>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl backdrop-blur-md transition-all">
                <Maximize2 className="text-white" size={20} />
              </button>
            </div>
            
            <div className="absolute top-6 right-6">
               <Camera className="text-white/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cameras;
