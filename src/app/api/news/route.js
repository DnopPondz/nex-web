import { NextResponse } from 'next/server';

// ข้อมูลจำลอง (ใน Production ควรเปลี่ยนไปใช้ Database)
let newsData = [
  { id: 1, title: 'ยินดีต้อนรับสู่ Nex Web', category: 'Announcement', content: 'เว็บไซต์เปิดให้บริการอย่างเป็นทางการแล้ว', date: '2024-03-01' },
];

export async function GET() {
  return NextResponse.json(newsData);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newId = Date.now(); // สร้าง ID ง่ายๆ
    const newNews = {
      id: newId,
      title: body.title,
      category: body.category || 'General',
      content: body.content,
      date: new Date().toISOString().split('T')[0], // วันที่ปัจจุบัน
    };
    
    newsData.push(newNews);
    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating news' }, { status: 500 });
  }
}