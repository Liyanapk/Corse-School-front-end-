
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get('authToken')?.value;

  // If token is missing or invalid, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/AdminLogin', request.url));
  }

  return NextResponse.next();
}

// Apply this middleware to specific routes
export const config = {
  matcher: ['/admin/:path*'], // Routes that require authentication
};