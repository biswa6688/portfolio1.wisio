type IllustrationKind = 'handicraft' | 'gemstone' | 'network';

function HandicraftIllustration() {
  return (
    <svg viewBox="0 0 120 80" role="presentation" aria-hidden="true">
      <circle cx="60" cy="40" r="26" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <path
        d="M60 18 L68 34 L86 34 L71 45 L77 62 L60 51 L43 62 L49 45 L34 34 L52 34 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="60" cy="40" r="3" fill="currentColor" />
    </svg>
  );
}

function GemstoneIllustration() {
  return (
    <svg viewBox="0 0 120 80" role="presentation" aria-hidden="true">
      <path d="M40 26 L80 26 L96 42 L60 66 L24 42 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M40 26 L60 42 L80 26 M24 42 L60 42 L96 42 M60 42 L60 66" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

function NetworkIllustration() {
  const nodes = [
    [60, 20],
    [30, 45],
    [90, 45],
    [15, 68],
    [45, 68],
    [75, 68],
    [105, 68],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ];
  return (
    <svg viewBox="0 0 120 80" role="presentation" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 5 : 3.5} fill="currentColor" opacity={i === 0 ? 1 : 0.75} />
      ))}
    </svg>
  );
}

export function DomainIllustration({ kind }: { kind: IllustrationKind }) {
  if (kind === 'handicraft') return <HandicraftIllustration />;
  if (kind === 'gemstone') return <GemstoneIllustration />;
  return <NetworkIllustration />;
}
