import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const customCommands = {
  help: `Available commands:
  help      - Show this help message
  about     - About Aman Singh
  skills    - Technical skills
  projects  - View projects
  contact   - Contact information
  github    - GitHub profile
  linkedin  - LinkedIn profile
  clear     - Clear terminal
  whoami    - Who am I?
  neofetch  - System info
  
Standard Linux commands:
  ls, cd, pwd, cat, echo, date`,

  about: `┌──────────────────────────────────────────┐
│           AMAN SINGH                     │
│  Aspiring Cybersecurity Analyst          │
├──────────────────────────────────────────┤
│  > VAPT (Web & Internal Systems)         │
│  > Malware Analysis (VMware & Sysinternals)
│  > Cyber Security Intern @ ICSS Kolkata  │
│  > Top 4% on TryHackMe (50+ Labs)       │
│  > B.Tech CSE (Cyber Security) @ LPU     │
└──────────────────────────────────────────┘`,

  skills: `[PROGRAMMING]
  └── Python        ██████████████████░░ 90%

[SECURITY TOOLS]
  ├── Burp Suite    ████████████████░░░░ 80%
  ├── OWASP ZAP     ███████████████░░░░░ 75%
  ├── Nmap          ██████████████████░░ 90%
  ├── Nikto         ███████████████░░░░░ 75%
  ├── Wireshark     ██████████████████░░ 90%
  └── Metasploit    ████████████████░░░░ 80%

[CORE CONCEPTS & OS]
  ├── VAPT & OWASP Top 10
  ├── Malware Analysis & Sysinternals
  ├── Cryptography & Networking
  └── Kali Linux & Windows`,

  projects: `[1] Threat Detection Suite (Jun 2025 – Jul 2025)
    ├── Port Scanner & Web Vuln Scanner
    ├── Intrusion Detection System (IDS)
    └── Scapy Packet Analysis + Streamlit Dashboard

[2] ShieldCrypt (Apr 2025 – May 2025)
    ├── Dual-layer encryption (ROT13 + AES-128)
    └── PyCryptodome + PyFiglet/Termcolor CLI

[3] Delta – Malware Behavior Analysis Lab (Oct 2025 – Jan 2026)
    ├── Isolated VMware Workstation Environment
    └── Procmon, Process Explorer, Autoruns & Wireshark

→ GitHub: https://github.com/Amans66`,

  contact: `┌─ CONTACT INFO ──────────────────────────┐
│                                          │
│  📍 Rohta, Agra, Uttar Pradesh           │
│  ✉  amansinghbhadauria2005@gmail.com    │
│  📱 +91-7291810034                       │
│  🔗 github.com/Amans66                   │
│  🔗 linkedin.com/in/aman-singh66         │
│                                          │
└──────────────────────────────────────────┘`,

  whoami: `aman_singh
uid=1337(aman) gid=1337(analyst) groups=1337(analyst),27(sudo),999(pentesters),500(malware_analyst)`,

  neofetch: `       ██████████████████
     ████████████████████████       aman@portfolio
   ██████████████████████████████   ──────────────
  ████████████        ████████████  OS: Kali Linux 2025.1
  ███████████  ██████  ███████████  Role: Cybersecurity Analyst
  ██████████  ████████  ██████████  Education: B.Tech CSE (Cyber Sec) @ LPU
  ██████████  ████████  ██████████  THM Ranking: Top 4% (50+ labs)
  ███████████  ██████  ███████████  Internship: ICSS Kolkata
  ████████████        ████████████  Location: Agra, UP, India
   ██████████████████████████████   CPU: Brain @ 3.5GHz
     ████████████████████████       Memory: Infinite
       ██████████████████           Uptime: 2023 - Present`
};

