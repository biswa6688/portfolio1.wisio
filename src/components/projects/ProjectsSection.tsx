import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';
import { DomainIllustration } from './DomainIllustration';
import './ProjectsSection.css';

const ILLUSTRATION_MAP: Record<string, 'handicraft' | 'gemstone' | 'network'> = {
  'ambuja-exporters': 'handicraft',
  'tarini-exporters': 'gemstone',
  paxblue: 'network',
  pramax: 'network',
};

function techName(id: string) {
  return skills.find((s) => s.id === id)?.name ?? id;
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Web platforms across three business domains"
      description="Customer-facing commerce and business-network platforms built end to end."
    >
      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 90} className="project-card card">
            <div className="project-illustration">
              <DomainIllustration kind={ILLUSTRATION_MAP[project.id]} />
            </div>
            <div className="project-body">
              <div className="project-head">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-domain">{project.domain}</span>
              </div>
              <p className="project-description">{project.description}</p>

              <ul className="project-visual-concepts">
                {project.visualConcept.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.technologies.map((t) => (
                  <span key={t} className="project-tech-chip">
                    {techName(t)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
