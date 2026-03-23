import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Zap, ArrowRight, CornerRightDown } from 'lucide-react';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const values = [
  {
    icon: Target,
    title: 'RESULTS OVER EVERYTHING',
    description: "We don't care about trends. We care about shipping code that dominates your market.",
    color: '#0ea5e9' // nb-blue
  },
  {
    icon: Heart,
    title: 'OBSESSIVE CRAFT',
    description: "Every pixel, every endpoint is engineered with psychopathic attention to detail.",
    color: '#fde047' // nb-yellow
  },
  {
    icon: Users,
    title: 'TRENCH PARTNERS',
    description: "We don't build 'for' you. We build 'with' you. Your battles are our battles.",
    color: '#f43f5e' // nb-pink
  },
  {
    icon: Eye,
    title: 'RADICAL HONESTY',
    description: "No sugar-coating. No fake timelines. You get the brutal truth, always.",
    color: '#10b981' // emerald
  },
  {
    icon: Award,
    title: 'UNYIELDING STANDARDS',
    description: "We reject mediocrity. If it's not world-class, it doesn't ship.",
    color: '#a855f7' // purple
  },
  {
    icon: Zap,
    title: 'RAW SPEED',
    description: "Speed is a feature. We move fast, break conventions, and deploy rapidly.",
    color: '#fb923c' // orange
  },
];

const team = [
  { name: 'JOHN DOE', role: 'CHIEF ARCHITECT', initials: 'JD', id: 'OP-01', color: '#fde047' },
  { name: 'JANE SMITH', role: 'HEAD OF ENGINEERING', initials: 'JS', id: 'OP-02', color: '#0ea5e9' },
  { name: 'ALEX WONG', role: 'LEAD DESIGNER', initials: 'AW', id: 'OP-03', color: '#f43f5e' },
  { name: 'SARAH CONNOR', role: 'SYSTEMS OPS', initials: 'SC', id: 'OP-04', color: '#10b981' },
];

