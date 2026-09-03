import type { Product } from '../../types';
import { FlowDiagram } from '../infographic/FlowDiagram';
import { skills } from '../../data/skills';
import './ProductCard.css';

const EXTRA_TECH_LABELS: Record<string, string> = {
  'windows-native': 'Windows Native Library',
};

function techName(id: string) {
  return skills.find((s) => s.id === id)?.name ?? EXTRA_TECH_LABELS[id] ?? id;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card card ${product.flagship ? 'flagship' : ''}`}>
      <div className="product-card-head">
        <div>
          <span className={`product-category-badge ${product.category}`}>{product.category}</span>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-tagline">{product.tagline}</p>
        </div>
        {product.client && (
          <div className="product-client">
            <span className="product-client-label">Client</span>
            <span className="product-client-value">{product.client}</span>
          </div>
        )}
      </div>

      <p className="product-description">{product.description}</p>

      <div className="product-diagram">
        <FlowDiagram layers={product.architecture} direction="vertical" compact />
      </div>

      <div className="product-tech">
        {product.technologies.map((t) => (
          <span key={t} className="product-tech-chip">
            {techName(t)}
          </span>
        ))}
      </div>
    </article>
  );
}
