import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already on /en/ path — let it through
  if (pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // Detect preferred language from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  // Redirect English-preferring users to /en/ on first visit
  // (only if they haven't explicitly chosen Spanish by visiting the root)
  const hasLocaleCookie = request.cookies.get("preferred-locale");

  if (!hasLocaleCookie && preferredLocale === "en" && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    const response = NextResponse.redirect(url);
    response.cookies.set("preferred-locale", "en", { maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
