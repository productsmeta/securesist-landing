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

// Fonts
const zainFont = Zain({
  subsets: ["arabic"],
  weight: ["300","400","700"],
  variable: "--font-zain",
  display: "swap",
  preload: true
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300","400","700"],
  variable: "--font-comfortaa",
  display: "swap",
  preload: true
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
  if (!routing.locales.includes(locale as 'en' | 'ar')) notFound();

  const isArabic = locale === "ar";

  // تحميل المسجات من object messages
  const localeMessages = messages[locale as 'en' | 'ar'] || messages["en"];

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
