import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD || "texans2026";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("preview_auth");
  
  if (request.nextUrl.pathname === "/api/auth") {
    return NextResponse.next();
  }

  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/_next") || 
      request.nextUrl.pathname.startsWith("/favicon")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/preview-gate";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
