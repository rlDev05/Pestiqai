import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, TrendingUp, ShieldCheck, Activity, Lock, Zap, X, Maximize2, 
  Video, Cpu, Target, AlertTriangle, Shield, Fingerprint, Server, 
  Crosshair, Thermometer, Terminal 
} from 'lucide-react';

// --- VIDEO IMPORTS ---
import cam1 from '../../styles/videos/cam1.mp4';
import cam2 from '../../styles/videos/cam2.mp4';
import cam3 from '../../styles/videos/cam3.mp4';

// --- BACKGROUND HELPER COMPONENT ---
const GridBlink = ({ delay, x, y }: { delay: number, x: number, y: number }) => (
  <motion.div
    className="absolute w-10 h-10 sm:w-16 sm:h-16 bg-[#7ED957]/20 border border-[#7ED957]/40"
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

export function FeatureGrid() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const cameras = [cam1, cam2, cam3];
  const [activeCamIndex, setActiveCamIndex] = useState(0);

  // Prevent background scrolling when a modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const features = [
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Cameras watch your property day and night, sending you instant alerts the moment a pest is spotted.',
      code: 'SYS.MNTR.01',
      isInteractive: true,
      modalId: 'surveillance'
    },
    {
      icon: TrendingUp,
      title: 'Smart Prediction',
      description: 'PESTIQ learns your property to monitor, detect & predict pests before they even happen.',
      code: 'AI.PRED.02',
      isInteractive: true,
      modalId: 'predictive'
    },
    {
      icon: ShieldCheck,
      title: 'Privacy Protection',
      description: 'Your family is safe. The cameras automatically blur out people and pets, specifically looking only for pests.',
      code: 'SEC.PRIV.03',
      isInteractive: true,
      modalId: 'firewall'
    },
    {
      icon: Lock,
      title: 'Secure Records',
      description: 'Keeps a safe, tamper-proof history of all pest activity so you always know exactly what happened and when.',
      code: 'DAT.LOG.05',
      isInteractive: true,
      modalId: 'logs'
    },
    {
      icon: Activity,
      title: 'Live Property Map',
      description: 'Check your dashboard anytime to see a live map of your property and easily spot weak points where pests might enter.',
      code: 'MAP.DIA.06',
      isInteractive: true,
      modalId: 'diagnostics'
    }
  ];

  const blinkers = [
    { x: 5, y: 15, d: 0 }, { x: 90, y: 10, d: 2 }, { x: 50, y: 50, d: 1 },
    { x: 20, y: 80, d: 3 }, { x: 80, y: 70, d: 0.5 }, { x: 35, y: 30, d: 4 },
  ];

  return (
    <section id="features" className="relative py-16 sm:py-24 lg:py-32 bg-[#001a14] overflow-hidden">
      
      {/* ======================= SHARED BACKGROUND ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)"
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-30 hidden sm:block">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>
        <motion.div
            className="absolute inset-y-0 w-[80vw] sm:w-[40vw] z-[1] pointer-events-none opacity-10"
            initial={{ left: "-80%" }}
            animate={{ left: "140%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute right-0 h-full w-[1px] bg-[#7ED957] shadow-[0_0_100px_#7ED957]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7ED957]/20 to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Core System <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_25px_rgba(126,217,87,0.4)]">
              Capabilities
            </span>
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-2">
            Smart software that automatically detects and stops biological threats.
          </p>
        </div>

        {/* CARDS GRID - Optimized for balancing orphaned bottom items on large screens */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onClick={() => feature.isInteractive && setActiveModal(feature.modalId)}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group relative flex-grow-0 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] ${feature.isInteractive ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-[#022c22]/40 backdrop-blur-md rounded-sm p-6 sm:p-8 xl:p-10 border border-[#7ED957]/20 transition-all duration-300 hover:bg-[#022c22]/80 hover:border-[#7ED957]/60 group-hover:shadow-[0_0_30px_-10px_rgba(126,217,87,0.3)]">
                
                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />

                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#7ED957]/50 to-transparent top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:top-[120%] z-0 pointer-events-none" style={{ transitionProperty: 'top, opacity', transitionDuration: '1s', transitionTimingFunction: 'ease-in-out' }} />

                {/* Indicator for Interactive Cards */}
                {feature.isInteractive && (
                    <div className="absolute top-4 right-4 text-[#7ED957] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest hidden md:block">
                            Access System
                        </span>
                        <Maximize2 className="w-5 h-5 drop-shadow-[0_0_5px_#7ED957]" />
                    </div>
                )}

                <div className="relative w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 mb-6 sm:mb-8 z-10 group/icon">
                    <div className="absolute inset-0 bg-[#7ED957] blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-full pointer-events-none" />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-[#001a14] to-[#022c22] rounded-lg border border-[#7ED957]/20 group-hover:border-[#7ED957]/80 transition-all duration-500 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(126,217,87,0.3)] overflow-hidden">
                        <div className="absolute w-full h-[200%] bg-gradient-to-b from-transparent via-[#7ED957]/15 to-transparent top-[-200%] group-hover:top-[200%] transition-all duration-[1.5s] ease-in-out pointer-events-none" />
                        <feature.icon className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-[#7ED957] drop-shadow-[0_0_8px_rgba(126,217,87,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(126,217,87,1)] group-hover:scale-110 transition-all duration-300" />
                    </div>

                    {/* HUD Targeting Brackets */}
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#7ED957]/0 group-hover:border-[#7ED957] transition-all duration-300 delay-75 pointer-events-none" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#7ED957]/0 group-hover:border-[#7ED957] transition-all duration-300 delay-75 pointer-events-none" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#7ED957]/0 group-hover:border-[#7ED957] transition-all duration-300 delay-75 pointer-events-none" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#7ED957]/0 group-hover:border-[#7ED957] transition-all duration-300 delay-75 pointer-events-none" />

                    <div className="absolute -right-2 -bottom-2 bg-[#001a14] border border-[#7ED957]/40 p-1.5 rounded-sm shadow-md group-hover:border-[#7ED957] transition-colors duration-300 z-20">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED957] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED957] shadow-[0_0_5px_#7ED957]"></span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between border-b border-[#7ED957]/10 pb-2 sm:pb-3 mb-2 sm:mb-4">
                    <span className="text-[10px] xl:text-xs font-mono text-[#7ED957]/60 tracking-widest uppercase">{feature.code}</span>
                    <div className="flex gap-1">
                       {[...Array(3)].map((_, i) => (
                           <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-[#7ED957] animate-ping' : 'bg-[#7ED957]/20'}`} />
                       ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl xl:text-2xl font-bold text-white tracking-wide group-hover:text-[#7ED957] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm xl:text-base text-gray-400 leading-relaxed font-light border-l-2 border-[#7ED957]/20 pl-3 sm:pl-4 group-hover:border-[#7ED957] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================= MODAL SYSTEM ======================= */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={() => setActiveModal(null)}
          >
            {/* 1. MULTI-CAM SURVEILLANCE MODAL */}
            {activeModal === 'surveillance' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row gap-4 bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4 sm:p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute top-2 right-2 lg:-top-12 lg:right-0 z-50 p-2 sm:p-3 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2 shadow-lg backdrop-blur-sm">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Terminate Connection</span><X className="w-5 h-5" />
                </button>

                <div className="relative flex-grow aspect-video bg-black border border-[#7ED957]/30 overflow-hidden mt-8 lg:mt-0">
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-red-500 tracking-widest bg-black/50 px-2 py-1 rounded-sm">REC ● CAM_0{activeCamIndex + 1}</span>
                  </div>
                  <video key={activeCamIndex} src={cameras[activeCamIndex]} className="w-full h-full object-cover grayscale-[20%] contrast-125 brightness-90" autoPlay loop muted playsInline />
                </div>

                <div className="w-full lg:w-64 xl:w-80 flex flex-col gap-3 sm:gap-4">
                  <div className="border-b border-[#7ED957]/30 pb-2 flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#7ED957]" />
                      <span className="font-mono text-[#7ED957] text-sm tracking-widest uppercase">Select Feed</span>
                  </div>
                  <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 scrollbar-hide">
                    {cameras.map((cam, index) => (
                      <div key={index} onClick={() => setActiveCamIndex(index)} className={`relative aspect-video border cursor-pointer transition-all duration-300 overflow-hidden w-[140px] sm:w-[180px] lg:w-full flex-shrink-0 ${activeCamIndex === index ? 'border-[#7ED957] shadow-[0_0_15px_rgba(126,217,87,0.4)]' : 'border-[#7ED957]/20 hover:border-[#7ED957]/60 opacity-60 hover:opacity-100'}`}>
                        <div className="absolute top-1 left-1 z-10 font-mono text-[10px] text-white bg-black/60 px-1 border border-[#7ED957]/30">CAM_0{index + 1}</div>
                        <video src={cam} className="w-full h-full object-cover grayscale-[40%] contrast-150 pointer-events-none" autoPlay loop muted playsInline />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. PREDICTIVE NEURAL NET MODAL */}
            {activeModal === 'predictive' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row gap-6 bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4 sm:p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute top-2 right-2 lg:-top-12 lg:right-0 z-50 p-2 sm:p-3 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Close Forecast</span><X className="w-5 h-5" />
                </button>

                <div className="relative flex-grow bg-[#001a14] border border-[#7ED957]/30 overflow-hidden aspect-square lg:aspect-auto min-h-[300px] sm:min-h-[400px] mt-8 lg:mt-0">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#7ED957 1px, transparent 1px), linear-gradient(90deg, #7ED957 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 6, ease: "linear", repeat: Infinity }} className="absolute w-full h-[2px] bg-[#7ED957] shadow-[0_0_15px_#7ED957] z-20" />
                  
                  <div className="absolute top-[30%] left-[45%] flex flex-col items-center z-10">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-ping shadow-[0_0_15px_red]" />
                    <span className="text-red-500 font-mono text-[10px] mt-1 bg-black/80 px-1 border border-red-500/50">SEC-A THREAT</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-40">
                    <Target className="w-40 h-40 sm:w-48 sm:h-48 text-[#7ED957] stroke-1 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-2 h-2 bg-[#7ED957] rounded-full" />
                  </div>
                </div>

                <div className="w-full lg:w-80 flex flex-col gap-4 sm:gap-6">
                  <div className="border-b border-[#7ED957]/30 pb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#7ED957]" />
                    <h3 className="font-mono text-[#7ED957] text-sm sm:text-base font-bold tracking-widest uppercase">Forecast Data</h3>
                  </div>
                  <div className="space-y-5">
                    {[ { label: "ZONE ALPHA", value: 87, color: "bg-red-500" }, { label: "ZONE BETA", value: 42, color: "bg-yellow-400" }, { label: "ZONE DELTA", value: 12, color: "bg-[#7ED957]" }].map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-gray-300"><span>{stat.label}</span><span className={`${stat.value > 80 ? 'text-red-500' : 'text-[#7ED957]'}`}>{stat.value}%</span></div>
                        <div className="h-2 w-full bg-[#001a14] border border-[#7ED957]/20 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${stat.value}%` }} transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }} className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-black border border-[#7ED957]/30 p-3 flex flex-col gap-2 relative overflow-hidden">
                    <div className="font-mono text-[10px] sm:text-xs text-gray-400 leading-relaxed flex flex-col gap-2">
                      <p className="text-[#7ED957]">&gt; INITIALIZING AI_FORECAST_03...</p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>&gt; SCANNING THERMAL VECTORS...</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="text-red-500">&gt; WARNING: MICRO-BREACH PREDICTED IN ZONE ALPHA (48 HRS)</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>&gt; DEPLOYING PREVENTATIVE COUNTERMEASURES...</motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. PRIVACY FIREWALL MODAL */}
            {activeModal === 'firewall' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4 sm:p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 p-2 sm:p-3 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Disable Firewall View</span><X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 border-b border-[#7ED957]/30 pb-4 mt-8 md:mt-0">
                  <Shield className="w-8 h-8 text-[#7ED957] animate-pulse" />
                  <div>
                    <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-white tracking-widest uppercase">Kernel-Level Redaction</h2>
                    <p className="text-xs font-mono text-[#7ED957]/60">BIOMETRIC_MASKING_ACTIVE</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Fake Code / Hex Block */}
                  <div className="bg-black border border-[#7ED957]/20 p-4 h-48 sm:h-64 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-[#7ED957]/10 to-transparent animate-[scan_3s_linear_infinite]" />
                    <div className="font-mono text-[10px] sm:text-xs leading-relaxed text-[#7ED957]/40 break-all">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                          0x{Math.random().toString(16).substr(2, 8).toUpperCase()} ... {Math.random() > 0.5 ? <span className="text-[#7ED957] font-bold">[BIOMETRIC_DATA_SCRUBBED]</span> : 'NUL_ROUTINE_PASS'}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* Status Panel */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#001a14] border border-[#7ED957]/30 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Fingerprint className="w-6 h-6 text-gray-500" />
                        <span className="font-mono text-xs text-gray-400">HUMAN ENTITY DETECTED</span>
                      </div>
                      <span className="bg-[#7ED957]/20 text-[#7ED957] font-mono text-[10px] px-2 py-1 rounded-sm border border-[#7ED957]/50">MASKED</span>
                    </div>
                    <div className="bg-[#001a14] border border-red-500/30 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                        <span className="font-mono text-xs text-red-500">PEST VECTOR IDENTIFIED</span>
                      </div>
                      <span className="bg-red-500/20 text-red-500 font-mono text-[10px] px-2 py-1 rounded-sm border border-red-500/50">TRACKING</span>
                    </div>
                    <p className="text-xs font-mono text-gray-500 mt-auto border-l-2 border-[#7ED957] pl-3">
                      All feeds passing through node SECURE_LAYER_256 are actively redacted. PII (Personally Identifiable Information) never touches disk.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. ENCRYPTED LOGS MODAL */}
            {activeModal === 'logs' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4 sm:p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 p-2 sm:p-3 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Close Vault</span><X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 border-b border-[#7ED957]/30 pb-4 mt-8 md:mt-0">
                  <Server className="w-6 h-6 text-[#7ED957]" />
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-widest uppercase">Private Blockchain Ledger</h2>
                </div>

                <div className="bg-black border border-[#7ED957]/30 p-2 sm:p-4 h-64 sm:h-80 overflow-y-auto flex flex-col gap-2 scrollbar-hide">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#001a14] p-3 border-l-2 border-[#7ED957]">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <Lock className="w-4 h-4 text-gray-500 shrink-0" />
                        <span className="font-mono text-[10px] sm:text-xs text-gray-400">BLOCK #{849930 - i}</span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-[#7ED957]/70 break-all sm:w-1/2">
                        {Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
                      </span>
                      <span className="font-mono text-[10px] bg-[#7ED957]/20 text-[#7ED957] px-2 py-0.5 mt-2 sm:mt-0 self-start sm:self-auto rounded-sm shrink-0">VERIFIED</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 5. LIVE DIAGNOSTICS MODAL */}
            {activeModal === 'diagnostics' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4 sm:p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 p-2 sm:p-3 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Exit Diagnostics</span><X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 border-b border-[#7ED957]/30 pb-4 mt-8 md:mt-0 gap-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-6 h-6 text-orange-500" />
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-widest uppercase">Thermal Blueprints</h2>
                  </div>
                  <span className="font-mono text-[10px] text-[#7ED957] border border-[#7ED957] px-2 py-1 animate-pulse rounded-sm shrink-0">LIVE SCAN ACTIVE</span>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Heatmap Grid */}
                  <div className="col-span-1 lg:col-span-3 grid grid-cols-4 sm:grid-cols-6 grid-rows-6 sm:grid-rows-4 gap-1 bg-[#001a14] p-2 border border-[#7ED957]/30">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const isHot = i === 8 || i === 14 || i === 15;
                      const isWarm = i === 7 || i === 9 || i === 21;
                      let bg = "bg-blue-500/10";
                      if (isHot) bg = "bg-red-500/60 animate-pulse";
                      if (isWarm) bg = "bg-orange-500/40";
                      return <div key={i} className={`aspect-square border border-[#7ED957]/10 ${bg} transition-colors duration-700`} />
                    })}
                  </div>
                  {/* Status Sidebar */}
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#001a14] border border-[#7ED957]/20 p-3">
                      <p className="font-mono text-[10px] text-gray-400 mb-1">STRUCTURAL INTEGRITY</p>
                      <p className="font-mono text-xl text-[#7ED957]">94.2%</p>
                    </div>
                    <div className="bg-[#001a14] border border-red-500/30 p-3">
                      <p className="font-mono text-[10px] text-gray-400 mb-1">HOTSPOTS DETECTED</p>
                      <p className="font-mono text-xl text-red-500">3</p>
                    </div>
                    <div className="bg-black border border-[#7ED957]/20 p-3 flex-grow flex flex-col gap-2 min-h-[120px]">
                       <span className="font-mono text-[10px] text-[#7ED957]">&gt; Analyzing wall temp...</span>
                       <span className="font-mono text-[10px] text-orange-500">&gt; Elevated heat at C4</span>
                       <span className="font-mono text-[10px] text-[#7ED957]">&gt; Correlating with visual...</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Updated to ensure opacity starts at 0 and stays at 1 */
        .animate-\\[fadeInUp_0\\.8s_ease-out_forwards\\] {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}