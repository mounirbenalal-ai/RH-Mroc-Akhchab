import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import SecurityPage from "./SecurityPage";
import EmployeesPage from "./EmployeesPage";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const COMPANY_INFO = { name: "المغربية للأخشاب", logo: "TreePine" };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Dashboard />;
      case 'security': return <SecurityPage />;
      case 'employees': return <EmployeesPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F5F1E9] text-gray-900" dir="rtl">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 flex flex-col">
        <Header company={COMPANY_INFO} />
        <main className="flex-1 p-6">{renderPage()}</main>
      </div>
    </div>
  );
}
export default App;
