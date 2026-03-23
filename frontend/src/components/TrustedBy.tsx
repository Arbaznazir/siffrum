import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe2, Server } from 'lucide-react';

const clients = [
  'Accenture', 'Deloitte', 'Stripe', 'Shopify',
  'Salesforce', 'McKinsey', 'Databricks', 'Palantir',
];

const badges = [
  { label: 'SOC 2 Type II', icon: ShieldCheck },
  { label: 'ISO 27001', icon: Lock },
  { label: 'GDPR Compliant', icon: Globe2 },
  { label: 'AWS Advanced Partner', icon: Server },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] text-gray-400 uppercase tracking-[0.25em] font-medium mb-8 text-center">
            Trusted by teams at world-class organizations
          </p>

          {/* Infinite marquee */}
          <div className="relative overflow-hidden mb-12" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {[...clients, ...clients].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-gray-300 font-heading font-bold text-2xl sm:text-3xl tracking-tight hover:text-gray-800 transition-colors duration-500 cursor-default select-none shrink-0"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Compliance badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-300 cursor-default"
                style={{ background: '#fafafa', border: '1px solid #eeeeee' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(123,63,242,0.2)'; e.currentTarget.style.background = 'rgba(123,63,242,0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#eeeeee'; e.currentTarget.style.background = '#fafafa'; }}
              >
                <b.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#7b3ff2] transition-colors" />
                <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
