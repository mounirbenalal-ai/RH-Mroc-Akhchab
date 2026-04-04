import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppCard from '../components/AppCard';

const Dashboard = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  
  const apps = [
    {
      name: "المغربية للأخشاب",
      icon: "TreePine",
      color: "bg-green-600",
      glowColor: "rgba(22, 163, 74, 0.5)",
      gradient: "from-green-500/20 to-emerald-500/20",
      description: "نظام إدارة الموارد البشرية",
      key: "wood-system"
    },
    {
      name: "سانديك المستقبل",
      icon: "Building2",
      color: "bg-blue-600",
      glowColor: "rgba(37, 99, 235, 0.5)",
      gradient: "from-blue-500/20 to-cyan-500/20",
      description: "إدارة المجمعات السكنية",
      key: "syndic-system"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-10">
        {apps.map((app) => (
          <AppCard 
            key={app.key} 
            {...app} 
            onClick={() => setActiveApp(app.name)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {activeApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveApp(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-zinc-900 p-8 rounded-3xl border border-white/10 text-center"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-2">{activeApp}</h2>
              <p className="text-gray-400 italic">جاري الدخول للنظام...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
