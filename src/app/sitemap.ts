import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://securesist.com'
const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://api.securesist.com/landingPage').trim()

// Static routes for each locale
const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/partners',
  '/press-center',
  '/solutions',
]

async function getBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetch(`${apiBaseUrl}/blog`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      return []
    }
    
    const data = await response.json()
    
    if (data.status === 'success' && data.data && Array.isArray(data.data)) {
      return data.data.map((post: { slug: string }) => post.slug)
    }
    
    return []
  } catch (error) {
    console.error('Error fetching blog slugs for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const blogSlugs = await getBlogSlugs()
    
    const routes: MetadataRoute.Sitemap = []
    
    // Generate routes for each locale
    for (const locale of routing.locales) {
      // Add static routes
      for (const route of staticRoutes) {
        routes.push({
          url: `${baseUrl}/${locale}${route}`,
          lastModified: new Date(),
          changeFrequency: route === '' ? 'weekly' : 'monthly',
          priority: route === '' ? 1 : 0.8,
        })
      }
      
      // Add blog post routes
      for (const slug of blogSlugs) {
        routes.push({
          url: `${baseUrl}/${locale}/press-center/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      }
    }
    
    return routes
  } catch (error) {
    // Fallback: return at least the base routes if anything fails
    // This prevents 500 errors from breaking the sitemap
    console.error('Error generating sitemap:', error)
    const fallbackRoutes: MetadataRoute.Sitemap = []
    
    for (const locale of routing.locales) {
      fallbackRoutes.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      })
    }
    
    return fallbackRoutes
  }
}

