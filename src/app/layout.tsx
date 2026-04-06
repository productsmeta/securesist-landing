import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";
/** Google tag (gtag.js) — same as https://support.google.com/analytics/answer/10089638 */
const gaId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-9VEFKJKECT";
const defaultLocale = "en";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SECURESIST - Cybersecurity Awareness Training",
  description:
    "Transform your organization's cybersecurity posture with intelligent, role-based training that keeps your team engaged and secure.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/${defaultLocale}`,
    languages: {
      en: `${siteUrl}/en`,
      ar: `${siteUrl}/ar`,
      "x-default": `${siteUrl}/en`,
    },
  },
  verification: {
    google: "zgeY1_3bPzoNudMs9K5h00f5xoejPyfj0kMlnZuM_1A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        {/* Google tag (gtag.js) — equivalent to the snippet from GA admin */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
          `}
        </Script>
      </body>
    </html>
  );
}
