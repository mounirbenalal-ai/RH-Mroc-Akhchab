import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Attendance() {
  const queryClient = useQueryClient();
  const todayStr = new Date().toISOString().split("T")[0];

  const { data: employees = [] } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data, error } = await supabase.from("employees").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });

  const { data: records = [], isLoading } = useQuery({
    queryKey: ["attendance-today"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("attendance")
        .select("*, employees(name, department)")
        .eq("date", todayStr)
        .order("check_in", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const [selectedEmployee, setSelectedEmployee] = useState("");

  const checkInMutation = useMutation({
    mutationFn: async () => {
      if (!selectedEmployee) return;
      const { error } = await supabase.from("attendance").insert({ employee_id: selectedEmployee, date: todayStr });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance-today"] });
      setSelectedEmployee("");
      toast.success("تم تسجيل الحضور");
    },
    onError: () => toast.error("حدث خطأ"),
  });

  const checkOutMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("attendance").update({ check_out: new Date().toISOString() }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance-today"] });
      toast.success("تم تسجيل الانصراف");
    },
  });

  const presentIds = records.map((r) => r.employee_id);
  const availableEmployees = employees.filter((e) => !presentIds.includes(e.id));

  return (
    <div className="space-y-6 pt-12 md:pt-0">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-foreground">الحضور والانصراف</h1>
        <p className="text-sm text-muted-foreground">سجل اليوم — {new Date().toLocaleDateString("ar-MA")}</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stat-card text-center"><p className="text-sm text-muted-foreground">الحاضرون</p><p className="text-3xl font-bold mt-1">{records.length}</p></div>
        <div className="stat-card text-center"><p className="text-sm text-muted-foreground">انصرفوا</p><p className="text-3xl font-bold mt-1">{records.filter((r) => r.check_out).length}</p></div>
        <div className="stat-card text-center"><p className="text-sm text-muted-foreground">في العمل</p><p className="text-3xl font-bold text-accent mt-1">{records.filter((r) => !r.check_out).length}</p></div>
      </div>
      <div className="stat-card">
        <h3 className="font-bold mb-3">تسجيل حضور جديد</h3>
        <div className="flex gap-3">
          <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)} className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm">
            <option value="">اختر موظفاً...</option>
            {availableEmployees.map((e) => (<option key={e.id} value={e.id}>{e.name} — {e.department}</option>))}
          </select>
          <Button onClick={() => checkInMutation.mutate()} disabled={!selectedEmployee || checkInMutation.isPending}><LogIn className="w-4 h-4 ml-2" /> تسجيل</Button>
        </div>
      </div>
      <div className="space-y-3">
        {records.map((record) => (
          <div key={record.id} className="stat-card flex items-center justify-between">
            <div><p className="font-medium">{(record.employees as any)?.name}</p><p className="text-xs text-muted-foreground">{(record.employees as any)?.department}</p></div>
            <div className="flex items-center gap-4">
              <span className="text-sm">{new Date(record.check_in).toLocaleTimeString("ar-MA", { hour: "2-digit", minute: "2-digit" })}</span>
              {!record.check_out && <Button size="sm" variant="outline" onClick={() => checkOutMutation.mutate(record.id)}>انصراف</Button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
