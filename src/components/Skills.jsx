import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  SiPython,
  SiBurpsuite, SiWireshark,
  SiMetasploit, SiKalilinux
} from 'react-icons/si';
import {
  FiShield, FiSearch, FiActivity, FiGlobe,
  FiCode, FiDatabase, FiTerminal, FiCpu
} from 'react-icons/fi';

const categories = [
  {
    title: '// PROGRAMMING',
    color: '#00ff9f',
    skills: [
      { name: 'Python', icon: <SiPython /> },
    ],
  },
  {
    title: '// SECURITY TOOLS',
    color: '#00eaff',
    skills: [
      { name: 'Burp Suite', icon: <SiBurpsuite /> },
      { name: 'OWASP ZAP', icon: <FiShield /> },
      { name: 'Nmap', icon: <FiSearch /> },
      { name: 'Nikto', icon: <FiTerminal /> },
      { name: 'Wireshark', icon: <SiWireshark /> },
      { name: 'Metasploit', icon: <SiMetasploit /> },
    ],
  },
  {
    title: '// OPERATING SYSTEMS & DATABASES',
    color: '#bd00ff',
    skills: [
      { name: 'Kali Linux', icon: <SiKalilinux /> },
      { name: 'Windows', icon: <FiCpu /> },
      { name: 'MySQL', icon: <FiDatabase /> },
      { name: 'MongoDB', icon: <FiDatabase /> },
    ],
  },
  {
    title: '// CORE CONCEPTS',
    color: '#ffbd2e',
    skills: [
      { name: 'VAPT', icon: <FiShield /> },
      { name: 'OWASP Top 10', icon: <FiGlobe /> },
      { name: 'Malware Analysis', icon: <FiActivity /> },
      { name: 'Networking', icon: <FiCpu /> },
      { name: 'Cryptography', icon: <FiCode /> },
      { name: 'Web Security', icon: <FiGlobe /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// SKILL SET</div>
        <h2 className="section-title">
          Technical <span className="highlight">Arsenal</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="skills-categories">
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
          >
            <div
              className="skill-category-title"
              style={{ color: cat.color }}
            >
              {cat.title}
            </div>
            <div className="skills-list">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  className="skill-tag"
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="skill-icon" style={{ color: cat.color }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Radar Chart */}
      <SkillRadar />
    </section>
  );
}

const radarSkills = [
  { label: 'VAPT', value: 85 },
  { label: 'Malware\nAnalysis', value: 80 },
  { label: 'Web\nSecurity', value: 90 },
  { label: 'Networking', value: 75 },
  { label: 'Crypto', value: 70 },
  { label: 'Python', value: 90 },
];

function SkillRadar() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1200;
    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      setAnimProgress(progress);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const size = Math.min(container.clientWidth, 420);
    canvas.width = size * 2;
    canvas.height = size * 2;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.35;
    const n = radarSkills.length;

    ctx.clearRect(0, 0, size, size);

    // Grid rings
    for (let ring = 1; ring <= 5; ring++) {
      const r = (radius * ring) / 5;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(0,255,159,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Axis lines
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.strokeStyle = 'rgba(0,255,159,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Data area
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const idx = i % n;
      const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
      const val = (radarSkills[idx].value / 100) * radius * animProgress;
      const px = cx + val * Math.cos(angle);
      const py = cy + val * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,255,159,0.2)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,255,159,0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dots
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const val = (radarSkills[i].value / 100) * radius * animProgress;
      const px = cx + val * Math.cos(angle);
      const py = cy + val * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00ff9f';
      ctx.shadowColor = '#00ff9f';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Labels
    ctx.font = '11px "Fira Code", monospace';
    ctx.fillStyle = '#e0e0e0';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const lx = cx + (radius + 28) * Math.cos(angle);
      const ly = cy + (radius + 28) * Math.sin(angle);
      const lines = radarSkills[i].label.split('\n');
      lines.forEach((line, li) => {
        ctx.fillText(line, lx, ly + (li - (lines.length - 1) / 2) * 13);
      });
    }
  }, [animProgress]);

  return (
    <motion.div
      ref={inViewRef}
      className="glass-card"
      style={{ marginTop: '2rem', padding: '1.5rem', textAlign: 'center' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00ff9f', marginBottom: '1rem' }}>
        // SKILL PROFICIENCY RADAR
      </div>
      <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas ref={canvasRef} />
      </div>
    </motion.div>
  );
}
