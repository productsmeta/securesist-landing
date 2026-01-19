import { MetadataRoute } from 'next'

// Use environment variable for production domain
// Make sure to set NEXT_PUBLIC_SITE_URL in your Vercel/Cloudflare environment
// Example: https://securesist.com
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://securesist.com'

/**
 * Generate robots.txt
 * 
 * This generates a clean, standards-compliant robots.txt file.
 * 
 * Note: If you're using Cloudflare, it may add Content-Signal directives
 * automatically, which can cause warnings in Google Search Console.
 * These warnings are non-blocking and don't affect crawling/indexing.
 * 
 * The generated robots.txt will be accessible at: /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

