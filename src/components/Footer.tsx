"use client";

import { Link } from "../i18n/routing";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  // Only links to pages that exist: /about, /solutions, /partners, /press-center, /contact
  const quickLinks = [
    { labelKey: "company.about" as const, href: "/about" },
    { labelKey: "solutions.title" as const, href: "/solutions" },
    { labelKey: "partners" as const, href: "/partners" },
    { labelKey: "company.press" as const, href: "/press-center" },
    { labelKey: "contactUs" as const, href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/SecureSist/61587328047197/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/securesist/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@SecureSist", label: "Youtube" },
  ];
  
  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="container py-6 md:py-8">
        <div className="grid gap-5 lg:grid-cols-12 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="SECURESIST"
                width={72}
                height={72}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mb-4 text-slate-300 text-xs leading-relaxed max-w-sm">
              {t("description")}
            </p>
            <h3 className="mb-2 text-[10px] font-semibold text-white uppercase tracking-wider">
              {t("contactUs")}
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-800 text-blue-400">
                  <Mail className="h-3 w-3" />
                </span>
                <a href={`mailto:${t("email")}`} className="text-slate-300 hover:text-blue-400 transition-colors">
                  {t("email")}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-800 text-blue-400 mt-0.5">
                  <Phone className="h-3 w-3" />
                </span>
                <div className="flex flex-col gap-0">
                  <a href="tel:00971568966556" className="text-slate-300 hover:text-blue-400 transition-colors">
                    {t("phone1")}
                  </a>
                  <a href="tel:00971503174898" className="text-slate-300 hover:text-blue-400 transition-colors">
                    {t("phone2")}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-800 text-blue-400 mt-0.5">
                  <MapPin className="h-3 w-3" />
                </span>
                <span className="text-slate-300">{t("address")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-8">
            <h3 className="mb-2 text-[10px] font-semibold text-white uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 sm:gap-x-6">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container py-3 md:py-4">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-400 order-2 sm:order-1">
              {t("copyright", { year: currentYear })}
            </p>
            <div className="flex items-center gap-2 order-1 sm:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-7 w-7 flex items-center justify-center rounded bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <social.icon className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
