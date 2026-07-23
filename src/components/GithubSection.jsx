import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';

// Pixel font for "HACKER" - each letter is 5 cols x 7 rows
const letterPatterns = {
  H: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  A: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  C: [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,1,1,1,1],
  ],
  K: [
    [1,0,0,0,1],
    [1,0,0,1,0],
    [1,0,1,0,0],
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ],
  E: [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
  ],
  R: [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ],
};

function generateHackerGrid() {
  const COLS = 52;
  const ROWS = 7;
  const word = 'HACKER';
  const letterWidth = 5;
  const gap = 2;
  const totalWidth = word.length * letterWidth + (word.length - 1) * gap;
  const startCol = Math.floor((COLS - totalWidth) / 2);

  // Initialize grid with zeros
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  // Paint each letter
  word.split('').forEach((char, li) => {
    const pattern = letterPatterns[char];
    const colOffset = startCol + li * (letterWidth + gap);
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < letterWidth; col++) {
        if (pattern[row][col]) {
          grid[row][colOffset + col] = 3 + Math.floor(Math.random() * 2); // l3 or l4
        }
      }
    }
  });

  // Add random low-level noise in empty cells
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 0 && Math.random() > 0.7) {
        grid[row][col] = Math.random() > 0.5 ? 1 : 2;
      }
    }
  }

  // Flatten to 1D array (row by row, which maps to the CSS grid)
  const cells = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const val = grid[row][col];
      cells.push(val === 0 ? '' : val === 1 ? 'l1' : val === 2 ? 'l2' : val === 3 ? 'l3' : 'l4');
    }
  }
  return cells;
}

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Custom descriptions for repos that don't have one on GitHub
    const descriptionOverrides = {
      'Threat-Detection-Suite-': 'Python-based web vulnerability detection suite for scanning and identifying security flaws in websites. Features automated vulnerability assessment, threat analysis, and detailed reporting.',
      'KeyLogger': 'Stealthy Python-based keylogger that silently captures keystrokes and webcam photos. Designed for security research and penetration testing purposes.',
    };

    fetch('https://api.github.com/users/Amans66/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out the unwanted projects and inject the new Delta tool
          const filteredData = data.filter(repo => repo.name !== 'Hunar-intern-task3' && repo.name !== 'Curriculum-Vitae');

          // Apply description overrides
          filteredData.forEach(repo => {
            if (!repo.description && descriptionOverrides[repo.name]) {
              repo.description = descriptionOverrides[repo.name];
            }
          });

          const deltaProject = {
            id: 'delta-malware',
            name: 'Delta - Malware Behavior Analysis Lab',
            html_url: '#',
            description: 'Isolated malware analysis laboratory using VMware Workstation to safely execute malware samples inside virtual machines. Features process creation, registry modification, and network telemetry analysis using Procmon, Process Explorer, Autoruns, & Wireshark.',
            stargazers_count: 13,
            language: 'Python',
            forks_count: 2
          };
          filteredData.unshift(deltaProject);
          setRepos(filteredData.slice(0, 6));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const contribCells = useMemo(() => generateHackerGrid(), []);

  return (
    <section id="github" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// GITHUB</div>
        <h2 className="section-title">
          Open Source <span className="highlight">Contributions</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="github-repos">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div className="glass-card repo-card" key={i}>
                <div style={{
                  height: '20px',
                  width: '60%',
                  background: 'rgba(0,255,159,0.1)',
                  borderRadius: '4px',
                  marginBottom: '0.75rem',
                  animation: 'pulse 1.5s ease infinite',
                }} />
                <div style={{
                  height: '14px',
                  width: '90%',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '4px',
                  marginBottom: '0.5rem',
                }} />
                <div style={{
                  height: '14px',
                  width: '70%',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '4px',
                }} />
              </div>
            ))
          : repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card repo-card"
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="repo-name">
                  <FiGitBranch /> {repo.name}
                  <FiExternalLink style={{ marginLeft: 'auto', fontSize: '0.8rem', opacity: 0.5 }} />
                </div>
                <div className="repo-desc">
                  {repo.description || 'No description available'}
                </div>
                <div className="repo-meta">
                  <span><FiStar /> {repo.stargazers_count}</span>
                  {repo.language && (
                    <span>
                      <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: repo.language === 'Python' ? '#3572A5'
                          : repo.language === 'JavaScript' ? '#f7df1e'
                          : repo.language === 'Java' ? '#b07219'
                          : repo.language === 'C++' ? '#f34b7d'
                          : '#00ff9f',
                        marginRight: '4px',
                      }} />
                      {repo.language}
                    </span>
                  )}
                  <span>{repo.forks_count} forks</span>
                </div>
              </motion.a>
            ))}
      </div>

      {/* HACKER Contribution Graph */}
      <motion.div
        className="glass-card"
        style={{ marginTop: '2rem', padding: '1.5rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          marginBottom: '1rem',
        }}>
          Contribution Activity
        </div>
        <div className="contrib-graph">
          {contribCells.map((level, i) => (
            <div key={i} className={`contrib-cell ${level}`} />
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '4px',
          marginTop: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--text-dim)',
        }}>
          Less
          <div className="contrib-cell" style={{ width: '10px', height: '10px' }} />
          <div className="contrib-cell l1" style={{ width: '10px', height: '10px' }} />
          <div className="contrib-cell l2" style={{ width: '10px', height: '10px' }} />
          <div className="contrib-cell l3" style={{ width: '10px', height: '10px' }} />
          <div className="contrib-cell l4" style={{ width: '10px', height: '10px' }} />
          More
        </div>
      </motion.div>
    </section>
  );
}
