import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "طلب عرض توضيحي | SECURESIST | اتصل بنا"
    : "Request a Demo | SECURESIST | Contact Us";

  const description = isAr
    ? "احصل على عرض توضيحي مخصص لمنصة SECURESIST للتوعية بالأمن السيبراني. نرد خلال 24 ساعة."
    : "Get a personalized demo of the SECURESIST cybersecurity awareness platform. We respond within 24 hours.";

  const ogImage = `${siteUrl}/og-contact.jpg`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages: {
        en: `${siteUrl}/en/contact`,
        ar: `${siteUrl}/ar/contact`,
        "x-default": `${siteUrl}/en/contact`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/${locale}/contact`,
      siteName: "SECURESIST",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "اتصل بـ SECURESIST"
            : "Contact SECURESIST",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}