import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'SOC / SIEM', href: '#soc-dashboard' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tools', href: '#tools' },
  { label: 'THM', href: '#tryhackme' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <motion.nav
      className="nav-container"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <span className="bracket">[</span> AMAN<span style={{ color: 'var(--primary)' }}>_</span>SINGH <span className="bracket">]</span>
        </a>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={activeSection === item.href.slice(1) ? 'nav-active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.35rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <FiDownload /> CV
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
