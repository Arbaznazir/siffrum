import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const featured = {
  name: 'James Mitchell',
  role: 'Chief Executive Officer',
  company: 'TradeCorp',
  text: "SIFFRUM DELIVERED OUR INSTITUTIONAL TRADING PLATFORM 2 WEEKS AHEAD OF SCHEDULE. THEIR ENGINEERING TEAM'S EXPERTISE IN REAL-TIME SYSTEMS WAS EXCEPTIONAL — WE SAW A 40% IMPROVEMENT IN TRADE EXECUTION SPEED.",
  rating: 5,
  color: '#fde047', // Yellow
  title: 'REVENUE SCALED BEAST',
  metric: '$200M+',
  metricLabel: 'DAILY TRANSACTIONS',
};

const others = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'MedTech Inc',
    text: "WORKING WITH SIFFRUM FELT LIKE HAVING A WORLD-CLASS CTO ON RETAINER. THEY ARCHITECTED OUR HEALTH PLATFORM TO SCALE TO 2M+ USERS ACROSS 40 COUNTRIES — SOMETHING WE THOUGHT WOULD TAKE YEARS.",
    rating: 5,
    color: '#0ea5e9', // Blue
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    company: 'ShopFlow',
    text: "FROM DAY ONE, SIFFRUM BROUGHT CLARITY TO AN ENORMOUSLY COMPLEX PROJECT. THEY TRANSFORMED OUR MARKETPLACE CONCEPT INTO A PLATFORM PROCESSING 50K+ DAILY ORDERS. REVENUE GREW 300%.",
    rating: 5,
    color: '#f43f5e', // Pink
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-white border-b-8 border-nb-text">
      {/* Loud background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--color-nb-text) 0, var(--color-nb-text) 2px, transparent 2px, transparent 10px)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <div className="inline-block bg-nb-green text-nb-text border-4 border-nb-text px-6 py-2 mb-8 shadow-[8px_8px_0_0_var(--color-nb-text)] rotate-3 hover:-translate-x-1 hover:-translate-y-1 transition-transform">
            <span className="text-xl font-black uppercase tracking-widest font-heading">
              CLIENT VOICES // EVIDENCE
            </span>
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-black text-nb-text font-heading uppercase leading-[0.85] tracking-tighter">
            TRUSTED BY LEADERS WHO <br />
            <span className="text-white relative inline-block mt-4" style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}>
              DEMAND THE BEST
              {/* Massive underline sweep */}
              <svg className="absolute w-[120%] h-8 -bottom-6 -left-[10%] text-nb-purple" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Featured Large Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="group relative bg-white border-8 border-nb-text p-10 sm:p-14 transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 z-10 hover:z-20 -rotate-1 lg:-rotate-2 lg:mr-4"
            style={{ boxShadow: `16px 16px 0 0 ${featured.color}` }}
          >
            {/* Massive overlapping quote icon */}
            <div className="absolute -top-12 -left-8 bg-nb-text border-4 border-white p-4 shadow-[8px_8px_0_0_var(--color-nb-yellow)] rotate-12">
              <Quote className="w-16 h-16 text-white" strokeWidth={4} />
            </div>

            <div className="relative z-10 flex flex-col h-full mt-4">
              <div className="flex gap-2 mb-8">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-nb-yellow text-nb-text drop-shadow-[2px_2px_0_var(--color-nb-text)]" strokeWidth={2} />
                ))}
              </div>

              <h3 className="text-3xl font-black font-heading uppercase text-nb-text mb-6 inline-block bg-nb-yellow border-4 border-nb-text px-4 py-2 self-start -rotate-2">
                {featured.title}
              </h3>

              <p className="font-heading text-2xl lg:text-3xl font-black text-nb-text leading-[1.1] mb-12 uppercase tracking-wide">
                "{featured.text}"
              </p>

              {/* Metric Callout */}
              <div className="inline-flex items-center gap-4 bg-nb-text text-white border-4 border-nb-yellow p-4 mb-12 self-start rotate-1">
                <span className="text-4xl font-black font-heading text-nb-yellow">{featured.metric}</span>
                <span className="text-lg font-bold uppercase tracking-wider">{featured.metricLabel}</span>
              </div>

              {/* Author Block */}
              <div className="flex items-center gap-6 mt-auto border-t-8 border-nb-text pt-8">
                <div
                  className="w-20 h-20 border-4 border-nb-text flex items-center justify-center text-nb-text font-black font-heading text-4xl shrink-0 shadow-[4px_4px_0_0_var(--color-nb-text)] rotate-6"
                  style={{ background: featured.color }}
                >
                  {featured.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black font-heading text-3xl uppercase text-nb-text">{featured.name}</div>
                  <div className="text-xl font-bold uppercase text-nb-text">{featured.role}</div>
                  <div className="text-lg font-bold bg-nb-text text-white px-2 inline-block mt-1 uppercase">{featured.company}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Stacked Blocks */}
          <div className="flex flex-col gap-12 lg:gap-8 lg:ml-4">
            {others.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, delay: index * 0.1 }}
                className={`group relative bg-white border-8 border-nb-text p-8 transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 z-10 hover:z-20 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                style={{ boxShadow: `12px 12px 0 0 ${item.color}` }}
              >
                <div className="absolute -top-6 -right-6 bg-nb-text border-2 border-white p-2 shadow-[4px_4px_0_0_var(--color-nb-text)] rotate-6">
                  <Quote className="w-8 h-8 text-white" strokeWidth={3} />
                </div>

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-nb-text text-nb-text shadow-[1px_1px_0_var(--color-nb-text)]" strokeWidth={2} />
                  ))}
                </div>

                <p className="font-heading text-xl lg:text-2xl font-black text-nb-text leading-[1.1] mb-8 uppercase">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t-4 border-nb-text pt-6">
                  <div
                    className="w-14 h-14 border-4 border-nb-text flex items-center justify-center text-nb-text font-black font-heading text-2xl shrink-0 shadow-[2px_2px_0_0_var(--color-nb-text)] -rotate-3"
                    style={{ background: item.color }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black font-heading text-2xl uppercase text-nb-text">{item.name}</div>
                    <div className="text-sm font-bold uppercase text-nb-text leading-tight">{item.role}</div>
                    <div className="text-sm font-bold bg-nb-text text-white px-2 inline-block mt-1 uppercase">{item.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
