import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Search } from 'lucide-react';
import type { Project } from '../types';
import { getProjects } from '../lib/api';
import CTA from '../components/CTA';

const placeholderProjects: Project[] = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    description: 'Real-time financial analytics dashboard for institutional traders with live market data.',
    long_description: '',
    image_url: '',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    category: 'Web App',
    client: 'TradeCorp',
    live_url: '#',
    featured: true,
    created_at: '',
  },
  {
    id: 2,
    title: 'HealthSync Mobile',
    description: 'Cross-platform health tracking app with AI-powered insights and wearable integration.',
    long_description: '',
    image_url: '',
    tags: ['React Native', 'Python', 'ML', 'Firebase'],
    category: 'Mobile App',
    client: 'MedTech Inc',
    live_url: '#',
    featured: true,
    created_at: '',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Scalable multi-vendor marketplace processing 10K+ orders daily with real-time inventory.',
    long_description: '',
    image_url: '',
    tags: ['Next.js', 'Go', 'PostgreSQL', 'Redis'],
    category: 'Web App',
    client: 'ShopFlow',
    live_url: '#',
    featured: true,
    created_at: '',
  },
  {
    id: 4,
    title: 'Fleet Management System',
    description: 'GPS tracking and route optimization platform for logistics companies.',
    long_description: '',
    image_url: '',
    tags: ['React', 'Go', 'MongoDB', 'Maps API'],
    category: 'Web App',
    client: 'LogiTrack',
    live_url: '#',
    featured: false,
    created_at: '',
  },
  {
    id: 5,
    title: 'Social Fitness App',
    description: 'Community-driven fitness platform with workout sharing and challenges.',
    long_description: '',
    image_url: '',
    tags: ['Flutter', 'Node.js', 'PostgreSQL'],
    category: 'Mobile App',
    client: 'FitTribe',
    live_url: '#',
    featured: false,
    created_at: '',
  },
  {
    id: 6,
    title: 'Brand Identity System',
    description: 'Complete brand redesign including logo, style guide, and marketing materials.',
    long_description: '',
    image_url: '',
    tags: ['Figma', 'Illustrator', 'After Effects'],
    category: 'UI/UX',
    client: 'Nova Studios',
    live_url: '#',
    featured: false,
    created_at: '',
  },
];

