import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, ShieldCheck, Clock, Leaf, Cpu, Crosshair, X, ChevronRight } from 'lucide-react';

export function About() {
  const [selectedPest, setSelectedPest] = useState<any>(null);

  const pests = [
    { 
      name: 'COCKROACHES', 
      id: 'PEST-01', 
      icon: Bug,
      types: [
        { 
          name: 'German Cockroach', 
          description: 'Small, light brown, commonly found in kitchens and bathrooms.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=GERMAN+ROACH' 
        },
        { 
          name: 'American Cockroach', 
          description: 'Large, reddish-brown, often enters from sewers or drains.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=AMERICAN+ROACH'
        }
      ]
    },
    { 
      name: 'FLYING INSECTS', 
      id: 'PEST-02', 
      description: '(mosquitoes, flies, etc.)', 
      icon: Bug,
      types: [
        { 
          name: 'Aedes Mosquito', 
          description: 'Day-biting mosquito, known carrier of dengue.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=MOSQUITO'
        },
        { 
          name: 'House Fly', 
          description: 'Common fly that spreads bacteria across surfaces.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=HOUSE+FLY'
        },
        { 
          name: 'Fruit Fly', 
          description: 'Tiny flies attracted to ripening or rotting fruit.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=FRUIT+FLY'
        }
      ]
    },
    { 
      name: 'RODENTS', 
      id: 'PEST-03', 
      description: '(mice and rats)', 
      icon: Bug,
      types: [
        { 
          name: 'House Mouse', 
          description: 'Small grey rodent that nests in dark, undisturbed areas.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=MOUSE'
        },
        { 
          name: 'Norway Rat', 
          description: 'Larger, burrows outdoors and enters lower levels of buildings.',
          image: 'https://placehold.co/150x150/001a14/7ED957?text=RAT'
        }
      ]
    } 
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "linear-gradient(to bottom, black, transparent)"
          }}
        />
        <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7ED957]/5 blur-[100px] rounded-full pointer-events-none" />
      </div>
      {/* =============================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Header Section */}
        {/* PERFORMANCE FIX: Removed Framer Motion scroll listeners. Using pure CSS animation for instant text rendering. */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-3 py-1 bg-[#7ED957]/10 border border-[#7ED957]/30 rounded-sm">
            <Cpu className="w-4 h-4 text-[#7ED957]" />
            <span className="font-mono text-xs font-bold tracking-widest text-[#7ED957] uppercase">System Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Introducing <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_15px_rgba(126,217,87,0.3)]">
              PESTIQ
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
          Our AI pest-tracking system works 24/7 to keep your home bug-free. It spots pests instantly and gets rid of them in a safe, environmentally friendly way.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Text & Features */}
          {/* PERFORMANCE FIX: Removed Framer Motion here as well to prevent render-blocking. */}
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Crosshair className="w-6 h-6 text-[#7ED957] shrink-0" />
              Comprehensive AI Management
            </h3>
            <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed font-light border-l-2 border-[#7ED957]/30 pl-4 sm:pl-6 text-sm sm:text-base">
            Project PESTIQ uses AI technology to keep an eye out for pests. We set the system up all around your property so there are no blind spots. Once it's installed, it automatically watches for pests day and night.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* Feature 1 */}
              <div className="group flex flex-col sm:flex-row items-start sm:p-4 p-3 rounded-sm border border-transparent hover:border-[#7ED957]/20 hover:bg-[#7ED957]/5 transition-all duration-300">
                <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mt-1">
                  <div className="w-10 h-10 rounded-sm bg-[#000a08] border border-[#7ED957]/30 flex items-center justify-center shadow-[0_0_15px_rgba(126,217,87,0.1)] group-hover:shadow-[0_0_20px_rgba(126,217,87,0.3)] transition-shadow">
                    <Clock className="h-5 w-5 text-[#7ED957]" />
                  </div>
                </div>
                <div className="sm:ml-5">
                  <h4 className="text-base sm:text-lg font-medium text-white font-mono tracking-wide uppercase mb-1">24/7 Real-Time Detection</h4>
                  <p className="text-sm text-gray-400 font-light">Continuous monitoring and reporting, giving you peace of mind and complete control.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="group flex flex-col sm:flex-row items-start sm:p-4 p-3 rounded-sm border border-transparent hover:border-[#7ED957]/20 hover:bg-[#7ED957]/5 transition-all duration-300">
                <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mt-1">
                  <div className="w-10 h-10 rounded-sm bg-[#000a08] border border-[#7ED957]/30 flex items-center justify-center shadow-[0_0_15px_rgba(126,217,87,0.1)] group-hover:shadow-[0_0_20px_rgba(126,217,87,0.3)] transition-shadow">
                    <Leaf className="h-5 w-5 text-[#7ED957]" />
                  </div>
                </div>
                <div className="sm:ml-5">
                  <h4 className="text-base sm:text-lg font-medium text-white font-mono tracking-wide uppercase mb-1">Eco-Friendly Solution</h4>
                  <p className="text-sm text-gray-400 font-light">Targeted detection means smarter, more environmentally friendly pest control interventions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pest Detection Targets (HUD Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-[#000a08] rounded-sm p-4 sm:p-8 border border-[#7ED957]/40 shadow-[0_0_50px_rgba(126,217,87,0.1)] overflow-hidden"
          >
            {/* HUD Scanning Line Overlay */}
            <motion.div
                className="absolute inset-x-0 h-[2px] bg-[#7ED957]/50 shadow-[0_0_10px_#7ED957] z-0 pointer-events-none"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-[#7ED957]/20 gap-2 sm:gap-0">
                <div className="flex items-center">
                  <ShieldCheck className="h-6 w-6 text-[#7ED957] mr-3 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-widest font-mono uppercase">Target Database</h3>
                </div>
                <span className="text-[10px] text-[#7ED957] font-mono animate-pulse">VIEW DIFFERENT KIND OF PESTS</span>
              </div>
              
              <div className="space-y-4">
                {pests.map((pest, index) => (
                  <motion.div 
                    key={index} 
                    onClick={() => setSelectedPest(pest)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group cursor-pointer flex flex-col sm:flex-row sm:items-center p-4 bg-[#001a14] border border-[#7ED957]/20 hover:border-[#7ED957] hover:bg-[#7ED957]/5 hover:shadow-[0_0_15px_rgba(126,217,87,0.2)] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity" />

                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[#000a08] border border-[#7ED957]/30 flex items-center justify-center text-[#7ED957] mb-3 sm:mb-0 sm:mr-5 relative z-10 group-hover:bg-[#7ED957]/20 transition-colors shrink-0">
                      <pest.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    
                    <div className="relative z-10 flex-grow pr-4 sm:pr-8">
                      <div className="flex flex-wrap items-end gap-2 mb-1">
                        <h4 className="text-sm sm:text-md font-bold text-white font-mono tracking-wider group-hover:text-[#7ED957] transition-colors">{pest.name}</h4>
                        <span className="text-[10px] text-[#7ED957]/60 font-mono pb-[2px]">{pest.id}</span>
                      </div>
                      {pest.description && (
                        <p className="text-[11px] sm:text-xs text-gray-500 font-mono group-hover:text-gray-400 transition-colors">{pest.description}</p>
                      )}
                    </div>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span className="text-[10px] text-[#7ED957] font-mono tracking-widest uppercase hidden md:block">View Data</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ED957]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Corner Bracket Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#7ED957] opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#7ED957] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#7ED957] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#7ED957] opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* ======================= MODAL OVERLAY ======================= */}
      <AnimatePresence>
        {selectedPest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPest(null)} 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#000a08] border border-[#7ED957]/50 shadow-[0_0_50px_rgba(126,217,87,0.15)] rounded-sm overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="bg-[#001a14] border-b border-[#7ED957]/30 p-4 sm:p-5 flex justify-between items-start sm:items-center">
                <div className="flex items-center gap-3">
                  <selectedPest.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#7ED957] shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-widest font-mono uppercase">
                    {selectedPest.name} <span className="text-[#7ED957]/60 text-xs sm:text-sm block sm:inline">TYPES</span>
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedPest(null)}
                  className="text-gray-400 hover:text-[#7ED957] transition-colors p-1"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              {/* Modal Body: List of Types with Images */}
              <div className="p-4 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {selectedPest.types.map((type: any, idx: number) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-[#001a14] border border-[#7ED957]/20 p-3 sm:p-4 rounded-sm hover:border-[#7ED957]/50 transition-colors group">
                    
                    {/* Image Thumbnail */}
                    <div className="flex-shrink-0 w-full sm:w-20 h-32 sm:h-20 rounded-sm overflow-hidden border border-[#7ED957]/30 group-hover:border-[#7ED957] transition-colors">
                      <img 
                        src={type.image} 
                        alt={type.name} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    
                    {/* Text Details */}
                    <div>
                      <h4 className="text-[#7ED957] font-mono font-bold mb-1 text-sm sm:text-base">{type.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* =============================================================== */}
    </section>
  );
}