export default function About() {
  return (
    <div className="bg-[#f0f0f0] overflow-hidden">

      {/* Epic Header Section */}
      <section className="pt-40 pb-20 relative border-b-8 border-nb-text bg-nb-blue overflow-hidden">
        {/* Repeating background grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(var(--color-nb-text) 2px, transparent 2px), linear-gradient(90deg, var(--color-nb-text) 2px, transparent 2px)', backgroundSize: '64px 64px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="bg-nb-yellow border-8 border-nb-text p-4 shadow-[12px_12px_0_0_var(--color-nb-text)] mb-12 -rotate-3"
          >
            <h2 className="text-3xl font-heading font-black uppercase text-nb-text tracking-widest">
              WARNING: HIGHEST CALIBER TEAM
            </h2>
          </motion.div>

          {/* Massive Stacked Title */}
          <div className="relative text-center w-full max-w-5xl">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black font-heading leading-[0.8] uppercase text-white drop-shadow-[8px_8px_0_var(--color-nb-text)] relative z-20"
              style={{ WebkitTextStroke: '3px var(--color-nb-text)' }}
            >
              WE BUILD
            </motion.h1>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[5rem] sm:text-[7rem] lg:text-[11rem] font-black font-heading leading-[0.8] uppercase text-nb-pink drop-shadow-[12px_12px_0_var(--color-nb-text)] relative z-30 -mt-4 sm:-mt-8 lg:-mt-12"
              style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}
            >
              EMPIRES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/2 left-4 sm:left-12 lg:-left-20 transform -translate-y-1/2 -rotate-90 origin-left text-2xl font-bold font-heading text-nb-text tracking-widest uppercase hidden md:block"
            >
              EST. 2024
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 bg-white border-8 border-nb-text p-8 sm:p-12 max-w-3xl shadow-[16px_16px_0_0_var(--color-nb-text)] relative group"
          >
            <CornerRightDown className="absolute -top-8 -left-8 w-16 h-16 text-nb-text rotate-180" strokeWidth={3} />
            <p className="text-2xl sm:text-3xl font-bold text-nb-text leading-tight uppercase relative z-10">
              We are a privately held strike force of <span className="text-white bg-nb-text px-2 mx-1">engineers, designers, and strategists</span> turning chaotic ideas into world-dominating digital products.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Radical "Why Siffrum" Section */}
      <section className="py-32 relative bg-white border-b-8 border-nb-text">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Chaotic Text Map */}
            <div className="lg:col-span-7 relative">
              <h2 className="text-7xl sm:text-[8rem] font-heading font-black text-nb-text opacity-10 absolute -top-16 -left-8 pointer-events-none select-none">
                GENESIS
              </h2>

              <div className="space-y-8 relative z-10">
                {/* Card 1 */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-nb-yellow border-4 border-nb-text p-6 sm:p-8 shadow-[8px_8px_0_0_var(--color-nb-text)] transform -rotate-1 w-11/12"
                >
                  <span className="font-heading text-xl font-bold bg-nb-text text-white px-3 py-1 mb-4 inline-block uppercase tracking-wider">01 // The Problem</span>
                  <p className="text-xl sm:text-2xl font-bold text-nb-text leading-snug">
                    Siffrum was born from violent frustration. Too many brilliant concepts die because of weak, slow, and uninspired technical execution.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-nb-pink border-4 border-nb-text p-6 sm:p-8 shadow-[8px_8px_0_0_var(--color-nb-text)] transform rotate-1 w-11/12 ml-auto text-white"
                >
                  <span className="font-heading text-xl font-bold bg-white text-nb-text px-3 py-1 mb-4 inline-block uppercase tracking-wider">02 // The Solution</span>
                  <p className="text-xl sm:text-2xl font-bold leading-snug">
                    We changed the game. We combined deep, hardcore engineering with aggressive aesthetic standards. We don't just build MVPs; we forge weapons for startups.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white border-4 border-nb-text p-6 sm:p-8 shadow-[8px_8px_0_0_var(--color-nb-text)] transform -rotate-1 w-11/12"
                >
                  <span className="font-heading text-xl font-bold bg-nb-text text-white px-3 py-1 mb-4 inline-block uppercase tracking-wider">03 // The Promise</span>
                  <p className="text-xl sm:text-2xl font-bold text-nb-text leading-snug">
                    Treat every project like war. Your success is the only metric that matters. Total alignment, total victory.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Graphic Node */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-16 lg:mt-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="relative"
              >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-nb-blue border-8 border-nb-text translate-x-8 translate-y-8"></div>

                {/* Main Image Block */}
                <div className="relative bg-[#f0f0f0] border-8 border-nb-text p-8 w-80 h-80 sm:w-96 sm:h-96 flex flex-col items-center justify-center overflow-hidden group">
                  {/* Radar/Targeting visual mock */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_0,var(--color-nb-text)_100%)]"></div>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-nb-text opacity-30 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 h-full w-1 bg-nb-text opacity-30 transform -translate-x-1/2"></div>
                  <div className="absolute w-64 h-64 border-4 border-nb-text rounded-full opacity-30"></div>
                  <div className="absolute w-48 h-48 border-4 border-nb-text rounded-full opacity-30"></div>
                  <div className="absolute w-32 h-32 border-4 border-dotted border-nb-text rounded-full opacity-50 group-hover:rotate-180 transition-transform duration-[3s] ease-linear"></div>

                  {/* Logo Center */}
                  <img src="/logo.png" alt="Siffrum" className="w-40 relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300 filter grayscale contrast-150" />

                  <div className="absolute bottom-4 right-4 bg-nb-yellow border-2 border-nb-text px-2 py-1 font-heading text-xl font-black">
                    TARGET ACQUIRED
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Breaker */}
      <div className="w-full bg-nb-text py-4 border-b-8 border-white overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex gap-8 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-3xl font-heading font-black text-nb-yellow uppercase tracking-widest">NO COMPROMISES</span>
              <span className="text-3xl font-heading font-black text-white/50">*</span>
              <span className="text-3xl font-heading font-black text-nb-pink uppercase tracking-widest">NO EXCUSES</span>
              <span className="text-3xl font-heading font-black text-white/50">*</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Neon Values Grid */}
      <section className="py-32 bg-nb-blue border-b-8 border-nb-text relative">
        {/* Background noise/pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-nb-text) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="bg-white border-8 border-nb-text p-6 sm:p-8 shadow-[12px_12px_0_0_var(--color-nb-text)] inline-block -rotate-2">
              <span className="text-nb-text font-black font-heading text-2xl uppercase tracking-widest bg-nb-yellow px-2 py-1 mb-4 inline-block">
                DIRECTIVES
              </span>
              <h2 className="text-5xl sm:text-7xl font-black text-nb-text font-heading uppercase leading-none">
                THE CODE <br /> WE LIVE BY
              </h2>
            </div>
            <ArrowRight className="w-24 h-24 text-white hidden md:block" strokeWidth={3} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Harsh Shadow Block */}
                <div className="absolute inset-0 bg-nb-text rounded-none translate-x-4 translate-y-4"></div>

                {/* Main Content Block */}
                <div
                  className="relative p-8 border-8 border-nb-text h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2"
                  style={{ backgroundColor: value.color }}
                >
                  <div className="bg-white border-4 border-nb-text w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0_0_var(--color-nb-text)] rotate-3 group-hover:-rotate-6 transition-transform">
                    <value.icon className="w-8 h-8 text-nb-text" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-3xl font-black text-nb-text mb-4 font-heading uppercase tracking-wide leading-tight" style={{ WebkitTextStroke: '0.5px var(--color-nb-text)' }}>
                    {value.title}
                  </h3>

                  <p className="text-xl font-bold text-nb-text leading-snug mt-auto bg-white/60 p-4 border-2 border-nb-text mix-blend-hard-light">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggressive Team Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-nb-text -translate-y-1/2 hidden md:block z-0"></div>
            <div className="inline-block bg-nb-pink border-8 border-nb-text px-8 py-6 shadow-[12px_12px_0_0_var(--color-nb-text)] relative z-10 rotate-1 hover:-rotate-1 transition-transform cursor-crosshair">
              <h2 className="text-6xl sm:text-8xl font-black text-white font-heading uppercase leading-none tracking-tighter" style={{ WebkitTextStroke: '2px var(--color-nb-text)' }}>
                OPERATIVES
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-crosshair relative"
              >
                {/* ID Badge Container */}
                <div className="bg-[#f0f0f0] border-8 border-nb-text shadow-[12px_12px_0_0_var(--color-nb-text)] transition-transform duration-300 group-hover:-translate-y-4 flex flex-col items-center p-6 relative z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_100%)] bg-[length:20px_20px]">

                  {/* Badge Clip (Visual only) */}
                  <div className="w-16 h-6 border-4 border-b-0 border-nb-text absolute -top-10 bg-gray-300 rounded-t-lg shadow-inner"></div>
                  <div className="w-4 h-4 rounded-full bg-nb-text absolute -top-5"></div>

                  {/* ID Header */}
                  <div className="w-full flex justify-between items-center mb-6 border-b-4 border-nb-text pb-2">
                    <span className="font-heading font-black text-xl bg-nb-text text-white px-2">ID: {member.id}</span>
                    <span className="font-heading font-black text-xl text-nb-text">ACCESS: MAX</span>
                  </div>

                  {/* Avatar Block */}
                  <div
                    className="w-full aspect-square border-4 border-nb-text flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform"
                    style={{ backgroundColor: member.color }}
                  >
                    {/* Scanlines effect */}
                    <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,var(--color-nb-text)_2px,var(--color-nb-text)_4px)]"></div>

                    <span className="text-7xl font-black text-white font-heading mix-blend-overlay drop-shadow-lg" style={{ WebkitTextStroke: '2px var(--color-nb-text)' }}>
                      {member.initials}
                    </span>

                    {/* Targeting reticle on hover */}
                    <div className="absolute inset-0 border-4 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity scale-150 group-hover:scale-90 duration-300 m-4 pointer-events-none flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className="w-full bg-white border-4 border-nb-text p-4 text-center">
                    <h3 className="text-2xl font-black text-nb-text font-heading uppercase mb-1">
                      {member.name}
                    </h3>
                    <div className="h-1 w-full bg-nb-text my-2"></div>
                    <p className="text-lg font-bold text-gray-500 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  {/* Barcode Mock */}
                  <div className="w-full h-12 mt-6 opacity-60 bg-[repeating-linear-gradient(90deg,var(--color-nb-text),var(--color-nb-text)_2px,transparent_2px,transparent_6px,var(--color-nb-text)_6px,var(--color-nb-text)_10px,transparent_10px,transparent_12px)]"></div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse the newly brutalized components */}
      <Stats />
      <CTA />
    </div>
  );
}
