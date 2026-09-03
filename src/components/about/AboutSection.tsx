import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { profile } from '../../data/profile';
import { products } from '../../data/products';
import { projects } from '../../data/projects';
import './AboutSection.css';

const DNA_BRANCHES = [
  'Frontend',
  'Backend',
  'Desktop',
  'Telephony',
  'SDK',
  'Database',
  'WebRTC',
  'Product Engineering',
];

const STATS = [
  { value: profile.experienceYears, label: 'Years Experience' },
  { value: String(products.length), label: 'Engineering Products' },
  { value: String(projects.length), label: 'Web Projects' },
  { value: '5', label: 'Communication Technologies' },
];

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering DNA"
      description={profile.summary}
    >
      <div className="dna-strip" role="list" aria-label="Engineering focus areas">
        {DNA_BRANCHES.map((branch, i) => (
          <Reveal key={branch} delay={i * 60} as="div" className="dna-node-wrap">
            <div role="listitem" className="dna-node">
              <span className="dna-node-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="dna-node-label">{branch}</span>
            </div>
            {i < DNA_BRANCHES.length - 1 && <span className="dna-connector" aria-hidden="true" />}
          </Reveal>
        ))}
      </div>

      <div className="about-stats" role="list" aria-label="Career statistics">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} as="div">
            <div role="listitem" className="stat-card card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
