export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://resoluteair.com/sitemap.xml', // Replace with actual domain
  };
}
