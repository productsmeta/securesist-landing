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
      ? "المركز الإعلامي | SECURESIST | المدونة والأخبار"
      : "Press Center | SECURESIST | Blog & News",
    description: isAr
      ? "آخر المقالات والأخبار عن الأمن السيبراني والتوعية والامتثال من فريق SECURESIST."
      : "Latest articles and news on cybersecurity, awareness, and compliance from the SECURESIST team.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/press-center`,
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
