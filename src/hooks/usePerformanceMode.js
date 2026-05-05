import { useEffect, useState } from 'react';

export function usePerformanceMode() {
  const [mode, setMode] = useState({ reduced: false, lowPower: false });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const check = () => {
      const nav = navigator;
      const lowThreads = nav.hardwareConcurrency && nav.hardwareConcurrency <= 4;
      const lowMemory = nav.deviceMemory && nav.deviceMemory <= 4;
      const saveData = nav.connection?.saveData;
      setMode({
        reduced: media.matches,
        lowPower: Boolean(media.matches || lowThreads || lowMemory || saveData)
      });
    };

    check();
    media.addEventListener?.('change', check);
    return () => media.removeEventListener?.('change', check);
  }, []);

  return mode;
}
