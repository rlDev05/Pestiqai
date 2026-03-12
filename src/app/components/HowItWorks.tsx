import React from 'react';
import { Camera, Eye, TrendingUp, Bell } from 'lucide-react';

// Data Definition
const STEPS = [
  {
    icon: Camera,
    number: '01',
    title: 'Set Up the Camera',
    description: 'Easy to install. Just mount the camera where you need it and connect it to your Wi-Fi.',
  },
  {
    icon: Eye,
    number: '02',
    title: '24/7 Monitoring',
    description: 'The camera watches the area day and night, instantly spotting pests as soon as they appear.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'See Problems Early',
    description: 'Monitors pest activity to help you predict and prevent future sightings in your vicinity.',
  },
  {
    icon: Bell,
    number: '04',
    title: 'Instant Alerts',
    description: 'Get clear, instant notifications and reports sent straight to your own dashboard so you know exactly what to do.',
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 lg:py-28 bg-[#001a14] overflow-hidden border-t border-[#7ED957]/10">
      
      {/* ======================= BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Grid */}
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

        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] lg:w-[1000px] h-[200px] sm:h-[400px] bg-[#7ED957]/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter animate-[fadeInUp_0.8s_ease-out_both]">
            Smart Pest <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_15px_rgba(126,217,87,0.3)]">
              Protection in 4 Simple Steps.
            </span>
          </h2> 
          
          <p 
            className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto border-l-2 border-[#7ED957]/20 pl-4 sm:pl-6 text-left sm:text-center sm:border-l-0 sm:border-t-2 sm:pt-6 animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '200ms' }}
          >
            Set up a powerful alert system easily. We gather the info, so you can just focus on what to do next.
          </p>
        </div>

        {/* Steps Visualization */}
        <div className="relative">
          
          {/* Connecting Circuit Line (Desktop - 4 cols) */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-[1px] bg-[#7ED957]/20 z-0">
             {/* Moving Data Packet - Now pure CSS */}
             <div className="absolute top-1/2 -translate-y-1/2 w-[150px] h-[3px] bg-gradient-to-r from-transparent via-[#7ED957] to-transparent shadow-[0_0_15px_#7ED957] animate-packet" />
          </div>

          {/* Vertical Connecting Line (Mobile - 1 col) - Hidden on tablet/desktop */}
          <div className="block sm:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#7ED957]/0 via-[#7ED957]/30 to-[#7ED957]/0 -z-10" />

          {/* Responsive Grid: 1 col (Phone), 2 cols (Tablet), 4 cols (Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="group relative animate-[fadeInUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connection Node (Dot on the horizontal line) */}
                <div className="hidden lg:flex absolute top-[40px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#001a14] border border-[#7ED957] rounded-full z-10 items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#7ED957] rounded-full animate-pulse" />
                </div>

                {/* Main Card UI */}
                <div className="relative h-full bg-[#022c22]/40 backdrop-blur-sm border border-[#7ED957]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 pt-12 sm:pt-16 hover:border-[#7ED957]/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(126,217,87,0.15)] lg:group-hover:-translate-y-2">
                  
                  {/* Decorative Tech Corners (HUD Style) */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#7ED957]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-xl" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#7ED957]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl" />

                  {/* Scan Line Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7ED957]/0 via-[#7ED957]/5 to-[#7ED957]/0 opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none rounded-xl sm:rounded-2xl" />

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className="relative">
                      {/* Hexagon/Box for Icon */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#001a14] border border-[#7ED957]/30 flex items-center justify-center text-[#7ED957] relative overflow-hidden group-hover:scale-110 transition-transform duration-300 rounded-lg">
                         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                         <step.icon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 bg-[#7ED957] text-[#001a14] text-[10px] sm:text-xs font-mono font-bold py-1 px-1.5 sm:px-2 border border-[#001a14] shadow-md rounded-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 tracking-wide uppercase">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-[#7ED957]/10 pt-3 sm:pt-4 font-light">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Styles for Pure CSS Performance */}
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
        @keyframes packetMove {
          0% { left: -10%; }
          100% { left: 110%; }
        }
        .animate-packet {
          animation: packetMove 3s linear infinite;
        }
      `}</style>
    </section>
  );
}