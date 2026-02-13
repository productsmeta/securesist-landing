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
      ? "شركاؤنا | SECURESIST | برنامج الشركاء"
      : "Partners | SECURESIST | Partner Program",
    description: isAr
      ? "انضم إلى برنامج شركاء SECURESIST. ساعد العملاء على بناء ثقافة أمنية مرنة مع تدريب قائم على الأدوار ونتائج قابلة للقياس."
      : "Join the SECURESIST partner program. Help customers build resilient security cultures with role-based training, measurable outcomes, and trusted expertise.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/partners`,
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
