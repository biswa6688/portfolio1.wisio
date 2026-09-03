import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { education } from '../../data/education';
import './EducationTimeline.css';

export function EducationTimeline() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="A twelve-year academic progression"
      description="From secondary school through a Master of Technology at NIT Rourkela."
    >
      <ol className="edu-track">
        <span className="edu-track-line" aria-hidden="true" />
        {education.map((item, i) => (
          <Reveal key={item.id} as="li" delay={i * 70} className="edu-milestone">
            <span className="edu-year">{item.year}</span>
            <span className="edu-dot" aria-hidden="true" />
            <div className="edu-card card">
              <span className="edu-qualification">{item.qualification}</span>
              <span className="edu-institution">{item.institution}</span>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
