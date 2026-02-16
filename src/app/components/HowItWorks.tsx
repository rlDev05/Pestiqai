import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Eye, TrendingUp, Bell, Activity, ChevronRight } from 'lucide-react';

// Data Definition
const STEPS = [
  {
    icon: Camera,
    number: '01',
    title: 'Install AI Camera',
    description: 'Plug-and-play hardware. Mount the optical sensor in your target zone and sync to the neural network via Wi-Fi.',
  },
  {
    icon: Eye,
    number: '02',
    title: 'Active Detection',
    description: 'Computer vision algorithms monitor the environment 24/7, identifying biological signatures in real-time.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Predictive Analytics',
    description: 'Our engine processes behavioral data to forecast infestation vectors before they become critical.',
  },
  {
    icon: Bell,
    number: '04',
    title: 'Instant Intelligence',
    description: 'Receive encrypted, actionable reports and real-time telemetry directly to your command dashboard.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-[#001a14] overflow-hidden border-t border-[#7ED957]/10">
      
      {/* ======================= BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Base Grid (Matched to Hero) */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)"
          }}
        />

        {/* 2. Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#7ED957]/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-[#022c22]/80 border border-[#7ED957]/30 rounded-full pl-2 pr-4 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED957] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED957]"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#7ED957] uppercase">System Architecture</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Autonomous Defense <br /> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_15px_rgba(126,217,87,0.3)]">4 Strategic Steps</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto border-l-2 border-[#7ED957]/20 pl-4"
          >
            Deploy enterprise-grade monitoring without the complexity. 
            Our system handles the data; you handle the decisions.
          </motion.p>
        </div>

        {/* Steps Visualization */}
        <div className="relative">
          
          {/* Connecting Circuit Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-[1px] bg-[#7ED957]/20 z-0">
             {/* Moving Data Packet */}
             <motion.div 
               className="absolute top-1/2 -translate-y-1/2 left-0 w-[150px] h-[3px] bg-gradient-to-r from-transparent via-[#7ED957] to-transparent shadow-[0_0_15px_#7ED957]"
               animate={{ left: ['-10%', '110%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group relative"
              >
                {/* Connection Node (Dot on the line) */}
                <div className="hidden lg:flex absolute top-[40px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#001a14] border border-[#7ED957] rounded-full z-10 items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#7ED957] rounded-full animate-pulse" />
                </div>

                {/* Main Card UI */}
                <div className="relative h-full bg-[#022c22]/40 backdrop-blur-sm border border-[#7ED957]/10 rounded-sm p-6 pt-16 hover:border-[#7ED957]/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(126,217,87,0.15)] group-hover:-translate-y-2">
                  
                  {/* Decorative Tech Corners (HUD Style) */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#7ED957]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#7ED957]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Scan Line Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7ED957]/0 via-[#7ED957]/5 to-[#7ED957]/0 opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className="relative">
                      {/* Hexagon/Box for Icon */}
                      <div className="w-16 h-16 bg-[#001a14] border border-[#7ED957]/30 flex items-center justify-center text-[#7ED957] relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                         {/* Inner Grid Background */}
                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                         <step.icon className="w-7 h-7 relative z-10" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 bg-[#7ED957] text-[#001a14] text-[10px] font-mono font-bold py-1 px-1.5 border border-[#001a14]">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide uppercase">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed border-t border-[#7ED957]/10 pt-4 font-light">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile connecting line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#7ED957]/0 via-[#7ED957]/30 to-[#7ED957]/0 -z-10" />

        </div>
      </div>
    </section>
  );
}