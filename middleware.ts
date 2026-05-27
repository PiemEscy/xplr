import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE = "auth-token";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authToken = request.cookies.get(AUTH_COOKIE)?.value;

    // if (pathname.startsWith("/dashboard")) {
    //     if (!authToken) {
    //         const loginUrl = new URL("/login", request.url);
    //         loginUrl.searchParams.set("callbackUrl", pathname);
    //         return NextResponse.redirect(loginUrl);
    //     }
    // }

    // if (pathname === "/login" && authToken) {
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};
