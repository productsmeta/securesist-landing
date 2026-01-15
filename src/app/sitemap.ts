import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

// Website base URL - update this with your actual domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://securesist.vercel.app'
const apiBaseUrl = 'https://securesist.vercel.app/api/landingPage'

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
}

