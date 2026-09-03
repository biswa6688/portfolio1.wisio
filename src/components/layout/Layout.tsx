import type { ReactNode } from 'react';
import { Navbar } from '../navigation/Navbar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
    </>
  );
}
