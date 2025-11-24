import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SECURESIST - Cybersecurity Awareness Training",
  description: "Transform your organization's cybersecurity posture with intelligent, role-based training that keeps your team engaged and secure.",
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
