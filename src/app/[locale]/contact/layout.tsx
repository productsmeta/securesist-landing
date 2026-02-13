import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr
      ? "طلب عرض توضيحي | SECURESIST | اتصل بنا"
      : "Request a Demo | SECURESIST | Contact Us",
    description: isAr
      ? "احصل على عرض توضيحي مخصص لمنصة SECURESIST للتوعية بالأمن السيبراني. تواصل معنا خلال 24 ساعة."
      : "Get a personalized demo of the SECURESIST cybersecurity awareness platform. We respond within 24 hours.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
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
