import { NextResponse, NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  let tokenUser = request.cookies.get('token');
  if(!tokenUser) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!login|api|_next/static|_next/image|favicon.ico).*)',
  ],
}