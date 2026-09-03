import { Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDeviceTier } from '../../hooks/useDeviceTier';

interface SceneCanvasProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  ariaLabel: string;
  className?: string;
}

function Loader() {
  return null;
}

/** Shared Canvas setup: capped DPR, tiered lighting, and an accessible fallback wrapper. */
export function SceneCanvas({ children, cameraPosition = [0, 0, 9], ariaLabel, className }: SceneCanvasProps) {
  const tier = useDeviceTier();
  const dpr: [number, number] = tier === 'mobile' ? [1, 1.5] : tier === 'tablet' ? [1, 1.75] : [1, 2];

  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Canvas
        dpr={dpr}
        camera={{ position: cameraPosition, fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={60} />
        <pointLight position={[-6, -4, -4]} intensity={20} />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
