import { notFound } from "next/navigation";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

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
   Page
======================= */
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
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ArticleSchema
        title={post.title}
        description={post.metaDescription || post.title}
        slug={post.slug}
        locale={locale}
        image={post.coverImage}
        datePublished={post.createdAt}
        dateModified={post.updatedAt}
      />
      <BlogPostHero
        coverImage={post.coverImage}
        title={post.title}
        category={post.category}
      />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <BlogPostMeta
            createdAt={post.createdAt}
            readingTime={post.readingTime}
          />

          <BlogContent content={post.content} articleTitle={post.title} />

          <BlogPostCTA />
        </div>
      </article>
    </main>
  );
}
