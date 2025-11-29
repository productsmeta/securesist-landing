"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";

// Blog posts data
const blogPosts = [
  {
    slug: "meta-techs-launches-securesist",
    title: "Meta Techs Launches SECURESIST to Reduce Human Risk",
    excerpt: "A people-first cybersecurity awareness platform built to turn employees into active defenders of your organization's security.",
    date: "2025-02-10",
    readTime: "5 min read",
    author: "Meta Techs Team",
    category: "Announcement",
    image: "/contact_us.jpg",
    featured: true,
  },
  {
    slug: "build-security-culture-90-days",
    title: "5 Practical Ways to Build a Security Culture in 90 Days",
    excerpt: "From role-based training to adaptive phishing simulations, here's how teams move the needle quickly and effectively.",
    date: "2025-01-28",
    readTime: "8 min read",
    author: "Sarah Johnson",
    category: "Best Practices",
    image: "/contact_us.jpg",
    featured: false,
  },
  {
    slug: "compliance-ready-reporting",
    title: "Compliance-Ready Reporting: What Auditors Want to See",
    excerpt: "Map training outcomes to frameworks and simplify evidence collection with clear, comprehensive dashboards.",
    date: "2025-01-12",
    readTime: "6 min read",
    author: "Michael Chen",
    category: "Compliance",
    image: "/contact_us.jpg",
    featured: false,
  },
  {
    slug: "partner-spotlight-securesist",
    title: "Partner Spotlight: Accelerating Outcomes with SECURESIST",
    excerpt: "How service partners attach awareness programs to risk assessments and vCISO offerings for maximum impact.",
    date: "2024-12-19",
    readTime: "7 min read",
    author: "David Martinez",
    category: "Partners",
    image: "/contact_us.jpg",
    featured: false,
  },
  {
    slug: "phishing-simulation-best-practices",
    title: "Phishing Simulation Best Practices: A Complete Guide",
    excerpt: "Learn how to design effective phishing campaigns that educate without overwhelming your employees.",
    date: "2024-12-05",
    readTime: "10 min read",
    author: "Emily Rodriguez",
    category: "Training",
    image: "/contact_us.jpg",
    featured: false,
  },
  {
    slug: "measuring-security-awareness-roi",
    title: "Measuring Security Awareness ROI: Key Metrics That Matter",
    excerpt: "Discover the metrics that truly matter when evaluating the success of your cybersecurity training program.",
    date: "2024-11-20",
    readTime: "9 min read",
    author: "James Wilson",
    category: "Analytics",
    image: "/contact_us.jpg",
    featured: false,
  },
];

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
  };
  return colors[category] || "bg-slate-100 text-slate-700 border-slate-200";
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 hover:scale-110"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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
                    <div className="flex items-center gap-2 mb-6 text-sm text-slate-600">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
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
                  key={post.slug}
                  className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
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
