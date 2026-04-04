import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

// سنعتبر Dashboard الحالي هو واجهة المغربية للأخشاب مؤقتاً
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* مسار المغربية للأخشاب (Akhchab RH) */}
        <Route path="/akhchab" element={<Dashboard />} />
        
        {/* مسار سانديك المستقبل (Syndic) - يمكنك إضافة واجهته هنا لاحقاً */}
        <Route path="/syndic" element={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>سانديك المستقبل</h1>
            <p>قيد التطوير لإدارة المجمعات السكنية</p>
          </div>
        } />

        {/* التوجيه التلقائي للمغربية للأخشاب كافتراضي */}
        <Route path="/" element={<Navigate to="/akhchab" replace />} />
        <Route path="*" element={<Navigate to="/akhchab" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
