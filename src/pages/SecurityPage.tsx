cat << 'EOF' > src/pages/SecurityDashboard.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Log {
  id: number;
  created_at: string;
  status: string;
  user_agent: string;
  error_log: string;
}

export default function SecurityDashboard() {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await supabase
        .from('login_attempts')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setLogs(data);
    };
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-blue-500">🛡️ سجل الرقابة الأمنية - طنجة</h1>
      
      <div className="grid gap-4">
        {logs.map((log) => (
          <div key={log.id} className={`p-4 border rounded-xl ${log.status === 'FAILED' ? 'border-red-900 bg-red-950/20' : 'border-green-900 bg-green-950/20'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${log.status === 'FAILED' ? 'bg-red-600' : 'bg-green-600'}`}>
                {log.status === 'FAILED' ? 'محاولة فاشلة' : 'دخول ناجح'}
              </span>
              <span className="text-gray-500 text-sm">{new Date(log.created_at).toLocaleString('ar-MA')}</span>
            </div>
            <p className="text-sm text-gray-300 font-mono break-all">{log.user_agent}</p>
            {log.error_log && <p className="mt-2 text-red-400 text-sm">⚠️ السبب: {log.error_log}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
EOF
