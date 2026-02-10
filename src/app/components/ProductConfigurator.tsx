import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Camera, Check, Sparkles, Calendar } from 'lucide-react';

type BillingPeriod = 'monthly' | 'annual';

export function ProductConfigurator() {
  const [selectedDevice] = useState('pestiq-ai-cam');
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [selectedAction, setSelectedAction] = useState<'quote' | 'inquiry' | null>(null);

  const plans = {
    monthly: {
      price: '₱4,999',
      period: 'per month',
      savings: null
    },
    annual: {
      price: '₱49,999',
      period: 'per year',
      savings: 'Save ₱10,000'
    }
  };

  const currentPlan = plans[billingPeriod];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white via-[#F8FAF9] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2F2A] mb-4">
            Build Your System
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Configure your PESTIQ AI solution in three simple steps.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Step 1: Choose Device */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 border-b border-gray-100"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#2DD4BF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-2xl font-semibold text-[#0F2F2A]">Choose Device</h3>
            </div>

            <div className="bg-gradient-to-br from-[#0F2F2A] to-[#1A4D44] rounded-2xl p-8 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/10 rounded-full blur-3xl" />
              
              <div className="relative flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Camera className="w-10 h-10 text-[#2DD4BF]" />
                    <div>
                      <h4 className="text-2xl font-bold text-white">PESTIQ AI Cam</h4>
                      <p className="text-sm text-white/70">Professional Grade</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {[
                      '4K HD Resolution',
                      'AI-Powered Detection',
                      'Night Vision',
                      'Cloud Storage Included',
                      'Real-time Alerts'
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/90">
                        <Check className="w-4 h-4 text-[#2DD4BF]" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Badge className="bg-[#2DD4BF] text-[#0F2F2A] border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Free Hardware Upgrades
                  </Badge>
                </div>

                <div className="w-12 h-12 bg-[#2DD4BF] rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Select Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 border-b border-gray-100"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#2DD4BF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-2xl font-semibold text-[#0F2F2A]">Select Plan</h3>
            </div>

            {/* Billing toggle */}
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center bg-[#F8FAF9] rounded-full p-1 border border-gray-200">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingPeriod === 'monthly'
                      ? 'bg-[#0F2F2A] text-white shadow-lg'
                      : 'text-[#6B7280] hover:text-[#0F2F2A]'
                  }`}
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    billingPeriod === 'annual'
                      ? 'bg-[#0F2F2A] text-white shadow-lg'
                      : 'text-[#6B7280] hover:text-[#0F2F2A]'
                  }`}
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Annual
                  {billingPeriod === 'annual' && (
                    <span className="absolute -top-2 -right-2 bg-[#F59E0B] text-white text-xs px-2 py-0.5 rounded-full">
                      Save
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Pricing display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={billingPeriod}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#F8FAF9] to-white rounded-2xl p-8 border border-gray-200"
              >
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-[#0F2F2A]">{currentPlan.price}</span>
                    <span className="text-lg text-[#6B7280]">{currentPlan.period}</span>
                  </div>
                  
                  {currentPlan.savings && (
                    <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 mt-2">
                      {currentPlan.savings}
                    </Badge>
                  )}

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="inline-flex items-center gap-2 text-sm text-[#6B7280]">
                      <Sparkles className="w-4 h-4 text-[#2DD4BF]" />
                      <span>Free system & hardware upgrades included</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Step 3: Choose Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-gradient-to-br from-[#F8FAF9] to-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#2DD4BF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-2xl font-semibold text-[#0F2F2A]">Choose Action</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Request Quotation & Setup */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedAction('quote')}
                className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  selectedAction === 'quote'
                    ? 'border-[#0F2F2A] bg-[#0F2F2A] text-white shadow-2xl'
                    : 'border-gray-200 bg-white hover:border-[#2DD4BF] hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${
                      selectedAction === 'quote' ? 'text-white' : 'text-[#0F2F2A]'
                    }`}>
                      Request Quotation & Setup
                    </h4>
                    <p className={`text-sm ${
                      selectedAction === 'quote' ? 'text-white/80' : 'text-[#6B7280]'
                    }`}>
                      Get a detailed quote with professional installation service
                    </p>
                  </div>
                  {selectedAction === 'quote' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-[#2DD4BF] rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>

                <ul className={`space-y-2 text-sm ${
                  selectedAction === 'quote' ? 'text-white/90' : 'text-[#6B7280]'
                }`}>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      selectedAction === 'quote' ? 'text-[#2DD4BF]' : 'text-[#0F2F2A]'
                    }`} />
                    Customized pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      selectedAction === 'quote' ? 'text-[#2DD4BF]' : 'text-[#0F2F2A]'
                    }`} />
                    Professional installation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      selectedAction === 'quote' ? 'text-[#2DD4BF]' : 'text-[#0F2F2A]'
                    }`} />
                    Priority support
                  </li>
                </ul>
              </motion.div>

              {/* Inquiry Only */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedAction('inquiry')}
                className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  selectedAction === 'inquiry'
                    ? 'border-[#2DD4BF] bg-[#2DD4BF] text-[#0F2F2A] shadow-2xl'
                    : 'border-gray-200 bg-white hover:border-[#2DD4BF] hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${
                      selectedAction === 'inquiry' ? 'text-[#0F2F2A]' : 'text-[#0F2F2A]'
                    }`}>
                      Inquiry Only
                    </h4>
                    <p className={`text-sm ${
                      selectedAction === 'inquiry' ? 'text-[#0F2F2A]/80' : 'text-[#6B7280]'
                    }`}>
                      Learn more about our solutions and features
                    </p>
                  </div>
                  {selectedAction === 'inquiry' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-[#0F2F2A] rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>

                <ul className={`space-y-2 text-sm ${
                  selectedAction === 'inquiry' ? 'text-[#0F2F2A]/90' : 'text-[#6B7280]'
                }`}>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      selectedAction === 'inquiry' ? 'text-[#0F2F2A]' : 'text-[#2DD4BF]'
                    }`} />
                    Product information
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      selectedAction === 'inquiry' ? 'text-[#0F2F2A]' : 'text-[#2DD4BF]'
                    }`} />
                    Demo request
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${
                      selectedAction === 'inquiry' ? 'text-[#0F2F2A]' : 'text-[#2DD4BF]'
                    }`} />
                    Consultation
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Submit button */}
            <AnimatePresence>
              {selectedAction && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8"
                >
                  <Button
                    size="lg"
                    className={`w-full py-6 text-lg font-semibold shadow-2xl transition-all duration-300 ${
                      selectedAction === 'quote'
                        ? 'bg-[#0F2F2A] hover:bg-[#2DD4BF] text-white hover:text-[#0F2F2A]'
                        : 'bg-[#2DD4BF] hover:bg-[#0F2F2A] text-[#0F2F2A] hover:text-white'
                    }`}
                  >
                    {selectedAction === 'quote' ? 'Submit Quote Request' : 'Submit Inquiry'}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
