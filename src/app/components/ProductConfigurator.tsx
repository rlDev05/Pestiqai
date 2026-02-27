import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button'; 
import { Badge } from './ui/badge';
import { Camera, Check, Sparkles, Zap, ArrowRight, Building2, User, Mail, Phone, MapPin, MessageSquare, Terminal, Shield, Loader2, AlertCircle } from 'lucide-react';

// --- BACKGROUND HELPER ---
const GridBlink = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-12 h-12 bg-[#7ED957]/20 border border-[#7ED957]/40"
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

type BillingPeriod = 'monthly' | 'annual';
type ActionType = 'quote' | 'inquiry' | null;

export function ProductConfigurator() {
  const [selectedDevice] = useState('pestiq-ai-cam');
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [selectedAction, setSelectedAction] = useState<ActionType>(null);

  // Form states
  const [quoteForm, setQuoteForm] = useState({ company: '', contact: '', email: '', phone: '', address: '' });
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', topic: 'specs', message: '' });

  // Status handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // Background blinkers configuration
  const blinkers = [
    { x: 10, y: 20, d: 0 }, { x: 90, y: 10, d: 2 }, { x: 50, y: 90, d: 1 },
    { x: 20, y: 60, d: 3 }, { x: 80, y: 50, d: 0.5 }
  ];

  const plans = {
    monthly: { price: '₱x,xxx', period: 'per month', savings: null },
    annual: { price: '₱xx,xxx', period: 'per year', savings: 'SAVING: ₱xx,xxx' }
  };

  const currentPlan = plans[billingPeriod];

  // --- GENERIC SUBMIT HANDLER --- 
  const handleDataTransmission = async (type: 'quote' | 'inquiry', payload: any) => {
    setIsSubmitting(true);
    setSubmissionStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://localhost:3000/api/send-email', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type, 
          data: { device: selectedDevice, plan: billingPeriod, ...payload } 
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({ type: 'success', message: 'TRANSMISSION ESTABLISHED. DATA SECURED.' });
        // Optional: Reset forms
        if(type === 'quote') setQuoteForm({ company: '', contact: '', email: '', phone: '', address: '' });
        if(type === 'inquiry') setInquiryForm({ name: '', email: '', topic: 'specs', message: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmissionStatus({ type: 'error', message: 'TRANSMISSION FAILED. RETRY PROTOCOL.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDataTransmission('quote', quoteForm);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDataTransmission('inquiry', inquiryForm);
  };

  return (
    <section id="pricing" className="relative py-24 bg-[#001a14] overflow-hidden">
      
      {/* ======================= BACKGROUND THEME ======================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.1]" style={{
            backgroundImage: `linear-gradient(to right, #15803d 1px, transparent 1px), linear-gradient(to bottom, #15803d 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)"
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#7ED957]/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-20">
           {blinkers.map((b, i) => <GridBlink key={i} x={b.x} y={b.y} delay={b.d} />)}
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#022c22] border border-[#7ED957]/30 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_-3px_rgba(126,217,87,0.3)]">
            <Terminal className="w-3 h-3 text-[#7ED957]" />
            <span className="text-xs font-mono font-bold text-[#7ED957] tracking-widest uppercase">Configuration Terminal</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Construct Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ED957] to-[#2ea043]">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Initialize your PESTIQ AI solution. Select hardware parameters, configure protocol frequency, and activate defense.
          </p>
        </motion.div>

        {/* MAIN HUD CONTAINER */}
        <div className="bg-[#001a14]/60 backdrop-blur-md rounded-3xl border border-[#7ED957]/20 relative overflow-hidden">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#7ED957]/50 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#7ED957]/50 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#7ED957]/50 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#7ED957]/50 rounded-br-xl" />

          {/* Step 1: Select Hardware */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-8 border-b border-[#7ED957]/10">
              <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 bg-[#7ED957]/10 border border-[#7ED957]/30 text-[#7ED957] rounded flex items-center justify-center font-mono font-bold text-sm">01</div>
               <h3 className="text-xl font-bold text-white tracking-wide uppercase">Select Hardware</h3>
             </div>
             <div className="group relative bg-[#022c22]/50 border border-[#7ED957]/20 rounded-2xl p-8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#7ED957]/50 hover:shadow-[0_0_30px_-5px_rgba(126,217,87,0.15)]">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ED957]/5 blur-3xl rounded-full" />
               <div className="relative flex flex-col md:flex-row items-start justify-between gap-6">
                 <div className="flex-1">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="p-3 bg-[#001a14] rounded-lg border border-[#7ED957]/30"><Camera className="w-8 h-8 text-[#7ED957]" /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-white tracking-wide">PESTIQ AI Cam <span className="text-[#7ED957] text-xs font-mono border border-[#7ED957]/30 px-1 rounded ml-2">PRO_V3</span></h4>
                       <p className="text-sm text-[#7ED957]/60 font-mono mt-1">STATUS: AVAILABLE // READY_TO_DEPLOY</p>
                     </div>
                   </div>
                   <div className="grid sm:grid-cols-2 gap-3 mb-6">
                     {['4K Neural Resolution', 'Bio-Signature Detection', 'Infrared Night Vision', 'Encrypted Cloud Storage', 'Zero-Latency Alerts'].map((feature) => (
                       <div key={feature} className="flex items-center gap-2 text-gray-400">
                         <Check className="w-3 h-3 text-[#7ED957]" /><span className="text-sm font-light">{feature}</span>
                       </div>
                     ))}
                   </div>
                   <div className="inline-flex items-center gap-2 bg-[#7ED957] text-[#001a14] px-3 py-1 rounded-sm font-bold text-xs tracking-widest uppercase">
                     <Zap className="w-3 h-3 fill-current" /> Hardware Included
                   </div>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-[#7ED957] flex items-center justify-center bg-[#7ED957]/20 shadow-[0_0_15px_rgba(126,217,87,0.4)]"><Check className="w-6 h-6 text-[#7ED957]" /></div>
               </div>
             </div>
          </motion.div>

          {/* Step 2: Configure Protocol */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="p-8 border-b border-[#7ED957]/10">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#7ED957]/10 border border-[#7ED957]/30 text-[#7ED957] rounded flex items-center justify-center font-mono font-bold text-sm">02</div>
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">Configure Protocol</h3>
            </div>
            <div className="flex items-center justify-center mb-10">
              <div className="inline-flex items-center bg-[#001a14] border border-[#7ED957]/20 rounded-full p-1">
                <button onClick={() => setBillingPeriod('monthly')} className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${billingPeriod === 'monthly' ? 'bg-[#7ED957] text-[#001a14] shadow-[0_0_15px_-3px_rgba(126,217,87,0.5)]' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
                <button onClick={() => setBillingPeriod('annual')} className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${billingPeriod === 'annual' ? 'bg-[#7ED957] text-[#001a14] shadow-[0_0_15px_-3px_rgba(126,217,87,0.5)]' : 'text-gray-400 hover:text-white'}`}>Annual {billingPeriod === 'annual' && (<span className="absolute -top-4 -right-4 bg-[#001a14] text-[#7ED957] text-[9px] border border-[#7ED957]/40 font-mono px-2 py-0.5 rounded shadow-sm">-17%</span>)}</button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={billingPeriod} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="bg-gradient-to-b from-[#022c22] to-[#001a14] rounded-2xl p-8 border border-[#7ED957]/20 relative overflow-hidden max-w-lg mx-auto">
                <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-[#7ED957]/30 shadow-[0_0_10px_#7ED957]" animate={{ top: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                <div className="text-center relative z-10">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-mono font-bold text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{currentPlan.price}</span>
                    <span className="text-sm text-[#7ED957]/60 font-mono uppercase">{currentPlan.period}</span>
                  </div>
                  {currentPlan.savings && (<div className="inline-block mt-3 px-4 py-1 rounded bg-[#7ED957]/10 border border-[#7ED957]/30 text-[#7ED957] text-xs font-mono tracking-widest">{currentPlan.savings}</div>)}
                  <div className="mt-8 pt-8 border-t border-dashed border-[#7ED957]/20">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-400">
                      <Sparkles className="w-3 h-3 text-[#7ED957]" /><span>INCLUDES CONTINUOUS OTA FIRMWARE UPGRADES</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Step 3: Initiate Action */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="p-8 bg-[#001a14]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#7ED957]/10 border border-[#7ED957]/30 text-[#7ED957] rounded flex items-center justify-center font-mono font-bold text-sm">03</div>
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">Initiate Action</h3>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Quote Card */}
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={() => setSelectedAction('quote')} className={`relative rounded-xl p-6 border cursor-pointer transition-all duration-300 group ${selectedAction === 'quote' ? 'border-[#7ED957] bg-[#7ED957]/10 shadow-[0_0_20px_-5px_rgba(126,217,87,0.3)]' : 'border-[#7ED957]/10 bg-[#001a14] hover:border-[#7ED957]/50'}`}>
                 <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-lg font-bold mb-1 ${selectedAction === 'quote' ? 'text-[#7ED957]' : 'text-white'}`}>System Installation</h4>
                    <p className="text-xs text-gray-500 font-mono">FULL DEPLOYMENT & CALIBRATION</p>
                  </div>
                  <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${selectedAction === 'quote' ? 'bg-[#7ED957] border-[#7ED957] text-[#001a14]' : 'border-[#7ED957]/30 text-transparent'}`}><Check className="w-3 h-3" /></div>
                </div>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-400"><Shield className="w-3 h-3 text-[#7ED957]" /> Tactical Setup</li>
                </ul>
              </motion.div>

              {/* Inquiry Card */}
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={() => setSelectedAction('inquiry')} className={`relative rounded-xl p-6 border cursor-pointer transition-all duration-300 group ${selectedAction === 'inquiry' ? 'border-[#7ED957] bg-[#7ED957]/10 shadow-[0_0_20px_-5px_rgba(126,217,87,0.3)]' : 'border-[#7ED957]/10 bg-[#001a14] hover:border-[#7ED957]/50'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-lg font-bold mb-1 ${selectedAction === 'inquiry' ? 'text-[#7ED957]' : 'text-white'}`}>Request Intel</h4>
                    <p className="text-xs text-gray-500 font-mono">TECHNICAL SPECS & DATASHEETS</p>
                  </div>
                  <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${selectedAction === 'inquiry' ? 'bg-[#7ED957] border-[#7ED957] text-[#001a14]' : 'border-[#7ED957]/30 text-transparent'}`}><Check className="w-3 h-3" /></div>
                </div>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-400"><MessageSquare className="w-3 h-3 text-[#7ED957]" /> Spec Verification</li>
                </ul>
              </motion.div>
            </div>

            {/* Dynamic Forms */}
            <AnimatePresence mode="wait">
              {selectedAction === 'quote' && (
                <motion.form key="quote-form" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} onSubmit={handleQuoteSubmit} className="space-y-4 bg-[#001a14] p-6 rounded-xl border border-[#7ED957]/20">
                  <h4 className="text-sm font-mono font-bold text-[#7ED957] mb-4 border-b border-[#7ED957]/20 pb-2 uppercase tracking-widest">// Installation Request Data</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Company Name" icon={<Building2 className="w-4 h-4 text-[#7ED957]" />} value={quoteForm.company} onChange={(v:any) => setQuoteForm({...quoteForm, company: v})} placeholder="ACME CORP" />
                    <InputField label="Contact Person" icon={<User className="w-4 h-4 text-[#7ED957]" />} value={quoteForm.contact} onChange={(v:any) => setQuoteForm({...quoteForm, contact: v})} placeholder="OPERATIVE NAME" />
                    <InputField label="Secure Email" icon={<Mail className="w-4 h-4 text-[#7ED957]" />} value={quoteForm.email} onChange={(v:any) => setQuoteForm({...quoteForm, email: v})} placeholder="name@server.com" type="email" />
                    <InputField label="Comms Line" icon={<Phone className="w-4 h-4 text-[#7ED957]" />} value={quoteForm.phone} onChange={(v:any) => setQuoteForm({...quoteForm, phone: v})} placeholder="+63 900 000 0000" type="tel" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#7ED957]/70 uppercase tracking-wider">Target Coordinates / Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none"><MapPin className="w-4 h-4 text-[#7ED957]" /></div>
                      <textarea required value={quoteForm.address} onChange={(e) => setQuoteForm({...quoteForm, address: e.target.value})} className="w-full pl-10 pr-4 py-2 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] focus:ring-1 focus:ring-[#7ED957] outline-none transition-all resize-none h-24 placeholder:text-gray-600 font-mono" placeholder="Enter facility location..." />
                    </div>
                  </div>

                  {/* Feedback Message */}
                  {submissionStatus.message && (
                    <div className={`p-3 rounded border text-xs font-mono flex items-center gap-2 ${submissionStatus.type === 'success' ? 'bg-[#7ED957]/10 border-[#7ED957] text-[#7ED957]' : 'bg-red-500/10 border-red-500 text-red-500'}`}>
                        {submissionStatus.type === 'success' ? <Check className="w-4 h-4"/> : <AlertCircle className="w-4 h-4"/>}
                        {submissionStatus.message}
                    </div>
                  )}

                  <Button disabled={isSubmitting} type="submit" className="w-full py-6 mt-4 bg-[#7ED957] hover:bg-[#6BC945] disabled:bg-[#7ED957]/50 text-[#001a14] font-bold text-sm tracking-widest uppercase rounded-sm transition-all hover:shadow-[0_0_20px_-5px_#7ED957]">
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Zap className="w-4 h-4" />}
                      {isSubmitting ? 'Transmitting...' : 'Initialize Setup'} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </motion.form>
              )}

              {selectedAction === 'inquiry' && (
                <motion.form key="inquiry-form" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} onSubmit={handleInquirySubmit} className="space-y-4 bg-[#001a14] p-6 rounded-xl border border-[#7ED957]/20">
                   <h4 className="text-sm font-mono font-bold text-[#7ED957] mb-4 border-b border-[#7ED957]/20 pb-2 uppercase tracking-widest">// Intel Request</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                     <InputField label="Operative Name" icon={<User className="w-4 h-4 text-[#7ED957]" />} value={inquiryForm.name} onChange={(v:any) => setInquiryForm({...inquiryForm, name: v})} placeholder="NAME" />
                    <InputField label="Comms Email" icon={<Mail className="w-4 h-4 text-[#7ED957]" />} value={inquiryForm.email} onChange={(v:any) => setInquiryForm({...inquiryForm, email: v})} placeholder="email@server.com" type="email" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#7ED957]/70 uppercase tracking-wider">Subject Matter</label>
                    <select value={inquiryForm.topic} onChange={(e) => setInquiryForm({...inquiryForm, topic: e.target.value})} className="w-full px-4 py-2 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] outline-none transition-all font-mono">
                      <option value="specs">Hardware Specifications</option>
                      <option value="demo">Software Demonstration</option>
                      <option value="custom">Custom Integration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-[#7ED957]/70 uppercase tracking-wider">Message Payload</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none"><MessageSquare className="w-4 h-4 text-[#7ED957]" /></div>
                      <textarea required value={inquiryForm.message} onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})} className="w-full pl-10 pr-4 py-2 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] focus:ring-1 focus:ring-[#7ED957] outline-none transition-all resize-none h-24 placeholder:text-gray-600 font-mono" placeholder="Query parameters..." />
                    </div>
                  </div>

                  {/* Feedback Message */}
                   {submissionStatus.message && (
                    <div className={`p-3 rounded border text-xs font-mono flex items-center gap-2 ${submissionStatus.type === 'success' ? 'bg-[#7ED957]/10 border-[#7ED957] text-[#7ED957]' : 'bg-red-500/10 border-red-500 text-red-500'}`}>
                        {submissionStatus.type === 'success' ? <Check className="w-4 h-4"/> : <AlertCircle className="w-4 h-4"/>}
                        {submissionStatus.message}
                    </div>
                  )}

                  <Button disabled={isSubmitting} type="submit" className="w-full py-6 mt-4 bg-transparent border border-[#7ED957] text-[#7ED957] hover:bg-[#7ED957]/10 disabled:opacity-50 font-bold text-sm tracking-widest uppercase rounded-sm transition-all">
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Mail className="w-4 h-4" />}
                      {isSubmitting ? 'UPLOADING...' : 'Transmit Inquiry'} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- HELPER COMPONENT FOR INPUTS ---
const InputField = ({ label, icon, value, onChange, placeholder, type = "text" }: any) => (
    <div className="space-y-1">
        <label className="text-[10px] font-mono font-bold text-[#7ED957]/70 uppercase tracking-wider">{label}</label>
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-focus-within:text-[#7ED957]">
                {icon}
            </div>
            <input 
                required
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#022c22] border border-[#7ED957]/20 rounded text-white text-sm focus:border-[#7ED957] focus:ring-1 focus:ring-[#7ED957] outline-none transition-all placeholder:text-gray-600 font-mono"
                placeholder={placeholder}
            />
        </div>
    </div>
);