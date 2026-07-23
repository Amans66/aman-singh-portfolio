import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech Computer Science and Engineering (Cyber Security)',
    school: 'Lovely Professional University',
    score: 'CGPA: 6.83',
    period: '2023 – Present',
  },
  {
    degree: 'Class XII (Senior Secondary)',
    school: 'Kendriya Vidyalaya, Gurugram',
    score: 'Percentage: 80%',
    period: '2022 – 2023',
  },
  {
    degree: 'Class X (Secondary)',
    school: 'Kendriya Vidyalaya, Gurugram',
    score: 'Percentage: 85%',
    period: '2020 – 2021',
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
        <div className="section-tag">
          <FiBookOpen /> // EDUCATION
        </div>
        <h2 className="section-title">
          Academic <span className="highlight">Background</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="edu-timeline">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="glass-card edu-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-score">
              {edu.score} | {edu.period}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
