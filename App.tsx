const menuItems = [
  // ... العناصر السابقة
  { id: 'payroll', label: 'الرواتب والتعويضات', icon: Banknote },
  { id: 'settings', label: 'الإعدادات', icon: Settings },
];

// أضف الحالة في renderContent
case 'payroll': return <Payroll />;
