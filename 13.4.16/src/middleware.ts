import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static compiled content
     * 4. /icons that we use on our site
     * 5. /images that we use on our site
     * 6. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|icons/|images/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(
  request: NextRequest
): Promise<NextResponse> {
  if (request.nextUrl.pathname.startsWith("/me")) {
    return NextResponse.rewrite(
      new URL(request.nextUrl.pathname.replace("me", "users"), request.url)
    );
  }
  return NextResponse.next();
}
