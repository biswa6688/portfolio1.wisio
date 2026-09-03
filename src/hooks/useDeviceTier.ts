import { useEffect, useState } from 'react';

export type DeviceTier = 'desktop' | 'tablet' | 'mobile';

function computeTier(): DeviceTier {
  if (typeof window === 'undefined') return 'desktop';
  const w = window.innerWidth;
  if (w < 640) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

/** Drives Three.js scene complexity: full on desktop, reduced on tablet, simplified on mobile. */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>(computeTier);

  useEffect(() => {
    const onResize = () => setTier(computeTier());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return tier;
}
