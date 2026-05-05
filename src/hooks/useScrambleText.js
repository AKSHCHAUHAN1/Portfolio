import { useEffect, useMemo, useState } from 'react';
import { usePerformanceMode } from './usePerformanceMode';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_//[]{}#$%';

export function useScrambleText(value, options = {}) {
  const { duration = 900, delay = 0, enabled = true } = options;
  const { reduced } = usePerformanceMode();
  const [output, setOutput] = useState(value);
  const chars = useMemo(() => CHARS.split(''), []);

  useEffect(() => {
    if (!enabled || reduced) {
      setOutput(value);
      return undefined;
    }

    let frame = 0;
    let rafId = 0;
    let delayId = 0;
    const totalFrames = Math.max(1, Math.round(duration / 32));

    const tick = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const next = value
        .split('')
        .map((letter, index) => {
          if (letter === ' ') return ' ';
          const threshold = index / value.length;
          if (progress > threshold + 0.25) return letter;
          return chars[(index + frame * 3) % chars.length];
        })
        .join('');

      setOutput(next);
      if (frame < totalFrames) rafId = requestAnimationFrame(tick);
      else setOutput(value);
    };

    delayId = window.setTimeout(() => {
      setOutput('');
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(delayId);
      cancelAnimationFrame(rafId);
    };
  }, [chars, delay, duration, enabled, reduced, value]);

  return output;
}
