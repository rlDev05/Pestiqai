import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added Router imports

// Import your logo here. 
import logoImg from "../../styles/images/pestiqlogo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Use React Router hooks for routing and active states
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;

  // We keep the scroll listener just for the glassmorphism blur effect on the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation to use actual URL paths
  const navLinks = [
    { path: '/', label: 'About' },
    { path: '/product', label: 'Product' },
    { path: '/how-it-works', label: 'How It Works' },
  ];

  const handleMobileNav = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

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
          <Link to="/" className="flex items-center gap-3 group">
             <div className="mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logoImg} 
                alt="Pestiq AI Logo"
                className="w-22 h-22 object-contain"
              /> 
            </div>
          </Link>

          {/* --- Center Navigation --- */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm overflow-hidden group ${
                  activePath === link.path 
                    ? 'text-[#001a14]' 
                    : 'text-gray-400 hover:text-[#7ED957]'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {activePath === link.path && (
                  <motion.div
                    className="absolute inset-0 bg-[#7ED957]"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                {activePath !== link.path && (
                    <span className="absolute inset-0 border border-[#7ED957]/0 group-hover:border-[#7ED957]/30 transition-all duration-300 rounded-sm bg-[#7ED957]/0 group-hover:bg-[#7ED957]/5" />
                )}
              </Link>
            ))}
          </div>

          {/* --- Right CTAs --- */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/inquiry" 
              className="text-sm font-mono text-[#7ED957] hover:text-white transition-colors relative group"
            >
              <span className="mr-2">&gt;</span>
              Inquiry
              <span className="absolute -bottom-1 left-2 w-0 h-[1px] bg-[#7ED957] group-hover:w-[calc(100%-1rem)] transition-all duration-300" />
            </Link>
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
                            key={link.path}
                            onClick={() => handleMobileNav(link.path)}
                            className="text-left text-gray-300 hover:text-[#7ED957] py-3 border-b border-[#7ED957]/10 font-mono text-sm uppercase tracking-widest flex justify-between items-center group"
                        >
                            {link.label}
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#7ED957]" />
                        </button>
                    ))}
                    <button 
                      onClick={() => handleMobileNav('/inquiry')}
                      className="mt-4 w-full bg-[#7ED957] text-[#001a14] font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-[#68b548] transition-colors"
                    >
                        Get Access
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}