import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import SecurityPage from './pages/SecurityPage';

const COMPANY_INFO = { name: "المغربية للأخشاب", location: "طنجة" };

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
  }, []);

  if (!session) return (
    <div className="min-h-screen bg-akhchab-creme flex items-center justify-center font-noto" dir="rtl">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center border border-akhchab-green/20">
        <h1 className="text-4xl font-black text-akhchab-green mb-6">المغربية للأخشاب</h1>
        <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })} 
          className="bg-akhchab-green text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
          تسجيل الدخول (Tanger Branch)
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-akhchab-creme" dir="rtl">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-10">
          {currentPage === 'home' && <HomePage company={COMPANY_INFO} />}
          {currentPage === 'employees' && <EmployeesPage />}
          {currentPage === 'security' && <SecurityPage />}
        </main>
      </div>
    </div>
  );
}
export default App;
