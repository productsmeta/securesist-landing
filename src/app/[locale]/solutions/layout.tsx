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
      ? "الحلول | SECURESIST | منصة التوعية بالأمن السيبراني"
      : "Solutions | SECURESIST | Cybersecurity Training & Awareness",
    description: isAr
      ? "احمِ مؤسستك بمنصات التدريب والمحاكاة المتطورة للأمن السيبراني. تدريب توعية ومحاكاة التصيد الاحتيالي وقياس النتائج."
      : "Protect your organization with cutting-edge cybersecurity training and simulation platforms. Awareness training, phishing simulation, and measurable outcomes.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/solutions`,
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
