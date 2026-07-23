import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';

const educationList = [
  {
    degree: 'B.Tech in Computer Science and Engineering (Cyber Security)',
    institution: 'Lovely Professional University, Phagwara, Punjab',
    period: '2023 – Present',
    grade: 'CGPA: 6.83',
    details: 'Specialization in Cyber Security, Vulnerability Assessment, Network Security Protocols, Operating Systems, and Cryptography.',
  },
  {
    degree: 'Class XII (CBSE Senior Secondary)',
    institution: 'Kendriya Vidyalaya, Gurugram, Haryana',
    period: '2022 – 2023',
    grade: 'Percentage: 80%',
    details: 'Physics, Chemistry, Mathematics, and Computer Science stream.',
  },
  {
    degree: 'Class X (CBSE Secondary)',
    institution: 'Kendriya Vidyalaya, Gurugram, Haryana',
    period: '2020 – 2021',
    grade: 'Percentage: 85%',
    details: 'Secondary School Education with distinction in Mathematics and Science.',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiBookOpen /> // ACADEMIC TIMELINE</div>
        <h2 className="section-title">
          Educational <span className="highlight">Background</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(14, 165, 233, 0.3)' }}>
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{ padding: '1.8rem', marginBottom: '1.8rem', position: 'relative' }}
          >
            {/* Timeline Dot Indicator */}
            <div style={{ position: 'absolute', left: '-2.25rem', top: '1.8rem', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--secondary)', boxShadow: '0 0 10px var(--secondary)' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', margin: 0 }}>
                  {edu.degree}
                </h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--secondary)', marginTop: '0.3rem', fontWeight: 600 }}>
                  {edu.institution}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'rgba(0, 255, 157, 0.1)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '20px', color: 'var(--primary)', fontWeight: 600 }}>
                  {edu.grade}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', borderRadius: '20px', color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiCalendar /> {edu.period}
                </span>
              </div>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
