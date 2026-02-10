import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-[#0F2F2A] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#2DD4BF] rounded-lg flex items-center justify-center">
                <span className="text-[#0F2F2A] font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-semibold">PESTIQ AI</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              AI-powered pest detection for premium properties in NCR, Philippines.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="w-4 h-4 text-[#2DD4BF]" />
              <span>NCR, Philippines Only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Product', 'Features', 'How It Works', 'Pricing', 'Privacy'].map((link) => (
                <li key={link}>
                  <button className="text-sm text-white/70 hover:text-[#2DD4BF] transition-colors duration-200">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#2DD4BF]" />
                <a href="mailto:hello@pestiq.ai" className="hover:text-[#2DD4BF] transition-colors duration-200">
                  hello@pestiq.ai
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#2DD4BF]" />
                <a href="tel:+639123456789" className="hover:text-[#2DD4BF] transition-colors duration-200">
                  +63 912 345 6789
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-white/70 mb-4">
              Get the latest updates on pest protection technology.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#2DD4BF] text-[#0F2F2A] hover:bg-[#14B8A6]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Service area disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-[#F59E0B] mb-1">Service Area Notice</h5>
              <p className="text-sm text-white/70">
                PESTIQ AI currently services NCR (National Capital Region), Philippines only. 
                Expanding to other regions soon.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-y border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
            <span className="text-sm text-white/70">AI-Powered</span>
          </div>
          <div className="w-px h-6 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
            <span className="text-sm text-white/70">Privacy-First</span>
          </div>
          <div className="w-px h-6 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
            <span className="text-sm text-white/70">Secure by Design</span>
          </div>
          <div className="w-px h-6 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2DD4BF] rounded-full" />
            <span className="text-sm text-white/70">Free Upgrades</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-sm text-white/50">
            © 2026 PESTIQ AI. All rights reserved. | Built with privacy & security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
