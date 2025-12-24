import React from 'react';
import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// ฟังก์ชันสำหรับสร้าง Title ของหน้าเว็บ (Metadata)
export async function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | MyBrand Services`,
    description: service.description,
  };
}

// หน้าแสดงผลหลัก
export default function ServiceDetailPage({ params }) {
  // 1. ค้นหา service ที่ตรงกับ slug
  const service = servicesData.find((s) => s.slug === params.slug);

  // 2. ถ้าไม่เจอ ให้ไปหน้า 404
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Breadcrumb / Back Button */}
        <div className="mb-8">
          <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
            ← Back to Services
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-10 border border-gray-100 text-center md:text-left">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 font-light">
            {service.description}
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-gray-700">
           {/* ใช้ dangerouslySetInnerHTML เพื่อแสดง HTML จากข้อมูล content */}
           <div dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">สนใจบริการนี้?</h3>
          <p className="text-gray-600 mb-8">ปรึกษาทีมงานผู้เชี่ยวชาญของเราได้ฟรี เพื่อหาโซลูชันที่เหมาะสมที่สุดสำหรับคุณ</p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all"
          >
            Contact Us Now
          </Link>
        </div>

      </div>
    </div>
  );
}