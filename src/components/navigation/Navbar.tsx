import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'products', label: 'Products' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" onClick={handleNavClick('home')}>
          <span className="navbar-brand-mark" aria-hidden="true" />
          BN
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar-link ${active === item.id ? 'active' : ''}`}
              onClick={handleNavClick(item.id)}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-menu-link ${active === item.id ? 'active' : ''}`}
            onClick={handleNavClick(item.id)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
