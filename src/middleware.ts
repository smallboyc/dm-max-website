import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// import { NextResponse } from "next/server";
// import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
// import createIntlMiddleware from "next-intl/middleware";
// import { NextAuthMiddlewareOptions, withAuth } from "next-auth/middleware";

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//   const res = NextResponse.next();
//   const redirectUrl = request.nextUrl.clone();
//   const pathname = request.nextUrl.pathname;

//   if (pathname.includes("/works")) {
//     const options: NextAuthMiddlewareOptions = {
//       pages: {
//         signIn: "/",
//         signOut: "/auth/signout",
//         error: "/auth/error", // Error code passed in query string as ?error=
//         verifyRequest: "/auth/verify-request", // (used for check email message)
//         newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
//       },
//     };
//     // Middleware that checks if the user is authenticated/authorized. If if they aren't, they will be redirected to the login page. Otherwise, continue.
//     const handleMiddleware = withAuth(options) as NextMiddleware;

//     return handleMiddleware(request, event);
//   }

//   // Step 1: Use the incoming request
//   const defaultLocale = request.headers.get("x-default-locale") || "en";

//   // Step 2: Create and call the next-intl middleware
//   const handleI18nRouting = createIntlMiddleware({
//     locales: ["fr", "en"],
//     defaultLocale: "en",
//   });
//   const response = handleI18nRouting(request);

//   // Check if we have a session

//   // Step 3: Alter the response
//   response.headers.set("x-default-locale", defaultLocale);

//   return response;
// }

// export const config = {
//   // Skip all paths that should not be internationalized. This example skips the
//   // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };
