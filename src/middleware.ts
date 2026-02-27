import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Bypass i18n for static files and system routes
  if (
    pathname.startsWith("/sitemap") ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_vercel") ||
    /\.(ico|png|jpg|jpeg|svg|gif|webp|xml|txt|json|pdf)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Redirect root "/" to default locale "/en"
  if (pathname === "/") {
    const redirectUrl = url.clone();
    redirectUrl.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(redirectUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
