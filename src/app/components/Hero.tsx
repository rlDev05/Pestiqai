import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Camera, Shield, Brain } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8FAF9] via-[#F8FAF9] to-[#E8F5F4] overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#0F2F2A]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-full px-4 py-2"
              >
                <div className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#0F2F2A]">AI-Powered Pest Detection</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F2F2A] leading-tight">
                Stop Pests Before They Infest.{' '}
                <span className="text-[#2DD4BF]">Powered by AI.</span>
              </h1>

              <p className="text-lg text-[#6B7280] leading-relaxed">
                Privacy-first AI pest detection for hotels, restaurants, and premium properties in NCR.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={() => scrollToSection('pricing')}
                size="lg"
                className="bg-[#0F2F2A] text-white hover:bg-[#2DD4BF] hover:text-[#0F2F2A] transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-6 text-lg"
              >
                Build Your System
              </Button>
              <Button
                onClick={() => scrollToSection('pricing')}
                size="lg"
                variant="outline"
                className="border-2 border-[#0F2F2A] text-[#0F2F2A] hover:bg-[#0F2F2A] hover:text-white transition-all duration-300 px-8 py-6 text-lg"
              >
                Request Inquiry
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Shield className="w-5 h-5 text-[#2DD4BF]" />
                <span>Privacy-First</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Brain className="w-5 h-5 text-[#2DD4BF]" />
                <span>AI-Trained</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Camera className="w-5 h-5 text-[#2DD4BF]" />
                <span>24/7 Detection</span>
              </div>
            </div>
          </motion.div>

          {/* Right: AI Camera Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#0F2F2A] to-[#1A4D44] rounded-3xl p-8 shadow-2xl">
              {/* Camera device mockup */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Camera body */}
                    <div className="w-48 h-48 bg-gradient-to-br from-[#2DD4BF] to-[#14B8A6] rounded-full flex items-center justify-center shadow-2xl">
                      <Camera className="w-24 h-24 text-white" />
                    </div>

                    {/* Detection overlay effect */}
                    <motion.div
                      className="absolute inset-0 border-4 border-[#F59E0B] rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />

                    {/* AI indicators */}
                    <motion.div
                      className="absolute -top-4 -right-4 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      Pest Detected
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-4 -left-4 bg-[#2DD4BF] text-[#0F2F2A] px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      animate={{ y: [0, 5, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5
                      }}
                    >
                      AI Active
                    </motion.div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-white/70">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-xs text-white/70">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-xs text-white/70">Privacy Risk</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
