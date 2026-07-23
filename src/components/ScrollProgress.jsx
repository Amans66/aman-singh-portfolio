import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      
      setScrollProgress(scroll);

      if (totalScroll > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: scrollProgress,
        background: 'linear-gradient(to right, var(--neon-green), var(--neon-cyan))',
        boxShadow: '0 0 10px var(--neon-green)',
        zIndex: 200,
        transition: 'width 0.1s ease-out',
      }} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="glass-card"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(0, 255, 159, 0.3)',
              cursor: 'pointer',
              zIndex: 100,
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              color: 'var(--neon-green)',
              fontSize: '1.5rem',
            }}
            whileHover={{ scale: 1.1, borderColor: 'var(--neon-green)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
