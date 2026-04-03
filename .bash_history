
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("لم يتم العثور على عنصر root في الصفحة");
}
EOF

./scan
# 1. تحديث سكريبت الرفع ليكون ذكياً
cat <<EOF > update.sh
#!/bin/bash
git add .
git commit -m "Final Fix: Resolved all TypeScript errors and optimized config"
# استبدال 'main' باسم الفرع الخاص بك إذا كان مختلفاً
git push origin main --force
echo -e "\e[1;32m🚀 تم رفع النسخة النظيفة بنجاح إلى GitHub!\e[0m"
EOF

# 2. تفعيل وتشغيل الرفع
chmod +x update.sh
./update.sh
tremux
echo "--- قائمة التطبيقات والوحدات المرتبطة ---"
ls -R src/pages src/App.tsx src/main.tsx
cat src/App.tsx
cat src/pages/Login.tsx
./scan
npm run dev
nano package.json
npm run dev
# تنظيف الملف وإعادة بنائه بشكل سليم
cat <<EOF > package.json
{
  "name": "smartdeals",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.2",
    "framer-motion": "^11.0.8"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
}
EOF

npm run dev
chmod -R +x node_modules/.bin/
echo "--- فحص حالة الربط العصبى للتطبيقات ---"
grep -E "import.*from|path=" src/App.tsx
npm run dev
# التأكد من وجود المجلد
mkdir -p src/components
# إنشاء الملف ووضع الكود بداخله
cat <<EOF > src/components/AppCard.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AppCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  glowColor: string;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

const AppCard = ({ name, description, icon, glowColor, gradient, delay = 0, onClick }: AppCardProps) => {
  return (
    <motion.div
      className="glass rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ boxShadow: \`0 0 40px \${glowColor}, inset 0 0 40px \${glowColor}\` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: gradient }}
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: gradient }}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-sm">{name}</h3>
          <p className="text-muted-foreground text-xs mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppCard;
EOF

