import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code2, Rocket, CheckSquare } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery & Audit',
    description: 'Deep-dive workshops with your stakeholders. We map business goals, user needs, and technical constraints to define the perfect scope.',
    deliverables: ['Stakeholder interviews', 'Requirements doc', 'Technical audit'],
    duration: 'W1–2',
    color: '#0ea5e9', // Siffrum neon blue roughly
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategy & Design',
    description: 'Information architecture, wireframes, interactive prototypes, and a crystal-clear technical roadmap — before a single line of code.',
    deliverables: ['Wireframes', 'Design system', 'Roadmap'],
    duration: 'W2–4',
    color: '#fde047', // Yellow
  },
  {
    icon: Code2,
    step: '03',
    title: 'Agile Development',
    description: 'Two-week sprints with CI/CD, code reviews, automated testing, and weekly demo sessions. Full transparency, zero surprises.',
    deliverables: ['Bi-weekly demos', 'Tests', 'Code reviews'],
    duration: 'W4–12',
    color: '#10b981', // Green
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Growth',
    description: 'Production deployment, performance monitoring, A/B testing, and dedicated support. We stay with you through scale.',
    deliverables: ['Deploy', 'Monitoring', 'Support'],
    duration: 'RUN',
    color: '#f43f5e', // Pink
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-32 bg-[#e6e6e6] relative overflow-hidden border-b-8 border-nb-text">
      {/* Background brutalist texture/pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'linear-gradient(45deg, #050505 25%, transparent 25%, transparent 75%, #050505 75%, #050505), linear-gradient(45deg, #050505 25%, transparent 25%, transparent 75%, #050505 75%, #050505)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-nb-text pb-12"
        >
          <div className="max-w-3xl">
            <div className="inline-block bg-white text-nb-text font-black font-heading text-2xl px-6 py-2 border-4 border-nb-text shadow-[6px_6px_0_0_var(--color-nb-text)] mb-8 -rotate-2">
              OUR PROCESS // HOW WE WORK
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-black text-nb-text font-heading leading-[0.85] uppercase tracking-tighter">
              A Proven <br /> Framework for <br />
              <span className="text-white relative inline-block mt-2" style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}>
                Shipping
                <svg className="absolute w-full h-4 -bottom-4 left-0 text-nb-blue drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 -10 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="md:max-w-xs p-6 bg-nb-yellow border-4 border-nb-text shadow-[8px_8px_0_0_var(--color-nb-text)] rotate-2">
            <p className="font-body text-xl font-bold uppercase text-nb-text leading-snug">
              Every engagement follows our battle-tested methodology — designed for predictability, transparency, and brutal outcomes.
            </p>
          </div>
        </motion.div>

        {/* Aggressive Zig-Zag Process Steps */}
        <div className="relative">
          {/* Thick connecting line (desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-nb-text" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-12"
                >
                  {/* Harsh blocky node connector (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[120px] h-[40px] bg-nb-text items-center justify-center">
                    <div className="w-[104px] h-[24px]" style={{ background: step.color }}></div>
                  </div>

                  {/* Card Block */}
                  <div className={`${isLeft ? 'lg:col-start-1 lg:text-right pr-4' : 'lg:col-start-2 pl-4'} relative z-10`}>

                    {/* The massive step number tag */}
                    <div className={`absolute -top-6 ${isLeft ? '-left-6' : '-right-6'} z-20 bg-nb-text text-white p-4 font-heading text-5xl font-black rotate-${isLeft ? '-12' : '12'} border-4 border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
                      {step.step}
                    </div>

                    <div
                      className="group bg-white border-8 border-nb-text p-8 transition-transform duration-200 hover:-translate-y-2 relative"
                      style={{ boxShadow: `16px 16px 0 0 ${step.color}` }}
                    >
                      <div className={`flex flex-col ${isLeft ? 'lg:items-end lg:text-right' : 'items-start text-left'} mb-6`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-16 h-16 border-4 border-nb-text flex items-center justify-center transform group-hover:rotate-12 transition-transform"
                            style={{ background: step.color }}
                          >
                            <step.icon className="w-8 h-8 text-nb-text" strokeWidth={3} />
                          </div>
                          <span className="inline-block px-4 py-2 bg-nb-text text-white font-heading text-xl font-bold uppercase tracking-widest border-2 border-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-4xl font-black text-nb-text uppercase font-heading">{step.title}</h3>
                      </div>

                      <p className="text-nb-text font-medium text-lg border-l-4 lg:border-l-0 lg:border-r-4 border-nb-text pl-4 lg:pl-0 lg:pr-4 py-2 mb-8 uppercase leading-snug">
                        {step.description}
                      </p>

                      {/* Deliverables Block */}
                      <div className={`bg-[#f0f0f0] border-4 border-nb-text p-4 ${isLeft ? 'lg:text-right' : 'text-left'}`}>
                        <div className="font-heading text-xl font-black uppercase text-nb-text mb-4 border-b-2 border-nb-text inline-block pd-1">
                          OUTPUTS
                        </div>
                        <div className={`flex flex-col gap-3 ${isLeft ? 'lg:items-end' : 'items-start'}`}>
                          {step.deliverables.map((d) => (
                            <div key={d} className={`flex items-center gap-3 bg-white border-2 border-nb-text px-4 py-2 hover:bg-nb-text hover:text-white transition-colors cursor-default ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                              <CheckSquare className="w-5 h-5" strokeWidth={3} style={{ color: step.color }} />
                              <span className="font-bold font-body text-base uppercase">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
