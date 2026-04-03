import React from 'react';

interface CompanyProps {
  company: {
    name: string;
    location: string;
    branding: {
      primaryColor: string;
      secondaryColor: string;
    };
  };
}

const HomePage: React.FC<CompanyProps> = ({ company }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700" dir="rtl">
      {/* Hero Section - قسم الترحيب الرئيسي */}
      <div className="relative overflow-hidden bg-[#2D5A27] rounded-[2rem] p-10 lg:p-16 text-[#F5F1E9] shadow-2xl border-b-8 border-[#1E3E1B]">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-bold mb-6 tracking-widest border border-white/20 uppercase">
            نظام الإدارة الذكي • V1.0
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            مرحباً بك في <span className="text-[#F5F1E9]/80">{company.name}</span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed font-medium mb-8">
            المنصة المركزية لإدارة الكفاءات والموارد البشرية في <span className="underline decoration-[#F5F1E9]/30 underline-offset-8">قلب طنجة</span>. 
            حيث تلتقي حرفية الخشب التقليدية مع دقة التكنولوجيا.
          </p>
          <div className="flex gap-4">
            <div className="bg-[#F5F1E9] text-[#2D5A27] px-6 py-2 rounded-lg font-bold text-sm shadow-lg">
              قاعدة بيانات النشطة
            </div>
          </div>
        </div>

        {/* تأثيرات بصرية خلفية (تقنية الخشب المحفور) */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 p-8 opacity-10">
          <span className="text-[150px] rotate-12 block">🌲</span>
        </div>
      </div>

      {/* Stats Grid - شبكة الإحصائيات الحية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard title="إجمالي الكادر البشري" value="124" icon="👥" trend="+3 هذا الشهر" />
        <StatCard title="سجل حضور اليوم" value="118" icon="✅" trend="95% نسبة الحضور" />
        <StatCard title="إخطارات إدارية" value="05" icon="⏳" trend="تحتاج مراجعة" color="text-amber-600" />
      </div>

      {/* Quick Actions - إجراءات سريعة */}
      <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-[#2D5A27]/5">
        <h4 className="text-[#2D5A27] font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-[#2D5A27] rounded-full"></span>
          نظرة سريعة على المصنع
        </h4>
        <div className="h-48 rounded-2xl bg-[#F5F1E9] border-2 border-dashed border-[#2D5A27]/20 flex items-center justify-center text-gray-400 italic">
          [سيتم هنا ربط كاميرات المراقبة أو مخطط المصنع لاحقاً]
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend, color = "text-[#2D5A27]" }: any) => (
  <div className="group bg-white p-8 rounded-[1.5rem] shadow-sm border border-[#2D5A27]/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
    <div className="flex items-center justify-between mb-4 relative z-10">
      <div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className={`text-4xl font-black ${color}`}>{value}</h3>
      </div>
      <div className="w-14 h-14 bg-[#F5F1E9] rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">
        {icon}
      </div>
    </div>
    <div className="text-[10px] font-bold text-gray-400 mt-4 pt-4 border-t border-gray-50 relative z-10">
      {trend}
    </div>
    {/* لمسة تزيينية خلفية للكارت */}
    <div className="absolute -bottom-2 -left-2 text-6xl opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      {icon}
    </div>
  </div>
);

export default HomePage;
