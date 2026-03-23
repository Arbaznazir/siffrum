import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckSquare } from 'lucide-react';

const benefits = [
  'FREE PROJECT CONSULTATION',
  'DETAILED PROPOSAL IN 48H',
  'FIXED-PRICE OR RETAINER MODELS',
  'NDA & IP PROTECTION INCLUDED',
];

export default function CTA() {
  return (
    <section className="py-36 relative overflow-hidden bg-nb-blue border-t-8 border-b-8 border-nb-text">
      {/* Background raw brutalist grid */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-nb-text) 4px, transparent 4px), linear-gradient(90deg, var(--color-nb-text) 4px, transparent 4px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Massive backdrop warning stripes */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--color-nb-text) 0, var(--color-nb-text) 20px, transparent 20px, transparent 40px)`
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center bg-white p-8 sm:p-12 border-8 border-nb-text shadow-[20px_20px_0_0_var(--color-nb-text)] relative -rotate-1"
        >
          {/* Overlapping Stamp */}
          <div className="absolute -top-8 -left-8 lg:-left-12 rotate-[-15deg] z-20">
            <div className="bg-nb-yellow border-4 border-nb-text px-6 py-2 shadow-[8px_8px_0_0_var(--color-nb-text)] font-heading text-2xl lg:text-3xl font-black uppercase tracking-widest text-nb-text">
              ACCEPTING 2026 PARTNERSHIPS
            </div>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-nb-text font-heading mt-8 mb-10 uppercase leading-[0.85] tracking-tighter" style={{ WebkitTextStroke: '2px var(--color-nb-text)' }}>
            LET'S BUILD SOFTWARE THAT <br />
            <span className="text-nb-pink drop-shadow-[4px_4px_0_var(--color-nb-text)]">
              CRUSHES
            </span> THE COMPETITION
          </h2>

          <div className="bg-nb-green border-4 border-nb-text p-6 shadow-[8px_8px_0_0_var(--color-nb-text)] rotate-2 mb-14 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-heading font-black text-nb-text uppercase leading-snug tracking-wide">
              Share your vision. We'll respond with a brutal strategy, timeline, and transparent pricing in 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 lg:gap-6 mb-16">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 bg-white border-4 border-nb-text px-5 py-3 shadow-[4px_4px_0_0_var(--color-nb-text)] hover:-translate-y-1 transition-transform">
                <CheckSquare className="w-8 h-8 text-nb-blue drop-shadow-[2px_2px_0_var(--color-nb-text)]" strokeWidth={3} />
                <span className="font-heading font-black text-nb-text text-lg uppercase tracking-wider">{b}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group relative z-10 inline-flex items-center justify-center gap-4 px-10 py-6 bg-nb-text text-white font-heading text-3xl font-black uppercase tracking-widest border-4 border-nb-text shadow-[12px_12px_0_0_var(--color-nb-yellow)] hover:shadow-[16px_16px_0_0_var(--color-nb-pink)] hover:-translate-y-2 hover:-translate-x-2 active:translate-x-2 active:translate-y-2 active:shadow-none transition-all w-full sm:w-auto overflow-hidden"
            >
              {/* Button noise overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
              <span className="relative z-10">CONTACT US NOW</span>
              <ArrowRight strokeWidth={5} className="w-10 h-10 relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
