import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, TrendingUp, ShieldCheck, Activity, Lock, Zap, X, Maximize2, 
  Video, Cpu, Target, AlertTriangle, Shield, Fingerprint, Server, 
  Crosshair, Thermometer, Terminal 
} from 'lucide-react';

// --- VIDEO IMPORTS ---
// Adjust the '../' based on exactly where this component lives relative to the styles folder!
import cam1 from '../../styles/videos/cam1.mp4';
import cam2 from '../../styles/videos/cam2.mp4';
import cam3 from '../../styles/videos/cam3.mp4';

// --- BACKGROUND HELPER COMPONENT ---
const GridBlink = ({ delay, x, y }) => (
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

export function FeatureGrid() {
  const [activeModal, setActiveModal] = useState(null);
  const cameras = [cam1, cam2, cam3];
  const [activeCamIndex, setActiveCamIndex] = useState(0);

  // Updated Features Array - All are now interactive!
  const features = [
    {
      icon: Eye,
      title: '24/7 SURVEILLANCE',
      code: 'SYS_MONITOR_V1',
      description: 'Continuous optical monitoring with real-time autonomous alerts. Zero latency threat detection protocol.',
      delay: 0.1,
      isInteractive: true,
      modalId: 'surveillance'
    },
    {
      icon: TrendingUp,
      title: 'PREDICTIVE NEURAL NET',
      code: 'AI_FORECAST_03',
      description: 'AI-powered algorithms identify infestation vectors and forecast breaches before they manifest physically.',
      delay: 0.2,
      isInteractive: true,
      modalId: 'predictive'
    },
    {
      icon: ShieldCheck,
      title: 'PRIVACY FIREWALL',
      code: 'SECURE_LAYER_256',
      description: 'Military-grade redaction. Biological entities (Humans) are masked at the kernel level. Only pests are flagged.',
      delay: 0.3,
      isInteractive: true,
      modalId: 'firewall'
    },
    {
      icon: Zap,
      title: 'AUTONOMOUS RESPONSE',
      code: 'KINETIC_ACT_09',
      description: 'Automated dispatch triggers upon positive identification. Response times reduced by 400% vs human operators.',
      delay: 0.4,
      isInteractive: true,
      modalId: 'response'
    },
    {
      icon: Lock,
      title: 'ENCRYPTED LOGS',
      code: 'SHA_256_VAULT',
      description: 'All infestation data is immutably recorded on a private blockchain ledger for compliance and historical analysis.',
      delay: 0.5,
      isInteractive: true,
      modalId: 'logs'
    },
    {
      icon: Activity,
      title: 'LIVE DIAGNOSTICS',
      code: 'BIO_METRIC_SCAN',
      description: 'Real-time heat mapping of structural vulnerabilities. View your perimeter status via the command dashboard.',
      delay: 0.6,
      isInteractive: true,
      modalId: 'diagnostics'
    }
  ];

  const blinkers = [
    { x: 5, y: 15, d: 0 }, { x: 90, y: 10, d: 2 }, { x: 50, y: 50, d: 1 },
    { x: 20, y: 80, d: 3 }, { x: 80, y: 70, d: 0.5 }, { x: 35, y: 30, d: 4 },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#001a14] overflow-hidden">
      
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
        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>
        <motion.div
            className="absolute inset-y-0 w-[40vw] z-[1] pointer-events-none opacity-10"
            initial={{ left: "-40%" }}
            animate={{ left: "140%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute right-0 h-full w-[1px] bg-[#7ED957] shadow-[0_0_100px_#7ED957]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7ED957]/20 to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-[#022c22]/80 border border-[#7ED957]/30 rounded-full pl-2 pr-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED957] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED957]"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#7ED957] uppercase">Defense Protocols Active</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Core System <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_25px_rgba(126,217,87,0.4)]">
              Capabilities
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Integrated autonomous defense modules designed to identify, analyze, and neutralize biological threats through digital interfaces.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              onClick={() => feature.isInteractive && setActiveModal(feature.modalId)}
              className={`group relative h-full ${feature.isInteractive ? 'cursor-pointer' : ''}`}
            >
              <div className="relative h-full bg-[#022c22]/40 backdrop-blur-md rounded-sm p-8 border border-[#7ED957]/20 transition-all duration-300 hover:bg-[#022c22]/80 hover:border-[#7ED957]/60 group-hover:shadow-[0_0_30px_-10px_rgba(126,217,87,0.3)]">
                
                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />

                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#7ED957]/50 to-transparent top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:top-[120%] z-0 pointer-events-none" style={{ transitionProperty: 'top, opacity', transitionDuration: '1s', transitionTimingFunction: 'ease-in-out' }} />

                {/* Indicator for Interactive Cards */}
                {feature.isInteractive && (
                    <div className="absolute top-4 right-4 text-[#7ED957] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-widest hidden md:block">
                            Access System
                        </span>
                        <Maximize2 className="w-5 h-5 drop-shadow-[0_0_5px_#7ED957]" />
                    </div>
                )}

                <div className="relative w-14 h-14 mb-8 z-10">
                    <div className="absolute inset-0 bg-[#001a14] rounded-md border border-[#7ED957]/30 group-hover:border-[#7ED957] transition-colors duration-300 flex items-center justify-center shadow-lg">
                        <feature.icon className="w-6 h-6 text-[#7ED957] drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]" />
                    </div>
                    <div className="absolute -right-2 -bottom-2 bg-[#022c22] border border-[#7ED957]/30 px-1 py-0.5 rounded-[1px]">
                        <div className="w-1.5 h-1.5 bg-[#7ED957] rounded-full animate-pulse" />
                    </div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#7ED957]/10 pb-3 mb-4">
                    <span className="text-[10px] font-mono text-[#7ED957]/60 tracking-widest uppercase">{feature.code}</span>
                    <div className="flex gap-1">
                       {[...Array(3)].map((_, i) => (
                           <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-[#7ED957] animate-ping' : 'bg-[#7ED957]/20'}`} />
                       ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#7ED957] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed font-light border-l-2 border-[#7ED957]/20 pl-4 group-hover:border-[#7ED957] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setActiveModal(null)}
          >
            {/* 1. MULTI-CAM SURVEILLANCE MODAL */}
            {activeModal === 'surveillance' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-6xl flex flex-col md:flex-row gap-4 bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-4"
              >
                <button onClick={() => setActiveModal(null)} className="absolute -top-12 right-0 z-50 p-2 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Terminate Connection</span><X className="w-5 h-5" />
                </button>

                <div className="relative flex-grow aspect-video bg-black border border-[#7ED957]/30 overflow-hidden">
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
                    <span className="font-mono text-xs font-bold text-red-500 tracking-widest bg-black/50 px-2 py-1 rounded-sm">REC ● CAM_0{activeCamIndex + 1}</span>
                  </div>
                  <video key={activeCamIndex} src={cameras[activeCamIndex]} className="w-full h-full object-cover grayscale-[20%] contrast-125 brightness-90" autoPlay loop muted playsInline />
                </div>

                <div className="w-full md:w-64 flex flex-col gap-4">
                  <div className="border-b border-[#7ED957]/30 pb-2 flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#7ED957]" />
                      <span className="font-mono text-[#7ED957] text-sm tracking-widest uppercase">Select Feed</span>
                  </div>
                  <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0 hide-scrollbar">
                    {cameras.map((cam, index) => (
                      <div key={index} onClick={() => setActiveCamIndex(index)} className={`relative aspect-video border-2 cursor-pointer transition-all duration-300 overflow-hidden min-w-[140px] md:min-w-0 flex-shrink-0 ${activeCamIndex === index ? 'border-[#7ED957] shadow-[0_0_15px_rgba(126,217,87,0.4)]' : 'border-[#7ED957]/20 hover:border-[#7ED957]/60 opacity-60 hover:opacity-100'}`}>
                        <div className="absolute top-1 left-1 z-10 font-mono text-[10px] text-white bg-black/60 px-1 border border-[#7ED957]/30">CAM_0{index + 1}</div>
                        <video src={cam} className="w-full h-full object-cover grayscale-[40%] contrast-150" autoPlay loop muted playsInline />
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
                className="relative w-full max-w-5xl flex flex-col md:flex-row gap-6 bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute -top-12 right-0 z-50 p-2 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Close Forecast</span><X className="w-5 h-5" />
                </button>

                <div className="relative flex-grow bg-[#001a14] border border-[#7ED957]/30 overflow-hidden aspect-square md:aspect-auto min-h-[400px]">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#7ED957 1px, transparent 1px), linear-gradient(90deg, #7ED957 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 6, ease: "linear", repeat: Infinity }} className="absolute w-full h-[2px] bg-[#7ED957] shadow-[0_0_15px_#7ED957] z-20" />
                  
                  <div className="absolute top-[30%] left-[45%] flex flex-col items-center z-10">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping shadow-[0_0_15px_red]" />
                    <span className="text-red-500 font-mono text-[10px] mt-1 bg-black/80 px-1 border border-red-500/50">SEC-A THREAT</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-40">
                    <Target className="w-48 h-48 text-[#7ED957] stroke-1 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-2 h-2 bg-[#7ED957] rounded-full" />
                  </div>
                </div>

                <div className="w-full md:w-80 flex flex-col gap-6">
                  <div className="border-b border-[#7ED957]/30 pb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#7ED957]" />
                    <h3 className="font-mono text-[#7ED957] font-bold tracking-widest uppercase">Forecast Data</h3>
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
                    <div className="font-mono text-[10px] text-gray-400 leading-relaxed flex flex-col gap-1">
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
                className="relative w-full max-w-4xl bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute -top-12 right-0 z-50 p-2 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Disable Firewall View</span><X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6 border-b border-[#7ED957]/30 pb-4">
                  <Shield className="w-8 h-8 text-[#7ED957] animate-pulse" />
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-widest uppercase">Kernel-Level Redaction</h2>
                    <p className="text-xs font-mono text-[#7ED957]/60">BIOMETRIC_MASKING_ACTIVE</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Fake Code / Hex Block */}
                  <div className="bg-black border border-[#7ED957]/20 p-4 h-64 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-[#7ED957]/10 to-transparent animate-[scan_3s_linear_infinite]" />
                    <div className="font-mono text-[10px] leading-tight text-[#7ED957]/40 break-all">
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

            {/* 4. AUTONOMOUS RESPONSE MODAL */}
            {activeModal === 'response' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-4xl bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute -top-12 right-0 z-50 p-2 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Abort Dispatch</span><X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Map Graphic */}
                  <div className="md:col-span-2 relative aspect-video bg-[#001a14] border border-[#7ED957]/30 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    <Crosshair className="w-32 h-32 text-[#7ED957] opacity-20" />
                    
                    {/* Simulated drone moving to target */}
                    <motion.div 
                      initial={{ top: '10%', left: '10%' }}
                      animate={{ top: '45%', left: '45%' }}
                      transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                      className="absolute w-3 h-3 bg-[#7ED957] shadow-[0_0_10px_#7ED957]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                  </div>

                  {/* Sidebar stats */}
                  <div className="flex flex-col gap-4">
                    <div className="border-b border-[#7ED957]/30 pb-2">
                      <h3 className="font-mono text-[#7ED957] font-bold tracking-widest uppercase">Drone Fleet</h3>
                    </div>
                    {[ { unit: 'HUNTER-01', status: 'ENGAGING', color: 'text-red-500' }, { unit: 'SWARM-04', status: 'STANDBY', color: 'text-[#7ED957]' }, { unit: 'SWARM-05', status: 'CHARGING', color: 'text-yellow-400' } ].map((drone, i) => (
                      <div key={i} className="bg-black border border-[#7ED957]/20 p-3 flex justify-between items-center">
                        <span className="font-mono text-xs text-white">{drone.unit}</span>
                        <span className={`font-mono text-[10px] ${drone.color}`}>{drone.status}</span>
                      </div>
                    ))}
                    <button className="mt-auto w-full bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors py-3 font-mono text-xs tracking-widest uppercase font-bold">
                      Authorize Kinetic Strike
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. ENCRYPTED LOGS MODAL */}
            {activeModal === 'logs' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-3xl bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute -top-12 right-0 z-50 p-2 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Close Vault</span><X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6 border-b border-[#7ED957]/30 pb-4">
                  <Server className="w-6 h-6 text-[#7ED957]" />
                  <h2 className="text-xl font-bold text-white tracking-widest uppercase">Private Blockchain Ledger</h2>
                </div>

                <div className="bg-black border border-[#7ED957]/30 p-4 h-80 overflow-y-auto flex flex-col gap-2 hide-scrollbar">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col md:flex-row md:items-center justify-between bg-[#001a14] p-3 border-l-2 border-[#7ED957]">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <Lock className="w-4 h-4 text-gray-500" />
                        <span className="font-mono text-[10px] text-gray-400">BLOCK #{849930 - i}</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#7ED957]/70 break-all md:w-1/2">
                        {Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
                      </span>
                      <span className="font-mono text-[10px] bg-[#7ED957]/20 text-[#7ED957] px-2 py-0.5 mt-2 md:mt-0 self-start md:self-auto">VERIFIED</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 6. LIVE DIAGNOSTICS MODAL */}
            {activeModal === 'diagnostics' && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-4xl bg-[#000a08] border border-[#7ED957]/40 shadow-[0_0_60px_rgba(126,217,87,0.15)] rounded-sm p-6"
              >
                <button onClick={() => setActiveModal(null)} className="absolute -top-12 right-0 z-50 p-2 bg-[#001a14]/80 text-[#7ED957] border border-[#7ED957] hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest hidden md:block">Exit Diagnostics</span><X className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-between mb-6 border-b border-[#7ED957]/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-6 h-6 text-orange-500" />
                    <h2 className="text-xl font-bold text-white tracking-widest uppercase">Thermal Blueprints</h2>
                  </div>
                  <span className="font-mono text-[10px] text-[#7ED957] border border-[#7ED957] px-2 py-1 animate-pulse">LIVE SCAN ACTIVE</span>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  {/* Heatmap Grid */}
                  <div className="col-span-3 grid grid-cols-6 grid-rows-4 gap-1 bg-[#001a14] p-2 border border-[#7ED957]/30">
                    {Array.from({ length: 24 }).map((_, i) => {
                      // Fake "hotspots"
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
                    <div className="bg-black border border-[#7ED957]/20 p-3 flex-grow flex flex-col gap-2">
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

    </section>
  );
}