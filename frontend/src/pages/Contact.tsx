import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, AlertTriangle, Terminal } from 'lucide-react';

const services = [
  'WEAPONIZED WEB PROD',
  'MOBILE DOMINATION',
  'AGGRESSIVE UI/UX',
  'BACKEND SYSTEMS',
  'RAPID MVP FORGE',
  'HOSTILE TAKEOVER (STRATEGY)',
];

const budgets = [
  'BOOTSTRAPPED ($5K)',
  'SERIOUS PLAY ($5K-$15K)',
  'GROWTH PHASE ($15K-$50K)',
  'WAR CHEST ($50K+)',
  'UNDISCLOSED',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Compose Gmail URL with pre-filled data
    const subject = `🚀 NEW CONTACT REQUEST from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
    const body = `
═══════════════════════════════════════════════════
    SIFFRUM CONTACT FORM SUBMISSION
═══════════════════════════════════════════════════

📋 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  👤 Agent Name:    ${formData.name}
  📧 Email:         ${formData.email}
  🏢 Company:       ${formData.company || 'N/A'}
  📞 Phone:         ${formData.phone || 'N/A'}

💼 PROJECT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎯 Service:       ${formData.service}
  💰 Budget:        ${formData.budget || 'Not specified'}

📝 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

═══════════════════════════════════════════════════
Submitted via Siffrum Contact Form
    `.trim();

    // Use mailto: link which works on both desktop and mobile
    // On mobile, it will open the default mail app (Gmail app if set as default)
    // On desktop, it will open the default mail client or Gmail web
    const mailtoUrl = `mailto:contact@siffrum.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.location.href = mailtoUrl;
    
    // Show success message after brief delay
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' });
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'sent') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-nb-blue relative overflow-hidden">
        {/* Radar/Warning Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-nb-text) 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_10px,transparent_10px,transparent_20px)] pointer-events-none z-0"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-nb-yellow border-8 border-nb-text p-12 sm:p-20 shadow-[24px_24px_0_0_var(--color-nb-text)] relative z-10 max-w-3xl text-center"
        >
          {/* Stamp Effect */}
          <div className="absolute top-4 right-4 border-4 border-nb-text text-nb-text font-black font-heading text-xl px-2 rotate-12 opacity-80 mix-blend-multiply">
            TRANSMISSION SECURED
          </div>

          <div className="w-24 h-24 mx-auto bg-nb-pink border-4 border-nb-text flex items-center justify-center mb-8 shadow-[8px_8px_0_0_var(--color-nb-text)] rotate-6">
            <Terminal className="w-12 h-12 text-white" strokeWidth={3} />
          </div>

          <h2 className="text-5xl sm:text-7xl font-black text-nb-text font-heading mb-6 uppercase leading-none tracking-tighter" style={{ WebkitTextStroke: '1px var(--color-nb-text)' }}>
            CONTACT ESTABLISHED
          </h2>

          <p className="text-xl sm:text-2xl font-bold font-heading text-nb-text mb-12 uppercase bg-white p-4 border-4 border-nb-text">
            Your intel has been received by Command. We will respond within 24 hours to initiate strategy.
          </p>

          <button
            onClick={() => setStatus('idle')}
            className="w-full py-6 bg-nb-text text-white border-4 border-nb-text font-black font-heading text-2xl uppercase hover:bg-nb-pink hover:text-nb-text transition-colors duration-0 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] active:translate-x-2 active:translate-y-2 active:shadow-none"
          >
            RETURN TO BASE // NEW MSG
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <div className="bg-[#f0f0f0] overflow-hidden">
      {/* Epic Mind-Blowing Header */}
      <section className="pt-40 pb-20 relative border-b-8 border-nb-text bg-white">
        {/* Warning Tape Background */}
        <div className="absolute top-0 left-0 w-full h-8 bg-nb-yellow border-b-4 border-nb-text flex whitespace-nowrap overflow-hidden">
          <motion.div animate={{ x: [0, -500] }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} className="flex items-center gap-4 py-1">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="font-heading font-black text-nb-text uppercase tracking-widest text-sm flex items-center gap-4">
                <AlertTriangle className="w-4 h-4" /> NO SOFT REQUESTS <AlertTriangle className="w-4 h-4" />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">

          {/* Glitch Overlay Text */}
          <h2 className="text-[12rem] font-black font-heading text-nb-text opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap select-none">
            SECURE LINE
          </h2>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-nb-text px-4 py-2 mb-8 rotate-[-2deg]"
          >
            <span className="text-nb-yellow font-black font-heading text-xl uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-6 h-6" /> COMM-LINK ACTIVE
            </span>
          </motion.div>

          <div className="relative text-center w-full max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[4rem] sm:text-[6.5rem] lg:text-[9rem] font-black font-heading leading-[0.8] uppercase text-white drop-shadow-[8px_8px_0_var(--color-nb-text)] relative z-20"
              style={{ WebkitTextStroke: '3px var(--color-nb-text)' }}
            >
              INITIATE
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[4.5rem] sm:text-[7.5rem] lg:text-[10rem] font-black font-heading leading-[0.8] uppercase text-nb-blue drop-shadow-[12px_12px_0_var(--color-nb-text)] relative z-30 -mt-2 sm:-mt-6 lg:-mt-10 mb-8"
              style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}
            >
              CONTACT
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-nb-pink border-4 border-nb-text p-4 sm:p-6 shadow-[8px_8px_0_0_var(--color-nb-text)] max-w-2xl text-center transform rotate-1 hover:-rotate-1 transition-transform cursor-crosshair"
          >
            <p className="text-2xl font-bold font-heading text-white uppercase leading-snug tracking-wide" style={{ WebkitTextStroke: '1px var(--color-nb-text)' }}>
              Drop the pleasantries. Tell us what you need built, and we'll tell you how we dominate it. Expect a response in 24 hours.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Main Content Areas */}
      <section className="py-24 bg-nb-yellow relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-nb-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-nb-text) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left: Raw Data Info Blocks */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              <h3 className="text-4xl font-black text-nb-text font-heading bg-white inline-block px-4 py-2 border-4 border-nb-text shadow-[6px_6px_0_0_var(--color-nb-text)] mb-8 -rotate-2 uppercase">
                COMMS DATA
              </h3>

              <div className="space-y-6">
                {/* Email Block */}
                <a href="mailto:contact@siffrum.com" className="group block relative">
                  <div className="absolute inset-0 bg-nb-text translate-x-3 translate-y-3"></div>
                  <div className="relative bg-white border-4 border-nb-text p-6 flex flex-col gap-4 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-200">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-nb-blue border-4 border-nb-text flex items-center justify-center rotate-3">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-heading font-black text-xs bg-nb-text text-white px-2 py-1">FREQ: SECURE</span>
                    </div>
                    <div>
                      <p className="font-heading font-black text-gray-500 uppercase text-sm mb-1">DIRECT INBOX</p>
                      <p className="font-heading font-black text-xl text-nb-text sm:text-2xl break-all">CONTACT@SIFFRUM.COM</p>
                    </div>
                  </div>
                </a>

                {/* Phone Block */}
                <a href="tel:+919596760096" className="group block relative">
                  <div className="absolute inset-0 bg-nb-text translate-x-3 translate-y-3"></div>
                  <div className="relative bg-nb-pink border-4 border-nb-text p-6 flex flex-col gap-4 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-200">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white border-4 border-nb-text flex items-center justify-center -rotate-3">
                        <Phone className="w-6 h-6 text-nb-text" />
                      </div>
                      <span className="font-heading font-black text-xs bg-white text-nb-text px-2 py-1">24/7 HOTLINE</span>
                    </div>
                    <div>
                      <p className="font-heading font-black text-white/80 uppercase text-sm mb-1">VOICE PROTOCOL</p>
                      <p className="font-heading font-black text-white text-3xl leading-none" style={{ WebkitTextStroke: '1px var(--color-nb-text)' }}>+91 9596760096</p>
                    </div>
                  </div>
                </a>

                {/* Location Block */}
                <div className="group block relative cursor-crosshair">
                  <div className="absolute inset-0 bg-nb-text translate-x-3 translate-y-3"></div>
                  <div className="relative bg-white border-4 border-nb-text p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-nb-yellow border-4 border-nb-text flex items-center justify-center rotate-6">
                        <MapPin className="w-6 h-6 text-nb-text" />
                      </div>
                      <span className="font-heading font-black text-xs bg-nb-text text-white px-2 py-1">HQ COORDS</span>
                    </div>
                    <div>
                      <p className="font-heading font-black text-gray-500 uppercase text-sm mb-1">PHYSICAL SERVER</p>
                      <p className="font-heading font-black text-2xl text-nb-text">VERACITY HOUSE, RAJBAGH SRINAGAR, J&K, INDIA</p>
                    </div>
                    {/* Faux map visual */}
                    <div className="w-full h-16 border-2 border-nb-text bg-[repeating-linear-gradient(45deg,var(--color-nb-text),var(--color-nb-text)_2px,transparent_2px,transparent_8px)] opacity-50 mt-2"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Aggressive Thick-Bordered Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="bg-[#f0f0f0] border-8 border-nb-text p-8 sm:p-12 shadow-[16px_16px_0_0_var(--color-nb-text)] relative">

                {/* Visual Form Decorators */}
                <div className="absolute top-4 right-8 font-heading font-black text-2xl text-gray-300 pointer-events-none select-none">
                  REC // 00:00
                </div>
                <div className="absolute top-0 left-0 w-32 h-2 bg-nb-pink"></div>

                <h3 className="text-3xl font-black text-nb-text font-heading uppercase mb-10 pb-4 border-b-4 border-nb-text border-dotted inline-block">
                  TRANSMISSION MODULE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                        AGENT NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        placeholder="JOHN DOE"
                        className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text placeholder-gray-400 font-heading focus:outline-none transition-all duration-200 ${activeField === 'name' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                        COMM LINK (EMAIL) *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        placeholder="JOHN@CORP.COM"
                        className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text placeholder-gray-400 font-heading uppercase focus:outline-none transition-all duration-200 ${activeField === 'email' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                        FACTION (COMPANY)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setActiveField('company')}
                        onBlur={() => setActiveField(null)}
                        placeholder="YOUR ORG INC."
                        className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text placeholder-gray-400 font-heading uppercase focus:outline-none transition-all duration-200 ${activeField === 'company' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                        DIRECT LINE (PHONE)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                        placeholder="+1 234 567 890"
                        className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text placeholder-gray-400 font-heading uppercase focus:outline-none transition-all duration-200 ${activeField === 'phone' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Service */}
                    <div className="space-y-2 relative">
                      <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                        OBJECTIVE (SERVICE) *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setActiveField('service')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text font-heading cursor-pointer appearance-none focus:outline-none transition-all duration-200 ${activeField === 'service' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                      >
                        <option value="" disabled>SELECT OBJECTIVE</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 bottom-4 pointer-events-none w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-nb-text border-r-[8px] border-r-transparent"></div>
                    </div>
                    {/* Budget */}
                    <div className="space-y-2 relative">
                      <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                        RESOURCES (BUDGET)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setActiveField('budget')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text font-heading cursor-pointer appearance-none focus:outline-none transition-all duration-200 ${activeField === 'budget' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                      >
                        <option value="" disabled>ALLOCATE FUNDS</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 bottom-4 pointer-events-none w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-nb-text border-r-[8px] border-r-transparent"></div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-heading font-black text-sm uppercase px-2 py-1 bg-nb-text text-white inline-block">
                      INTEL DROP (DETAILS) *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      placeholder="DEPLOY FULL BRIEFING HERE. DO NOT HOLD BACK."
                      className={`w-full px-5 py-4 bg-white border-4 border-nb-text text-xl font-bold text-nb-text placeholder-gray-400 font-heading uppercase focus:outline-none transition-all duration-200 resize-none ${activeField === 'message' ? 'bg-nb-yellow shadow-[6px_6px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-500 border-4 border-nb-text p-4">
                      <p className="text-white font-black font-heading text-xl uppercase">
                        CRITICAL FATAL: TRANSMISSION FAILED. REACH OUT DIRECTLY.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full relative group disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    <div className="absolute inset-0 bg-nb-text transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2 group-active:translate-x-0 group-active:translate-y-0"></div>
                    <div className="relative w-full py-6 bg-nb-blue border-4 border-nb-text flex items-center justify-center gap-4 group-hover:-translate-y-2 group-hover:-translate-x-2 group-active:translate-x-0 group-active:translate-y-0 transition-transform duration-200">
                      {status === 'sending' ? (
                        <>
                          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="text-3xl font-black font-heading text-white uppercase tracking-widest" style={{ WebkitTextStroke: '1px var(--color-nb-text)' }}>UPLOADING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-8 h-8 text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[2px_2px_0_var(--color-nb-text)]" strokeWidth={3} />
                          <span className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-widest drop-shadow-[4px_4px_0_var(--color-nb-text)]">
                            TRANSMIT INTEL
                          </span>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
