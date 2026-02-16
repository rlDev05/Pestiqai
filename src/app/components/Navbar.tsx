import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react'; 

// Import your logo here. 
// Note: Adjust the "../" based on exactly where your Navbar.tsx is relative to the styles folder!
import logoImg from "../../styles/images/pestiqlogo.png";

// REMOVED: import { Button } from '@/components/ui/button'; 
// We will use a standard html <button> tag instead to prevent the error.

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('product');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['product', 'features', 'how-it-works', 'pricing', 'privacy'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
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

  const navLinks = [
    { id: 'product', label: 'Product' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#001a14]/80 backdrop-blur-md border-[#7ED957]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* --- Logo Area --- */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            {/* UPDATED: Image Logo */}
            <div className="relative mx-auto w-36 h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logoImg} 
                alt="Pestiq AI Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* --- Center Navigation --- */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm overflow-hidden group ${
                  activeSection === link.id 
                    ? 'text-[#001a14]' 
                    : 'text-gray-400 hover:text-[#7ED957]'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {activeSection === link.id && (
                  <motion.div
                    className="absolute inset-0 bg-[#7ED957]"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                {activeSection !== link.id && (
                    <span className="absolute inset-0 border border-[#7ED957]/0 group-hover:border-[#7ED957]/30 transition-all duration-300 rounded-sm bg-[#7ED957]/0 group-hover:bg-[#7ED957]/5" />
                )}
              </button>
            ))}
          </div>

          {/* --- Right CTAs --- */}
          <div className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-mono text-[#7ED957] hover:text-white transition-colors relative group"
            >
              <span className="mr-2">&gt;</span>
              Inquiry
              <span className="absolute -bottom-1 left-4 w-0 h-[1px] bg-[#7ED957] group-hover:w-[calc(100%-1rem)] transition-all duration-300" />
            </button>

            {/* CHANGED: Replaced <Button> with <button> */}
            <button
              onClick={() => scrollToSection('pricing')}
              className="relative px-6 py-3 bg-transparent border border-[#7ED957]/50 text-[#7ED957] font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-[#7ED957] hover:text-[#001a14] transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Access
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#7ED957] p-2"
              >
                  {mobileMenuOpen ? <X /> : <Menu />}
              </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-[#001a14] border-b border-[#7ED957]/20 overflow-hidden"
            >
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-left text-gray-300 hover:text-[#7ED957] py-3 border-b border-[#7ED957]/10 font-mono text-sm uppercase tracking-widest flex justify-between items-center group"
                        >
                            {link.label}
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#7ED957]" />
                        </button>
                    ))}
                    {/* CHANGED: Replaced <Button> with <button> */}
                    <button className="mt-4 w-full bg-[#7ED957] text-[#001a14] font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-[#68b548] transition-colors">
                        Get Access
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}