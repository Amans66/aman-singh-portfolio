import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const keyIndex = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === konamiCode[keyIndex.current]) {
        keyIndex.current++;
        if (keyIndex.current === konamiCode.length) {
          setActive(true);
          keyIndex.current = 0;
        }
      } else {
        keyIndex.current = 0;
        // Check if the current key matches the first key of the sequence again
        if (e.key === konamiCode[0]) {
          keyIndex.current = 1;
        }
      }

      if (e.key === 'Escape' && active) {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setActive(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'monospace',
          }}
        >
          {/* Scanlines */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,159,0.05) 2px, rgba(0,255,159,0.05) 4px)',
            pointerEvents: 'none',
          }} />

          <motion.h1
            className="glitch"
            data-text="SYSTEM COMPROMISED"
            animate={{
              x: [-2, 2, -2, 2, 0],
              y: [-2, 2, -2, 2, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 0.2,
              repeatType: "mirror"
            }}
            style={{
              color: 'var(--neon-green)',
              fontSize: '4rem',
              textShadow: '0 0 20px var(--neon-green)',
              marginBottom: '1rem',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            SYSTEM COMPROMISED
          </motion.h1>

          <h2 style={{
            color: 'var(--neon-cyan)',
            fontSize: '1.5rem',
            textShadow: '0 0 10px var(--neon-cyan)',
            zIndex: 1,
          }}>
            root access granted &mdash; AmanHacker404
          </h2>

          <button
            onClick={() => setActive(false)}
            style={{
              marginTop: '3rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              color: 'var(--neon-green)',
              border: '1px solid var(--neon-green)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'inherit',
              zIndex: 1,
            }}
          >
            Close [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
