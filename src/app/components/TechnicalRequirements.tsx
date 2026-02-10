import { motion } from 'motion/react';
import { Wifi, Zap } from 'lucide-react';

export function TechnicalRequirements() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0F2F2A] to-[#1A4D44]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* Wi-Fi requirement */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#2DD4BF]/20 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-[#2DD4BF]" />
            </div>
            <div>
              <div className="text-sm text-[#2DD4BF] font-semibold">Wi-Fi Required</div>
              <div className="text-xs text-white/70">2.4GHz or 5GHz</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/20" />

          {/* Power requirement */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div>
              <div className="text-sm text-[#F59E0B] font-semibold">Power Source</div>
              <div className="text-xs text-white/70">Standard outlet</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/20" />

          {/* Main message */}
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold text-white">Plug & Play Setup</div>
            <div className="text-sm text-white/70">No complex installation required</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
