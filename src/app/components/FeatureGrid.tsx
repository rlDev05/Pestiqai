import React from 'react';
import { motion } from 'framer-motion';
import { Eye, TrendingUp, ShieldCheck, Activity, Lock, Zap } from 'lucide-react';

// --- BACKGROUND HELPER COMPONENT (Identical to Hero) ---
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

export function FeatureGrid() {
  const features = [
    {
      icon: Eye,
      title: '24/7 SURVEILLANCE',
      code: 'SYS_MONITOR_V1',
      description: 'Continuous optical monitoring with real-time autonomous alerts. Zero latency threat detection protocol.',
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: 'PREDICTIVE NEURAL NET',
      code: 'AI_FORECAST_03',
      description: 'AI-powered algorithms identify infestation vectors and forecast breaches before they manifest physically.',
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: 'PRIVACY FIREWALL',
      code: 'SECURE_LAYER_256',
      description: 'Military-grade redaction. Biological entities (Humans) are masked at the kernel level. Only pests are flagged.',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'AUTONOMOUS RESPONSE',
      code: 'KINETIC_ACT_09',
      description: 'Automated dispatch triggers upon positive identification. Response times reduced by 400% vs human operators.',
      delay: 0.4
    },
    {
      icon: Lock,
      title: 'ENCRYPTED LOGS',
      code: 'SHA_256_VAULT',
      description: 'All infestation data is immutably recorded on a private blockchain ledger for compliance and historical analysis.',
      delay: 0.5
    },
    {
      icon: Activity,
      title: 'LIVE DIAGNOSTICS',
      code: 'BIO_METRIC_SCAN',
      description: 'Real-time heat mapping of structural vulnerabilities. View your perimeter status via the command dashboard.',
      delay: 0.6
    }
  ];

  // Random blinker positions
  const blinkers = [
    { x: 5, y: 15, d: 0 }, { x: 90, y: 10, d: 2 }, { x: 50, y: 50, d: 1 },
    { x: 20, y: 80, d: 3 }, { x: 80, y: 70, d: 0.5 }, { x: 35, y: 30, d: 4 },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= SHARED BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Base Grid (Synced with Hero) */}
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

        {/* 2. Grainy Noise Overlay (Added to match Hero texture) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        {/* 3. Blinking Data Cells */}
        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* 4. Horizontal Ambient Scanner (Background sweep) */}
        <motion.div
            className="absolute inset-y-0 w-[40vw] z-[1] pointer-events-none opacity-10"
            initial={{ left: "-40%" }}
            animate={{ left: "140%" }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }}
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
          {/* Status Badge */}
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
              className="group relative h-full"
            >
              {/* Card Container (HUD Style) */}
              <div className="relative h-full bg-[#022c22]/40 backdrop-blur-md rounded-sm p-8 border border-[#7ED957]/20 transition-all duration-300 hover:bg-[#022c22]/80 hover:border-[#7ED957]/60 group-hover:shadow-[0_0_30px_-10px_rgba(126,217,87,0.3)]">
                
                {/* HUD Corner Accents (Military look) */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#7ED957] opacity-60 group-hover:opacity-100 transition-all duration-300" />

                {/* Animated Scanner Line (On Hover) - Internal Card Scan */}
                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#7ED957]/50 to-transparent top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:top-[120%] z-0 pointer-events-none" style={{ transitionProperty: 'top, opacity', transitionDuration: '1s', transitionTimingFunction: 'ease-in-out' }} />

                {/* Icon Container */}
                <div className="relative w-14 h-14 mb-8 z-10">
                    <div className="absolute inset-0 bg-[#001a14] rounded-md border border-[#7ED957]/30 group-hover:border-[#7ED957] transition-colors duration-300 flex items-center justify-center shadow-lg">
                        <feature.icon className="w-6 h-6 text-[#7ED957] drop-shadow-[0_0_8px_rgba(126,217,87,0.6)]" />
                    </div>
                    {/* Small Decorative Elements around icon */}
                    <div className="absolute -right-2 -bottom-2 bg-[#022c22] border border-[#7ED957]/30 px-1 py-0.5 rounded-[1px]">
                        <div className="w-1.5 h-1.5 bg-[#7ED957] rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Tech Header */}
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
    </section>
  );
}