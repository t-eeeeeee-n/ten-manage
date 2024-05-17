import { auth } from "@/auth"
import {NextRequest} from "next/server";
import {authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes} from "@/route";
import {NextURL} from "next/dist/server/web/next-url";

// export const { auth: middleware } = NextAuth(authConfig)

export default auth((req: NextRequest): Response | void => {
    const { nextUrl }: {nextUrl: NextURL} = req;
    const isLoggedIn: boolean = !!req.auth;

    // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute: boolean = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute: boolean = authRoutes.includes(nextUrl.pathname);

    // if (isApiAuthRoute) {
    //     return;
    // }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return
    }
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/auth/login', nextUrl));
    }

    return;

})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|auth|_next/static|_next/image|favicon.ico).*)"],
    // matcher: ['/((?!api|auth|_next).*)'],
}

