import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Activity, Lock } from 'lucide-react';

// --- BACKGROUND HELPER COMPONENT (Reused for consistency) ---
const GridBlink = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-16 h-16 bg-[#7ED957]/20 border border-[#7ED957]/40"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay: delay,
      repeatDelay: Math.random() * 5 + 2 
    }}
  />
);

export function Hero() {
  // Random blinker positions for the Hero background
  const blinkers = [
    { x: 15, y: 10, d: 1 }, { x: 85, y: 20, d: 0.5 }, { x: 40, y: 40, d: 2 },
    { x: 10, y: 80, d: 4 }, { x: 90, y: 60, d: 1.5 }, { x: 60, y: 15, d: 3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#001a14]">
      
      {/* ======================= SHARED BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Base Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)"
          }}
        />

        {/* 2. Top Spotlight Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7ED957]/10 blur-[120px] rounded-full pointer-events-none" />

        {/* 3. Blinking Data Cells */}
        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* 4. THE HIGH-TECH SCANNER BAR (Integrated Here) */}
        <motion.div
            className="absolute inset-x-0 h-[30vh] z-[5] pointer-events-none"
            initial={{ top: "-30%" }}
            animate={{ top: "120%" }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0
            }}
        >
            <div className="absolute bottom-0 w-full h-[2px] bg-[#7ED957] shadow-[0_0_40px_#7ED957,0_0_10px_#ffffff]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7ED957]/5 to-[#7ED957]/20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>

      </div>
      {/* ======================= END BACKGROUND ======================= */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* System Status Badge */}
            <div className="inline-flex items-center gap-3 bg-[#022c22]/80 border border-[#7ED957]/30 rounded-full pl-2 pr-4 py-1.5 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED957] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED957]"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#7ED957] uppercase">System Operational v4.0</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_25px_rgba(126,217,87,0.4)]">
                Perimeter
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-light border-l-2 border-[#7ED957]/30 pl-6">
              Next-generation AI surveillance infrastructure. Deploy military-grade optics with autonomous threat detection and encrypted neural processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <button className="group relative px-8 py-4 bg-[#7ED957] text-[#001a14] font-bold text-sm tracking-widest uppercase rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_#7ED957]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Initialize System <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group px-8 py-4 bg-transparent border border-[#7ED957]/30 text-[#7ED957] font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#7ED957]/10 transition-all flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7ED957]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Metrics / Trust */}
            <div className="mt-16 pt-8 border-t border-[#7ED957]/10 flex gap-8">
                <div>
                    <div className="text-2xl font-mono font-bold text-white">0.02s</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#7ED957]/60">Latency</div>
                </div>
                <div>
                    <div className="text-2xl font-mono font-bold text-white">256<span className="text-sm align-top">bit</span></div>
                    <div className="text-[10px] uppercase tracking-widest text-[#7ED957]/60">Encryption</div>
                </div>
                <div>
                    <div className="text-2xl font-mono font-bold text-white">99.9<span className="text-sm align-top">%</span></div>
                    <div className="text-[10px] uppercase tracking-widest text-[#7ED957]/60">Uptime</div>
                </div>
            </div>
          </motion.div>

          {/* RIGHT: HERO VISUAL (ABSTRACT HUD) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Holographic Container */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
                
                {/* Rotating Rings */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-[#7ED957]/20 border-dashed"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 rounded-full border border-[#7ED957]/10" 
                />

                {/* Central Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 bg-[#022c22]/40 backdrop-blur-md rounded-full border border-[#7ED957]/30 shadow-[0_0_50px_-10px_rgba(126,217,87,0.2)] flex items-center justify-center">
                        {/* Inner Grid */}
                        <div className="absolute inset-0 rounded-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        
                        {/* Icon Cluster */}
                        <div className="grid grid-cols-2 gap-2 relative z-10 p-4">
                            <div className="p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/20">
                                <ShieldCheck className="w-6 h-6 text-[#7ED957]" />
                            </div>
                            <div className="p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/20">
                                <Activity className="w-6 h-6 text-[#7ED957]" />
                            </div>
                            <div className="p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/20 col-span-2 flex justify-center">
                                <Lock className="w-6 h-6 text-[#7ED957]" />
                            </div>
                        </div>

                        {/* Scanner Beam (Small inner one) */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-[#7ED957]/0 via-[#7ED957]/10 to-[#7ED957]/0 rounded-full"
                            animate={{ top: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{ overflow: 'hidden' }}
                        />
                    </div>
                </div>

                {/* Floating Labels */}
                <motion.div 
                    className="absolute top-10 right-10 bg-[#001a14] border border-[#7ED957]/40 px-3 py-1 rounded text-xs font-mono text-[#7ED957]"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    NET_SECURE
                </motion.div>
                <motion.div 
                    className="absolute bottom-20 left-0 bg-[#001a14] border border-[#7ED957]/40 px-3 py-1 rounded text-xs font-mono text-[#7ED957]"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    AI_ANALYSIS
                </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#001a14] to-transparent z-20" />
    </section>
  );
}