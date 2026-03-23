import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, TerminalSquare } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// Draggable faux OS Window component
function DraggableWindow({ title, icon: Icon, children, defaultPos }: { title: string, icon: any, children: React.ReactNode, defaultPos: { x: number, y: number } }) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={defaultPos}
      className="absolute z-30 cursor-grab active:cursor-grabbing w-64 md:w-80 bg-white border-4 border-nb-text shadow-[12px_12px_0_0_var(--color-nb-text)] flex flex-col"
    >
      {/* OS Title bar */}
      <div className="bg-nb-blue border-b-4 border-nb-text p-2 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <Icon size={18} strokeWidth={3} />
          <span className="font-heading tracking-widest text-lg leading-none mt-1">{title}</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white border-2 border-nb-text rounded-full"></div>
          <div className="w-3 h-3 bg-nb-yellow border-2 border-nb-text rounded-full"></div>
          <div className="w-3 h-3 bg-nb-pink border-2 border-nb-text rounded-full"></div>
        </div>
      </div>
      {/* OS Content */}
      <div className="p-4 bg-nb-bg font-body text-sm font-bold select-none">
        {children}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [timeStr, setTimeStr] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStr(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 2 } as any));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] overflow-hidden bg-nb-yellow border-b-8 border-nb-text pt-20">

      {/* Infinite repeating brutalist background text */}
      <div className="absolute inset-0 z-0 overflow-hidden flex flex-col justify-center opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="whitespace-nowrap font-heading text-[10rem] md:text-[14rem] leading-none text-nb-text font-black uppercase"
            animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
          >
            WEB APPS • ENTERPRISE SYSTEMS • MOBILE DEV • SAAS • AI INTEGRATION • WEB APPS • ENTERPRISE SYSTEMS • MOBILE DEV • SAAS • AI INTEGRATION •
          </motion.div>
        ))}
      </div>

      <motion.div style={{ y: yBg }} className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center min-h-[90vh]">

        {/* Interactive OS Windows - Desktop Only */}
        <div className="hidden lg:block">
          <DraggableWindow title="SYSTEM.EXE" icon={TerminalSquare} defaultPos={{ x: 800, y: 100 }}>
            <div>&gt; INIT CORE_SYSTEMS</div>
            <div className="text-nb-blue">&gt; STATUS: {timeStr}</div>
            <div>&gt; LOAD: ENTERPRISE_SCALE...</div>
            <div className="text-nb-green">&gt; 100% SUCCESS</div>
          </DraggableWindow>

          <DraggableWindow title="DEV_ENV" icon={Code2} defaultPos={{ x: -50, y: 350 }}>
            <ul className="list-disc pl-4 space-y-2">
              <li>React / Next.js</li>
              <li>PostgreSQL / Redis</li>
              <li>AWS / Microservices</li>
            </ul>
          </DraggableWindow>

          <DraggableWindow title="MOBILE.APP" icon={Smartphone} defaultPos={{ x: 900, y: 450 }}>
            <div className="text-center">
              <div className="text-5xl mb-2">📱</div>
              <div>Cross-Platform Delivery</div>
              <div className="bg-nb-pink text-white border-2 border-nb-text px-2 py-1 mt-2 inline-block -rotate-3">iOS & Android</div>
            </div>
          </DraggableWindow>
        </div>

        {/* Main Brutalist Typography */}
        <div className="relative z-20 max-w-4xl pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block bg-nb-pink border-4 border-nb-text shadow-[6px_6px_0_0_var(--color-nb-text)] px-4 py-1 mb-6 -rotate-2 hover:rotate-2 transition-transform"
          >
            <span className="font-heading text-2xl uppercase tracking-widest text-white">We build software that</span>
          </motion.div>

          <h1 className="font-heading text-7xl sm:text-8xl md:text-[9rem] leading-[0.85] font-black text-nb-text uppercase drop-shadow-[6px_6px_0_white]">
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="block">Dom</motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="block pl-4 md:pl-12">inates</motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="block text-white" style={{ WebkitTextStroke: '4px var(--color-nb-text)' }}>Markets</motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mt-8 bg-white border-4 border-nb-text shadow-[8px_8px_0_0_var(--color-nb-text)] p-6 max-w-xl"
          >
            <p className="font-body text-xl md:text-2xl font-bold uppercase leading-tight bg-nb-green p-2 border-2 border-nb-text inline-block rotate-1">
              Apps. Web. Custom Systems.
            </p>
            <p className="mt-4 font-body text-lg font-medium">
              We don't do boring templates. We architect high-octane digital products that scale to millions and shatter expectations.
            </p>
          </motion.div>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 items-start"
          >
            <Link
              to="/contact"
              className="nb-btn px-8 py-4 text-3xl hover:bg-nb-blue bg-white text-nb-text"
            >
              Start Project <ArrowRight className="ml-2 w-8 h-8" strokeWidth={4} />
            </Link>
          </motion.div>
        </div>

        {/* Spinning aesthetic badge */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 bottom-20 w-32 h-32 md:w-48 md:h-48 z-10 pointer-events-none hidden sm:block"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[4px_4px_0_var(--color-nb-text)]">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="font-heading text-[12px] font-bold uppercase fill-nb-text tracking-[0.2em]">
              <textPath href="#circlePath">
                Siffrum • Extreme Digital Agency • Siffrum • Extreme Digital Agency •
              </textPath>
            </text>
            <circle cx="50" cy="50" r="28" fill="#FF4911" stroke="#050505" strokeWidth="3" />
            <polygon points="45,35 45,65 65,50" fill="#fde047" stroke="#050505" strokeWidth="2" />
          </svg>
        </motion.div>

      </motion.div>
    </section>
  );
}
