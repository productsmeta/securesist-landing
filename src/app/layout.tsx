import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
 
 
//  Oxygen font
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
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
        className={`${oxygen.variable} antialiased`}
      >
  
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
