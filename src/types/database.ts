export interface Employee {
  id: string;
  full_name: string;
  position: string;
  department: string;
  join_date: string;
  status: 'active' | 'on_leave' | 'terminated';
  avatar_url?: string;
}

export interface AttendanceRecord {
  id: string;
  employee_id: string;
  check_in: string;
  check_out?: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}
