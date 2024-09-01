import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('authToken')?.value;
  
    // If the user is authenticated and trying to access login or register page,
    // redirect them to the home page
    if (authToken && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  
    // If the user is not authenticated and trying to access a protected route,
    // redirect them to the login page
    if (!authToken && request.nextUrl.pathname.startsWith('/protected')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  
    return NextResponse.next();
  }
  
  export const config = {
    matcher: ['/login', '/register', '/protected/:path*']
  };