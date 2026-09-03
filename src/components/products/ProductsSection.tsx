import { Suspense, lazy } from 'react';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { products } from '../../data/products';
import { ProductCard } from './ProductCard';
import { TechMatrix } from './TechMatrix';
import './ProductsSection.css';

const ProductUniverseScene = lazy(() =>
  import('../three/ProductUniverseScene').then((m) => ({ default: m.ProductUniverseScene })),
);

const flagship = products.filter((p) => p.flagship);
const telephony = products.filter((p) => p.category === 'telephony');

export function ProductsSection() {
  return (
    <Section
      id="products"
      eyebrow="Products"
      title="Engineering products, not portfolio filler"
      description="Native engines, JavaScript SDKs, and telephony integrations built for other applications to build on."
      wide
    >
      <div className="products-subsection">
        <h3 className="products-subheading">Flagship SDK Products</h3>
        <div className="products-grid flagship-grid">
          {flagship.map((p) => (
            <Reveal key={p.id} delay={80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="products-subsection">
        <h3 className="products-subheading">Telephony Applications</h3>
        <div className="products-grid">
          {telephony.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="products-subsection">
        <h3 className="products-subheading">Product Engineering Universe</h3>
        <p className="section-description" style={{ marginBottom: 20 }}>
          RADIX, VISION, the WebRTC wrapper SDK, and the telephony applications share a common engineering
          core — native code, JavaScript SDKs, and real-time communication.
        </p>
        <div className="product-universe-wrap">
          <Suspense fallback={<div className="product-universe-fallback" aria-hidden="true" />}>
            <ProductUniverseScene />
          </Suspense>
        </div>
      </div>

      <div className="products-subsection">
        <h3 className="products-subheading">Project / Technology Matrix</h3>
        <TechMatrix />
      </div>
    </Section>
  );
}
