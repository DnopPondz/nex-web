import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { username, password } = await request.json();

  // Username: admin, Password: 1234 (เปลี่ยนได้ตามต้องการ)
  if (username === 'admin' && password === '1234') {
    
    // ใน Next.js 16 ต้อง await cookies() ก่อนเสมอ
    const cookieStore = await cookies();
    
    cookieStore.set('admin_token', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 วัน
      path: '/',
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}