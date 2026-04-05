import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ShieldAlert, CheckCircle, Clock } from 'lucide-react';

const SecurityAudit = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await supabase
        .from('login_attempts')
        .select('*')
        .order('attempt_time', { ascending: false });
      if (data) setLogs(data);
    };
    fetchLogs();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen" dir="rtl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-700">
        <ShieldAlert /> سجل التدقيق الأمني - مصنع طنجة
      </h2>
      <div className="space-y-4">
        {logs.map((log) => (
          <div key={log.id} className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-red-500 flex justify-between items-center">
            <div>
              <p className="font-bold">{log.status === 'FAILED' ? 'محاولة دخول فاشلة' : 'دخول ناجح'}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14}/> {new Date(log.attempt_time).toLocaleString('ar-MA')}</p>
            </div>
            {log.status === 'FAILED' ? <ShieldAlert className="text-red-500" /> : <CheckCircle className="text-green-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityAudit;
