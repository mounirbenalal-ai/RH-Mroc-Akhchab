import React, { useState, useEffect } from 'react';
import { Scan, UserCheck, ShieldAlert, Fingerprint } from 'lucide-react';

const FaceAuth = () => {
  const [scanning, setScanning] = useState(true);
  const [status, setStatus] = useState('جاري فحص الهوية...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanning(false);
      setStatus('تم التحقق: مـنـير بـنـالال');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-6 text-right" dir="rtl">
      <div className="relative w-64 h-64 mb-8">
        {/* إطار المسح الضوئي */}
        <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-3xl" />
        <div className={`absolute inset-x-0 top-0 h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] transition-all duration-1000 ${scanning ? 'animate-bounce-slow' : 'hidden'}`} 
             style={{ animation: 'scan 2s infinite linear' }} />
        
        <div className="w-full h-full rounded-3xl bg-slate-800 flex items-center justify-center overflow-hidden">
          {scanning ? (
            <Fingerprint size={80} className="text-emerald-500/20 animate-pulse" />
          ) : (
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mounir" alt="User" className="w-40 h-40" />
          )}
        </div>
      </div>

      <div className={`p-4 rounded-2xl border ${scanning ? 'border-blue-500 bg-blue-500/10' : 'border-emerald-500 bg-emerald-500/10'}`}>
        <p className={`text-lg font-bold flex items-center gap-3 ${scanning ? 'text-blue-400' : 'text-emerald-400'}`}>
          {scanning ? <Scan className="animate-spin" /> : <UserCheck />}
          {status}
        </p>
      </div>

      <p className="mt-4 text-slate-500 text-sm font-mono">ENCRYPTED END-TO-END | WOOD-RH-SECURE</p>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-bounce-slow {
          animation: scan 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default FaceAuth;
