import { useMemo } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { NodeGraph, type GraphNode } from './NodeGraph';
import { skills, skillCategories } from '../../data/skills';
import { profile } from '../../data/profile';
import { useThreeColors } from '../../hooks/useThreeColors';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDeviceTier } from '../../hooks/useDeviceTier';

const CATEGORY_COLOR_KEY: Record<string, keyof ReturnType<typeof useThreeColors>> = {
  languages: 'languages',
  backend: 'backend',
  frontend: 'frontend',
  databases: 'databases',
  communication: 'communication',
};

export function HeroScene() {
  const colors = useThreeColors();
  const reducedMotion = useReducedMotion();
  const tier = useDeviceTier();

  const visibleSkills = useMemo(() => {
    if (tier === 'mobile') return skills.filter((_, i) => i % 2 === 0);
    return skills;
  }, [tier]);

  const nodes: GraphNode[] = useMemo(
    () =>
      visibleSkills.map((s) => ({
        id: s.id,
        label: s.name,
        color: colors[CATEGORY_COLOR_KEY[s.category]] || colors.primary,
        size: 0.14,
      })),
    [visibleSkills, colors],
  );

  return (
    <SceneCanvas
      cameraPosition={[0, 0.2, 11.5]}
      ariaLabel={`Interactive 3D visualization: ${profile.name}, connected to ${skillCategories.length} technology categories representing ${profile.experienceYears} years of experience`}
    >
      <NodeGraph
        nodes={nodes}
        centerLabel={profile.name}
        centerSublabel={`${profile.experienceYears} yrs`}
        centerColor={colors.primary}
        showCenterLabel={false}
        autoRotate={!reducedMotion}
        interactive={!reducedMotion && tier !== 'mobile'}
        radius={3.4}
        offsetX={0}
      />
    </SceneCanvas>
  );
}
