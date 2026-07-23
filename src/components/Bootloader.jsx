import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hexChars = '0123456789ABCDEF';
const randomHex = (len) => Array.from({length: len}).map(() => hexChars[Math.floor(Math.random() * 16)]).join('');

export default function Bootloader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    let currentLines = [];
    let p = 0;
    
    // Fast scrolling hex logs
    const logInterval = setInterval(() => {
      const type = Math.random();
      let newLine = '';
      if (type > 0.85) {
        newLine = `[SYS] Mount /dev/sda1 ... OK`;
      } else if (type > 0.7) {
        newLine = `[NET] Establishing secure tunnel: ${randomHex(4)}:${randomHex(4)}:${randomHex(4)}`;
      } else if (type > 0.55) {
        newLine = `[CRYPTO] Decrypting payload: 0x${randomHex(16)}`;
      } else if (type > 0.4) {
        newLine = `[PROCESS] Injecting memory offset 0x${randomHex(8)}`;
      } else {
        newLine = `0x${randomHex(4)}  ${randomHex(8)} ${randomHex(8)} ${randomHex(8)} ${randomHex(8)}`;
      }
      
      currentLines.push(newLine);
      if (currentLines.length > 30) currentLines.shift(); // Keep max 30 lines
      setLines([...currentLines]);
    }, 40);

    // Progress bar
    const progInterval = setInterval(() => {
      p += Math.random() * 4;
      if (p >= 100) {
        p = 100;
        clearInterval(logInterval);
        clearInterval(progInterval);
        
        setTimeout(() => {
          setGranted(true);
          // Auto-complete after showing granted screen briefly
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1500);
        }, 300);
      }
      setProgress(Math.floor(p));
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="bootloader"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <AnimatePresence>
        {!granted ? (
          <motion.div 
            key="loading"
            className="hacker-boot-screen"
            exit={{ opacity: 0 }}
          >
            <div className="boot-logs">
              {lines.map((l, i) => <div key={i}>{l}</div>)}
            </div>
            <div className="boot-overlay">
              <div className="progress-container">
                <div className="progress-text">SYS.DECRYPT_SEQUENCE_INIT // {progress}%</div>
                <div className="progress-bar-wrap">
                  <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="granted"
            className="access-granted-screen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h1 className="glitch" data-text="ACCESS GRANTED">ACCESS GRANTED</h1>
            <div className="sub-access">Authentication Complete</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