const categories = ['All', 'Web App', 'Mobile App', 'UI/UX', 'Backend'];
const colors = ['#0ea5e9', '#fde047', '#f43f5e', '#10b981', '#a855f7', '#fb923c'];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(placeholderProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (res.data && res.data.length > 0) setProjects(res.data);
      })
      .catch(() => { });
  }, []);

  const filtered = projects.filter((p) => {
    const matchesCategory =
      activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Brutalist Header */}
      <section className="pt-40 pb-24 bg-nb-blue relative overflow-hidden border-b-8 border-nb-text">
        {/* Background checkerboard */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'conic-gradient(var(--color-nb-text) 90deg, transparent 90deg 180deg, var(--color-nb-text) 180deg 270deg, transparent 270deg)', backgroundSize: '64px 64px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="inline-block bg-nb-yellow border-4 border-nb-text px-6 py-2 mb-8 shadow-[8px_8px_0_0_var(--color-nb-text)] rotate-2 hover:rotate-0 transition-transform">
              <span className="font-heading text-2xl font-black uppercase tracking-widest text-nb-text">
                TRACK RECORD // PORTFOLIO
              </span>
            </div>

            <h1 className="mt-3 text-6xl sm:text-7xl lg:text-[7rem] font-black text-white font-heading uppercase leading-[0.85] tracking-tighter drop-shadow-[6px_6px_0_var(--color-nb-text)]" style={{ WebkitTextStroke: '2px var(--color-nb-text)' }}>
              OUR WORK SPEAKS <br />
              <span className="text-nb-pink relative inline-block mt-4" style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}>
                FOR ITSELF
                {/* Decorative underline */}
                <svg className="absolute w-[120%] h-8 -bottom-6 -left-[10%] text-nb-text -rotate-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="mt-12 bg-white border-4 border-nb-text p-6 inline-block text-xl md:text-2xl font-body font-bold text-nb-text max-w-2xl mx-auto shadow-[12px_12px_0_0_var(--color-nb-text)] -rotate-1">
              Explore our portfolio of brutally successful projects. We don't just write code; we engineer market dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Portfolio Content */}
      <section className="py-24 bg-white relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'linear-gradient(var(--color-nb-text) 2px, transparent 2px), linear-gradient(90deg, var(--color-nb-text) 2px, transparent 2px)', backgroundSize: '64px 64px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          {/* Filters & Search Block */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 bg-[#f0f0f0] border-8 border-nb-text p-8 shadow-[12px_12px_0_0_var(--color-nb-text)]">

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-4 font-heading font-black text-xl uppercase self-center bg-nb-text text-white px-3 py-1 -rotate-2">Filters</div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 font-heading text-xl font-black uppercase tracking-wider border-4 border-nb-text transition-all ${activeCategory === cat
                    ? 'bg-nb-yellow text-nb-text shadow-[4px_4px_0_0_var(--color-nb-text)] translate-x-1 translate-y-1'
                    : 'bg-white text-nb-text hover:bg-nb-pink hover:text-white shadow-[8px_8px_0_0_var(--color-nb-text)] hover:shadow-none hover:translate-x-2 hover:translate-y-2'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-[400px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 text-nb-text" strokeWidth={3} />
              <input
                type="text"
                placeholder="SEARCH PROJECTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-white border-4 border-nb-text font-heading text-xl font-black text-nb-text uppercase placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-nb-pink shadow-[8px_8px_0_0_var(--color-nb-text)] transition-shadow"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div className="grid lg:grid-cols-2 gap-12 gap-y-16">
            <AnimatePresence>
              {filtered.map((project, index) => {
                const accentColor = colors[index % colors.length];

                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className="group relative bg-white border-8 border-nb-text transition-transform duration-300 hover:-translate-y-4 hover:-translate-x-4 flex flex-col h-full z-10 hover:z-20"
                    style={{ boxShadow: `16px 16px 0 0 ${accentColor}` }}
                  >
                    {/* Project Image/Placeholder */}
                    <div className="relative border-b-8 border-nb-text aspect-[16/9] overflow-hidden bg-nb-text">
                      {project.image_url ? (
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden" style={{ background: accentColor }}>
                          {/* Massive abstract shape */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-nb-text opacity-20 rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 border-8 border-nb-text opacity-20 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                          <span className="text-8xl sm:text-[10rem] font-black font-heading leading-none mix-blend-overlay text-white opacity-80 select-none">
                            {project.title.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}

                      {/* Quick Link Overlay */}
                      <div className="absolute inset-0 bg-transparent flex items-start justify-end p-4 pointer-events-none">
                        {project.live_url && project.live_url !== '#' && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto flex items-center gap-2 bg-nb-yellow text-nb-text border-4 border-nb-text font-heading text-xl font-black uppercase tracking-wider px-4 py-2 hover:bg-white transition-colors shadow-[4px_4px_0_0_var(--color-nb-text)]"
                          >
                            LIVE APP
                            <ExternalLink className="w-5 h-5" strokeWidth={3} />
                          </a>
                        )}
                      </div>

                      {/* Category Stamp */}
                      <div className="absolute bottom-4 left-4 pointer-events-none">
                        <span className="bg-nb-text text-white font-heading font-black text-xl px-3 py-1 uppercase tracking-widest border-2 border-white -rotate-2 inline-block">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8 sm:p-10 flex flex-col flex-grow relative bg-white">
                      {/* Client Badge */}
                      {project.client && (
                        <div className="absolute -top-6 right-8 bg-white border-4 border-nb-text font-heading font-black text-lg px-4 py-2 shadow-[4px_4px_0_0_var(--color-nb-text)] rotate-3">
                          {project.client}
                        </div>
                      )}

                      <h3 className="text-4xl font-black text-nb-text font-heading uppercase mb-4 leading-tight group-hover:text-nb-blue transition-colors mt-2" style={{ WebkitTextStroke: '1px var(--color-nb-text)' }}>
                        {project.title}
                      </h3>

                      <p className="text-xl font-bold text-nb-text mb-8 leading-snug">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#f0f0f0] border-2 border-nb-text text-nb-text font-bold text-sm uppercase tracking-wide hover:bg-nb-text hover:text-white transition-colors cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/portfolio/${project.id}`}
                        className="nb-btn px-6 py-4 font-heading text-2xl uppercase tracking-wider bg-nb-text text-white group-hover:bg-nb-pink self-start w-full sm:w-auto text-center"
                      >
                        VIEW CASE STUDY
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-32 bg-white border-8 border-nb-text p-12 mt-12 shadow-[16px_16px_0_0_var(--color-nb-pink)] rotate-1">
              <div className="inline-block bg-nb-text text-white p-4 mb-8 -rotate-3">
                <Search className="w-16 h-16" strokeWidth={3} />
              </div>
              <h2 className="text-5xl font-heading font-black uppercase text-nb-text mb-4">NOTHING FOUND</h2>
              <p className="text-2xl font-bold text-nb-text uppercase max-w-xl mx-auto">
                No projects match your current search constraints. Try clearing your filters and looking again.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
