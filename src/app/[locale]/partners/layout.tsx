import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "شركاؤنا | SECURESIST | برنامج الشركاء"
    : "Partners | SECURESIST | Partner Program";

  const description = isAr
    ? "انضم إلى برنامج شركاء SECURESIST. ساعد العملاء على بناء ثقافة أمنية مرنة مع تدريب قائم على الأدوار ونتائج قابلة للقياس."
    : "Join the SECURESIST partner program. Help customers build resilient security cultures with role-based training, measurable outcomes, and trusted expertise.";

  const ogImage = `${siteUrl}/og-partners.jpg`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/partners`,
      languages: {
        en: `${siteUrl}/en/partners`,
        ar: `${siteUrl}/ar/partners`,
        "x-default": `${siteUrl}/en/partners`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/${locale}/partners`,
      siteName: "SECURESIST",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "برنامج شركاء SECURESIST"
            : "SECURESIST Partner Program",
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

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}