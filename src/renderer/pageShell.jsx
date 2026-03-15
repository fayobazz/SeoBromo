import React from 'react';
import SeoHead from '@/components/SeoHead';

export function PageShell({ children, pageContext }) {
  const documentProps = pageContext.exports.documentProps || {};

  return (
    <React.StrictMode>
      <SeoHead {...documentProps} />
      {children}
    </React.StrictMode>
  );
}