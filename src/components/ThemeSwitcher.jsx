import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSliders } from 'react-icons/fi';

const themes = [
  { id: 'matrix', name: 'Matrix Green', color: '#00ff41', bg: '#030508' },
  { id: 'cyberpunk', name: 'Cyberpunk Neon', color: '#ff007f', bg: '#070312' },
  { id: 'ice', name: 'Ghost Ice Blue', color: '#00e1ff', bg: '#020b14' },
  { id: 'redteam', name: 'RedTeam Blood', color: '#ff003c', bg: '#0d0205' },
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('matrix');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('hacker_portfolio_theme') || 'matrix';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('hacker_portfolio_theme', themeId);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 150 }}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          color: 'var(--neon-green)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--glass-shadow)',
          backdropFilter: 'blur(10px)',
          fontSize: '1.2rem',
        }}
        title="Switch Cyber Theme"
      >
        <FiSliders />
      </motion.button>

      {/* Theme Options Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '56px',
              left: 0,
              background: 'rgba(5, 8, 15, 0.95)',
              border: '1px solid var(--neon-green)',
              borderRadius: '12px',
              padding: '0.8rem',
              width: '210px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.8), var(--glow-green)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.2rem', paddingLeft: '0.4rem' }}>
              // SELECT CYBER THEME
            </div>

            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.45rem 0.6rem',
                  borderRadius: '6px',
                  border: activeTheme === t.id ? `1px solid ${t.color}` : '1px solid transparent',
                  background: activeTheme === t.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                  color: activeTheme === t.id ? t.color : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: t.color, boxShadow: `0 0 6px ${t.color}` }} />
                {t.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
