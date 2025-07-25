import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL('/', request.url));
  const response = NextResponse.next();
  const themePreference = request.cookies.get('theme');
  if (themePreference) {
    response.cookies.set('theme', 'dark');
  }
  return response;
}

export const config = {
  matcher: '/profile'
};
