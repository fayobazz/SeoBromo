import React from 'react';

export default function SeoHead({
  title = 'Default Title',
  description = '',
  keywords = '',
  og = {},
  twitter = {},
  schema = {}
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={og.title || title} />
      <meta property="og:description" content={og.description || description} />
      <meta property="og:image" content={og.image} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitter.card || 'summary_large_image'} />
      <meta name="twitter:title" content={twitter.title || title} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          ...schema
        })}
      </script>
    </>
  );
}