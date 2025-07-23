import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();
// Middleware is a function that runs in the middle of a request and a response.
// It intercepts requests to perform logic before the request reaches your final handler (e.g., a page, API route, etc.).
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};