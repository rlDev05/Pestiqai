import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Maximize, Moon, Activity, Crosshair, Mic, EyeOff, Smartphone, HardDrive, CheckCircle2 
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF, Float, ContactShadows } from '@react-three/drei';

// --- BACKGROUND HELPER COMPONENT (Matched to Hero theme) ---
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

function ProductModel(props: any) {
  const { scene } = useGLTF('/result.glb'); 
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/result.glb');

export function ProductShowcase() {
  const specs = [
    { icon: Maximize, label: 'Panoramic View', description: '360° visual coverage' },
    { icon: Moon, label: 'IR Night Vision', description: 'Up to 10 m / 33 ft' },
    { icon: Activity, label: 'Motion Detection', description: 'Instant activity alerts' },
    { icon: Crosshair, label: 'Auto-Tracking', description: 'Follows active subjects' },
    { icon: Mic, label: 'Two-Way Talk', description: 'Built-in mic & speaker' },
    { icon: EyeOff, label: 'Sleep Mode', description: 'Privacy protection' },
    { icon: Smartphone, label: 'View Anywhere', description: 'Remote app access' },
    { icon: HardDrive, label: 'Dual Storage', description: 'MicroSD & CloudPlay¹' }
  ];

  const blinkers = [
    { x: 15, y: 25, d: 0 }, { x: 85, y: 15, d: 1.5 }, { x: 50, y: 60, d: 3 },
    { x: 20, y: 75, d: 0.5 }, { x: 75, y: 85, d: 2 }, { x: 90, y: 45, d: 4 },
  ];

  return (
    // Updated background base color to match Hero
    <section id="product" className="relative py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= SHARED BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Base Grid - Matched Hero colors */}
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

        {/* 2. Top Spotlight Glow (Added to tie sections together visually) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7ED957]/10 blur-[120px] rounded-full pointer-events-none" />

        {/* 3. Radar/Sonar Pulse Effect - Tinted for the theme */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
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
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: i * 3.3,
                        ease: "linear"
                    }}
                />
             ))}
        </div>

        {/* 4. Blinking Data Cells */}
        <div className="absolute inset-0 z-0 opacity-30">
           {blinkers.map((b, i) => (
             <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />
           ))}
        </div>

        {/* 5. THE HIGH-TECH SCANNER BAR - Added Noise Overlay */}
        <motion.div
            className="absolute inset-x-0 h-[30vh] z-10 pointer-events-none"
            initial={{ top: "-30%" }}
            animate={{ top: "120%" }}
            transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <div className="absolute bottom-0 w-full h-[2px] bg-[#7ED957] shadow-[0_0_40px_#7ED957,0_0_10px_#ffffff]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7ED957]/5 to-[#7ED957]/20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: 3D Product Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glassmorphism Container - Updated to Hero green-tinted backdrop */}
            <div className="relative bg-[#022c22]/40 backdrop-blur-xl rounded-[3rem] p-8 lg:p-12 shadow-[0_0_80px_-20px_rgba(126,217,87,0.15)] border border-[#7ED957]/30">
              
              <div className="relative z-10">
                {/* 3D Canvas wrapper updated to matrix dark-green tones */}
                <motion.div
                  className="w-full aspect-square mx-auto bg-gradient-to-br from-[#022c22] via-[#001a14] to-[#000a08] rounded-[2.5rem] flex items-center justify-center shadow-inner relative group border border-[#7ED957]/20 overflow-hidden"
                >
                  {/* Subtle grainy overlay for texture */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />

                  {/* Glowing orb behind the 3D model */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7ED957] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* 3D CANVAS */}
                  <div className="relative w-full h-full cursor-grab active:cursor-grabbing z-20">
                    <Suspense fallback={
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-8 h-8 border-2 border-[#7ED957]/30 border-t-[#7ED957] rounded-full animate-spin" />
                        <div className="text-[#7ED957] text-xs font-mono tracking-widest animate-pulse">INITIALIZING OPTICS...</div>
                      </div>
                    }>
                      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
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
                      </Canvas>
                    </Suspense>
                  </div>

                  {/* UI Overlays on the 3D Box */}
                  <div className="absolute top-6 left-6 flex gap-2 z-30 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse shadow-[0_0_10px_#7ED957]" />
                    <div className="w-8 h-1 bg-[#7ED957]/30 rounded-full mt-0.5" />
                  </div>
                  <div className="absolute bottom-6 right-6 text-[10px] font-mono text-[#7ED957] tracking-widest opacity-80 z-30 pointer-events-none">
                    OPTICS-V.4 [ACTIVE]
                  </div>
                </motion.div>

                {/* Floating Badges - Matched to Hero styling */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#022c22]/90 backdrop-blur-xl border border-[#7ED957]/40 text-[#7ED957] px-4 py-2.5 rounded-lg shadow-[0_0_30px_-5px_rgba(126,217,87,0.3)] z-30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ED957] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7ED957]"></span>
                    </span>
                    <div className="text-[11px] font-mono font-bold tracking-wider uppercase">Live AI Stream</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[#001a14]/90 backdrop-blur-xl text-white px-5 py-3 rounded-lg shadow-2xl border border-[#7ED957]/30 border-l-4 border-l-[#7ED957] z-30"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[#7ED957] font-bold uppercase tracking-widest mb-1 opacity-80">Link Status</span>
                    <div className="text-xs font-mono font-semibold">ENCRYPTED 256-BIT</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#022c22]/80 border border-[#7ED957]/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                <Activity className="w-4 h-4 text-[#7ED957]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#7ED957] uppercase">Next Gen Defense</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                PESTIQ <br/>
                {/* Gradient updated to match Hero */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043] drop-shadow-[0_0_25px_rgba(126,217,87,0.4)]">
                  AI OPTICS
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg font-light border-l-2 border-[#7ED957]/30 pl-6">
                Engineered for the future of sanitation. Experience hospital-grade monitoring with military-grade encryption and privacy-first neural processing.
              </p>
            </div>

            {/* Specs Grid - Updated backgrounds to fit theme */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-[#022c22]/30 backdrop-blur-md rounded-xl p-4 border border-[#7ED957]/10 hover:border-[#7ED957]/50 hover:bg-[#022c22]/60 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-[#7ED957]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] transition-all" />
                  
                  <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#001a14] border border-[#7ED957]/20 flex items-center justify-center group-hover:bg-[#7ED957]/10 group-hover:border-[#7ED957] transition-all duration-300 shrink-0 group-hover:shadow-[0_0_15px_rgba(126,217,87,0.4)]">
                      <spec.icon className="w-5 h-5 text-[#7ED957] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-100 text-sm tracking-wide group-hover:text-white transition-colors">{spec.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5 group-hover:text-[#7ED957]/80 transition-colors">{spec.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Card - Updated base colors */}
            <div className="relative bg-[#022c22]/40 rounded-2xl p-8 overflow-hidden border border-[#7ED957]/30 shadow-2xl group backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7ED957]/5 to-transparent opacity-80" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 border-b border-[#7ED957]/20 pb-4">
                  <h4 className="font-bold text-white text-lg tracking-widest">SYSTEM PACKAGE</h4>
                  <div className="px-3 py-1 bg-[#7ED957]/20 border border-[#7ED957]/50 rounded text-[10px] font-black text-[#7ED957] uppercase tracking-widest shadow-[0_0_15px_rgba(126,217,87,0.2)]">Premium</div>
                </div>
                
                <ul className="grid gap-4">
                  {[
                    'Neural Engine Updates (Lifetime)',
                    'Hardware Evolution Program',
                    '30-Day Encrypted Cloud Loop',
                    'Instant Biometric Alerts',
                    'White-Glove Installation'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-sm text-gray-400 group/item hover:text-white transition-colors cursor-default">
                      <div className="bg-[#001a14] rounded-full p-1 border border-[#7ED957]/30 group-hover/item:border-[#7ED957] group-hover/item:bg-[#7ED957]/20 transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7ED957]" />
                      </div>
                      <span className="tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
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