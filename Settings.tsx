const [lowDataMode, setLowDataMode] = React.useState(false);

// في واجهة المستخدم (UI)
<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
  <input 
    type="checkbox" 
    checked={lowDataMode} 
    onChange={() => setLowDataMode(!lowDataMode)}
  />
  <span className="font-semibold text-blue-800">توفير بيانات الاتصال</span>
</div>
