import { notFound } from "next/navigation";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { Metadata } from "next";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;

  try {
    const response = await apiFetch<BlogPostResponse>(
      BlogsUrl.GET_BLOG_BY_SLUG(slug)
    );

    if (response?.status === "success" && response?.data) {
      const post = response.data;
      const postSlug = post.slug ?? slug;
      const canonical = `${siteUrl}/${locale}/press-center/${postSlug}`;
      const imageUrl = post.coverImage || `${siteUrl}/og-default.png`;

      return {
        title: post.metaTitle,
        description: post.metaDescription,
        keywords: post.keywords,
        robots: { index: true, follow: true },
        alternates: {
          canonical,
          languages: {
            en: `${siteUrl}/en/press-center/${postSlug}`,
            ar: `${siteUrl}/ar/press-center/${postSlug}`,
            "x-default": `${siteUrl}/en/press-center/${postSlug}`,
          },
        },
        openGraph: {
          type: "article",
          title: post.metaTitle,
          description: post.metaDescription,
          url: canonical,
          siteName: "SECURESIST",
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
          locale: locale === "en" ? "en_US" : "ar_EG",
          publishedTime: post.createdAt,
          modifiedTime: post.updatedAt,
          authors: ["SECURESIST"],
        },
        twitter: {
          card: "summary_large_image",
          title: post.metaTitle,
          description: post.metaDescription,
          images: [imageUrl],
          creator: "@securesist",
          site: "@securesist",
        },
      };
    }
  } catch {
    // Return default metadata if fetch fails
  }

  return {
    title: "Blog Post | SECURESIST",
    description: "Read our latest cybersecurity insights and updates.",
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${siteUrl}/${locale}/press-center/${slug}`,
      languages: {
        en: `${siteUrl}/en/press-center/${slug}`,
        ar: `${siteUrl}/ar/press-center/${slug}`,
        "x-default": `${siteUrl}/en/press-center/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  let post: BlogPostResponse["data"] | null = null;

  try {
    const response = await apiFetch<BlogPostResponse>(
      BlogsUrl.GET_BLOG_BY_SLUG(slug)
    );
    if (response?.status === "success" && response?.data) {
      post = response.data;
    }
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const authorName =
    post.author && typeof post.author === "object" && "name" in post.author
      ? String((post.author as { name?: string }).name ?? "SECURESIST")
      : "SECURESIST";

  return (
    <main className="min-h-screen bg-white">
      <ArticleSchema
        title={String(post.title ?? "")}
        description={String(post.metaDescription ?? post.title ?? "")}
        slug={String(post.slug ?? slug)}
        locale={locale}
        image={post.coverImage ?? null}
        datePublished={String(post.createdAt ?? "")}
        dateModified={String(post.updatedAt ?? post.createdAt ?? "")}
        authorName={authorName}
      />
      <BlogPostHero
        coverImage={post.coverImage ?? null}
        title={String(post.title ?? "")}
        category={String(post.category ?? "Blog")}
      />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <BlogPostMeta
            createdAt={String(post.createdAt ?? "")}
            readingTime={Number(post.readingTime) || 0}
          />

          <BlogContent content={String(post.content ?? "")} />

          <BlogPostCTA />
        </div>
      </article>
    </main>
  );
}