import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('product');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
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
    { id: 'pricing', label: 'Pricing / Plans' },
    { id: 'privacy', label: 'Privacy' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F8FAF9]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-[#0F2F2A] rounded-lg flex items-center justify-center group-hover:bg-[#2DD4BF] transition-colors duration-300">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-semibold text-[#0F2F2A]">PESTIQ AI</span>
          </button>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id ? 'text-[#0F2F2A]' : 'text-[#6B7280] hover:text-[#0F2F2A]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2DD4BF]"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection('pricing')}
              className="border-[#0F2F2A] text-[#0F2F2A] hover:bg-[#0F2F2A] hover:text-white transition-all duration-300"
            >
              Inquiry
            </Button>
            <Button
              onClick={() => scrollToSection('pricing')}
              className="bg-[#0F2F2A] text-white hover:bg-[#2DD4BF] hover:text-[#0F2F2A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
