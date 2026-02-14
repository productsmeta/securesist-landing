import type { Metadata } from "next";
import { Comfortaa, Zain } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/Navbar";
import { routing } from "../../i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { ToasterClient } from "@/components/ToasterClient";
import { QueryProvider } from "@/components/QueryProvider";

import { messages } from "@/messages/messages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "SECURESIST | منصة التوعية بالأمن السيبراني"
    : "SECURESIST | Cybersecurity Awareness Training";

  const description = isAr
    ? "حوّل وضع الأمن السيبراني لمؤسستك مع تدريب ذكي قائم على الأدوار يحافظ على تفاعل فريقك وأمانه."
    : "Transform your organization's cybersecurity posture with intelligent, role-based training that keeps your team engaged and secure.";

  const ogImage = `${siteUrl}/og-home.jpg`; // تأكد من وجود الصورة

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "SECURESIST",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "SECURESIST - منصة التوعية بالأمن السيبراني"
            : "SECURESIST - Cybersecurity Awareness Training Platform",
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
    verification: {
      google: "HHKif-Sg8xktnkDDA_n2i5Kx8v69f7uvCYRl3q56HdE",
    },
  };
}

// Fonts
const zainFont = Zain({
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
  variable: "--font-zain",
  display: "swap",
  preload: true,
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comfortaa",
  display: "swap",
  preload: true,
});

// Static params for SSG / ISR
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Server Layout Component
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  // لو اللغه مش موجوده
  if (!routing.locales.includes(locale as "en" | "ar")) notFound();

  const isArabic = locale === "ar";

  // تحميل المسجات من object messages
  const localeMessages = messages[locale as "en" | "ar"] || messages["en"];

  return (
    <QueryProvider>
      <NextIntlClientProvider locale={locale} messages={localeMessages}>
        <div
          className={`${isArabic ? zainFont.variable : comfortaa.variable} ${
            isArabic ? "font-zain" : "font-comfortaa"
          } antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
          <ToasterClient />
        </div>
      </NextIntlClientProvider>
    </QueryProvider>
  );
}