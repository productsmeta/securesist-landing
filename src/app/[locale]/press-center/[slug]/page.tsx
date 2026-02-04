"use client";

import { use, useMemo, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Loader2 } from "lucide-react";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";
import DOMPurify from "dompurify";

/* =======================
   Types
======================= */
interface BlogAuthor {
  name?: string;
  [key: string]: unknown;
}

interface BlogPostResponse {
  status: string;
  data: {
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
  };
  message: string;
}

/* =======================
   Helpers
======================= */
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

const isVideoUrl = (url: string | null) => {
  if (!url) return false;
  return (
    url.endsWith(".mp4") ||
    url.endsWith(".webm") ||
    url.endsWith(".mov") ||
    url.includes("/video/")
  );
};

/* =======================
   Page
======================= */
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = use(params);
  const contentRef = useRef<HTMLDivElement>(null);

  const { data: post, isLoading, error } = useQuery<BlogPostResponse["data"]>({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const res = await apiFetch<BlogPostResponse>(
        BlogsUrl.GET_BLOG_BY_SLUG(slug)
      );
      if (res.status === "success" && res.data) return res.data;
      throw new Error("Blog post not found");
    },
  });

  /* =======================
     Sanitize HTML Content (must be before early returns)
  ======================== */
  const htmlContent = useMemo(() => {
    if (!post?.content) return "";
    
    const content = String(post.content).trim();
    
    // Sanitize on client side only
    if (typeof window !== "undefined") {
      try {
        return DOMPurify.sanitize(content, {
          ALLOWED_TAGS: [
            "h1", "h2", "h3", "h4", "h5", "h6",
            "p", "br", "strong", "em", "u", "b", "i",
            "ul", "ol", "li", "a", "img",
            "blockquote", "code", "pre", "span", "div"
          ],
          ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "style"],
        });
      } catch (error) {
        console.error("DOMPurify error:", error);
        return content;
      }
    }
    
    // Server-side: return as-is (will be sanitized on client)
    return content;
  }, [post?.content]);

  // Set HTML directly using ref as primary method
  useEffect(() => {
    if (contentRef.current && htmlContent) {
      // Clear first
      contentRef.current.innerHTML = '';
      // Set sanitized HTML
      contentRef.current.innerHTML = htmlContent;
    }
  }, [htmlContent]);


  /* =======================
     Loading / Error
  ======================== */
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Post not found</p>
      </main>
    );
  }

  /* =======================
     Render
  ======================== */
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        {post.coverImage ? (
          isVideoUrl(post.coverImage) ? (
            <video
              src={post.coverImage}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          ) : (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute top-4 left-4 z-10">
          <Button asChild variant="secondary">
            <Link href="/press-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>

        <div className="absolute bottom-8 left-8 text-white max-w-3xl">
          <Badge
            variant="outline"
            className={`mb-3 ${getCategoryColor(post.category)}`}
          >
            {post.category}
          </Badge>
          <h1 className="text-4xl font-black">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Meta */}
          <div className="flex gap-6 text-sm text-slate-600 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {post.readingTime} min
            </span>
          </div>

          {/* HTML Body */}
          <style dangerouslySetInnerHTML={{ __html: `
            .blog-content h1 {
              font-size: 1.75rem;
              font-weight: 700;
              margin-top: 0.75rem;
              margin-bottom: 0.25rem;
              color: #0f172a;
            }
            .blog-content h1:first-child { margin-top: 0; }
            .blog-content h2 {
              font-size: 1.75rem;
              font-weight: 700;
              margin-top: 0.75rem;
              margin-bottom: 0.25rem;
              color: #0f172a;
            }
            .blog-content h2:first-child { margin-top: 0; }
            .blog-content h3 {
              font-size: 1.375rem;
              font-weight: 600;
              margin-top: 0.5rem;
              margin-bottom: 0.25rem;
              color: #0f172a;
            }
            .blog-content h3:first-child { margin-top: 0; }
            .blog-content h4 {
              font-size: 1.25rem;
              font-weight: 600;
              margin-top: 0.5rem;
              margin-bottom: 0.25rem;
              color: #0f172a;
            }
            .blog-content h4:first-child { margin-top: 0; }
            .blog-content p {
              font-size: 1.0625rem;
              color: #334155;
              line-height: 1.7;
              margin-bottom: 0.5rem;
            }
            .blog-content p:last-child { margin-bottom: 0; }
            .blog-content ul {
              list-style-type: disc;
              margin-left: 1.5rem;
              margin-top: 0.25rem;
              margin-bottom: 0.5rem;
            }
            .blog-content ol {
              list-style-type: decimal;
              margin-left: 1.5rem;
              margin-top: 0.25rem;
              margin-bottom: 0.5rem;
            }
            .blog-content li {
              font-size: 1.0625rem;
              color: #334155;
              margin-bottom: 0.125rem;
            }
            .blog-content a {
              color: #2563eb;
              font-weight: 600;
              text-decoration: none;
            }
            .blog-content a:hover {
              text-decoration: underline;
            }
            .blog-content strong {
              color: #0f172a;
              font-weight: 700;
            }
            .blog-content img {
              border-radius: 0.5rem;
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
            }
          `}} />
          <div
            ref={contentRef}
            className="blog-content max-w-none"
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-xl bg-blue-50 border">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Security Training?
            </h3>
            <Button asChild>
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
