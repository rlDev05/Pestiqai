import { motion } from 'motion/react';
import { Camera, Eye, TrendingUp, Bell } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      number: '01',
      title: 'Install the AI Camera',
      description: 'Simple plug-and-play setup. Mount the camera in your target area and connect to Wi-Fi.',
      color: '#2DD4BF'
    },
    {
      icon: Eye,
      number: '02',
      title: 'AI Detects Pests 24/7',
      description: 'Our trained AI continuously monitors and identifies pest activity in real-time.',
      color: '#0F2F2A'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'System Predicts Next Sightings',
      description: 'Advanced analytics predict patterns and potential infestation hotspots.',
      color: '#F59E0B'
    },
    {
      icon: Bell,
      number: '04',
      title: 'Receive Reports & Alerts',
      description: 'Get instant notifications and comprehensive reports directly to your dashboard.',
      color: '#2DD4BF'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#F8FAF9] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2F2A] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            From installation to protection in four simple steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#2DD4BF] via-[#0F2F2A] to-[#F59E0B] opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Number badge */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: `${step.color}15`,
                      border: `2px solid ${step.color}30`
                    }}
                  >
                    <step.icon
                      className="w-8 h-8"
                      style={{ color: step.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#0F2F2A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 z-10">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke={step.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
