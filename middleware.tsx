import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  let tokenUser = request.cookies.get('userToken');
  if(!tokenUser) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!login|api|_next/static|_next/image|favicon.ico).*)',
  ],
}