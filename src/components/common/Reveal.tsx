import type { ReactNode, CSSProperties } from 'react';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'li' | 'section';
  className?: string;
}

export function Reveal({ children, delay = 0, as = 'div', className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as 'div';
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