const fileSystem = {
  '~': {
    type: 'dir',
    contents: {
      'role.txt': 'Aspiring Cybersecurity Analyst | VAPT | Malware Analysis | Security Tool Developer',
      'experience.txt': 'Cyber Security Intern at Indian Cyber Security Solutions (ICSS), Kolkata (Jul 2025 - Oct 2025)',
      'portfolio': {
        type: 'dir',
        contents: {
          'index.html': '<html><body><h1>Aman Singh Portfolio</h1></body></html>',
          'access_log.txt': '192.168.1.10 - - [23/Jul/2026:10:45:00 +0530] "GET / HTTP/1.1" 200',
        }
      },
      '.hidden_config': 'SECRET_KEY=rcs_ctf_2025_champion'
    }
  }
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Aman\'s interactive terminal. Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState('~');
  
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const getDirContent = (path) => {
    if (path === '~') return fileSystem['~'].contents;
    if (path === '~/portfolio') return fileSystem['~'].contents['portfolio'].contents;
    return null;
  };

  const processCommand = (cmdStr) => {
    const args = cmdStr.trim().split(/\s+/);
    const cmd = args[0].toLowerCase();

    // Standard actions
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let output = '';
    let isError = false;

    // Custom commands as "binaries"
    if (customCommands[cmd]) {
      output = customCommands[cmd];
    } else if (cmd === 'github') {
      output = `Opening GitHub profile...\n→ https://github.com/Amans66`;
      setTimeout(() => window.open('https://github.com/Amans66', '_blank'), 500);
    } else if (cmd === 'linkedin') {
      output = `Opening LinkedIn profile...\n→ https://www.linkedin.com/in/aman-singh66/`;
      setTimeout(() => window.open('https://www.linkedin.com/in/aman-singh66/', '_blank'), 500);
    } else if (cmd === 'echo') {
      output = args.slice(1).join(' ');
    } else if (cmd === 'date') {
      output = new Date().toString();
    } else if (cmd === 'pwd') {
      output = currentPath === '~' ? '/home/aman' : currentPath.replace('~', '/home/aman');
    } else if (cmd === 'ls') {
      const dirLogs = getDirContent(currentPath);
      if (dirLogs) {
        const showAll = args.includes('-a') || args.includes('-al') || args.includes('-la');
        const files = Object.entries(dirLogs).filter(([name]) => showAll || !name.startsWith('.'));
        output = files.map(([name, val]) => {
           if (typeof val === 'object' && val.type === 'dir') return `<span style="color: #3b82f6; font-weight: bold;">${name}/</span>`;
           return name;
        }).join('  ');
        if (!output) output = ''; // Empty dir
      } else {
        output = `ls: cannot access '${currentPath}': No such file or directory`;
        isError = true;
      }
    } else if (cmd === 'cd') {
      const target = args[1] || '~';
      if (target === '~' || target === '/home/aman') {
        setCurrentPath('~');
      } else if (target === '..') {
        if (currentPath === '~/portfolio') setCurrentPath('~');
        else if (currentPath === '~') setCurrentPath('/');
        else setCurrentPath(currentPath); // Root dummy
      } else if (target === '.') {
        // Do nothing
      } else if (currentPath === '~' && target === 'portfolio') {
        setCurrentPath('~/portfolio');
      } else if (target === '/') {
        setCurrentPath('/');
      } else {
        output = `bash: cd: ${target}: No such file or directory`;
        isError = true;
      }
    } else if (cmd === 'cat') {
      if (!args[1]) {
        output = ''; // waiting for stream, simulate nothing
      } else {
        const file = args[1];
        const dirLogs = getDirContent(currentPath);
        if (dirLogs && dirLogs[file]) {
          if (typeof dirLogs[file] === 'object') {
            output = `cat: ${file}: Is a directory`;
            isError = true;
          } else {
            output = dirLogs[file];
          }
        } else {
          output = `cat: ${file}: No such file or directory`;
          isError = true;
        }
      }
    } else {
      output = `bash: ${cmd}: command not found\nType "help" for a list of available commands.`;
      isError = true;
    }

    const newHistory = [
      ...history,
      { type: 'command', text: cmdStr, path: currentPath },
    ];
    if (output) {
      newHistory.push({ type: 'output', text: output, isError, isHtml: cmd === 'ls' });
    }
    setHistory(newHistory);
  };

  const handleCommandSubmit = (cmdStr) => {
    if (!cmdStr.trim()) return;
    setCmdHistory(prev => [cmdStr, ...prev]);
    setHistoryIndex(-1);
    processCommand(cmdStr);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommandSubmit(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, cmdHistory.length - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      if (newIndex < 0) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    }
  };

  return (
    <section id="terminal" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// LIVE TERMINAL</div>
        <h2 className="section-title">
          Interactive <span className="highlight">Terminal</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <motion.div
        className="terminal-window interactive-terminal"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="terminal-title">aman@kali: {currentPath === '~' ? '~' : currentPath}</span>
        </div>
        <div
          className="terminal-body"
          ref={scrollRef}
          style={{ maxHeight: '400px', minHeight: '300px', overflowY: 'auto', cursor: 'text', scrollBehavior: 'smooth' }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} className="terminal-output-block">
              {entry.type === 'command' ? (
                <div style={{ marginBottom: '0.25rem' }}>
                  <span className="terminal-prompt">aman@kali</span>
                  <span style={{ color: '#555' }}>:</span>
                  <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{entry.path}</span>
                  <span style={{ color: '#555' }}>$ </span>
                  <span className="terminal-command">{entry.text}</span>
                </div>
              ) : (
                entry.isHtml ? (
                  <pre 
                    dangerouslySetInnerHTML={{ __html: entry.text }}
                    style={{
                      color: entry.isError ? '#ff3e3e' : '#e0e0e0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      lineHeight: '1.5',
                    }}
                  />
                ) : (
                  <pre style={{
                    color: entry.isError ? '#ff3e3e' : '#e0e0e0',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    lineHeight: '1.5',
                  }}>
                    {entry.text}
                  </pre>
                )
              )}
            </div>
          ))}

          <div className="terminal-input-line">
            <span className="terminal-prompt">aman@kali</span>
            <span style={{ color: '#555' }}>:</span>
            <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{currentPath}</span>
            <span style={{ color: '#555' }}>$ </span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
