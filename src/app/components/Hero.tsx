import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Activity, Lock, X, Video } from 'lucide-react';

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
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeCamIndex, setActiveCamIndex] = useState(0);

  const cameras = [
    'src/styles/videos/cam1.mp4',
    'src/styles/videos/cam2.mp4',
    'src/styles/videos/cam3.mp4'
  ];

  const blinkers = [
    { x: 15, y: 10, d: 1 }, { x: 85, y: 20, d: 0.5 }, { x: 40, y: 40, d: 2 },
    { x: 10, y: 80, d: 4 }, { x: 90, y: 60, d: 1.5 }, { x: 60, y: 15, d: 3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden bg-[#001a14]">
      
      {/* ======================= SHARED BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7ED957]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* PERFORMANCE FIX: Using 'y' transforms instead of 'top' */}
        <motion.div
            className="absolute inset-x-0 h-[30vh] z-[5] pointer-events-none"
            initial={{ y: "-30vh" }}
            animate={{ y: "120vh" }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <div className="absolute bottom-0 w-full h-[2px] bg-[#7ED957] shadow-[0_0_40px_#7ED957,0_0_10px_#ffffff]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7ED957]/5 to-[#7ED957]/20" />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>
      </div>
      {/* ======================= END BACKGROUND ======================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* LEFT: TEXT CONTENT */}
          {/* PERFORMANCE FIX: Removed framer-motion here. This allows the browser to paint the 
              LCP (Largest Contentful Paint) text instantly without waiting for JavaScript. */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start animate-[fadeIn_0.8s_ease-out]">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_25px_rgba(126,217,87,0.4)]">
                Perimeter
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl font-light border-l-2 border-[#7ED957]/30 pl-4 sm:pl-6 text-left">
              The state-of-the-art AI-driven pest detection system. This innovative solution is designed to provide continuous, eco-friendly, and efficient pest control, ensuring that your property remains free from infestations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setActiveModal('surveillance')}
                className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-[#7ED957]/30 text-[#7ED957] font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#7ED957]/10 transition-all flex items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#7ED957]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* RIGHT: HERO VISUAL (ABSTRACT HUD) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full mt-4 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[320px] lg:max-w-[450px] mx-auto">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-[#7ED957]/20 border-dashed"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-6 sm:inset-10 lg:inset-12 rounded-full border border-[#7ED957]/10" 
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-[#022c22]/40 backdrop-blur-md rounded-full border border-[#7ED957]/30 shadow-[0_0_50px_-10px_rgba(126,217,87,0.2)] flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full opacity-20 bg-[url('/noise.svg')]" />
                        
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 relative z-10 p-4">
                            <div className="p-2 sm:p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/20">
                                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#7ED957]" />
                            </div>
                            <div className="p-2 sm:p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/20">
                                <Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#7ED957]" />
                            </div>
                            <div className="p-2 sm:p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/20 col-span-2 flex justify-center">
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#7ED957]" />
                            </div>
                        </div>

                        {/* PERFORMANCE FIX: Using 'y' transforms instead of 'top' */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-[#7ED957]/0 via-[#7ED957]/10 to-[#7ED957]/0 rounded-full"
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{ overflow: 'hidden' }}
                        />
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#001a14] to-transparent z-20 pointer-events-none" />

      {/* ======================= MODAL SYSTEM ======================= */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={() => setActiveModal(null)}
          >
            {activeModal === 'surveillance' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-4 md:gap-6 bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4 sm:p-6 mt-12 md:mt-0 hide-scrollbar"
              >
                <button 
                  onClick={() => setActiveModal(null)} 
                  className="fixed top-4 right-4 md:absolute md:-top-14 md:right-0 z-[60] p-2 bg-[#001a14]/90 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2 shadow-lg"
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden sm:block">Terminate Connection</span>
                  <X className="w-5 h-5" />
                </button>

                <div className="relative flex-grow w-full aspect-video bg-black border border-[#7ED957]/30 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-30 flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
                    <span className="font-mono text-[10px] sm:text-[11px] md:text-xs font-bold text-red-500 tracking-widest bg-black/60 px-2 py-1 rounded-sm backdrop-blur-sm">REC ● CAM_0{activeCamIndex + 1}</span>
                  </div>
                  <video key={activeCamIndex} src={cameras[activeCamIndex]} className="w-full h-full object-cover grayscale-[20%] contrast-125 brightness-90" autoPlay loop muted playsInline />
                </div>

                <div className="w-full md:w-64 lg:w-72 flex flex-col gap-3 md:gap-4 flex-shrink-0">
                  <div className="border-b border-[#7ED957]/30 pb-2 flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#7ED957]" />
                      <span className="font-mono text-[#7ED957] text-sm tracking-widest uppercase">Select Feed</span>
                  </div>
                  <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory">
                    {cameras.map((cam, index) => (
                      <div 
                        key={index} 
                        onClick={() => setActiveCamIndex(index)} 
                        className={`relative aspect-video border-2 cursor-pointer transition-all duration-300 overflow-hidden w-[140px] sm:w-[160px] md:w-full flex-shrink-0 snap-start ${activeCamIndex === index ? 'border-[#7ED957] shadow-[0_0_15px_rgba(126,217,87,0.4)]' : 'border-[#7ED957]/20 hover:border-[#7ED957]/60 opacity-60 hover:opacity-100'}`}
                      >
                        <div className="absolute top-1 left-1 z-10 font-mono text-[9px] sm:text-[10px] text-white bg-black/70 px-1 border border-[#7ED957]/30 backdrop-blur-sm">CAM_0{index + 1}</div>
                        <video src={cam} className="w-full h-full object-cover grayscale-[40%] contrast-150" autoPlay loop muted playsInline />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}