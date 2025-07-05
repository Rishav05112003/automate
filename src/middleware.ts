import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req) => {
  // Allow Clerk Webhook to bypass auth
  if (req.nextUrl.pathname === '/api/clerk-webhook') {
    return NextResponse.next();
  }

  return NextResponse.next(); // Other logic as needed
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
