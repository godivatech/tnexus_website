import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical = '',
  ogType = 'website',
  ogImage = 'https://thenexusconstruction.com/images/og-image.png',
}) => {
  const siteUrl = 'https://thenexusconstruction.com';
  // If canonical starts with http, use it as is; otherwise combine with siteUrl
  const canonicalUrl = canonical.startsWith('http') 
    ? canonical 
    : `${siteUrl}${canonical.startsWith('/') ? canonical : '/' + canonical}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
};

export default SEO;
