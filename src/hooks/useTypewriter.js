import { useEffect, useState } from 'react';
import { usePerformanceMode } from './usePerformanceMode';

export function useTypewriter(text, options = {}) {
  const { speed = 28, delay = 0, enabled = true } = options;
  const { reduced } = usePerformanceMode();
  const [output, setOutput] = useState('');
  const source = Array.isArray(text) ? text.join('\n') : text;

  useEffect(() => {
    if (!enabled || reduced) {
      setOutput(source);
      return undefined;
    }

    let index = 0;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        index += 1;
        setOutput(source.slice(0, index));
        if (index >= source.length) window.clearInterval(timer);
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [delay, enabled, reduced, source, speed]);

  return output;
}
