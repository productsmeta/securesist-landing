import type { Metadata } from "next";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.securesist.com";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

interface BlogPostResponse {
  status: string;
  data: {
    title?: string;
    slug?: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    keywords?: string[] | null;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  try {
    const res = await apiFetch<BlogPostResponse>(
      BlogsUrl.GET_BLOG_BY_SLUG(slug)
    );
    const post = res?.data;

    if (!post) {
      return {
        title: "SECURESIST | Blog",
        description: "Read articles and news from SECURESIST.",
        robots: { index: true, follow: true },
        alternates: { canonical: `${siteUrl}/${locale}/press-center/${slug}` },
      };
    }

    const title =
      (typeof post.metaTitle === "string" && post.metaTitle.trim()) ||
      (typeof post.title === "string" && post.title.trim()) ||
      "SECURESIST | Blog";
    const description =
      (typeof post.metaDescription === "string" && post.metaDescription.trim()) ||
      "Read articles and news from SECURESIST.";
    const keywords =
      Array.isArray(post.keywords) && post.keywords.length > 0
        ? post.keywords
        : undefined;
    const canonical = `${siteUrl}/${locale}/press-center/${post.slug ?? slug}`;

    return {
      title,
      description,
      keywords,
      robots: { index: true, follow: true },
      alternates: { canonical },
    };
  } catch {
    return {
      title: "SECURESIST | Blog",
      description: "Read articles and news from SECURESIST.",
      robots: { index: true, follow: true },
      alternates: { canonical: `${siteUrl}/${locale}/press-center/${slug}` },
    };
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
