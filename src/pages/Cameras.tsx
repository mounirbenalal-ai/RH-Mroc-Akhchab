import React, { useState } from 'react';
import { Camera, Maximize2, ShieldCheck, Radio, AlertTriangle } from 'lucide-react';

const Cameras = () => {
  const [selectedCam, setSelectedCam] = useState<number | null>(null);

  const cameraFeeds = [
    { id: 1, name: 'البوابة الرئيسية - طنجة', status: 'مباشر', load: 45 },
    { id: 2, name: 'خط إنتاج Steinemann', status: 'مباشر', load: 88 },
    { id: 3, name: 'مخازن الأخشاب الخام', status: 'مباشر', load: 12 },
    { id: 4, name: 'منطقة الشحن والتفريغ', status: 'تحذير', load: 95 },
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-right" dir="rtl">
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <ShieldCheck className="text-emerald-500 animate-pulse" /> مركز المراقبة الذكي
        </h1>
        <div className="flex gap-2">
          <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <Radio size={14} className="animate-ping" /> بث نشط
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cameraFeeds.map((cam) => (
          <div 
            key={cam.id} 
            className={`relative group bg-slate-900 rounded-2xl overflow-hidden border-2 transition-all ${selectedCam === cam.id ? 'border-emerald-500 scale-[1.02]' : 'border-slate-800'}`}
            onClick={() => setSelectedCam(cam.id)}
          >
            <div className="aspect-video bg-slate-800 flex items-center justify-center overflow-hidden">
               {/* محاكاة البث المباشر */}
               <img 
                 src={`https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=60&w=800&sig=${cam.id}`}
                 className={`w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity ${cam.status === 'تحذير' ? 'sepia' : ''}`}
                 alt={cam.name}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
              <div>
                <p className={`text-xs font-mono ${cam.status === 'تحذير' ? 'text-red-400' : 'text-emerald-400'}`}>● {cam.status}</p>
                <h3 className="text-white font-bold">{cam.name}</h3>
              </div>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg backdrop-blur-md">
                <Maximize2 className="text-white" size={20} />
              </button>
            </div>

            {/* نظام تحليل الحركة الوهمي */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-mono">
               CPU: {cam.load}% | AI: ANALYZING...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cameras;
