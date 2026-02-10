import { motion } from 'motion/react';
import { Eye, TrendingUp, ShieldCheck } from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: Eye,
      title: '24/7 Detection',
      description: 'Continuous monitoring with real-time alerts. Never miss a pest sighting, day or night.',
      color: '#2DD4BF',
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions identify patterns and forecast potential infestations before they happen.',
      color: '#F59E0B',
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: 'Privacy Shield',
      description: 'Humans are excluded and visually redacted. We detect pests only.',
      color: '#0F2F2A',
      delay: 0.3
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2F2A] mb-4">
            Enterprise-Grade Protection
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Combining AI precision with privacy-first architecture for complete peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-[#F8FAF9] to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    border: `2px solid ${feature.color}30`
                  }}
                >
                  <feature.icon
                    className="w-8 h-8 transition-all duration-300"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#0F2F2A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: feature.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
