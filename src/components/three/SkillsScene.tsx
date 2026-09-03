import { useMemo } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { NodeGraph, type GraphNode } from './NodeGraph';
import { skills } from '../../data/skills';
import { useThreeColors } from '../../hooks/useThreeColors';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import type { SkillCategoryId } from '../../types';

interface SkillsSceneProps {
  activeCategory: SkillCategoryId | 'all';
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

const CATEGORY_COLOR_KEY: Record<string, keyof ReturnType<typeof useThreeColors>> = {
  languages: 'languages',
  backend: 'backend',
  frontend: 'frontend',
  databases: 'databases',
  communication: 'communication',
};

export function SkillsScene({ activeCategory, hoveredId, onHover, onSelect }: SkillsSceneProps) {
  const colors = useThreeColors();
  const reducedMotion = useReducedMotion();

  const nodes: GraphNode[] = useMemo(
    () =>
      skills.map((s) => ({
        id: s.id,
        label: s.name,
        color: colors[CATEGORY_COLOR_KEY[s.category]] || colors.primary,
        size: activeCategory === 'all' || activeCategory === s.category ? 0.24 : 0.16,
        dimmed: activeCategory !== 'all' && activeCategory !== s.category,
      })),
    [colors, activeCategory],
  );

  const connections = useMemo(() => {
    const seen = new Set<string>();
    const edges: { from: string; to: string }[] = [];
    skills.forEach((s) => {
      (s.relatedTo ?? []).forEach((rel) => {
        const key = [s.id, rel].sort().join('|');
        if (!seen.has(key) && skills.some((sk) => sk.id === rel)) {
          seen.add(key);
          edges.push({ from: s.id, to: rel });
        }
      });
    });
    return edges;
  }, []);

  return (
    <SceneCanvas cameraPosition={[0, 0.6, 10.5]} ariaLabel="Interactive technology constellation grouped by language, backend, frontend, database, and communication categories">
      <NodeGraph
        nodes={nodes}
        centerLabel="Tech Ecosystem"
        centerColor={colors.accent}
        connections={connections}
        activeId={hoveredId}
        autoRotate={!reducedMotion}
        interactive={!reducedMotion}
        onNodeHover={onHover}
        onNodeClick={onSelect}
        radius={4.6}
      />
    </SceneCanvas>
  );
}
