import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "المركز الإعلامي | SECURESIST | المدونة والأخبار"
    : "Press Center | SECURESIST | Blog & News";

  const description = isAr
    ? "آخر المقالات والأخبار عن الأمن السيبراني والتوعية والامتثال من فريق SECURESIST."
    : "Latest articles and news on cybersecurity, awareness, and compliance from the SECURESIST team.";

  const ogImage = `${siteUrl}/og-press-center.jpg`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/press-center`,
      languages: {
        en: `${siteUrl}/en/press-center`,
        ar: `${siteUrl}/ar/press-center`,
        "x-default": `${siteUrl}/en/press-center`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/${locale}/press-center`,
      siteName: "SECURESIST",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "المركز الإعلامي لـ SECURESIST"
            : "SECURESIST Press Center",
        },
      ],
      locale: isAr ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@securesist",
      site: "@securesist",
    },
  };
}

export default function PressCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
 