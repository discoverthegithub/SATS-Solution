import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteName = "SATS Solutions";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://sats-solutions.vercel.app"; // Update with final production domain
  const defaultDescription = "Scale your enterprise with custom AI agents and secure cloud infrastructure. Founded by elite engineers from Yale and UPenn.";
  const defaultImage = "/epic_newyork.png";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "Enterprise AI, Automation, USA, Cloud Infrastructure, Medical AI, Yale, UPenn"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
