import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, FileText, Lock, ScanLine, CheckCircle, Database, Server } from 'lucide-react';

// --- BACKGROUND HELPER (Reused from Hero for consistency) ---
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

export function Privacy() {
  const blinkers = [
    { x: 10, y: 20, d: 0 }, { x: 80, y: 15, d: 2 }, { x: 50, y: 80, d: 1 },
    { x: 5, y: 60, d: 3 }, { x: 90, y: 50, d: 1.5 },
  ];

  const privacyFeatures = [
    {
      icon: ShieldCheck,
      title: 'No Human ID',
      code: 'ERR_HUMAN_NULL',
      description: 'AI trained exclusively on pest signatures. Human figures are automatically redacted via real-time pixelation protocols.',
    },
    {
      icon: Eye,
      title: 'No Facial Rec',
      code: 'Bio_Scan: FALSE',
      description: 'Zero facial recognition modules installed. We prioritize personal anonymity while maintaining perimeter security.',
    },
    {
      icon: Database,
      title: 'Pest-Only Data',
      code: 'DB_FILTER: ACTIVE',
      description: 'Reports focus solely on biological activity. Personal metadata is never serialized, stored, or transmitted.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="privacy" className="relative py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Base Grid */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)"
          }}
        />

        {/* 2. Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#7ED957]/5 blur-[120px] rounded-full pointer-events-none" />

        {/* 3. Blinking Data Cells */}
        <div className="absolute inset-0 z-0 opacity-20">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* 4. Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>
      {/* ======================= END BACKGROUND ======================= */}


      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* System Badge */}
          <div className="inline-flex items-center gap-3 bg-[#022c22]/80 border border-[#7ED957]/30 rounded-full pl-2 pr-4 py-1.5 mb-8 backdrop-blur-md">
            <Lock className="w-3 h-3 text-[#7ED957]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#7ED957] uppercase">Protocol: Redacted</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Privacy by <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_15px_rgba(126,217,87,0.3)]">
               Design
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Our architecture is built on a "Privacy-First" foundation. <br/>
            We do not process what we do not need.
          </p>
        </motion.div>

        {/* --- Features Grid (HUD Panels) --- */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="h-full bg-[#022c22]/40 backdrop-blur-sm rounded-sm p-8 border border-[#7ED957]/20 relative overflow-hidden hover:border-[#7ED957]/60 transition-colors duration-300">
                
                {/* Hover Scanner Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7ED957]/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-linear pointer-events-none" />
                
                {/* Corner Accents (Tactical Look) */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-[#7ED957] opacity-50 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-[#7ED957] opacity-50 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-[#7ED957] opacity-50 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-[#7ED957] opacity-50 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative w-12 h-12 mb-6 flex items-center justify-center bg-[#001a14] border border-[#7ED957]/30 rounded text-[#7ED957] group-hover:shadow-[0_0_15px_-3px_#7ED957] transition-all">
                    <feature.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                  {feature.title}
                </h3>
                
                {/* Tech Label */}
                <div className="mb-4 text-xs font-mono text-[#7ED957]/60 flex items-center gap-2">
                    <ScanLine className="w-3 h-3" />
                    {feature.code}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed border-l border-[#7ED957]/20 pl-4">
                  {feature.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Compliance / Status Bar (Terminal Style) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 border-t border-[#7ED957]/20 pt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
             {[
                { label: 'End-to-End Encrypted', val: 'AES-256' }, 
                { label: 'GDPR Compliant', val: 'VERIFIED' }, 
                { label: 'Data Retention', val: '0 DAYS' }
             ].map((item, i) => (
               <motion.div 
                 key={i} 
                 className="flex items-center gap-4 group cursor-default"
               >
                 <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7ED957]/10 text-[#7ED957]">
                    <CheckCircle className="w-4 h-4" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#7ED957]/50 uppercase tracking-widest">
                        {item.label}
                    </span>
                    <span className="text-sm font-mono font-bold text-white group-hover:text-[#7ED957] transition-colors">
                        [{item.val}]
                    </span>
                 </div>
               </motion.div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}