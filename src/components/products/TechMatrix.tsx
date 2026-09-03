import { useState } from 'react';
import { techMatrix, techMatrixColumns } from '../../data/architecture';
import './TechMatrix.css';

export function TechMatrix() {
  const [hoveredCol, setHoveredCol] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <div className="tech-matrix-wrap">
      <table className="tech-matrix">
        <caption className="visually-hidden">Product to technology relationship matrix</caption>
        <thead>
          <tr>
            <th scope="col" className="tech-matrix-corner">
              Product
            </th>
            {techMatrixColumns.map((col) => (
              <th
                key={col.id}
                scope="col"
                className={hoveredCol === col.id ? 'active' : ''}
                onMouseEnter={() => setHoveredCol(col.id)}
                onMouseLeave={() => setHoveredCol(null)}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {techMatrix.map((row) => (
            <tr
              key={row.productId}
              className={hoveredRow === row.productId ? 'active' : ''}
              onMouseEnter={() => setHoveredRow(row.productId)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <th scope="row">{row.productName}</th>
              {techMatrixColumns.map((col) => {
                const on = Boolean(row.tags[col.id]);
                const highlighted = hoveredCol === col.id || hoveredRow === row.productId;
                return (
                  <td key={col.id} className={highlighted ? 'active' : ''}>
                    {on ? (
                      <span className="tech-matrix-check" aria-label={`${row.productName} uses ${col.label}`}>
                        ✓
                      </span>
                    ) : (
                      <span aria-hidden="true">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
