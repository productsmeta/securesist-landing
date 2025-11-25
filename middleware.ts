 // middleware.ts (place at project root)
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";  

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Redirect root "/" to default locale "/en"
  if (pathname === "/") {
    const redirectUrl = url.clone();
    redirectUrl.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(redirectUrl);
  }

  // Let next-intl handle everything else
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|ar)/:path*"]
};
