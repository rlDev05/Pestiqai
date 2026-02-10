import { motion } from 'motion/react';
import { ShieldCheck, Eye, FileText } from 'lucide-react';

export function Privacy() {
  const privacyFeatures = [
    {
      icon: ShieldCheck,
      title: 'No Human Identification',
      description: 'Our AI is trained exclusively on pest detection. Human figures are automatically excluded from analysis.',
      color: '#2DD4BF'
    },
    {
      icon: Eye,
      title: 'No Facial Recognition',
      description: 'Zero facial recognition technology. We prioritize your privacy while protecting your property.',
      color: '#0F2F2A'
    },
    {
      icon: FileText,
      title: 'Pest-Only Reporting',
      description: 'All reports and alerts focus solely on pest activity. Personal data is never collected or stored.',
      color: '#F59E0B'
    }
  ];

  return (
    <section id="privacy" className="py-24 bg-gradient-to-br from-[#0F2F2A] via-[#1A4D44] to-[#0F2F2A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#2DD4BF]/20 border border-[#2DD4BF]/30 rounded-full px-4 py-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#2DD4BF]" />
            <span className="text-sm font-semibold text-[#2DD4BF]">Privacy-First Technology</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Privacy is Our Priority
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Built with privacy-first architecture that respects your space while protecting it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${feature.color}20`,
                    border: `2px solid ${feature.color}40`
                  }}
                >
                  <feature.icon
                    className="w-8 h-8"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
              <span className="text-sm font-medium">Privacy-First</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
              <span className="text-sm font-medium">Secure by Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
