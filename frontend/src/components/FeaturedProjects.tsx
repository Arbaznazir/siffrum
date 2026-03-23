import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, TrendingUp, Zap } from 'lucide-react';
import { getFeaturedProjects } from '../lib/api';

const showcaseProjects = [
  {
    id: 1,
    num: '01',
    title: 'FinTech Trading Platform',
    client: 'TradeCorp',
    description: 'Real-time institutional trading dashboard processing $200M+ in daily transactions with sub-millisecond latency and AI-powered risk analysis.',
    impact: '40% faster execution',
    impactIcon: Zap,
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js', 'AWS'],
    bg: '#0ea5e9', // Siffrum neon blue roughly
    category: 'Enterprise Platform',
  },
  {
    id: 2,
    num: '02',
    title: 'HealthSync Mobile',
    client: 'MedTech Inc',
    description: 'Cross-platform health tracking app with AI diagnostics serving 2M+ users across 40 countries with real-time wearable integration.',
    impact: '2M+ active users',
    impactIcon: Users,
    tags: ['React Native', 'Python', 'ML', 'Firebase', 'HealthKit'],
    bg: '#10b981', // Siffrum green roughly
    category: 'Mobile App',
  },
  {
    id: 3,
    num: '03',
    title: 'E-Commerce Marketplace',
    client: 'ShopFlow',
    description: 'Multi-vendor marketplace processing 50K+ orders daily with real-time inventory management and AI-driven product recommendations.',
    impact: '300% revenue growth',
    impactIcon: TrendingUp,
    tags: ['Next.js', 'Go', 'PostgreSQL', 'Redis', 'Stripe'],
    bg: '#f43f5e', // Siffrum pink roughly
    category: 'Web Platform',
  },
];

export default function FeaturedProjects() {
  const projects = showcaseProjects;

  useEffect(() => {
    getFeaturedProjects().catch(() => { });
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-white border-b-8 border-nb-text">
      {/* Background brutalist dots/grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 2px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-nb-blue border-4 border-nb-text px-4 py-2 mb-6 -rotate-2">
              <span className="font-heading text-xl font-bold uppercase tracking-widest text-white">
                Case Studies
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-nb-text font-heading leading-none uppercase drop-shadow-[4px_4px_0_var(--color-nb-yellow)]">
              Results that speak{' '}
              <span className="text-white relative inline-block" style={{ WebkitTextStroke: '3px var(--color-nb-text)' }}>
                louder
                {/* Decorative underline */}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-nb-pink" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              <br /> than words.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="nb-btn px-8 py-4 font-heading text-2xl uppercase tracking-wider bg-nb-pink text-white hover:bg-nb-yellow hover:text-nb-text"
            >
              All Projects
            </Link>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="grid lg:grid-cols-5 gap-0 border-8 border-nb-text bg-white transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2"
                style={{ boxShadow: '16px 16px 0 0 var(--color-nb-text)' }}
              >
                {/* Visual Block */}
                <div
                  className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-[400px] border-b-8 lg:border-b-0 lg:border-r-8 border-nb-text flex items-center justify-center p-8"
                  style={{ background: project.bg }}
                >
                  {/* Brutalist Numbering Background */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                    <span
                      className="text-[200px] lg:text-[280px] font-black font-heading leading-none select-none text-transparent opacity-50 block rotate-[-15deg] group-hover:scale-110 transition-transform duration-500"
                      style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}
                    >
                      {project.num}
                    </span>
                  </div>

                  {/* Category Stamp */}
                  <div className="absolute top-6 left-6 z-10 rotate-[-4deg]">
                    <span className="px-4 py-2 bg-white text-nb-text font-heading text-lg font-bold border-4 border-nb-text uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Arrow Block */}
                  <div className="w-20 h-20 bg-white border-4 border-nb-text flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 z-10 shadow-[8px_8px_0_0_var(--color-nb-text)] group-hover:rotate-6">
                    <ArrowUpRight className="w-10 h-10 text-nb-text" strokeWidth={3} />
                  </div>
                </div>

                {/* Content Block */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between relative bg-white">
                  {/* High contrast project number corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-nb-text flex items-start justify-end p-4">
                    <span className="text-white font-heading text-4xl block translate-x-1 -translate-y-1">{project.num}</span>
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rotate-45 transform origin-top-right"></div>
                  </div>

                  <div className="pr-16 relative z-10">
                    <p className="inline-block bg-nb-yellow border-2 border-nb-text px-2 py-1 text-sm font-bold uppercase tracking-widest text-nb-text mb-4 -rotate-1">
                      CLIENT: {project.client}
                    </p>
                    <h3 className="text-4xl lg:text-5xl font-black text-nb-text font-heading mb-6 uppercase leading-none group-hover:text-nb-pink transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-nb-text font-medium leading-relaxed text-lg lg:text-xl max-w-xl border-l-4 border-nb-text pl-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-12 relative z-10">
                    {/* Brutalist Impact metric */}
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border-4 border-nb-text shadow-[6px_6px_0_0_var(--color-nb-text)] mb-8 hover:-translate-y-1 transition-transform">
                      <project.impactIcon className="w-6 h-6 text-nb-blue" strokeWidth={3} />
                      <span className="text-lg font-heading font-bold text-nb-text uppercase tracking-wide">
                        {project.impact}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm font-bold font-body px-3 py-1 bg-white border-2 border-nb-text shadow-[2px_2px_0_0_var(--color-nb-text)] text-nb-text uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
