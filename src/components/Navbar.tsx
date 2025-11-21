"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Shield, Sparkles, ArrowRight } from "lucide-react";
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

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions" },
  { label: "PARTNERS", href: "/partners" },
  { label: "PRESS CENTER", href: "/press-center" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-20 items-center justify-between">
        {/* Enhanced Brand Logo */}
        <Link href="/" className="group flex items-center justify-center transition-all duration-300 hover:scale-105">
          <div className="relative">
            <Image src="/logo.png" alt="SecureSist Logo" width={130} height={130} />
           </div>
  
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "group relative inline-flex h-12 items-center px-4 text-sm font-semibold transition-all duration-300 rounded-lg",
                        isActive
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600 ",
                      ].join(" ")}
                    >
                      {item.label}
                      <span className="pointer-events-none absolute -bottom-0.5 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            {/* Enhanced CTA Button */}
            <Button  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-500 border-0 px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25 hover:scale-105">
              <Link href="/contact" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                GET STARTED
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}

        {/* Enhanced Mobile Menu */}
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
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl border-l border-slate-200/60">
              <SheetHeader className="border-b border-slate-200/60 pb-4">
                <SheetTitle className="text-left flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    SecureSist
                  </span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Button 
                      key={item.href} 
                      asChild 
                      variant="ghost" 
                      className={`w-full justify-start h-12 text-left font-semibold hover:bg-slate-50 ${
                        isActive ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  );
                })}
                
                <div className="pt-4 border-t border-slate-200/60">
                  <Button  
                    className="w-full group relative overflow-hidden bg-blue-600 border-0 font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      GET STARTED
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
