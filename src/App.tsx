import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import ResetPassword from "@/pages/ResetPassword";

// المسارات الآن أصبحت منظمة وتعمل تلقائياً عبر الـ Router
const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
