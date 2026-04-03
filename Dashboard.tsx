import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppCard from '../components/AppCard';

const Dashboard = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const apps = [
    { name: "SmartDeals", icon: "🛍️", color: "bg-green-600" },
    { name: "TimoSupreme", icon: "👑", color: "bg-purple-600" },
    { name: "FivexHub", icon: "🚀", color: "bg-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold text-cyan-400 mb-8 text-center uppercase tracking-tighter">
        MB-5×1 System Control
      </h1>
      
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {apps.map((app) => (
          <AppCard key={app.name} {...app} onClick={() => setActiveApp(app.name)} />
        ))}
      </div>

      {activeApp && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50" onClick={() => setActiveApp(null)}>
           <div className="bg-zinc-900 border-2 border-cyan-500 p-10 rounded-3xl text-center">
             <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
             <p className="italic text-cyan-300">Launching {activeApp}...</p>
           </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
