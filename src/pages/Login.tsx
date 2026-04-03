import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
    localStorage.setItem("mb_session", btoa(email));
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="p-8 border border-blue-600 rounded-3xl bg-zinc-900/50 w-full max-w-md shadow-[0_0_30px_rgba(37,99,235,0.2)]">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">دخول الحصن</h2>
        <input type="email" placeholder="البريد" className="w-full p-4 mb-4 bg-black rounded-xl border border-zinc-800 outline-none focus:border-blue-500" onChange={e => setEmail(e.target.value)} required />
        <button className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all">تأكد الهوية</button>
      </form>
    </div>
  );
}
