import { NextResponse } from 'next/server';

export function middleware(request) {
  // ตรวจสอบ Cookie
  const token = request.cookies.get('admin_token');

  // ถ้าไม่มี token และพยายามเข้าหน้า Admin -> ดีดไปหน้า Login
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ถ้ามี token แล้ว (Login แล้ว) แต่พยายามเข้าหน้า Login -> ดีดไปหน้า Admin
  if (token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/admin/news', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};