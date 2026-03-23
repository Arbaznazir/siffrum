import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, input, textarea, select').forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    handleLinkHoverEvents();
    
    // Mutation observer to attach events to dynamically added links
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-siffrum-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'circOut',
          duration: 0.1,
        }}
      />
      
      {/* Outer Ring / Glow */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-siffrum-500/50 rounded-full pointer-events-none z-40 mix-blend-screen"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicked ? 0.9 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : linkHovered ? 0.2 : 0.5,
          backgroundColor: linkHovered ? 'rgba(136, 25, 255, 0.1)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          mass: 0.2,
          stiffness: 100,
          damping: 10,
        }}
      />
    </>
  );
}
