import { Suspense, lazy } from 'react';
import { profile } from '../../data/profile';
import './Hero.css';

const HeroScene = lazy(() => import('../three/HeroScene').then((m) => ({ default: m.HeroScene })));

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-scene-layer">
        <Suspense fallback={<div className="hero-scene-fallback" aria-hidden="true" />}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="container hero-content">
        <span className="eyebrow">{profile.role} · {profile.experienceYears} Years</span>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-focus-tags" aria-label="Focus areas">
          {profile.focusAreas.slice(0, 6).map((f) => (
            <span key={f} className="hero-tag">
              {f}
            </span>
          ))}
        </div>

        <div className="hero-cta">
          <button type="button" className="btn btn-primary" onClick={() => scrollTo('experience')}>
            Explore Experience
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo('projects')}>
            Explore Projects
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo('products')}>
            Explore Products
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
