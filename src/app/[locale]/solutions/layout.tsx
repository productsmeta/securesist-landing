import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "الحلول | SECURESIST | منصة التوعية بالأمن السيبراني"
    : "Solutions | SECURESIST | Cybersecurity Training & Awareness";

  const description = isAr
    ? "احمِ مؤسستك بمنصات التدريب والمحاكاة المتطورة للأمن السيبراني. تدريب توعية ومحاكاة التصيد الاحتيالي وقياس النتائج."
    : "Protect your organization with cutting-edge cybersecurity training and simulation platforms. Awareness training, phishing simulation, and measurable outcomes.";

  const ogImage = `${siteUrl}/og-solutions.jpg`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/solutions`,
      languages: {
        en: `${siteUrl}/en/solutions`,
        ar: `${siteUrl}/ar/solutions`,
        "x-default": `${siteUrl}/en/solutions`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/${locale}/solutions`,
      siteName: "SECURESIST",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "حلول SECURESIST"
            : "SECURESIST Solutions",
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

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}