import { Users, Clock, AlertTriangle, TreePine, Package, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function Dashboard() {
  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data, error } = await supabase.from("employees").select("*");
      if (error) throw error;
      return data;
    },
  });

  const todayStr = new Date().toISOString().split("T")[0];
  const { data: attendance = [] } = useQuery({
    queryKey: ["attendance-today"],
    queryFn: async () => {
      const { data, error } = await supabase.from("attendance").select("*, employees(name, department)").eq("date", todayStr);
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="space-y-8 pt-12 md:pt-0">
      <h1 className="text-2xl font-bold">لوحة التحكم - المغربية للأخشاب</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="stat-card p-4 border rounded-xl bg-white shadow-sm flex items-center gap-4">
          <Users className="text-amber-700" size={32} />
          <div><p className="text-sm text-gray-500">الموظفين</p><p className="text-2xl font-bold">{employees.length}</p></div>
        </div>
        <div className="stat-card p-4 border rounded-xl bg-white shadow-sm flex items-center gap-4">
          <UserCheck className="text-green-700" size={32} />
          <div><p className="text-sm text-gray-500">حاضرون اليوم</p><p className="text-2xl font-bold">{attendance.length}</p></div>
        </div>
      </div>
    </div>
  );
}
