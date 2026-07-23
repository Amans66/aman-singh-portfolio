import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiBurpsuite, SiWireshark,
  SiMetasploit, SiKalilinux
} from 'react-icons/si';
import {
  FiShield, FiSearch, FiActivity, FiGlobe,
  FiCode, FiDatabase, FiTerminal, FiCpu, FiFilter
} from 'react-icons/fi';

const categories = [
  {
    id: 'programming',
    title: '// PROGRAMMING',
    color: '#00ff9f',
    skills: [
      { name: 'Python', icon: <SiPython /> },
    ],
  },
  {
    id: 'tools',
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
    id: 'os',
    title: '// OPERATING SYSTEMS & DATABASES',
    color: '#bd00ff',
    skills: [
      { name: 'Kali Linux', icon: <SiKalilinux /> },
      { name: 'Windows VM', icon: <FiCpu /> },
      { name: 'MySQL', icon: <FiDatabase /> },
      { name: 'MongoDB', icon: <FiDatabase /> },
    ],
  },
  {
    id: 'concepts',
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
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = categories.map(cat => {
    if (activeTab !== 'all' && cat.id !== activeTab) return null;
    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredSkills.length === 0) return null;
    return { ...cat, skills: filteredSkills };
  }).filter(Boolean);

  return (
    <section id="skills" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// SKILL SET & TOOLKIT</div>
        <h2 className="section-title">
          Technical <span className="highlight">Arsenal</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      {/* Filter Tabs & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        
        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['all', 'programming', 'tools', 'os', 'concepts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '6px',
                border: activeTab === tab ? '1px solid #00ff9f' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === tab ? 'rgba(0, 255, 159, 0.15)' : 'rgba(0,0,0,0.4)',
                color: activeTab === tab ? '#00ff9f' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Live Search Bar */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '260px' }}>
          <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--neon-green)', fontSize: '0.9rem' }} />
          <input
            type="text"
            placeholder="Filter skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '0.45rem 0.8rem 0.45rem 2.2rem',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(0,255,159,0.3)',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#fff',
              outline: 'none'
            }}
          />
        </div>

      </div>

      <div className="skills-categories">
        {filteredCategories.map((cat, ci) => (
          <motion.div
            key={ci}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
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

    const size = Math.min(container.clientWidth, 400);
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
      style={{ marginTop: '2.5rem', padding: '1.8rem', textAlign: 'center' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00ff9f', marginBottom: '1rem' }}>
        // SKILL PROFICIENCY RADAR CHART
      </div>
      <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas ref={canvasRef} />
      </div>
    </motion.div>
  );
}
