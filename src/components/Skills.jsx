import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiJavascript,
  SiBurpsuite, SiWireshark,
  SiMetasploit, SiKalilinux
} from 'react-icons/si';
import {
  FiShield, FiSearch, FiActivity, FiGlobe,
  FiCode, FiDatabase, FiTerminal, FiCpu
} from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';

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
    </section>
  );
}
