import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Globe,
  Server,
  Palette,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckSquare,
} from 'lucide-react';
import CTA from '../components/CTA';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'We build fast, responsive, and scalable web applications using modern technologies like React, Next.js, and TypeScript. Designed for brutal performance.',
    features: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'E-commerce Platforms',
      'Custom CMS Solutions',
      'API Integrations',
    ],
    color: '#0ea5e9', // Blue
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps that provide seamless user experiences on both iOS and Android. High retention guaranteed.',
    features: [
      'React Native / Flutter',
      'Native iOS & Android',
      'App Store Optimization',
      'Push Notifications',
      'Offline-First Architecture',
    ],
    color: '#10b981', // Green
  },
  {
    icon: Server,
    title: 'Backend & Cloud',
    description:
      'Robust backend systems and cloud infrastructure that scale with your business needs. We build systems that refuse to go down.',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices Architecture',
      'Cloud Deployment (AWS, GCP)',
      'Database Design & Optimization',
      'CI/CD Pipelines',
    ],
    color: '#fde047', // Yellow
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines extreme aesthetics with function to create digital experiences that crush the competition.',
    features: [
      'User Research & Testing',
      'Wireframes & Prototypes',
      'Design Systems',
      'Responsive Design',
      'Accessibility (WCAG)',
    ],
    color: '#f43f5e', // Pink
  },
  {
    icon: ShieldCheck,
    title: 'MVP Development',
    description:
      'Get your product to market fast. We build lean MVPs that validate your idea and aggressively attract investors.',
    features: [
      'Rapid Prototyping',
      '4-8 Week Delivery',
      'Investor-Ready Demos',
      'Scalable Architecture',
      'Post-Launch Iteration',
    ],
    color: '#a855f7', // Purple
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy',
    description:
      'Strategic guidance to align your technology investments with business goals. We multiply output and cut the noise.',
    features: [
      'Technical Architecture Review',
      'Technology Stack Selection',
      'Product Roadmapping',
      'Performance Audits',
      'Growth Engineering',
    ],
    color: '#fb923c', // Orange
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-white relative overflow-hidden border-b-8 border-nb-text">
        {/* Background brutalist dots/grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 2px, transparent 0)', backgroundSize: '32px 32px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="inline-block bg-nb-purple border-4 border-nb-text px-6 py-2 mb-8 shadow-[6px_6px_0_0_var(--color-nb-text)] rotate-2 hover:-rotate-2 transition-transform select-none">
              <span className="font-heading text-xl font-bold uppercase tracking-widest text-white">
                DETAILED CAPABILITIES
              </span>
            </div>

            <h1 className="mt-3 text-6xl sm:text-7xl lg:text-[7rem] font-black text-nb-text font-heading uppercase leading-[0.85] tracking-tighter drop-shadow-[4px_4px_0_var(--color-nb-yellow)]" style={{ WebkitTextStroke: '2px var(--color-nb-text)' }}>
              EVERYTHING YOU NEED <br />
              <span className="text-white relative inline-block mt-4" style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}>
                TO SHIP & SCALE
                {/* Decorative underline */}
                <svg className="absolute w-[110%] h-6 -bottom-4 -left-[5%] text-nb-pink rotate-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            <div className="mt-12 bg-nb-text text-white p-6 inline-block max-w-3xl border-4 border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] -rotate-1">
              <p className="text-2xl font-body font-bold uppercase leading-snug">
                From the first line of code to ongoing high-octane optimization — we're your brutal, end-to-end technology partner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-32 bg-[#e6e6e6] relative">
        {/* Background noise texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 relative z-10">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            const ServiceIcon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`flex flex-col lg:flex-row gap-0 group ${!isLeft ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Block */}
                <div
                  className={`flex-1 bg-white border-8 border-nb-text p-8 sm:p-12 relative z-20 ${isLeft ? 'lg:-mr-12' : 'lg:-ml-12 lg:pr-24 lg:z-10'} lg:mt-12 transition-transform hover:-translate-y-2`}
                  style={{ boxShadow: `16px 16px 0 0 var(--color-nb-text)` }}
                >
                  {/* Number stamp */}
                  <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-20 h-20 bg-nb-text flex items-center justify-center p-4`}>
                    <span className="text-white font-heading font-black text-4xl block">0{index + 1}</span>
                  </div>

                  <div className="mb-8 mt-4">
                    <h2 className="text-4xl sm:text-5xl font-black text-nb-text font-heading uppercase leading-[0.9] tracking-tight mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl font-bold text-nb-text leading-snug border-l-4 border-nb-text pl-4 max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="bg-[#f0f0f0] border-4 border-nb-text p-6 mb-10">
                    <div className="font-heading text-xl font-black uppercase text-nb-text mb-4 inline-block border-b-4 border-nb-text">
                      CORE OFFERINGS
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-nb-text font-bold uppercase text-sm bg-white border-2 border-nb-text p-2 hover:bg-nb-text hover:text-white transition-colors"
                        >
                          <CheckSquare className="w-5 h-5 shrink-0" strokeWidth={3} style={{ color: service.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-nb-text text-white font-heading font-black text-2xl uppercase tracking-wider px-8 py-4 border-4 border-nb-text hover:shadow-[8px_8px_0_0_var(--color-nb-pink)] hover:-translate-y-1 hover:-translate-x-1 transition-all"
                  >
                    START PROJECT
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={4} />
                  </Link>
                </div>

                {/* Visual Block */}
                <div
                  className={`flex-1 w-full min-h-[400px] border-8 border-nb-text flex items-center justify-center relative z-10 transition-transform hover:scale-[1.02]`}
                  style={{ background: service.color }}
                >
                  <ServiceIcon className="w-48 h-48 text-nb-text opacity-90 drop-shadow-[8px_8px_0_rgba(255,255,255,0.5)] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />

                  {/* Decorative background numbers */}
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black font-heading leading-none select-none text-transparent opacity-20 pointer-events-none"
                    style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}
                  >
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
