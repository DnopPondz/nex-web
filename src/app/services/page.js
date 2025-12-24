import React from 'react';
import Services from '@/components/Services';

export const metadata = {
  title: 'Our Services | MyBrand',
  description: 'บริการพัฒนาซอฟต์แวร์ Cloud และ AI ครบวงจร',
};

export default function ServicesPage() {
  return (
    // เพิ่ม pt-24 เพื่อเว้นระยะจาก Navbar ที่เป็น fixed ด้านบน
    <main className="min-h-screen bg-gray-50 pt-24">
      
      {/* Header ของหน้า Services (Optional: ถ้าต้องการใส่หัวข้อใหญ่ก่อนเข้าส่วน Services) */}
      <div className="container mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          รวมบริการด้านเทคโนโลยีและโซลูชันที่เราเชี่ยวชาญ พร้อมยกระดับธุรกิจของคุณสู่ยุคดิจิทัล
        </p>
      </div>

      {/* เรียกใช้ Component Services ที่มีอยู่แล้ว */}
      <Services />
      
    </main>
  );
}