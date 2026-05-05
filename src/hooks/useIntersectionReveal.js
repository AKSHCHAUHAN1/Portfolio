import { useEffect, useRef, useState } from 'react';
import { usePerformanceMode } from './usePerformanceMode';

export function useIntersectionReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { reduced } = usePerformanceMode();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, reduced]);

  return [ref, visible];
}
