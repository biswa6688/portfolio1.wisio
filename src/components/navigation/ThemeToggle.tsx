import { useTheme, type ThemeMode } from '../../lib/theme';
import './ThemeToggle.css';

const MODES: { mode: ThemeMode; label: string; icon: string }[] = [
  { mode: 'light', label: 'Light theme', icon: '☀' },
  { mode: 'dark', label: 'Dark theme', icon: '●' },
  { mode: 'system', label: 'System theme', icon: '◐' },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {MODES.map(({ mode: m, label, icon }) => (
        <button
          key={m}
          type="button"
          className={`theme-toggle-btn ${mode === m ? 'active' : ''}`}
          aria-pressed={mode === m}
          aria-label={label}
          title={label}
          onClick={() => setMode(m)}
        >
          <span aria-hidden="true">{icon}</span>
        </button>
      ))}
    </div>
  );
}
