import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function isSkippablePath(pathname: string) {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (pathname.startsWith("/.well-known")) return true;
  if (pathname === "/robots.txt") return true;
  if (pathname === "/sitemap.xml") return true;
  if (pathname === "/humans.txt") return true;
  if (pathname.includes(".")) return true; // static assets
  return false;
}

export function middleware(request: NextRequest) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return NextResponse.next();

  let canonical: URL | null = null;
  try {
    canonical = new URL(configured);
  } catch {
    return NextResponse.next();
  }

  const isLocal =
    canonical.hostname === "localhost" || canonical.hostname === "127.0.0.1";
  if (isLocal) return NextResponse.next();

  if (canonical.protocol !== "https:") return NextResponse.next();

  const { nextUrl } = request;
  if (isSkippablePath(nextUrl.pathname)) return NextResponse.next();

  const requestHost = request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const requestProto = forwardedProto ?? nextUrl.protocol.replace(":", "");

  const hostMismatch = requestHost && requestHost !== canonical.host;
  const protoMismatch = requestProto !== "https";

  if (!hostMismatch && !protoMismatch) return NextResponse.next();

  const redirectUrl = nextUrl.clone();
  redirectUrl.protocol = canonical.protocol;
  redirectUrl.host = canonical.host;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