# إضافة التعديلات
git add src/components/AppCard.tsx
# توثيق العملية
git commit -m "Add: Professional AppCard component with framer-motion animations"
# الرفع النهائي (تأكد من وجود الإنترنت والـ Token)
git push origin main
cat <<EOF > src/pages/Dashboard.tsx
import { motion } from "framer-motion";
import { LogOut, Search, Bell, User, MessageCircle, Play, ShoppingBag, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";

const apps = [
  {
    name: "Facebook",
    description: "تواصل اجتماعي",
    icon: <MessageCircle className="h-7 w-7 text-white" />,
    glowColor: "rgba(24, 119, 242, 0.3)",
    gradient: "linear-gradient(135deg, #1877F2, #42A5F5)",
  },
  {
    name: "TikTok",
    description: "فيديوهات قصيرة",
    icon: <Play className="h-7 w-7 text-white" />,
    glowColor: "rgba(105, 201, 208, 0.3)",
    gradient: "linear-gradient(135deg, #010101, #69C9D0)",
  },
  {
    name: "Glovo",
    description: "توصيل سريع",
    icon: <Truck className="h-7 w-7 text-white" />,
    glowColor: "rgba(255, 194, 68, 0.3)",
    gradient: "linear-gradient(135deg, #FFC244, #FF9F00)",
  },
  {
    name: "Avito",
    description: "إعلانات مبوبة",
    icon: <ShoppingBag className="h-7 w-7 text-white" />,
    glowColor: "rgba(45, 181, 115, 0.3)",
    gradient: "linear-gradient(135deg, #2DB573, #00C851)",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20" 
             style={{ background: "radial-gradient(ellipse, #2563eb, transparent 70%)" }} />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">MB</div>
            <span className="font-bold text-lg text-blue-500">MB-5×1</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Search className="h-5 w-5 text-gray-400" /></button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><User className="h-5 w-5 text-gray-400" /></button>
            <button className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors" onClick={() => navigate("/login")}><LogOut className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-2">مرحباً بك في <span className="text-blue-500">MB-5×1</span></h1>
          <p className="text-gray-400 text-sm">عالمك الرقمي المتكامل — ٤ تطبيقات في مكان واحد</p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {apps.map((app, i) => (
            <AppCard key={app.name} {...app} delay={0.3 + i * 0.1} />
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div className="mt-10 bg-zinc-900/50 border border-white/10 rounded-2xl p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="font-semibold mb-4 text-center text-sm text-gray-300">نظرة سريعة</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><p className="text-2xl font-bold text-blue-500">24</p><p className="text-gray-500 text-xs">رسائل</p></div>
            <div><p className="text-2xl font-bold text-yellow-500">3</p><p className="text-gray-500 text-xs">طلبات</p></div>
            <div><p className="text-2xl font-bold text-green-500">12</p><p className="text-gray-500 text-xs">إعلانات</p></div>
          </div>
        </motion.div>

        <footer className="text-center mt-8 text-gray-600 text-xs">
          <p>MB-5×1 © 2026 — مستقبل التطبيقات المتكاملة</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
EOF

./scan
WebView myWebView = (WebView) findViewById(R.id.webview);
myWebView.loadUrl("https://fivex-fusion-hub.lovable.app");
./update.sh
git clone [رابط_المستودع_هنا]
cd [اسم_المجلد]
./update.sh
pkg install nodejs
npm install -g nativefier
nativefier "https://fivex-fusion-hub.lovable.app"
package com.my.newproject; // تأكد أن هذا الاسم يطابق اسم الـ Package في مشروعك
import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebSettings;
public class MainActivity extends Activity {
}
# جلب الملفات من GitHub ودمجها
git pull origin main --rebase
# الآن قم بالرفع مرة أخرى
git push -u origin main
// 1. أضف هذه الحالة في Dashboard.tsx
const [showGlovo, setShowGlovo] = useState(false);
// 2. أضف واجهة التتبع داخل قسم الـ return
{showGlovo && (   <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4" onClick={() => setShowGlovo(false)}>
)}
cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
EOF

nano Dashboard.tsx
cat <<EOF > src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppCard from '../components/AppCard';

const Dashboard = () => {
  const [showFB, setShowFB] = useState(false);
  const [showTikTok, setShowTikTok] = useState(false);
  const [showGlovo, setShowGlovo] = useState(false);
  const [bgColor, setBgColor] = useState("bg-black");
  const navigate = useNavigate();

  const apps = [
    { name: "Facebook", icon: "🌐", color: "bg-blue-600" },
    { name: "TikTok", icon: "🎵", color: "bg-pink-600" },
    { name: "Glovo", icon: "🛵", color: "bg-yellow-500" }
  ];

  const openApp = (appName: string) => {
    if (appName === "Facebook") {
      setBgColor("bg-blue-900/40");
      setShowFB(true);
    } else if (appName === "TikTok") {
      setBgColor("bg-cyan-900/40");
      setShowTikTok(true);
    } else if (appName === "Glovo") {
      setBgColor("bg-yellow-900/40");
      setShowGlovo(true);
    }
  };

  const closeModals = () => {
    setShowFB(false);
    setShowTikTok(false);
    setShowGlovo(false);
    setBgColor("bg-black");
  };

  return (
    <div className={\`min-h-screen \${bgColor} transition-colors duration-700 text-white p-4\`}>
      {/* شبكة التطبيقات */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-10">
        {apps.map((app) => (
          <AppCard 
            key={app.name} 
            {...app} 
            onClick={() => openApp(app.name)} 
          />
        ))}
      </div>

      {/* نافذة Facebook التجريبية */}
      {showFB && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModals}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="bg-zinc-900 w-full max-w-md rounded-3xl overflow-hidden border border-blue-500/30"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-[#1877F2] p-4 flex items-center justify-between">
              <span className="font-bold text-white">Messenger</span>
              <button onClick={closeModals} className="text-white">✕</button>
            </div>
            <div className="p-6">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-white">منير بن علال</p>
                  <p className="text-xs text-gray-400">نظام الربط يعمل بنجاح الآن!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* نافذة TikTok التجريبية */}
      {showTikTok && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModals}
        >
          <motion.div className="relative w-full max-w-[300px] aspect-[9/16] bg-zinc-800 rounded-3xl overflow-hidden border-2 border-cyan-400" onClick={e => e.stopPropagation()}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4" />
               <p className="font-bold">TikTok Live View</p>
            </div>
            <button className="absolute top-4 right-4 text-white" onClick={closeModals}>✕</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
EOF

./update.sh
nano Dashboard.tsx
# 1. حفظ الكود الجديد في الملف
cat <<EOF > src/pages/Dashboard.tsx
# (الصق الكود البرمجي أعلاه هنا)
EOF

# 2. إصلاح سكريبت التحديث وتصحيح كلمة tremux
cat <<EOF > update.sh
#!/bin/bash
git add .
git commit -m "Integrated Dynamic Dashboard with TikTok/FB View"
# الرفع القسري لتجاوز خطأ التضارب الحالي
git push -u origin main --force
echo -e "\e[1;32m✅ Done! Project Synchronized.\e[0m"
EOF

# 3. التشغيل
chmod +x update.sh
./update.sh
# تغيير الرابط إلى HTTPS لسهولة الوصول
git remote set-url origin https://github.com/mounirbenalal-ai/Super-App.git
# الآن جرب الرفع (سيطلب منك إدخال الـ Token الخاص بك)
git push -u origin main --force
nano src/pages/Dashboard.tsx
cat <<EOF > update.sh
#!/bin/bash
echo -e "\e[1;34m[MB-5×1] جارِ المزامنة...\e[0m"
git add .
git commit -m "Final: Integrated Dashboard with Dynamic UI"
git push -u origin main --force
echo -e "\e[1;32m✅ Done! Project Synchronized.\e[0m"
EOF

chmod +x update.sh
./update.sh
# 1. إزالة الرابط القديم الذي يسبب المشكلة
git remote remove origin
# 2. إضافة الرابط الجديد مع دمج "الـ Token" الخاص بك مباشرة لضمان الصلاحية
# استبدل YOUR_GITHUB_TOKEN بالرمز الخاص بك
git remote add origin https://YOUR_GITHUB_TOKEN@github.com/mounirbenalal-ai/Super-App.git
# 3. الرفع القسري لتوحيد الملفات
git push -u origin main --force
# 1. إزالة الارتباط القديم
git remote remove origin
# 2. ربط المستودع بالـ Token مباشرة (استبدل TOKEN بالرمز الخاص بك)
git remote add origin https://TOKEN@github.com/mounirbenalal-ai/Super-App.git
# 3. الرفع القسري لتوحيد الملفات وتجاوز خطأ التضارب
git push -u origin main --force
# حذف الرابط الحالي المتعثر
git remote remove origin
# إضافة الرابط الجديد (ضع الـ Token الحقيقي الخاص بك مكان النجوم)
git remote add origin https://ghp_YourActualTokenHere@github.com/mounirbenalal-ai/Super-App.git
# الرفع القسري لتجاوز أي تعارض في السجلات
git push -u origin main --force
git remote remove origin
git remote add origin https://ghp_XXXXXXXXXXXXXXXXXXXX@github.com/mounirbenalal-ai/Super-App.git
ssh/id_ed25519.pub
cat ~/.ssh/id_ed25519.pub
# حذف أي روابط قديمة (HTTPS)
git remote remove origin
# إضافة رابط الـ SSH الخاص بمستودعك
git remote add origin git@github.com:mounirbenalal-ai/Super-App.git
# اختبار الاتصال (سيطلب منك التأكيد، اكتب yes ثم Enter)
ssh -T git@github.com
nano src/pages/Dashboard.tsx
# تحديث سكريبت update.sh
cat <<EOF > update.sh
#!/bin/bash
git add .
git commit -m "Final Merge: UI & SSH Fix"
git push -u origin main --force
EOF

chmod +x update.sh
./update.sh
# تحديث سكريبت update.sh
cat <<EOF > update.sh
#!/bin/bash
git add .
git commit -m "Final Merge: UI & SSH Fix"
git push -u origin main --force
EOF

chmod +x update.sh
./update.sh
5https://github.com/mounirbenalal-ai/Super-App/settings/keys/146964817
git rm -r --cached .ssh/
git commit -m "Security: Remove private keys from repository"
nano Dashboard.tsx
# تحديث سكريبت الرفع
cat <<EOF > update.sh
#!/bin/bash
git add .
git commit -m "Final Build: UI Integrated & Security Cleaned"
git push -u origin main --force
EOF

chmod +x update.sh
./update.sh
# 1. حذف المجلد القديم لضمان النظافة
rm -rf ~/.ssh
# 2. توليد مفتاح جديد (اضغط Enter عند كل سؤال)
ssh-keygen -t ed25519 -C "mounirbenalal-ai"
# 3. عرض المفتاح الجديد لنسخه
cat ~/.ssh/id_ed25519.pub
