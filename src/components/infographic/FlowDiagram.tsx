import type { ArchitectureLayer } from '../../types';
import './FlowDiagram.css';

interface FlowDiagramProps {
  layers: ArchitectureLayer[];
  direction?: 'vertical' | 'horizontal';
  compact?: boolean;
}

export function FlowDiagram({ layers, direction = 'vertical', compact = false }: FlowDiagramProps) {
  return (
    <ol className={`flow-diagram ${direction} ${compact ? 'compact' : ''}`} aria-label="Architecture flow">
      {layers.map((layer, i) => (
        <li key={layer.id} className="flow-step">
          <span className="flow-step-box">
            <span className="flow-step-label">{layer.label}</span>
            {layer.sublabel && <span className="flow-step-sublabel">{layer.sublabel}</span>}
          </span>
          {i < layers.length - 1 && (
            <span className="flow-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                {direction === 'vertical' ? (
                  <path d="M12 2 L12 20 M6 14 L12 20 L18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M2 12 L20 12 M14 6 L20 12 L14 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
