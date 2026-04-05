import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/akhchab" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
