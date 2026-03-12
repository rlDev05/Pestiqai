import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Maximize, Moon, Activity, Crosshair, EyeOff, Smartphone, HardDrive, CheckCircle2, Computer 
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF, Float, ContactShadows, Html } from '@react-three/drei';

// --- BACKGROUND HELPER COMPONENT ---
const GridBlink = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-8 h-8 sm:w-16 sm:h-16 bg-[#7ED957]/20 border border-[#7ED957]/40"
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

function ProductModel(props: any) {
  const { scene } = useGLTF('/result.glb'); 
  return <primitive object={scene} {...props} />;
}

// PERFORMANCE FIX: Removed top-level useGLTF.preload() to prevent blocking the initial page load.

export function ProductShowcase() {
  const specs = [
    { icon: Maximize, label: 'Panoramic View', description: '360° visual coverage' },
    { icon: Moon, label: 'IR Night Vision', description: 'Up to 10 m / 33 ft' },
    { icon: Activity, label: 'Motion Detection', description: 'Instant activity alerts' },
    { icon: Crosshair, label: 'Auto-Tracking', description: 'Follows active subjects' },
    { icon: EyeOff, label: 'Sleep Mode', description: 'Privacy protection' },
    { icon: Smartphone, label: 'View Anywhere', description: 'Remote app access' },
    { icon: HardDrive, label: 'Cloud Storage', description: 'CloudPlay' },
    { icon: Computer, label: 'Own System', description: 'Dashboard for viewing' }
  ];

  const blinkers = [
    { x: 15, y: 25, d: 0 }, { x: 85, y: 15, d: 1.5 }, { x: 50, y: 60, d: 3 },
    { x: 20, y: 75, d: 0.5 }, { x: 75, y: 85, d: 2 }, { x: 90, y: 45, d: 4 },
  ];

  return (
    <section id="product" className="relative py-16 sm:py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= SHARED BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #15803d 1px, transparent 1px),
              linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%)"
          }}
        />

        {/* Top Spotlight Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[500px] bg-[#7ED957]/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

        {/* Radar/Sonar Pulse Effect */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden hidden sm:flex">
             {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-[#7ED957]/50 rounded-full"
                    style={{ width: '100px', height: '100px' }}
                    animate={{
                        width: ['100px', '150vw'],
                        height: ['100px', '150vw'],
                        opacity: [0.15, 0],
                        borderWidth: ['1px', '3px']
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: i * 3.3, ease: "linear" }}
                />
             ))}
        </div>

        {/* Blinking Data Cells */}
        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* Scanner Bar */}
        <motion.div
            className="absolute inset-x-0 h-[30vh] z-10 pointer-events-none"
            initial={{ top: "-30%" }}
            animate={{ top: "120%" }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute bottom-0 w-full h-[2px] bg-[#7ED957] shadow-[0_0_40px_#7ED957,0_0_10px_#ffffff]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7ED957]/5 to-[#7ED957]/20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: 3D Product Visualization */}
          {/* PERFORMANCE FIX: Replaced framer-motion with standard div & CSS animation */}
          <div className="relative w-full order-2 xl:order-1 animate-[fadeIn_0.8s_ease-out]">
            {/* Glassmorphism Container */}
            <div className="relative bg-[#022c22]/40 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 lg:p-12 shadow-[0_0_80px_-20px_rgba(126,217,87,0.15)] border border-[#7ED957]/30">
              
              <div className="relative z-10">
                <div className="w-full aspect-square mx-auto bg-gradient-to-br from-[#022c22] via-[#001a14] to-[#000a08] rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center shadow-inner relative group border border-[#7ED957]/20 overflow-hidden">
                  
                  {/* Texture Overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />

                  {/* Glowing Orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7ED957] rounded-full blur-[60px] sm:blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* 3D CANVAS */}
                  {/* PERFORMANCE FIX: Moved Suspense inside the Canvas and used <Html> so R3F handles the fallback properly without crashing or blocking. */}
                  <div className="relative w-full h-full cursor-grab active:cursor-grabbing z-20">
                    <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
                      <Suspense fallback={
                        <Html center>
                          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 whitespace-nowrap">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#7ED957]/30 border-t-[#7ED957] rounded-full animate-spin" />
                            <div className="text-[#7ED957] text-[10px] sm:text-xs font-mono tracking-widest animate-pulse">INITIALIZING OPTICS...</div>
                          </div>
                        </Html>
                      }>
                        <ambientLight intensity={0.2} />
                        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} color="#ffffff" castShadow />
                        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7ED957" />
                        <pointLight position={[0, 10, -10]} intensity={0.5} color="#00ffcc" />
                        
                        <Environment preset="city" />
                        
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                          <ProductModel scale={1.3} />
                        </Float>

                        <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
                        
                        <OrbitControls 
                          enableZoom={false} 
                          autoRotate 
                          autoRotateSpeed={1.5}
                          maxPolarAngle={Math.PI / 1.5}
                          minPolarAngle={Math.PI / 3}
                        />
                      </Suspense>
                    </Canvas>
                  </div>

                  {/* UI Overlays */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex gap-2 z-30 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse shadow-[0_0_10px_#7ED957]" />
                    <div className="w-6 sm:w-8 h-1 bg-[#7ED957]/30 rounded-full mt-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          {/* PERFORMANCE FIX: Replaced framer-motion with standard CSS animation */}
          <div className="space-y-8 sm:space-y-10 order-1 xl:order-2 animate-[fadeIn_0.8s_ease-out]">
            <div className="text-center xl:text-left">
              <div className="inline-flex items-center gap-2 bg-[#022c22]/80 border border-[#7ED957]/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7ED957]" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#7ED957] uppercase">Next Gen Defense</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
                PESTIQ <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_25px_rgba(126,217,87,0.4)]">
                  AI OPTICS
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto xl:mx-0 font-light border-l-2 border-[#7ED957]/30 pl-4 sm:pl-6 text-left">
              PESTIQ operates 24/7, providing real-time detection and reporting, giving you peace of mind and complete control over your pest management process.
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className="group relative bg-[#022c22]/30 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-[#7ED957]/10 hover:border-[#7ED957]/50 hover:bg-[#022c22]/60 transition-all duration-500 overflow-hidden animate-[fadeIn_0.8s_ease-out]"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                >
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-[#7ED957]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] transition-all" />
                  
                  <div className="relative flex items-center gap-3 sm:gap-4 z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#001a14] border border-[#7ED957]/20 flex items-center justify-center group-hover:bg-[#7ED957]/10 group-hover:border-[#7ED957] transition-all duration-300 shrink-0 group-hover:shadow-[0_0_15px_rgba(126,217,87,0.4)]">
                      <spec.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ED957] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-100 text-xs sm:text-sm tracking-wide group-hover:text-white transition-colors">{spec.label}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 group-hover:text-[#7ED957]/80 transition-colors">{spec.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Card */}
            <div className="relative bg-[#022c22]/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 overflow-hidden border border-[#7ED957]/30 shadow-2xl group backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7ED957]/5 to-transparent opacity-80" />
              
              <div className="relative z-10">
                <div className="flex flex-row items-center justify-between mb-6 sm:mb-8 border-b border-[#7ED957]/20 pb-4">
                  <h4 className="font-bold text-white text-base sm:text-lg tracking-widest">SYSTEM PACKAGE</h4>
                  <div className="px-2 py-1 sm:px-3 bg-[#7ED957]/20 border border-[#7ED957]/50 rounded text-[9px] sm:text-[10px] font-black text-[#7ED957] uppercase tracking-widest shadow-[0_0_15px_rgba(126,217,87,0.2)]">Premium</div>
                </div>
                
                <ul className="grid gap-3 sm:gap-4">
                  {[
                    'Neural Engine Updates (Lifetime)',
                    'Hardware Evolution Program',
                    '30-Day Encrypted Cloud Loop',
                    'Instant Biometric Alerts',
                    'White-Glove Installation'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 group/item hover:text-white transition-colors cursor-default">
                      <div className="bg-[#001a14] rounded-full p-1 border border-[#7ED957]/30 group-hover/item:border-[#7ED957] group-hover/item:bg-[#7ED957]/20 transition-all shrink-0">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7ED957]" />
                      </div>
                      <span className="tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}