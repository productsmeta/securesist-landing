import { Comfortaa, Zain } from "next/font/google"; 
import "./../globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar"; 
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Lazy load Footer
// const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

// Lazy load ToasterClient
// const ToasterClient = dynamic(
//   () => import("@/components/ToasterClient").then(mod => ({ default: mod.ToasterClient })),
//   { ssr: false } // ToasterClient Client Component
// );

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
  const locale = (await params).locale as any;

  if (!routing.locales.includes(locale)) notFound();

  const isArabic = locale === "ar";

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className={`${isArabic ? zainFont.variable : comfortaa.variable} ${
          isArabic ? "font-zain" : "font-comfortaa"
        } antialiased`}
      >
        <Navbar />
        {children}
        {/*<Footer />
        <ToasterClient /> */}
      </div>
    </NextIntlClientProvider>
  );
}
