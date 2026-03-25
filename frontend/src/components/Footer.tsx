import { Link } from 'react-router-dom';

import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  COMPANY: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Careers', path: '#' },
    { name: 'Contact', path: '/contact' },
  ],
  EXPERTISE: [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Applications', path: '/services' },
    { name: 'Cloud & Backend', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Digital Transformation', path: '/services' },
  ],
  RESOURCES: [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
    { name: 'Security', path: '#' },
    { name: 'SLA', path: '#' },
  ],
};

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0ea5e9' },
  { icon: Twitter, href: '#', label: 'Twitter', color: '#10b981' },
  { icon: Github, href: '#', label: 'GitHub', color: '#fde047' },
];

export default function Footer() {
  return (
    <footer className="bg-nb-text text-white relative overflow-hidden border-t-8 border-nb-text pt-24 pb-12">
      {/* Brutalist Top Banner */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-nb-yellow border-b-8 border-nb-text flex items-center overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="text-nb-text font-black font-heading text-xl uppercase tracking-widest mx-4 flex items-center">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="flex items-center">
                START YOUR PROJECT TODAY <span className="mx-4">///</span>
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12 mb-20">

          {/* Brand & Contact Block */}
          <div className="lg:col-span-2">
            {/* The Logo Block */}
            <div className="inline-block bg-white p-4 border-4 border-white mb-8 rotate-1">
              <h1 className="text-4xl font-black font-heading text-nb-text uppercase tracking-tighter">SIFFRUM</h1>
            </div>

            <p className="text-white font-bold font-heading text-xl mb-10 leading-snug uppercase tracking-wide max-w-sm">
              ENTERPRISE-GRADE SOFTWARE ENGINEERING. WE ARCHITECT, DESIGN, AND SHIP MISSION-CRITICAL PRODUCTS.
            </p>

            <div className="space-y-4 mb-12">
              <a
                href="mailto:contact@siffrum.com"
                className="group flex items-center gap-4 text-white hover:text-nb-yellow transition-colors font-bold font-heading text-xl uppercase tracking-wider"
              >
                <div className="w-12 h-12 bg-nb-blue border-4 border-white flex items-center justify-center shrink-0 -rotate-3 group-hover:rotate-0 transition-transform shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                  <Mail className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                contact@siffrum.com
              </a>
              <a
                href="tel:+919596760096"
                className="group flex items-center gap-4 text-white hover:text-nb-yellow transition-colors font-bold font-heading text-xl uppercase tracking-wider"
              >
                <div className="w-12 h-12 bg-nb-pink border-4 border-white flex items-center justify-center shrink-0 rotate-2 group-hover:rotate-0 transition-transform shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                  <Phone className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                +91 9596760096
              </a>
              <div className="flex items-center gap-4 text-white font-bold font-heading text-xl uppercase tracking-wider">
                <div className="w-12 h-12 bg-nb-green border-4 border-white flex items-center justify-center shrink-0 -rotate-1 shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                Veracity House, Rajbagh Srinagar, J&K, India
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-14 h-14 bg-white border-4 border-white flex items-center justify-center text-nb-text hover:-translate-y-2 hover:-translate-x-2 transition-transform"
                  style={{ boxShadow: `6px 6px 0 0 ${s.color}` }}
                >
                  <s.icon className="w-7 h-7" strokeWidth={3} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Blocks */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:pl-8">
              <h4 className="text-nb-yellow font-black font-heading text-2xl uppercase tracking-widest mb-8 border-b-4 border-white inline-block pb-2">
                {title}
              </h4>
              <ul className="space-y-4 font-heading font-black text-lg">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex flex-col uppercase text-white hover:text-nb-pink transition-colors w-max"
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0" strokeWidth={4} />
                      </span>
                      {/* Brutalist underline on hover */}
                      <span className="h-1 w-0 bg-nb-pink group-hover:w-full transition-all duration-300 mt-1"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-8 border-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-white font-black font-heading text-lg uppercase tracking-wider">
            &copy; {new Date().getFullYear()} SIFFRUM TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="inline-block bg-white text-nb-text font-black font-heading text-lg px-4 py-2 border-4 border-white rotate-1 uppercase tracking-wider">
            BUILT WITH PRECISION. SHIPPED WITH CONFIDENCE.
          </div>
        </div>
      </div>
    </footer>
  );
}
