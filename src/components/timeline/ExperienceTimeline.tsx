import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { experience } from '../../data/experience';
import './ExperienceTimeline.css';

const CURRENT_YEAR = new Date().getFullYear();
const EARLIEST_YEAR = Math.min(...experience.map((e) => e.startYear));
const LATEST_YEAR = CURRENT_YEAR;
const TOTAL_SPAN = LATEST_YEAR - EARLIEST_YEAR;

function durationLabel(start: number, end?: number) {
  const years = (end ?? CURRENT_YEAR) - start;
  return `${years} yr${years === 1 ? '' : 's'}`;
}

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Career Timeline"
      title="14+ years, five roles, one throughline"
      description="Education-sector faculty roles running in parallel with the transition into full-time software engineering, followed by a decade of industry practice."
    >
      <ol className="timeline">
        {experience.map((item, i) => {
          const start = item.startYear;
          const end = item.endYear ?? CURRENT_YEAR;
          const offset = ((start - EARLIEST_YEAR) / TOTAL_SPAN) * 100;
          const width = Math.max(((end - start) / TOTAL_SPAN) * 100, 3);

          return (
            <Reveal key={item.id} as="li" delay={i * 80} className="timeline-item">
              <div className="timeline-marker">
                <span className={`timeline-dot ${item.domain}`} aria-hidden="true" />
                {i < experience.length - 1 && <span className="timeline-line" aria-hidden="true" />}
              </div>

              <div className="timeline-card card">
                <div className="timeline-card-head">
                  <h3 className="timeline-company">{item.company}</h3>
                  <span className={`timeline-badge ${item.domain}`}>
                    {item.domain === 'education' ? 'Faculty' : 'Industry'}
                  </span>
                </div>
                {item.fullName && <p className="timeline-fullname">{item.fullName}</p>}
                <p className="timeline-role">{item.role}</p>
                <div className="timeline-meta">
                  <span className="timeline-period">
                    {item.startYear} — {item.endYear ?? 'Present'}
                  </span>
                  <span className="timeline-duration">{durationLabel(item.startYear, item.endYear)}</span>
                </div>
                <div className="timeline-bar-track" aria-hidden="true">
                  <div className="timeline-bar-fill" style={{ marginLeft: `${offset}%`, width: `${width}%` }} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
