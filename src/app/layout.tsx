import type { Metadata } from "next";
// 
// Comfortaa font
import { Comfortaa } from "next/font/google";
// import { Oxygen } from "next/font/google";

import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Lazy load Footer as it's below the fold
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

// Lazy load Toaster - non-critical (client component)
const ToasterClient = dynamic(() => import("@/components/ToasterClient").then(mod => ({ default: mod.ToasterClient })));
 
 
//  Oxygen font - optimized loading
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comfortaa",
  display: "swap", // Optimize font loading
  preload: true,
});
export const metadata: Metadata = {
  title: "SECURESIST - Cybersecurity Awareness Training",
  description: "Transform your organization's cybersecurity posture with intelligent, role-based training that keeps your team engaged and secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${comfortaa.variable} antialiased`}
      >
  
        <Navbar />
        {children}
        <Footer />
        <ToasterClient />
      </body>
    </html>
  );
}
