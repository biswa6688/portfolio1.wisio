import { useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';

export interface GraphNode {
  id: string;
  label: string;
  sublabel?: string;
  color: string;
  size?: number;
  dimmed?: boolean;
}

export interface GraphConnection {
  from: string;
  to: string;
}

interface NodeGraphProps {
  nodes: GraphNode[];
  centerLabel: string;
  centerSublabel?: string;
  centerColor: string;
  connections?: GraphConnection[];
  onNodeHover?: (id: string | null) => void;
  onNodeClick?: (id: string) => void;
  activeId?: string | null;
  dimUnrelated?: boolean;
  autoRotate?: boolean;
  interactive?: boolean;
  radius?: number;
  showCenterLabel?: boolean;
  offsetX?: number;
}

/** Fibonacci-sphere distribution — even spacing without clustering at poles. */
function useSpherePositions(count: number, radius: number): THREE.Vector3[] {
  return useMemo(() => {
    const points: THREE.Vector3[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / Math.max(count - 1, 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      points.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius * 0.72, Math.sin(theta) * r * radius));
    }
    return points;
  }, [count, radius]);
}

function Node({
  position,
  node,
  isActive,
  isDimmed,
  onHover,
  onClick,
  interactive,
}: {
  position: THREE.Vector3;
  node: GraphNode;
  isActive: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
  onClick?: (id: string) => void;
  interactive: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const size = node.size ?? 0.16;
  const targetScale = hovered || isActive ? 1.4 : 1;

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          if (!interactive) return;
          e.stopPropagation();
          setHovered(true);
          onHover(node.id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          if (!interactive) return;
          e.stopPropagation();
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
        onClick={(e) => {
          if (!interactive) return;
          e.stopPropagation();
          onClick?.(node.id);
        }}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered || isActive ? 0.9 : 0.35}
          transparent
          opacity={isDimmed ? 0.25 : 1}
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>
      <Html
        center
        distanceFactor={13}
        occlude={false}
        style={{
          pointerEvents: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--color-text)',
          opacity: isDimmed ? 0.3 : hovered || isActive ? 1 : 0.85,
          whiteSpace: 'nowrap',
          transition: 'opacity 150ms ease',
          textShadow: '0 2px 8px var(--color-bg)',
        }}
      >
        {node.label}
      </Html>
    </group>
  );
}

export function NodeGraph({
  nodes,
  centerLabel,
  centerSublabel,
  centerColor,
  connections,
  onNodeHover,
  onNodeClick,
  activeId,
  dimUnrelated = false,
  autoRotate = true,
  interactive = true,
  radius = 4.2,
  showCenterLabel = true,
  offsetX = 0,
}: NodeGraphProps) {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useSpherePositions(nodes.length, radius);
  const pointer = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const edges: [THREE.Vector3, THREE.Vector3][] = useMemo(() => {
    if (connections && connections.length) {
      const map = new Map(nodes.map((n, i) => [n.id, positions[i]]));
      return connections
        .map(({ from, to }) => {
          const a = from === '__center__' ? new THREE.Vector3(0, 0, 0) : map.get(from);
          const b = to === '__center__' ? new THREE.Vector3(0, 0, 0) : map.get(to);
          return a && b ? ([a, b] as [THREE.Vector3, THREE.Vector3]) : null;
        })
        .filter((e): e is [THREE.Vector3, THREE.Vector3] => e !== null);
    }
    return positions.map((p) => [new THREE.Vector3(0, 0, 0), p] as [THREE.Vector3, THREE.Vector3]);
  }, [connections, nodes, positions]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (autoRotate) {
      groupRef.current.rotation.y += delta * 0.08;
    }
    if (interactive) {
      const targetX = pointer.current.y * 0.15;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04);
    }
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    pointer.current.x = (e.clientX / size.width) * 2 - 1;
    pointer.current.y = (e.clientY / size.height) * 2 - 1;
  };

  return (
    <group ref={groupRef} position={[offsetX, 0, 0]} onPointerMove={handlePointerMove as unknown as (e: unknown) => void}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={centerColor}
          transparent
          opacity={0.18}
          lineWidth={1}
        />
      ))}

      <mesh>
        <sphereGeometry args={[0.36, 24, 24]} />
        <meshStandardMaterial color={centerColor} emissive={centerColor} emissiveIntensity={0.6} roughness={0.3} />
      </mesh>
      {showCenterLabel && (
        <Html center distanceFactor={11} occlude={false} style={{ pointerEvents: 'none', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: 'var(--color-text)', textShadow: '0 2px 8px var(--color-bg)' }}>
            {centerLabel}
          </div>
          {centerSublabel && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-primary)' }}>{centerSublabel}</div>
          )}
        </Html>
      )}

      {nodes.map((node, i) => (
        <Node
          key={node.id}
          node={node}
          position={positions[i]}
          isActive={activeId === node.id}
          isDimmed={Boolean(node.dimmed) || (dimUnrelated && activeId !== null && activeId !== undefined && activeId !== node.id)}
          onHover={(id) => onNodeHover?.(id)}
          onClick={onNodeClick}
          interactive={interactive}
        />
      ))}
    </group>
  );
}
