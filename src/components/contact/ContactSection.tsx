import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import './ContactSection.css';

const CHANNELS = [
  { key: 'email', label: 'Email', href: contact.email ? `mailto:${contact.email}` : undefined, value: contact.email },
  { key: 'linkedin', label: 'LinkedIn', href: contact.linkedin || undefined, value: contact.linkedin },
  { key: 'github', label: 'GitHub', href: contact.github || undefined, value: contact.github },
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something connected"
      description={`Reach out to ${profile.name} about full-stack engineering, telephony integration, or SDK product work.`}
    >
      <div className="contact-grid">
        {CHANNELS.map((ch) => (
          <Reveal key={ch.key}>
            <div className="contact-card card">
              <span className="contact-label">{ch.label}</span>
              {ch.value ? (
                <a className="contact-value" href={ch.href}>
                  {ch.value}
                </a>
              ) : (
                <span className="contact-value placeholder">Coming soon</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
