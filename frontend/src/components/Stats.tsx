import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Globe2, ArrowUpRight, Users } from 'lucide-react';

function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{value.toLocaleString()}{suffix}</span>;
}

const stats = [
  { target: 150, suffix: '+', prefix: '', label: 'Projects Delivered', sublabel: 'Enterprise & Startup', icon: Building2, bg: '#fde047', text: '#050505', rotate: -1 },
  { target: 40, suffix: '+', prefix: '', label: 'Countries Reached', sublabel: 'Global Deployment', icon: Globe2, bg: '#ff4911', text: '#ffffff', rotate: 2 },
  { target: 98, suffix: '%', prefix: '', label: 'Client Retention', sublabel: 'Year Over Year', icon: ArrowUpRight, bg: '#050505', text: '#fde047', rotate: -2 },
  { target: 500, suffix: 'K+', prefix: '', label: 'Users Impacted', sublabel: 'Across All Products', icon: Users, bg: '#f43f5e', text: '#ffffff', rotate: 1 },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-nb-blue border-b-8 border-nb-text">
      {/* Harsh Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #050505 4px, transparent 4px),
            linear-gradient(to bottom, #050505 4px, transparent 4px)
          `,
          backgroundSize: '64px 64px'
        }}
      ></div>

      {/* Decorative large brutalist star */}
      <div className="absolute -left-20 top-20 opacity-20 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 100 100" className="fill-nb-text">
          <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center mb-24"
        >
          <div className="inline-block bg-white border-4 border-nb-text px-6 py-2 mb-8 shadow-[8px_8px_0_0_var(--color-nb-text)] -rotate-3 hover:translate-x-1 hover:-translate-y-1 transition-transform">
            <span className="text-xl font-bold uppercase tracking-widest text-nb-text font-heading">
              IMPACT
            </span>
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-[6rem] font-black text-white font-heading mb-6 uppercase leading-none drop-shadow-[6px_6px_0_var(--color-nb-text)]" style={{ WebkitTextStroke: '2px var(--color-nb-text)' }}>
            Numbers that define <br /> our <span className="bg-nb-yellow text-nb-text px-2 inline-block rotate-2">Trajectory</span>
          </h2>

          <div className="bg-nb-text text-white p-4 inline-block max-w-xl border-4 border-white rotate-1">
            <p className="font-body text-xl md:text-2xl font-bold uppercase leading-tight">
              Delivering measurable, transformative results for enterprises and startups worldwide.
            </p>
          </div>
        </motion.div>

        {/* Thick irregular brutalist grid for stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: stat.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              className="relative group p-8 flex flex-col items-center justify-center min-h-[300px] border-4 border-nb-text transition-transform duration-200 hover:z-20 hover:scale-105"
              style={{ background: stat.bg, color: stat.text, boxShadow: `12px 12px 0 0 var(--color-nb-text)` }}
            >
              {/* Brutalist screw/bolt details in corners */}
              <div className="absolute top-2 left-2 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center opacity-50"><div className="w-1 h-2 bg-current rotate-45"></div></div>
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center opacity-50"><div className="w-1 h-2 bg-current -rotate-45"></div></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center opacity-50"><div className="w-1 h-2 bg-current rotate-90"></div></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center opacity-50"><div className="w-1 h-2 bg-current"></div></div>

              <div className="relative z-10 text-center w-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-transparent border-4 border-current flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 -rotate-45 group-hover:-rotate-90 transition-transform duration-500" strokeWidth={3} />
                </div>

                <div className="text-6xl sm:text-7xl font-black font-heading mb-4 tracking-tighter uppercase drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
                </div>

                <div className="inline-block bg-current px-3 py-1 mb-2">
                  <div className="text-xl font-black font-heading uppercase tracking-wider" style={{ color: stat.bg }}>
                    {stat.label}
                  </div>
                </div>

                <div className="text-sm font-bold uppercase tracking-widest mt-2 border-t-2 border-current pt-2 opacity-90">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
