import { useEffect, useRef, useState } from 'react';
import { usePerformanceMode } from './usePerformanceMode';

export function useCursorTracking() {
  const { lowPower } = usePerformanceMode();
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const positionRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const elementRef = useRef(null);

  useEffect(() => {
    if (lowPower) return undefined;

    let rafId = 0;
    const onMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      setHidden(Boolean(event.target.closest('[data-cursor-hidden="true"]')));
    };

    const onOver = (event) => {
      setHidden(Boolean(event.target.closest('[data-cursor-hidden="true"]')));
      setActive(Boolean(event.target.closest('a, button, input, textarea, select, [data-cursor="target"]')));
    };

    const animate = () => {
      const pos = positionRef.current;
      const target = targetRef.current;
      pos.x = target.x;
      pos.y = target.y;
      if (elementRef.current) {
        const scale = active ? 1.55 : 1;
        elementRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate3d(-50%, -50%, 0) scale(${scale})`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
    };
  }, [active, lowPower]);

  return { elementRef, active, hidden, disabled: lowPower };
}
