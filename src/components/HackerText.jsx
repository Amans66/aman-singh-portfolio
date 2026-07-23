import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function HackerText({ text, as: Component = 'span', className = '', speed = 30 }) {
  const [displayText, setDisplayText] = useState(text);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (inView && !hasRun) {
      setHasRun(true);
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText((prev) => 
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, speed);
      
      return () => clearInterval(interval);
    }
  }, [inView, text, speed, hasRun]);

  return (
    <Component ref={ref} className={className} data-text={text}>
      {hasRun ? displayText : text.replace(/./g, '-')}
    </Component>
  );
}
