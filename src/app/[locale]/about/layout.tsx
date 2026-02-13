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
      ? "من نحن | SECURESIST | منصة التوعية بالأمن السيبراني"
      : "About SECURESIST | Cybersecurity Awareness Platform",
    description: isAr
      ? "اعرف المزيد عن SECURESIST وكيف نساعد المؤسسات على تقليل المخاطر السيبرانية البشرية من خلال التدريب والمحاكاة والرؤى السلوكية."
      : "Learn more about SECURESIST and how we help organizations reduce human cyber risk through training, simulations, and behavioral insights.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/about`,
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
