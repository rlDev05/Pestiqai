import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, ArrowRight, ShieldCheck, Zap, Lock, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

// Import your logo here. 
// Note: Adjust the "../" based on exactly where your Footer.tsx is relative to the styles folder!
import logoImg from "../../styles/images/pestiqlogo.png";

export function Footer() {
  // --- MODAL STATE ---
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | null }>({ 
    isOpen: false, 
    type: null 
  });

  const openModal = (e: React.MouseEvent, type: 'terms' | 'privacy') => {
    e.preventDefault();
    setModalConfig({ isOpen: true, type });
  };

  const closeModal = () => setModalConfig({ isOpen: false, type: null });

  // Modal content based on what was clicked
  const getModalContent = () => {
    if (modalConfig.type === 'terms') {
      return {
        title: "Terms of Service",
        body: "By accessing the Pestiq AI system, you agree to our operational guidelines. Deployment is currently limited to approved zones. Unauthorized reverse engineering of our neural network parameters or tampering with perimeter hardware is strictly prohibited."
      };
    }
    if (modalConfig.type === 'privacy') {
      return {
        title: "Privacy Policy",
        body: "Your data security is our top priority. Pestiq AI utilizes encryption for all sensor data and perimeter scans. We do not sell your telemetry or property data to third parties. All processing is localized where possible."
      };
    }
    return { title: "", body: "" };
  };

  const modalContent = getModalContent();

  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white border-t border-[#7ED957]/20">
      {/* Background Gradient Mesh - Futuristic touch */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F3D2E] to-[#111111] opacity-90" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section (Span 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* UPDATED: Image Logo replacing the CSS icon and text */}
            <div className="relative w-36 h-auto flex items-center justify-start">
              <img 
                src={logoImg} 
                alt="Pestiq AI Logo" 
                className="w-full h-full object-contain object-left"
              />
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Next-generation pest detection for premium properties. Powered by neural networks, secured by design.
            </p>
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7ED957]/10 border border-[#7ED957]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7ED957] animate-pulse" />
              <span className="text-xs font-medium text-[#7ED957] tracking-wide uppercase">NCR, Philippines Operational</span>
            </div>
          </div>

          {/* Quick Links (Span 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#7ED957] text-sm font-semibold uppercase tracking-wider mb-6">System</h4>
            <ul className="space-y-3">
              {['Product', 'Technology', 'How It Works', 'Enterprise', 'Privacy'].map((link) => (
                <li key={link}>
                  <button className="text-sm text-white/60 hover:text-[#7ED957] hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                   <span className="w-1 h-1 rounded-full bg-[#7ED957] opacity-0 hover:opacity-100 transition-opacity" />
                   {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Span 2 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#7ED957] text-sm font-semibold uppercase tracking-wider mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="group">
                <a href="mailto:pestiqai@gmail.com" className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#7ED957]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#7ED957]" />
                  </div>
                  pestiqai@gmail.com
                </a>
              </li>
              <li className="group">
                <a href="tel:+639123456789" className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#7ED957]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[#7ED957]" />
                  </div>
                  +63 912 345 6789
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter (Span 3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#7ED957] text-sm font-semibold uppercase tracking-wider mb-6">Updates</h4>
            <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
                <div className="bg-[#111111]/80 rounded-xl p-4">
                    <p className="text-xs text-white/50 mb-3">
                    Join the waitlist for perimeter upgrades.
                    </p>
                    <div className="flex flex-col gap-2">
                    <Input
                        type="email"
                        placeholder="Enter access email"
                        className="bg-[#0F3D2E]/50 border-[#7ED957]/20 text-white placeholder:text-white/30 focus:border-[#7ED957] focus:ring-[#7ED957]/20 transition-all h-10 text-sm"
                    />
                    <Button className="w-full bg-[#7ED957] text-[#0F3D2E] hover:bg-[#6BC94A] hover:shadow-[0_0_15px_rgba(126,217,87,0.4)] font-semibold transition-all duration-300">
                        Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Service area disclaimer - Futuristic Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[#0F3D2E]/40 border border-[#7ED957]/30 rounded-lg p-5 mb-10 group"
        >
          {/* Scanning light effect */}
          <div className="absolute top-0 -left-[100%] group-hover:left-[100%] w-full h-full bg-gradient-to-r from-transparent via-[#7ED957]/10 to-transparent transition-all duration-1000 ease-in-out" />
          
          <div className="flex items-start md:items-center flex-col md:flex-row gap-4 relative z-10">
            <div className="p-2 bg-[#7ED957]/10 rounded-md">
                <MapPin className="w-5 h-5 text-[#7ED957]" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-white mb-1 flex items-center gap-2">
                Active Service Zone 
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] animate-pulse" />
              </h5>
              <p className="text-sm text-white/60">
                Deployment currently restricted to <span className="text-[#7ED957] font-medium">National Capital Region (NCR)</span>. Regional expansion protocols initiating soon.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust badges / Status Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-8 border-t border-white/5">
          {[
            { icon: Zap, label: "AI-Powered Analysis" },
            { icon: Lock, label: "Privacy-First Core" },
            { icon: ShieldCheck, label: "Military-Grade Security" },
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
              <badge.icon className="w-4 h-4 text-[#7ED957] opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(126,217,87,0.6)] transition-all" />
              <span className="text-sm text-white/40 group-hover:text-white/80 transition-colors">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-white/30">
            © 2026 PESTIQ AI. <span className="text-[#0F3D2E]">_</span> System Version 2.0
          </p>
          <div className="flex gap-6">
             <a href="#" onClick={(e) => openModal(e, 'terms')} className="text-xs text-white/30 hover:text-[#7ED957] transition-colors">Terms of Service</a>
             <a href="#" onClick={(e) => openModal(e, 'privacy')} className="text-xs text-white/30 hover:text-[#7ED957] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* --- MODAL UI OVERLAY --- */}
      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />
          
          {/* Modal Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-lg bg-[#111111] border border-[#7ED957]/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(126,217,87,0.15)] z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#0F3D2E]/20">
              <h3 className="text-[#7ED957] font-semibold tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {modalContent.title}
              </h3>
              <button 
                onClick={closeModal}
                className="text-white/40 hover:text-white hover:bg-white/5 p-1.5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <p className="text-sm text-white/70 leading-relaxed">
                {modalContent.body}
              </p>
              
              <div className="mt-8 flex justify-end">
                <Button 
                  onClick={closeModal}
                  className="bg-[#7ED957]/10 text-[#7ED957] border border-[#7ED957]/20 hover:bg-[#7ED957] hover:text-[#0F3D2E] transition-all h-9 text-xs font-semibold px-6"
                >
                  Acknowledge
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
}