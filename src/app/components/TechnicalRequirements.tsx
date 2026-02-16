import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, CheckCircle2 } from 'lucide-react';

// --- BACKGROUND HELPER (Reused from Hero for consistency) ---
const GridBlink = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-12 h-12 bg-[#7ED957]/20 border border-[#7ED957]/40"
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
      repeatDelay: Math.random() * 5 + 5 // Slower blink for this section
    }}
  />
);

export function TechnicalRequirements() {
  // Specific blinker positions for this section
  const blinkers = [
    { x: 10, y: 20, d: 0 }, { x: 90, y: 80, d: 2 }, { x: 50, y: 10, d: 1.5 }
  ];

  return (
    <section className="relative py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= SHARED BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Base Grid (Identical to Hero) */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)"
          }}
        />

        {/* 2. Blinking Data Cells */}
        <div className="absolute inset-0 z-0 opacity-20">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>
      </div>

      {/* ======================= CONTENT ======================= */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header (Optional, adds context) */}
        <div className="text-center mb-12">
            <h2 className="text-[#7ED957] font-mono text-xs tracking-[0.3em] uppercase mb-3">System Specifications</h2>
            <h3 className="text-3xl font-bold text-white">Deployment Requirements</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Glass container: Matches Hero's system badge and HUD aesthetics
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-sm border border-[#7ED957]/30 bg-[#022c22]/60 backdrop-blur-md relative"
        >
            {/* Corner Accents for "Tech" look */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7ED957]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#7ED957]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#7ED957]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7ED957]" />
          
          {/* --- Item 1: Wi-Fi --- */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative group">
              {/* Icon Container */}
              <div className="relative w-16 h-16 bg-[#001a14] border border-[#7ED957]/40 rounded-sm flex items-center justify-center shadow-[0_0_15px_-5px_rgba(126,217,87,0.3)] group-hover:border-[#7ED957] transition-colors duration-300">
                <Wifi className="w-7 h-7 text-[#7ED957]" />
              </div>
            </div>
            <div>
              <div className="text-[#7ED957] font-mono font-bold tracking-widest uppercase text-[10px] mb-1">Connectivity</div>
              <div className="text-xl font-bold text-white">Wi-Fi Network</div>
              <div className="text-sm text-gray-400">2.4GHz / 5GHz band</div>
            </div>
          </div>

          {/* Styled Tech Divider */}
          <div className="w-full h-px md:w-px md:h-20 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#7ED957]/30 to-transparent" />

          {/* --- Item 2: Power --- */}
          <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="relative group">
              <div className="relative w-16 h-16 bg-[#001a14] border border-[#7ED957]/40 rounded-sm flex items-center justify-center shadow-[0_0_15px_-5px_rgba(126,217,87,0.3)] group-hover:border-[#7ED957] transition-colors duration-300">
                <Zap className="w-7 h-7 text-[#7ED957]" />
              </div>
            </div>
            <div>
              <div className="text-[#7ED957] font-mono font-bold tracking-widest uppercase text-[10px] mb-1">Energy Source</div>
              <div className="text-xl font-bold text-white">Standard Output</div>
              <div className="text-sm text-gray-400">110V - 240V AC</div>
            </div>
          </div>

          {/* Styled Tech Divider */}
          <div className="w-full h-px md:w-px md:h-20 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#7ED957]/30 to-transparent" />

          {/* --- Item 3: Plug & Play --- */}
          <div className="flex items-center gap-6 w-full md:w-auto">
             <div className="relative group">
              <div className="relative w-16 h-16 bg-[#001a14] border border-[#7ED957]/40 rounded-sm flex items-center justify-center shadow-[0_0_15px_-5px_rgba(126,217,87,0.3)] group-hover:border-[#7ED957] transition-colors duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#7ED957]" />
              </div>
            </div>
            <div>
              <div className="text-[#7ED957] font-mono font-bold tracking-widest uppercase text-[10px] mb-1">Initialization</div>
              <div className="text-xl font-bold text-white">Plug & Play</div>
              <div className="text-sm text-gray-400">Zero configuration</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}