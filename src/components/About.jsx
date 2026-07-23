import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShield, FiTarget, FiCode, FiAward, FiCheckCircle, FiCpu, FiLock } from 'react-icons/fi';

const stats = [
  { icon: <FiCode />, value: 101, suffix: '', label: 'THM Rooms Completed' },
  { icon: <FiTarget />, value: 11, suffix: '', label: 'TryHackMe Badges' },
  { icon: <FiShield />, value: 10, suffix: '+', label: 'Systems Audited (VAPT)' },
  { icon: <FiAward />, value: 3, suffix: '', label: 'Certifications' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.ceil(target / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiShield /> // ABOUT ME & CYBERSECURITY MINDSET</div>
        <h2 className="section-title">
          Security <span className="highlight">Mindset</span> & Background
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Main Bio Card */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ padding: '2.5rem' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
                Career Objective & Security Background
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
                Aspiring Cybersecurity Analyst with hands-on experience in <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Vulnerability Assessment and Penetration Testing (VAPT)</span>, malware analysis, network security, and secure software development. Proficient in Burp Suite, OWASP ZAP, Nmap, Nikto, Wireshark, Python, and Kali Linux.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Completed 50+ practical TryHackMe labs (Top 4%) covering web exploitation, Active Directory, privilege escalation, networking, and defensive security. Passionate about understanding real-world attack vectors to engineer robust defensive countermeasures.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <FiCheckCircle style={{ color: 'var(--primary)' }} /> VAPT & Web Security
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <FiCheckCircle style={{ color: 'var(--primary)' }} /> OWASP Top 10 & MITRE ATT&CK
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <FiCheckCircle style={{ color: 'var(--primary)' }} /> Malware Analysis (Sysinternals)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <FiCheckCircle style={{ color: 'var(--primary)' }} /> Python Security Tool Development
                </div>
              </div>
            </div>

            {/* Mindset Philosophy Card */}
            <div style={{ background: 'rgba(5, 8, 22, 0.7)', padding: '1.8rem', borderRadius: '12px', border: '1px solid rgba(14, 165, 233, 0.3)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiLock /> // CYBERSECURITY MINDSET
              </div>
              <blockquote style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.2rem' }}>
                "Security is not a product, but a process. Defense requires understanding offensive tactics, analyzing host behavior, and maintaining constant vigilance."
              </blockquote>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--primary)' }}>
                — Defense in Depth & Zero Trust Philosophy
              </div>
            </div>

          </div>
        </motion.div>

        {/* Stats Counter Grid */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <div className="glass-card stat-card" key={i}>
              <div style={{ fontSize: '1.6rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div className="stat-number">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
