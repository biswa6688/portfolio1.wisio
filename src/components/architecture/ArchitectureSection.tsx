import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { FlowDiagram } from '../infographic/FlowDiagram';
import { generalLayers, architecturePaths } from '../../data/architecture';
import './ArchitectureSection.css';

export function ArchitectureSection() {
  return (
    <Section
      id="architecture"
      eyebrow="How I Build Software"
      title="One set of engineering layers, three specialized paths"
      description="The same layered discipline applied to web, telephony, and native engineering."
    >
      <Reveal className="architecture-general">
        <FlowDiagram layers={generalLayers.layers} direction="horizontal" />
      </Reveal>

      <div className="architecture-paths">
        {architecturePaths.map((path, i) => (
          <Reveal key={path.id} delay={i * 100} className="architecture-path card">
            <h3 className="architecture-path-title">{path.label}</h3>
            <FlowDiagram layers={path.layers} direction="vertical" compact />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
