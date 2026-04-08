import React, { useState } from 'react';
import { Upload, FileText, HardDrive, CheckCircle } from 'lucide-react';
import { uploadToCloud } from '../lib/cloudStorage';

const Documents = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setStatus('جاري الرفع إلى السحابة...');
      await uploadToCloud(file, 'company-docs');
      setStatus('تم الحفظ في الذاكرة السحابية بنجاح! ✅');
    } catch (error) {
      setStatus('فشل في الرفع، تأكد من إعدادات Supabase');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <HardDrive className="text-emerald-600" /> الذاكرة السحابية المركزية
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* صندوق الرفع الذكي */}
        <div className="bg-white p-10 rounded-3xl border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center text-center">
          <Upload size={48} className="text-emerald-500 mb-4" />
          <p className="text-slate-600 mb-4">اسحب الملفات هنا أو اضغط للرفع (لا حدود للمساحة)</p>
          <input 
            type="file" 
            onChange={handleUpload}
            className="hidden" 
            id="cloud-upload"
          />
          <label 
            htmlFor="cloud-upload"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-emerald-700 transition-all"
          >
            {isUploading ? 'جاري المعالجة...' : 'اختيار ملف للرفع'}
          </label>
          {status && <p className="mt-4 text-sm font-medium text-emerald-700">{status}</p>}
        </div>

        {/* ملخص الذاكرة */}
        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="text-emerald-400" /> حالة الذاكرة
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>نوع التخزين:</span>
              <span className="text-emerald-400">سحابي (Object Storage)</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>المساحة المستخدمة:</span>
              <span>تتوسع تلقائياً</span>
            </div>
            <p className="text-sm text-slate-400 mt-4 italic">
              * يتم تشفير جميع ملفات "المغربية للأخشاب" قبل الرفع لضمان الأمان الكامل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
