import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  // التحقق إذا كان المستخدم مسجلاً دخوله مسبقاً
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('mb_session');
    if (isLoggedIn === 'active') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // تفعيل خاصية "تذكرني"
    localStorage.setItem('mb_session', 'active');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 border border-blue-600/50 rounded-3xl bg-zinc-900/50 w-full max-w-md backdrop-blur-xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">MB-5×1 دخول</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-4 bg-black/50 rounded-xl border border-zinc-800 focus:border-blue-500 outline-none transition-all" required />
          <input type="password" placeholder="كلمة المرور" className="w-full p-4 bg-black/50 rounded-xl border border-zinc-800 focus:border-blue-500 outline-none transition-all" required />
          <button className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">دخول آمن</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
