import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Render the decorative background into a container appended to document.body
// using a React portal. This keeps it outside the main #root subtree so
// app-level stacking contexts (transforms/filters on ancestors) cannot
// accidentally place the background above page UI.
export default function Design({ count = 5 }) {
  const [mounted, setMounted] = useState(false);
  const [container] = useState(() => document && document.createElement('div'));

  useEffect(() => {
    // Import styles dynamically when the component actually mounts
    import('./design.scss').catch((err) => console.error('Failed to load design styles', err));

    // Prepare container used as portal root
    container.setAttribute('id', 'design-portal');
    // keep it non-interactive
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);
    setMounted(true);

    return () => {
      try {
        document.body.removeChild(container);
      } catch (e) {
        /* ignore */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stars = Array.from({ length: count }, (_, i) => <div className="star" key={i} />);

  if (!mounted) return null;

  return createPortal(
    <div className="stars" aria-hidden="true">{stars}</div>,
    container
  );
}