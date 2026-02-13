const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  locale: string;
  image: string | null | { url: string };
  datePublished: string;
  dateModified: string;
  authorName?: string;
}

/**
 * Article JSON-LD for SEO. Rendered on the server so crawlers see it in the initial HTML.
 */
export function ArticleSchema({
  title,
  description,
  slug,
  locale,
  image,
  datePublished,
  dateModified,
  authorName = "SECURESIST",
}: ArticleSchemaProps) {
  const url = `${siteUrl}/${locale}/press-center/${slug}`;
  const imageStr =
    typeof image === "string"
      ? image
      : image && typeof image === "object" && "url" in image
        ? String((image as { url: string }).url)
        : "";
  const imageUrl =
    imageStr && (imageStr.startsWith("http") ? imageStr : `${siteUrl}${imageStr.startsWith("/") ? "" : "/"}${imageStr}`);

  const safeDesc = typeof description === "string" ? description.replace(/\r?\n/g, " ").trim() : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: typeof title === "string" ? title : "",
    description: safeDesc,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "SECURESIST",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
