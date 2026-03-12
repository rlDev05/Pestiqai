import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button'; 
import { Camera, Check, Zap, ArrowRight, User, Mail, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

// --- Animated Background Dots ---
// This creates the little blinking lights in the background
const AnimatedBackgroundDot = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-8 h-8 md:w-12 md:h-12 bg-[#7ED957]/20 border border-[#7ED957]/40 rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay: delay,
      repeatDelay: Math.random() * 5 + 2 
    }}
  />
);

export function ProductConfigurator() {
  const [selectedDevice] = useState('PESTIQ Smart Cam');

  // Information the user types into the form
  const [contactForm, setContactForm] = useState({ 
    name: '', 
    email: '', 
    topic: 'features', 
    message: '' 
  });

  // Track if the form is sending, and if it succeeded or failed
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // Where the blinking dots should appear on the screen
  const backgroundDots = [
    { x: 10, y: 20, delay: 0 }, { x: 90, y: 10, delay: 2 }, { x: 50, y: 90, delay: 1 },
    { x: 20, y: 60, delay: 3 }, { x: 80, y: 50, delay: 0.5 }
  ];

  // Sends the form data to your server
  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus({ type: null, message: '' });

    try {
      // Point this to your new backend subdomain
const response = await fetch('https://api.pestiq.net/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'contact', 
          data: { device: selectedDevice, ...contactForm } 
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({ type: 'success', message: 'Message sent! We will be in touch shortly.' });
        // Clear the form after success
        setContactForm({ name: '', email: '', topic: 'features', message: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmissionStatus({ type: 'error', message: 'Oops! Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#001a14] overflow-hidden">
      
      {/* --- Visual Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.1]" style={{
            backgroundImage: `linear-gradient(to right, #15803d 1px, transparent 1px), linear-gradient(to bottom, #15803d 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)"
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#7ED957]/5 blur-[120px]" />
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
           {backgroundDots.map((dot, index) => <AnimatedBackgroundDot key={index} x={dot.x} y={dot.y} delay={dot.delay} />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- Page Header --- */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <h2 className="text-[#7ED957] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
            Get Started with PESTIQ
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light px-2">
            Learn more about our smart camera or reach out to our team to start protecting your space.
          </p>
        </motion.div>

        {/* --- Main Content Card --- */}
        <div className="bg-[#001a14]/60 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[#7ED957]/20 relative overflow-hidden">
          
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#7ED957]/50 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#7ED957]/50 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#7ED957]/50 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#7ED957]/50 rounded-br-xl" />

          {/* --- Section 1: Product Details --- */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-5 sm:p-6 md:p-8 border-b border-[#7ED957]/10">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
               <div className="w-8 h-8 bg-[#7ED957]/10 text-[#7ED957] rounded-full flex items-center justify-center font-bold text-sm">1</div>
               <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">Product Overview</h3>
             </div>
             
             <div className="group relative bg-[#022c22]/50 border border-[#7ED957]/20 rounded-xl md:rounded-2xl p-5 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#7ED957]/50">
               <div className="absolute top-0 right-0 w-48 h-48 bg-[#7ED957]/5 blur-3xl rounded-full" />
               <div className="relative flex flex-col md:flex-row items-start justify-between gap-6">
                 
                 <div className="flex-1 w-full">
                   <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 md:mb-6">
                     <div className="p-3 bg-[#001a14] w-fit rounded-lg border border-[#7ED957]/30">
                       <Camera className="w-6 h-6 md:w-8 md:h-8 text-[#7ED957]" />
                     </div>
                     <div>
                       <h4 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                         PESTIQ Smart Camera
                       </h4>
                       <p className="text-sm text-[#7ED957]/80 mt-1">Ready to Ship</p>
                     </div>
                   </div>
                   
                   {/* Feature List */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                     {['4K Ultra-HD Video Quality', 'Smart Person & Pest Detection', 'Clear Night Vision', 'Secure Cloud Storage', 'Instant Phone Alerts'].map((feature) => (
                       <div key={feature} className="flex items-start gap-2 text-gray-300">
                         <Check className="w-4 h-4 text-[#7ED957] shrink-0 mt-0.5" />
                         <span className="text-sm">{feature}</span>
                       </div>
                     ))}
                   </div>

                   <div className="inline-flex items-center gap-2 bg-[#7ED957] text-[#001a14] px-3 py-1.5 rounded-md font-bold text-xs uppercase">
                     <Zap className="w-3 h-3 fill-current" /> Everything you need is included
                   </div>
                 </div>

               </div>
             </div>
          </motion.div>

          {/* --- Section 2: Contact Form --- */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="p-5 sm:p-6 md:p-8 bg-[#001a14]/30">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 bg-[#7ED957]/10 text-[#7ED957] rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">Contact Us</h3>
            </div>

            <AnimatePresence mode="wait">
                <motion.form key="contact-form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} onSubmit={submitContactForm} className="space-y-4 bg-[#001a14] p-4 sm:p-6 rounded-xl border border-[#7ED957]/20 max-w-xl mx-auto w-full">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Full Name" icon={<User className="w-4 h-4 text-[#7ED957]" />} value={contactForm.name} onChange={(v: string) => setContactForm({...contactForm, name: v})} placeholder="Jane Doe" />
                    <InputField label="Email Address" icon={<Mail className="w-4 h-4 text-[#7ED957]" />} value={contactForm.email} onChange={(v: string) => setContactForm({...contactForm, email: v})} placeholder="jane@example.com" type="email" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">How can we help?</label>
                    <select value={contactForm.topic} onChange={(e) => setContactForm({...contactForm, topic: e.target.value})} className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] outline-none transition-all">
                      <option value="features">Questions about Features</option>
                      <option value="demo">Book a Demonstration</option>
                      <option value="installation">Help with Installation</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Message</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 pt-2.5 md:pt-3 pointer-events-none"><MessageSquare className="w-4 h-4 text-[#7ED957]" /></div>
                      <textarea required value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] outline-none transition-all resize-none h-24 placeholder:text-gray-500" placeholder="Tell us what you need..." />
                    </div>
                  </div>

                   {/* Success or Error Message Display */}
                   {submissionStatus.message && (
                    <div className={`p-3 rounded border text-sm flex items-center gap-2 ${submissionStatus.type === 'success' ? 'bg-[#7ED957]/10 border-[#7ED957] text-[#7ED957]' : 'bg-red-500/10 border-red-500 text-red-500'}`}>
                        {submissionStatus.type === 'success' ? <Check className="w-4 h-4 shrink-0"/> : <AlertCircle className="w-4 h-4 shrink-0"/>}
                        {submissionStatus.message}
                    </div>
                  )}

                  <Button disabled={isSubmitting} type="submit" className="w-full py-5 md:py-6 mt-4 bg-[#7ED957] text-[#001a14] hover:bg-[#7ED957]/80 disabled:opacity-50 font-bold text-sm tracking-widest uppercase rounded-md transition-all">
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Mail className="w-4 h-4" />}
                      {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </motion.form>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Reusable Input Component ---
interface InputFieldProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}

const InputField = ({ label, icon, value, onChange, placeholder, type = "text" }: InputFieldProps) => (
    <div className="space-y-1 w-full">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</label>
        <div className="relative group w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-[#7ED957]">
                {icon}
            </div>
            <input 
                required
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] outline-none transition-all placeholder:text-gray-500"
                placeholder={placeholder}
            />
        </div>
    </div>
);