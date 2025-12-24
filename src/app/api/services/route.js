import { NextResponse } from 'next/server';

// Initial Mock Data (replacing src/data/services.js for the API)
let servicesData = [
  {
    id: 1,
    slug: "custom-software-development",
    title: "Custom Software Development",
    description: "รับพัฒนาซอฟต์แวร์และแอปพลิเคชันตามความต้องการของธุรกิจ",
    icon: "💻",
    content: "<p>เนื้อหาบริการ...</p>"
  },
  {
    id: 2,
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "บริการวางระบบ Cloud Server ที่มีความปลอดภัย",
    icon: "☁️",
    content: "<p>เนื้อหาบริการ...</p>"
  },
  {
    id: 3,
    slug: "data-analytics-ai",
    title: "Data Analytics & AI",
    description: "วิเคราะห์ข้อมูลเชิงลึกและสร้างโมเดล AI",
    icon: "📊",
    content: "<p>เนื้อหาบริการ...</p>"
  },
];

export async function GET() {
  return NextResponse.json(servicesData);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newService = {
      id: Date.now(),
      slug: body.title.toLowerCase().replace(/ /g, '-'),
      ...body
    };
    servicesData.push(newService);
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating service' }, { status: 500 });
  }
}