{cameraFeeds.map((cam) => (
  <div 
    key={cam.id} 
    className="relative group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
    onClick={() => setSelectedCam(cam.id)}
  >
    {/* طبقة المسح الذكي بالذكاء الاصطناعي - AI Overlay Layer */}
    <div className="absolute top-4 left-4 z-20">
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-500/50 shadow-lg">
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
        <span className="text-[10px] text-indigo-300 font-mono tracking-widest uppercase">AI Scanning...</span>
      </div>
    </div>

    {/* واجهة الكاميرا الافتراضية */}
    <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
      <img 
        src={`https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800`}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        alt={cam.name}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
    </div>

    {/* معلومات الكاميرا السفلى */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            {cam.status}
          </p>
          <h3 className="text-white font-bold text-lg leading-tight">{cam.name}</h3>
        </div>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-xl text-white transition-all transform group-hover:scale-110">
          <Maximize2 size={20} />
        </button>
      </div>
    </div>
  </div>
))}
