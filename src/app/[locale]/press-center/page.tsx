"use client";

import { useQuery } from "@tanstack/react-query";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { apiFetch } from "@/helpers/apiConfig";
import { BlogsUrl } from "@/helpers/apiConfig";

// API Response Types
interface BlogAuthor {
  name?: string;
  [key: string]: unknown;
}

interface BlogPost {
  _id: string;
  author?: string | BlogAuthor | null;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  coverImage: string | null;
  content: string;
  category: string;
  tags: string[];
  readingTime: number;
  createdAt: string;
  updatedAt: string;
}

interface BlogsResponse {
  status: string;
  count: number;
  total: number;
  data: BlogPost[];
  message: string;
}

// Component Blog Post Type
interface ComponentBlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Announcement: "bg-blue-100 text-blue-700 border-blue-200",
    "Best Practices": "bg-green-100 text-green-700 border-green-200",
    Compliance: "bg-purple-100 text-purple-700 border-purple-200",
    Partners: "bg-orange-100 text-orange-700 border-orange-200",
    Training: "bg-cyan-100 text-cyan-700 border-cyan-200",
    Analytics: "bg-pink-100 text-pink-700 border-pink-200",
    Business: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };
  return colors[category] || "bg-slate-100 text-slate-700 border-slate-200";
};

// Helper to check if URL is a video
const isVideoUrl = (url: string | null): boolean => {
  if (!url) return false;
  return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm') || url.toLowerCase().endsWith('.mov') || url.includes('/video/');
};

export default function BlogPage() {
  const {
    data: blogPosts = [],
    isLoading: loading,
    error: queryError,
  } = useQuery<ComponentBlogPost[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await apiFetch<BlogsResponse>(BlogsUrl.GET_ALL_BLOGS);
      
      if (response.status === "success" && response.data) {
        return response.data.map((post, index) => ({
          _id: post._id,
          slug: post.slug,
          title: post.title,
          excerpt: post.metaDescription || post.content.substring(0, 150) + "...",
          date: post.createdAt,
          readTime: `${post.readingTime} min read`,
          category: post.category,
          image: post.coverImage || "/contact_us.jpg",
          featured: index === 0, // First post is featured
        }));
      }
      return [];
    },
  });

  const error = queryError instanceof Error ? queryError.message : queryError ? "Failed to load blogs" : null;
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading blogs...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badgeText="Our Blog"
            title="Latest"
            titleHighlight="Insights & News"
            description="Stay updated with the latest cybersecurity trends, best practices, and announcements from SECURESIST"
          />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <Badge className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  Featured Article
                </Badge>
              </div>
              <Card className="overflow-hidden border-0 bg-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative h-[300px] md:h-full min-h-[400px]">
                    {isVideoUrl(featuredPost.image) ? (
                      <video
                        src={featuredPost.image}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 hover:scale-110"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <Badge variant="outline" className={getCategoryColor(featuredPost.category)}>
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4 font-black">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-6">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <Button asChild className="group w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Link href={`/press-center/${featuredPost.slug}`} className="flex items-center gap-2">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
                All Articles
              </h2>
              <p className="text-lg text-slate-600">
                Explore our collection of cybersecurity insights and best practices
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card
                  key={post._id}
                  className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    {isVideoUrl(post.image) ? (
                      <video
                        src={post.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-end">
                      <Button asChild variant="ghost" size="sm" className="group/btn">
                        <Link
                          href={`/press-center/${post.slug}`}
                          className="flex items-center gap-1 text-blue-600"
                        >
                          Read
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
