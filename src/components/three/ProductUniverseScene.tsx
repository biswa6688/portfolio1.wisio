import { useMemo, useState } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { NodeGraph, type GraphNode, type GraphConnection } from './NodeGraph';
import { useThreeColors } from '../../hooks/useThreeColors';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const CONCEPTS = ['Native Code', 'JavaScript SDK', 'Communication', 'Browser Integration', 'Real-Time Systems', 'Windows', 'Telephony'];

const PRODUCT_CONCEPTS: Record<string, string[]> = {
  RADIX: ['Native Code', 'JavaScript SDK', 'Communication', 'Real-Time Systems', 'Telephony'],
  VISION: ['Native Code', 'JavaScript SDK', 'Windows', 'Browser Integration'],
  'WebRTC SDK': ['JavaScript SDK', 'Communication', 'Browser Integration', 'Real-Time Systems'],
  'Telephony Applications': ['Communication', 'Telephony'],
};

export function ProductUniverseScene() {
  const colors = useThreeColors();
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  const productNames = Object.keys(PRODUCT_CONCEPTS);

  const nodes: GraphNode[] = useMemo(() => {
    const conceptNodes: GraphNode[] = CONCEPTS.map((c) => ({
      id: c,
      label: c,
      color: colors.accent,
      size: 0.16,
    }));
    const productNodes: GraphNode[] = productNames.map((p) => ({
      id: p,
      label: p,
      color: colors.primary,
      size: 0.26,
    }));
    return [...productNodes, ...conceptNodes];
  }, [colors, productNames]);

  const connections: GraphConnection[] = useMemo(() => {
    const edges: GraphConnection[] = [];
    Object.entries(PRODUCT_CONCEPTS).forEach(([product, concepts]) => {
      concepts.forEach((concept) => edges.push({ from: product, to: concept }));
    });
    return edges;
  }, []);

  return (
    <SceneCanvas
      cameraPosition={[0, 0.5, 11]}
      ariaLabel="Product engineering universe: RADIX, VISION, WebRTC SDK and telephony applications connected through shared engineering concepts such as native code, JavaScript SDKs, and real-time communication"
    >
      <NodeGraph
        nodes={nodes}
        centerLabel="Product Engineering"
        centerColor={colors.accent2}
        connections={connections}
        activeId={hovered}
        autoRotate={!reducedMotion}
        interactive={!reducedMotion}
        onNodeHover={setHovered}
        radius={4.8}
      />
    </SceneCanvas>
  );
}
