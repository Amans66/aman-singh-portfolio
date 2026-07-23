import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiExternalLink, FiShield, FiTrendingUp } from 'react-icons/fi';

const achievementsList = [
  {
    title: 'Top 4% Global Ranking on TryHackMe',
    issuer: 'TryHackMe Platform',
    desc: 'Ranked in the top 4% globally with 101 completed cybersecurity rooms and 11 earned skill badges covering web exploitation, privilege escalation, and network defense.',
    metric: 'Rank: 76,550 | 101 Rooms | 11 Badges',
    link: 'https://tryhackme.com/p/AmanHacker404',
  },
  {
    title: 'RCS Capture The Flag (CTF) Participant',
    issuer: 'RCS Cybersecurity',
    desc: 'Participated in competitive CTF challenges, solving complex puzzles in web security, cryptographic cipher decryption, and binary analysis.',
    metric: 'Verified CTF Certificate (2025)',
    link: 'https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link',
  },
  {
    title: 'Published Security Tool Developer',
    issuer: 'GitHub Open Source',
    desc: 'Developed and published open-source cybersecurity utilities including Threat Detection Suite (packet sniffer) and ShieldCrypt (AES-256 CLI encryptor).',
    metric: '3 Public Security Repositories',
    link: 'https://github.com/Amans66',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiAward /> // HONORS & RECOGNITION</div>
        <h2 className="section-title">
          Key <span className="highlight">Achievements</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {achievementsList.map((ach, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.2rem', color: 'var(--primary)' }}>
                  <FiTrendingUp />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '0.25rem 0.7rem', background: 'rgba(0, 255, 157, 0.1)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '12px', color: 'var(--primary)', fontWeight: 600 }}>
                  {ach.issuer}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', marginBottom: '0.6rem' }}>
                {ach.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                {ach.desc}
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--secondary)', marginBottom: '1rem', fontWeight: 600 }}>
                {ach.metric}
              </div>
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon cyan"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.45rem 1rem' }}
              >
                <FiCheckCircle /> View Recognition <FiExternalLink />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
