import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppCard from '../components/AppCard';

const Dashboard = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState("bg-black");

  const apps = [
    { name: "Facebook", icon: "🌐", color: "bg-blue-600" },
    { name: "TikTok", icon: "🎵", color: "bg-pink-600" },
    { name: "Glovo", icon: "🛵", color: "bg-yellow-500" }
  ];

  const handleOpen = (name: string) => {
    setActiveApp(name);
    // منطق تغيير الألوان المقتبس من محاولاتك السابقة
    if (name === "Facebook") setBgColor("bg-blue-900/40");
    else if (name === "TikTok") setBgColor("bg-purple-900/40");
    else if (name === "Glovo") setBgColor("bg-yellow-900/40");
  };

  const handleClose = () => {
    setActiveApp(null);
    setBgColor("bg-black");
  };

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-1000 text-white p-4`}>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-10">
        {apps.map((app) => (
          <AppCard key={app.name} {...app} onClick={() => handleOpen(app.name)} />
        ))}
      </div>

      <AnimatePresence>
        {activeApp && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={handleClose}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-zinc-900 w-full max-w-sm rounded-3xl overflow-hidden border border-white/10 p-8 text-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <h2 className="text-xl font-bold">Connecting to {activeApp}</h2>
              <p className="text-gray-400 mt-2 italic">نظام MB-5×1 قيد المزامنة...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
