import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";
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
    google: "HHKif-Sg8xktnkDDA_n2i5Kx8v69f7uvCYRl3q56HdE",
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
      </body>
    </html>
  );
}
