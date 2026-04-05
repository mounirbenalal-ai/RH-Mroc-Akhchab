import React, { useState, useEffect } from 'react'; // تصحيح الاستيراد
import { supabase } from './lib/supabase';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import SecurityPage from './pages/SecurityPage';
import HRDashboardPage from './pages/HRDashboardPage';

// التعريف بالشركة في طنجة
const COMPANY_INFO = {
  name: "المغربية للأخشاب",
  name_en: "Moroccan Woods",
  location: "طنجة، المغرب (Tanger, Morocco)",
  branding: {
    primaryColor: '#2D5A27', // أخضر عسكري
    secondaryColor: '#F5F1E9', // حليبي
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب الجلسة الحالية عند تحميل التطبيق
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // الاستماع لتغييرات حالة تسجيل الدخول
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    // يمكنك تغيير provider حسب إعداداتك (github أو google)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) alert("خطأ في تسجيل الدخول: " + error.message);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F1E9] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2D5A27]"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#F5F1E9] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#2D5A27]/20 max-w-md w-full text-center">
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold text-[#2D5A27] tracking-wider mb-2" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              المغربية للأخشاب
            </h1>
            <p className="text-gray-600">نظام إدارة الموارد البشرية (Tanger, Morocco)</p>
          </div>
          <button 
            onClick={handleLogin}
            className="bg-[#2D5A27] text-white px-6 py-3 rounded-lg text-lg font-bold shadow hover:bg-[#1E3E1B] transition-colors w-full"
          >
            تسجيل الدخول للموظفين
          </button>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage company={COMPANY_INFO} />;
      case 'employees': return <EmployeesPage />;
      case 'security': return <SecurityPage />;
      case 'hr': return <HRDashboardPage />;
      default: return <HomePage company={COMPANY_INFO} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F5F1E9] text-gray-800" dir="rtl">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} company={COMPANY_INFO} />
      <div className="flex-1 flex flex-col">
        <Header company={COMPANY_INFO} />
        <main className="flex-1 p-6 lg:p-10">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
