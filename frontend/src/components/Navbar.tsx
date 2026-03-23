import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-nb-text transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 relative z-10 hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-[4px_4px_0_var(--color-nb-text)] transition-all">
            <span className="font-heading text-4xl font-bold tracking-widest uppercase">SIFFRUM</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 font-body font-bold text-lg uppercase transition-all duration-200 border-2 border-transparent hover:border-nb-text hover:bg-nb-pink hover:shadow-[4px_4px_0_0_var(--color-nb-text)] hover:-translate-y-1 hover:-translate-x-1 ${isActive ? 'bg-nb-yellow border-nb-text shadow-[4px_4px_0_0_var(--color-nb-text)] -translate-y-1 -translate-x-1' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 font-heading text-2xl bg-nb-blue text-white border-4 border-nb-text shadow-[6px_6px_0_0_var(--color-nb-text)] hover:shadow-[8px_8px_0_0_var(--color-nb-text)] hover:-translate-y-1 hover:-translate-x-1 hover:bg-nb-green active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all flex items-center gap-2"
            >
              Start Project
              <ArrowRight strokeWidth={3} className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-nb-yellow border-4 border-nb-text shadow-[4px_4px_0_0_var(--color-nb-text)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all focus:outline-none"
          >
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t-4 border-nb-text bg-white overflow-hidden origin-top"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  onClick={() => setIsOpen(false)}
                  to={link.path}
                  className={`block p-4 font-heading text-3xl uppercase border-4 border-nb-text transition-all ${location.pathname === link.path ? 'bg-nb-yellow shadow-[4px_4px_0_0_var(--color-nb-text)] translate-x-[-2px] translate-y-[-2px]' : 'bg-white hover:bg-nb-pink hover:shadow-[4px_4px_0_0_var(--color-nb-text)] hover:-translate-y-[2px] hover:-translate-x-[2px]'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 block p-4 font-heading text-3xl uppercase text-white bg-nb-blue border-4 border-nb-text text-center hover:bg-nb-green hover:shadow-[6px_6px_0_0_var(--color-nb-text)] hover:-translate-y-[2px] hover:-translate-x-[2px] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
