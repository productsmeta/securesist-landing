"use client";

import { memo } from "react";
import { Link, usePathname } from "../i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Navbar = memo(() => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const t = useTranslations("nav");

  // navItems بدون locale prefix هنا، Link هيتعامل مع الـ locale تلقائي
  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("solutions"), href: "/solutions" },
    { label: t("partners"), href: "/partners" },
    { label: t("pressCenter"), href: "/press-center" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <Image src="/logo.png" alt="SecureSist Logo" width={130} height={130} />
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group relative inline-flex h-12 items-center px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${
                        isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                      <span className="pointer-events-none absolute -bottom-0.5 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CTA Button */}
            <Link href="/contact">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-500 border-0 px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25 hover:scale-105">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {t("getStarted")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        )}

        {/* Mobile Nav */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="relative overflow-hidden border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80 bg-white/95 backdrop-blur-xl border-l border-slate-200/60"
            >
              <SheetHeader className="border-b border-slate-200/60 pb-4">
                <SheetTitle className="text-left flex items-center gap-3">
                  <Image src="/logo.png" alt="SecureSist Logo" width={130} height={130} />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link href={item.href} key={item.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start h-12 text-left font-semibold hover:bg-slate-50 ${
                          isActive ? "bg-blue-50 text-blue-600" : ""
                        }`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-slate-200/60 space-y-2">
                  <LanguageSwitcher />
                  <Link href="/contact">
                    <Button className="w-full group relative overflow-hidden bg-blue-600 border-0 font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25">
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        {t("getStarted")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
