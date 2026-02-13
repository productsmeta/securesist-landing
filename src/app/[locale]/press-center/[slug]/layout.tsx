import type { Metadata } from "next";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

interface BlogPostResponse {
  status: string;
  data: {
    title: string;
    metaTitle: string | null;
    metaDescription: string | null;
    keywords?: string[] | null;
    canonical_url?: string | null;
    coverImage?: string | null;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  try {
    const response = await apiFetch<BlogPostResponse>(
      BlogsUrl.GET_BLOG_BY_SLUG(slug)
    );
    if (response?.status === "success" && response?.data) {
      const title =
        response.data.metaTitle?.trim() ||
        response.data.title?.trim() ||
        "SECURESIST Blog";
      const description =
        response.data.metaDescription?.trim() ||
        "Read more on the SECURESIST blog.";
      const keywords = response.data.keywords && response.data.keywords.length > 0
        ? response.data.keywords
        : undefined;
      const canonical =
        response.data.canonical_url?.trim() ||
        `${siteUrl}/${locale}/press-center/${slug}`;
      const rawImage = response.data.coverImage?.trim();
      const ogImageUrl =
        rawImage && (rawImage.startsWith("http") ? rawImage : `${siteUrl}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`);
      const fullTitle = `${title} | SECURESIST`;

      return {
        title: fullTitle,
        description,
        keywords,
        robots: {
          index: true,
          follow: true,
        },
        alternates: {
          canonical,
        },
        openGraph: {
          type: "article",
          title: fullTitle,
          description,
          url: canonical,
          siteName: "SECURESIST",
          ...(ogImageUrl && {
            images: [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
          }),
        },
        twitter: {
          card: "summary_large_image",
          title: fullTitle,
          description,
          ...(ogImageUrl && { images: [ogImageUrl] }),
        },
      };
    }
  } catch {
    // Fallback if fetch fails (e.g. 404)
  }
  return {
    title: "SECURESIST | Blog",
    description: "Read articles and news from SECURESIST.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/press-center/${slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
