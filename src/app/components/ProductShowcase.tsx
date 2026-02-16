import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Wifi, Cloud, Zap, Shield, Cpu, CheckCircle2 } from 'lucide-react';

// --- BACKGROUND HELPER COMPONENT ---
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

export function ProductShowcase() {
  const specs = [
    { icon: Camera, label: '4K HD', description: 'Ultra-clear imaging' },
    { icon: Cpu, label: 'AI Chip', description: 'On-device processing' },
    { icon: Wifi, label: 'Dual-Band', description: '2.4GHz & 5GHz' },
    { icon: Cloud, label: 'Cloud Storage', description: '30-day history' },
    { icon: Zap, label: 'Night Vision', description: 'IR sensors' },
    { icon: Shield, label: 'Privacy Mode', description: 'Human redaction' }
  ];

  const blinkers = [
    { x: 10, y: 20, d: 0 }, { x: 80, y: 15, d: 1.5 }, { x: 50, y: 50, d: 3 },
    { x: 25, y: 70, d: 0.5 }, { x: 75, y: 80, d: 2 }, { x: 90, y: 40, d: 4 },
  ];

  return (
    <section id="product" className="relative py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= FUTURISTIC SCANNING BACKGROUND ======================= */}
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
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)"
          }}
        />

        {/* 2. Radar/Sonar Pulse Effect */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-[#7ED957]/10 rounded-full"
                    style={{ width: '100px', height: '100px' }}
                    animate={{
                        width: ['100px', '120vw'],
                        height: ['100px', '120vw'],
                        opacity: [0.4, 0],
                        borderWidth: ['1px', '2px']
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                />
             ))}
        </div>

        {/* 3. The "Processing" Data Cells */}
        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* 4. THE HIGH-TECH SCANNER BAR */}
        <motion.div
            className="absolute inset-x-0 h-[30vh] z-10"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Enhanced Product Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-[#022c22]/60 backdrop-blur-md rounded-[3rem] p-12 shadow-[0_0_50px_-10px_rgba(126,217,87,0.1)] border border-[#7ED957]/20">
              
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotateX: [0, 5, 0, -5, 0],
                    rotateY: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="w-72 h-72 mx-auto bg-gradient-to-br from-[#000] via-[#022c22] to-[#000] rounded-[4rem] flex items-center justify-center shadow-[0_0_60px_-10px_rgba(126,217,87,0.2)] relative group border border-[#7ED957]/30"
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-4 rounded-[3.5rem] border border-[#7ED957]/20 opacity-40 pointer-events-none" />
                  <div className="absolute inset-0 rounded-[4rem] opacity-0 group-hover:opacity-40 bg-[#7ED957] blur-[60px] transition-opacity duration-1000" />
                  
                  <div className="relative w-48 h-48 bg-[#000] rounded-full border-[8px] border-[#0a3328] flex items-center justify-center shadow-[inset_0_0_40px_rgba(0,0,0,1)] overflow-hidden">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: 'conic-gradient(from 0deg, transparent, #7ED957, transparent, #7ED957)', backgroundSize: '20% 20%' }}
                    />
                    <div className="relative w-28 h-28 bg-gradient-to-tr from-[#000] to-[#0f3d2e] rounded-full border-2 border-[#7ED957]/50 flex items-center justify-center shadow-2xl">
                      <Camera className="w-14 h-14 text-[#7ED957] relative z-20 drop-shadow-[0_0_15px_#7ED957]" />
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-[2px] bg-[#7ED957] shadow-[0_0_10px_#7ED957] z-30 opacity-80"
                        animate={{ top: ['10%', '90%', '10%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                  <div className="absolute top-8 left-8 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7ED957] animate-pulse" />
                    <div className="w-4 h-1 bg-[#7ED957]/20 rounded-full" />
                  </div>
                  <div className="absolute bottom-8 right-8 text-[8px] font-mono text-[#7ED957] tracking-widest opacity-60">
                    OPTICS-V.4 [ACTIVE]
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-2 bg-[#001a14]/90 backdrop-blur-md border border-[#7ED957]/50 text-[#7ED957] px-4 py-3 rounded-xl shadow-[0_0_20px_-5px_rgba(126,217,87,0.3)] z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#7ED957] animate-ping" />
                    <div className="text-xs font-mono font-bold tracking-tighter uppercase">Live AI Stream</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-2 bg-[#000] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#7ED957]/30 border-l-4 border-l-[#7ED957] z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#7ED957] font-bold uppercase tracking-widest mb-1">Status</span>
                    <div className="text-xs font-mono">ENCRYPTED LINK 256-BIT</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#7ED957]/10 border border-[#7ED957]/40 rounded-sm px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED957] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED957]"></span>
                </span>
                <span className="text-sm font-mono font-bold tracking-wide text-[#7ED957] uppercase">Next Gen Defense</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                PESTIQ <span className="text-[#7ED957] drop-shadow-[0_0_15px_rgba(126,217,87,0.5)]">AI OPTICS</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg font-light">
                Engineered for the future of sanitation. Experience hospital-grade monitoring with military-grade encryption and privacy-first neural processing.
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-[#022c22]/40 backdrop-blur-sm rounded-lg p-4 border border-[#7ED957]/20 hover:border-[#7ED957] shadow-sm hover:shadow-[0_0_20px_-5px_#7ED957] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7ED957]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#001a14] border border-[#7ED957]/30 flex items-center justify-center group-hover:bg-[#7ED957] transition-colors duration-300">
                      <spec.icon className="w-5 h-5 text-[#7ED957] group-hover:text-[#001a14] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm font-mono">{spec.label}</div>
                      <div className="text-xs text-[#7ED957]/70 mt-0.5">{spec.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Card */}
            <div className="relative bg-[#000] rounded-xl p-8 overflow-hidden border border-[#7ED957]/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#000] to-[#022c22] opacity-80" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(126,217,87,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-white text-lg tracking-wide">SYSTEM PACKAGE</h4>
                  <div className="px-3 py-1 bg-[#7ED957] rounded-sm text-[10px] font-black text-[#001a14] uppercase tracking-tighter">Premium</div>
                </div>
                
                <ul className="grid gap-3">
                  {[
                    'Neural Engine Updates (Lifetime)',
                    'Hardware Evolution Program',
                    '30-Day Encrypted Cloud Loop',
                    'Instant Biometric Alerts',
                    'White-Glove Installation'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-400 group">
                      <CheckCircle2 className="w-4 h-4 text-[#7ED957] group-hover:scale-110 transition-transform shadow-[0_0_10px_#7ED957]" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}