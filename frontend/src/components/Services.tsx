import { motion } from 'framer-motion';
import { Layers, Smartphone, Cloud, PenTool, GitBranch, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Layers,
    title: 'Full-Stack Web Development',
    description: 'Enterprise-grade web applications built with React, Next.js & modern stacks. Designed for brutal performance, flawless SEO, and conversion.',
    features: ['React ecosystem', 'Node/Python backends', 'Global CDNs', 'Serverless'],
    color: '#0ea5e9', // Siffrum neon blue roughly
    rotation: '-rotate-1',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native & cross-platform apps for iOS and Android that scale to millions with buttery-smooth UX and aggressive retention metrics.',
    features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: '#10b981', // green
    rotation: 'rotate-2',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Scalable, secure, and highly available cloud architectures on AWS, GCP, and Azure. We build systems that refuse to go down.',
    features: ['Kubernetes', 'AWS/GCP', 'CI/CD Pipelines', 'Zero-downtime'],
    color: '#fde047', // Yellow
    rotation: '-rotate-2',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Data-driven, user-centric design that crushes the competition. From wireframes to brutal, high-fidelity interactive prototypes.',
    features: ['Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    color: '#f43f5e', // Pink
    rotation: 'rotate-1',
  },
  {
    icon: GitBranch,
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems and architecting digital workflows that drastically cut costs and multiply output.',
    features: ['Legacy Migration', 'Process Automation', 'API Strategy', 'Tech Audit'],
    color: '#a855f7', // Purple
    rotation: '-rotate-1',
  },
];

export default function Services() {
  const FeaturedIcon = services[0].icon;

  return (
    <section className="py-32 relative overflow-hidden bg-white border-b-8 border-nb-text">
      {/* Background brutalist grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'linear-gradient(var(--color-nb-text) 2px, transparent 2px), linear-gradient(90deg, var(--color-nb-text) 2px, transparent 2px)', backgroundSize: '64px 64px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-nb-purple border-4 border-nb-text px-6 py-2 mb-8 -rotate-3 hover:rotate-0 transition-transform shadow-[4px_4px_0_0_var(--color-nb-text)]">
              <span className="font-heading text-xl font-bold uppercase tracking-widest text-white">
                WEAPONS OF CHOICE // CAPABILITIES
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-bold text-nb-text font-heading leading-[0.9] uppercase">
              End-to-end expertise for{' '}
              <span className="bg-nb-yellow text-nb-text px-2 inline-block -rotate-2 border-4 border-nb-text shadow-[6px_6px_0_0_var(--color-nb-text)]">
                every layer
              </span>{' '}
              <br /> of your product
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/services"
              className="nb-btn px-8 py-5 font-heading text-2xl uppercase tracking-wider bg-nb-pink text-white hover:bg-nb-blue"
            >
              All Services
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Main featured service */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
            className={`group lg:col-span-2 relative border-8 border-nb-text bg-[${services[0].color}] p-8 sm:p-12 transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2`}
            style={{ background: services[0].color, boxShadow: '16px 16px 0 0 var(--color-nb-text)' }}
          >
            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 flex gap-4 rotate-12 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-16 h-16 text-nb-text opacity-50" strokeWidth={4} />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white border-8 border-nb-text flex items-center justify-center shrink-0 shadow-[8px_8px_0_0_var(--color-nb-text)] -rotate-3 group-hover:rotate-12 transition-transform duration-500">
                <FeaturedIcon className="w-12 h-12 sm:w-16 sm:h-16 text-nb-text" strokeWidth={3} />
              </div>

              <div className="flex-1">
                <h3 className="text-4xl sm:text-5xl font-black text-nb-text font-heading uppercase mb-6 tracking-tight drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
                  {services[0].title}
                </h3>
                <p className="text-nb-text font-bold text-xl sm:text-2xl leading-snug mb-8 max-w-3xl">
                  {services[0].description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {services[0].features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 bg-white border-4 border-nb-text font-bold text-nb-text uppercase tracking-wide shadow-[4px_4px_0_0_var(--color-nb-text)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all cursor-default"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Remaining services */}
          {services.slice(1).map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 80, delay: 0.2 + index * 0.1 }}
                className={`group relative border-8 border-nb-text bg-[${service.color}] p-8 transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:z-20 ${service.rotation}`}
                style={{ background: service.color, boxShadow: '12px 12px 0 0 var(--color-nb-text)' }}
              >
                <div className="absolute top-6 right-6 rotate-12 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-10 h-10 text-nb-text opacity-50" strokeWidth={4} />
                </div>

                <div className="w-20 h-20 bg-white border-4 border-nb-text flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_var(--color-nb-text)] mb-8 -rotate-6 group-hover:rotate-12 transition-transform duration-500">
                  <ServiceIcon className="w-10 h-10 text-nb-text" strokeWidth={3} />
                </div>

                <h3 className="text-3xl font-black text-nb-text font-heading uppercase mb-4 tracking-tight drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
                  {service.title}
                </h3>

                <p className="text-nb-text font-bold text-lg leading-snug mb-8 min-h-[5rem]">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-white border-2 border-nb-text font-bold text-sm text-nb-text uppercase tracking-wide shadow-[2px_2px_0_0_var(--color-nb-text)] hover:shadow-none hover:translate-y-0.5 hover:translate-x-0.5 transition-all cursor-default"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
