import type { ReactNode } from 'react';
import { Reveal } from '../common/Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  wide?: boolean;
}

export function Section({ id, eyebrow, title, description, children, wide }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <div className={wide ? 'container' : 'container'} style={wide ? { maxWidth: 1400 } : undefined}>
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">{eyebrow}</span>
            <h2 id={`${id}-heading`} className="section-title">
              {title}
            </h2>
            {description && <p className="section-description">{description}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
