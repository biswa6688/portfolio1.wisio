import { Suspense, lazy, useMemo, useState } from 'react';
import { Section } from '../layout/Section';
import { skillCategories, skills } from '../../data/skills';
import type { SkillCategoryId } from '../../types';
import './SkillsSection.css';

const SkillsScene = lazy(() => import('../three/SkillsScene').then((m) => ({ default: m.SkillsScene })));

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryId | 'all'>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredSkill = useMemo(() => skills.find((s) => s.id === hoveredId) ?? null, [hoveredId]);
  const hoveredCategory = useMemo(
    () => skillCategories.find((c) => c.id === hoveredSkill?.category) ?? null,
    [hoveredSkill],
  );

  return (
    <Section
      id="skills"
      eyebrow="Technology Ecosystem"
      title="An interactive skill constellation"
      description="Fourteen-plus years of connected technology choices — filter by category or explore the graph directly."
    >
      <div className="skills-filters" role="group" aria-label="Filter skills by category">
        <button
          type="button"
          className={`skills-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
          aria-pressed={activeCategory === 'all'}
        >
          All
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`skills-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            style={{ '--cat-color': cat.color } as React.CSSProperties}
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
          >
            <span className="skills-filter-dot" aria-hidden="true" />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-constellation-wrap">
        <Suspense fallback={<div className="skills-scene-fallback" aria-hidden="true" />}>
          <SkillsScene
            activeCategory={activeCategory}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            onSelect={setHoveredId}
          />
        </Suspense>

        <div className="skills-tooltip" aria-live="polite">
          {hoveredSkill ? (
            <>
              <span className="skills-tooltip-name">{hoveredSkill.name}</span>
              <span className="skills-tooltip-cat" style={{ color: hoveredCategory?.color }}>
                {hoveredCategory?.label}
              </span>
            </>
          ) : (
            <span className="skills-tooltip-hint">Hover or tap a node to inspect it</span>
          )}
        </div>
      </div>

      <div className="skills-groups">
        {skillCategories
          .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
          .map((cat) => (
            <div key={cat.id} className="skills-group">
              <h3 className="skills-group-title" style={{ color: cat.color }}>
                {cat.label}
              </h3>
              <ul className="skills-chip-list">
                {skills
                  .filter((s) => s.category === cat.id)
                  .map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        className={`skills-chip ${hoveredId === s.id ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredId(s.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onFocus={() => setHoveredId(s.id)}
                        onBlur={() => setHoveredId(null)}
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </Section>
  );
}
