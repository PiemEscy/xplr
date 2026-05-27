import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE = "auth-token";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authToken = request.cookies.get(AUTH_COOKIE)?.value;

    // if (pathname.startsWith("/xplr")) {
    //     if (!authToken) {
    //         const loginUrl = new URL("/login", request.url);
    //         loginUrl.searchParams.set("callbackUrl", pathname);
    //         return NextResponse.redirect(loginUrl);
    //     }
    // }

    // if (pathname === "/login" && authToken) {
    //     return NextResponse.redirect(new URL("/xplr", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/xplr/:path*", "/login"],
};
