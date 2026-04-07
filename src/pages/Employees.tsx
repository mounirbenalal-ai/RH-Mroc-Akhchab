import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { supabase } from '../lib/supabase'; // تأكد من وجود ملف الإعدادات

const Employees = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ full_name: '', role: '' });

  // 1. جلب الموظفين عند فتح الصفحة
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const { data } = await supabase.from('employees').select('*').order('created_at', { ascending: false });
    if (data) setEmployees(data);
  };

  // 2. وظيفة حفظ البيانات في Supabase
  const handleSave = async () => {
    if (!formData.full_name || !formData.role) return alert('يرجى ملء كافة الحقول');
    
    setLoading(true);
    const { error } = await supabase.from('employees').insert([
      { 
        full_name: formData.full_name, 
        role: formData.role,
        status: 'نشط',
        joined_at: new Date().toISOString().split('T')[0]
      }
    ]);

    if (!error) {
      setFormData({ full_name: '', role: '' });
      setShowModal(false);
      fetchEmployees(); // تحديث الجدول فوراً
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', direction: 'rtl' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
        <h2 style={{ color: '#1e293b' }}>إدارة الموظفين</h2>
        <button onClick={() => setShowModal(true)} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} /> إضافة موظف جديد
        </button>
      </div>

      <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead style={{ background: '#f8fafc' }}>
            <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
              <th style={{ padding: '15px' }}>الاسم الكامل</th>
              <th style={{ padding: '15px' }}>المنصب</th>
              <th style={{ padding: '15px' }}>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '15px' }}>{emp.full_name}</td>
                <td style={{ padding: '15px' }}>{emp.role}</td>
                <td style={{ padding: '15px' }}>
                  <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{emp.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '20px', width: '90%', maxWidth: '400px' }}>
            <h3>إضافة موظف جديد</h3>
            <input 
              type="text" 
              placeholder="الاسم الكامل" 
              value={formData.full_name}
              onChange={(e) => setFormData({...formData, full_name: e.target.value})}
              style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} 
            />
            <input 
              type="text" 
              placeholder="المنصب" 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} 
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>إلغاء</button>
              <button 
                onClick={handleSave} 
                disabled={loading}
                style={{ flex: 1, padding: '10px', borderRadius: '8px', background: '#3b82f6', color: 'white', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'جاري الحفظ...' : 'حفظ البيانات'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
