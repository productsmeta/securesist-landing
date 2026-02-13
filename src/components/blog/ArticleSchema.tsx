const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  locale: string;
  image: string | null;
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
  const imageUrl = image?.startsWith("http") ? image : image ? `${siteUrl}${image}` : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description.replace(/\r?\n/g, " ").trim(),
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
    ...(imageUrl && { image: imageUrl }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
