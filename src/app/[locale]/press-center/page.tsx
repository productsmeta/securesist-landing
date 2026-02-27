import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const apiBaseUrl = (
  process.env.NEXT_PUBLIC_API_URL || "https://api.securesist.com/landingPage"
).trim();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

const POSTS_PER_PAGE = 9;

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  metaDescription: string;
  keywords: string[];
  coverImage: string | null;
  content: string;
  category: string;
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

interface ComponentBlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

const isVideoUrl = (url: string | null): boolean => {
  if (!url) return false;
  return (
    url.toLowerCase().endsWith(".mp4") ||
    url.toLowerCase().endsWith(".webm") ||
    url.toLowerCase().endsWith(".mov") ||
    url.includes("/video/")
  );
};

// ─── Data Fetching ─────────────────────────────────────────────────────────────

async function getBlogPage(
  page: number
): Promise<{ posts: ComponentBlogPost[]; total: number }> {
  try {
    const response = await fetch(
      `${apiBaseUrl}/blog?page=${page}&limit=${POSTS_PER_PAGE}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return { posts: [], total: 0 };

    const data: BlogsResponse = await response.json();

    if (data.status !== "success" || !Array.isArray(data.data)) {
      return { posts: [], total: 0 };
    }

    const posts = data.data.map((post) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      excerpt:
        post.metaDescription || post.content.substring(0, 150) + "...",
      date: post.createdAt,
      readTime: `${post.readingTime} min read`,
      category: post.category,
      image: post.coverImage || "/contact_us.jpg",
    }));

    return { posts, total: data.total };
  } catch {
    return { posts: [], total: 0 };
  }
}

// ─── Metadata (per page) ───────────────────────────────────────────────────────

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  const canonical =
    currentPage === 1
      ? `${siteUrl}/${locale}/press-center`
      : `${siteUrl}/${locale}/press-center?page=${currentPage}`;

  return {
    alternates: {
      canonical,
      languages: {
        en:
          currentPage === 1
            ? `${siteUrl}/en/press-center`
            : `${siteUrl}/en/press-center?page=${currentPage}`,
        ar:
          currentPage === 1
            ? `${siteUrl}/ar/press-center`
            : `${siteUrl}/ar/press-center?page=${currentPage}`,
        "x-default":
          currentPage === 1
            ? `${siteUrl}/en/press-center`
            : `${siteUrl}/en/press-center?page=${currentPage}`,
      },
    },
  };
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  const { posts, total } = await getBlogPage(currentPage);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Featured post only on first page
  const featuredPost = currentPage === 1 ? posts[0] : null;
  const regularPosts = currentPage === 1 ? posts.slice(1) : posts;

  if (posts.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 text-lg">
            No articles available at the moment.
          </p>
          <p className="text-slate-400 mt-2 text-sm">Please check back later.</p>
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

      {/* Featured Post — page 1 only */}
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
                      <Badge
                        variant="outline"
                        className={getCategoryColor(featuredPost.category)}
                      >
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
                    <Button
                      asChild
                      className="group w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Link
                        href={`/press-center/${featuredPost.slug}`}
                        className="flex items-center gap-2"
                      >
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
                Explore our collection of cybersecurity insights and best
                practices
              </p>
              {totalPages > 1 && (
                <p className="text-sm text-slate-400 mt-2">
                  Page {currentPage} of {totalPages} · {total} articles
                </p>
              )}
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
                      <Badge
                        variant="outline"
                        className={getCategoryColor(post.category)}
                      >
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
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="group/btn"
                      >
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                {/* Previous */}
                {currentPage > 1 ? (
                  <Link
                    href={
                      currentPage === 2
                        ? "/press-center"
                        : `/press-center?page=${currentPage - 1}`
                    }
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all text-sm font-medium"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-100 bg-slate-50 text-slate-300 text-sm font-medium cursor-not-allowed">
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </span>
                )}

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                      (p) =>
                        p === 1 ||
                        p === totalPages ||
                        Math.abs(p - currentPage) <= 1
                    )
                    .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                      if (idx > 0 && (arr[idx - 1] as number) + 1 < p) {
                        acc.push("...");
                      }
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((item, idx) =>
                      item === "..." ? (
                        <span
                          key={`ellipsis-${idx}`}
                          className="px-2 py-2 text-slate-400 text-sm"
                        >
                          …
                        </span>
                      ) : (
                        <Link
                          key={item}
                          href={
                            item === 1
                              ? "/press-center"
                              : `/press-center?page=${item}`
                          }
                          className={`min-w-[40px] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                            item === currentPage
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-blue-300"
                          }`}
                        >
                          {item}
                        </Link>
                      )
                    )}
                </div>

                {/* Next */}
                {currentPage < totalPages ? (
                  <Link
                    href={`/press-center?page=${currentPage + 1}`}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all text-sm font-medium"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-100 bg-slate-50 text-slate-300 text-sm font-medium cursor-not-allowed">
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
