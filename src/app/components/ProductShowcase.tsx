import { motion } from 'motion/react';
import { Camera, Wifi, Cloud, Zap, Shield, Cpu } from 'lucide-react';

export function ProductShowcase() {
  const specs = [
    { icon: Camera, label: '4K HD', description: 'Ultra-clear imaging' },
    { icon: Cpu, label: 'AI Chip', description: 'On-device processing' },
    { icon: Wifi, label: 'Dual-Band', description: '2.4GHz & 5GHz' },
    { icon: Cloud, label: 'Cloud Storage', description: '30-day history' },
    { icon: Zap, label: 'Night Vision', description: 'IR sensors' },
    { icon: Shield, label: 'Privacy Mode', description: 'Human redaction' }
  ];

  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Product image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#F8FAF9] to-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              {/* Camera visualization */}
              <div className="relative">
                <motion.div
                  animate={{
                    rotateY: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-[#0F2F2A] to-[#1A4D44] rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Camera className="w-32 h-32 text-[#2DD4BF]" />
                </motion.div>

                {/* Floating specs */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#2DD4BF] text-white px-4 py-2 rounded-xl shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-xs font-semibold">4K Ultra HD</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[#F59E0B] text-white px-4 py-2 rounded-xl shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="text-xs font-semibold">AI-Powered</div>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 left-10 w-32 h-32 bg-[#2DD4BF]/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-10 right-10 w-32 h-32 bg-[#F59E0B]/20 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center gap-2 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-[#0F2F2A]">Professional Grade</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2F2A] mb-4">
                PESTIQ AI Camera
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Advanced pest detection technology engineered for hotels, restaurants, and premium properties. 
                Combining 4K clarity with privacy-first AI processing.
              </p>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F8FAF9] rounded-xl p-4 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#2DD4BF] transition-colors duration-300">
                      <spec.icon className="w-5 h-5 text-[#0F2F2A] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F2F2A] text-sm">{spec.label}</div>
                      <div className="text-xs text-[#6B7280]">{spec.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key benefits */}
            <div className="bg-gradient-to-br from-[#0F2F2A] to-[#1A4D44] rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-4">What's Included</h4>
              <ul className="space-y-2">
                {[
                  'Free lifetime software updates',
                  'Free hardware upgrade program',
                  '30-day cloud storage',
                  'Real-time mobile alerts',
                  'Professional installation support'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
