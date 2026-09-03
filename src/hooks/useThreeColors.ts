import { useEffect, useState } from 'react';
import { useTheme } from '../lib/theme';

export interface ThreeColors {
  bg: string;
  primary: string;
  primaryStrong: string;
  secondary: string;
  accent: string;
  accent2: string;
  text: string;
  border: string;
  languages: string;
  backend: string;
  frontend: string;
  databases: string;
  communication: string;
}

function readVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function readColors(): ThreeColors {
  return {
    bg: readVar('--color-bg'),
    primary: readVar('--color-primary'),
    primaryStrong: readVar('--color-primary-strong'),
    secondary: readVar('--color-secondary'),
    accent: readVar('--color-accent'),
    accent2: readVar('--color-accent-2'),
    text: readVar('--color-text'),
    border: readVar('--color-border'),
    languages: readVar('--color-skill-languages'),
    backend: readVar('--color-skill-backend'),
    frontend: readVar('--color-skill-frontend'),
    databases: readVar('--color-skill-databases'),
    communication: readVar('--color-skill-communication'),
  };
}

/** Reads CSS design-token colors so Three.js materials can react to theme changes. */
export function useThreeColors(): ThreeColors {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState<ThreeColors>(readColors);

  useEffect(() => {
    // Wait a frame so the data-theme attribute + CSS vars have applied.
    const id = requestAnimationFrame(() => setColors(readColors()));
    return () => cancelAnimationFrame(id);
  }, [resolvedTheme]);

  return colors;
}
