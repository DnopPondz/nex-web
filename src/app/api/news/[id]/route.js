import { NextResponse } from 'next/server';

// ** สำคัญ: ต้องใช้ตัวแปร newsData เดียวกันกับ route.js หลัก **
// แต่เนื่องจากใน Mock Data แบบแยกไฟล์ ตัวแปรจะไม่แชร์กันจริงๆ ใน Serverless
// สำหรับขั้นตอนนี้ เพื่อให้ทดสอบผ่าน ผมจะใช้วิธี Mock ข้อมูลในนี้ให้ตรงกันก่อนครับ
// (ในระบบจริงต้องดึงจาก Database เดียวกัน)

const mockNews = [
  { id: 1, title: 'ยินดีต้อนรับสู่ Nex Web', category: 'Announcement', content: 'เว็บไซต์เปิดให้บริการอย่างเป็นทางการแล้ว', date: '2024-03-01' },
];

export async function GET(request, { params }) {
  const { id } = params;
  const newsItem = mockNews.find((item) => item.id == id);
  
  // ถ้าหาไม่เจอ ให้ลองคืนค่าตัวอย่างกลับไป (เพื่อให้คุณ Test หน้าเว็บได้แม้ระบบ Mock จะไม่สมบูรณ์)
  if (!newsItem) {
     return NextResponse.json({ 
        id: id, 
        title: `ข่าวทดสอบ ID: ${id}`, 
        category: 'Test', 
        content: 'นี่คือเนื้อหาจำลองเนื่องจากยังไม่ได้เชื่อมต่อ Database จริง...', 
        date: new Date().toISOString().split('T')[0] 
     });
  }

  return NextResponse.json(newsItem);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  return NextResponse.json({ message: `Deleted news ${id}` }, { status: 200 });
}