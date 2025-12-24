// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* เปิดใช้งาน React Compiler (Experimental ในบางเวอร์ชัน แต่ช่วยเรื่อง Perf มาก) */
  experimental: {
    reactCompiler: true,
    // เพิ่ม optimizePackageImports เพื่อลดขนาด Bundle ของไลบรารีเหล่านี้
    optimizePackageImports: [
      'framer-motion', 
      'lucide-react', 
      'date-fns', 
      '@headlessui/react'
    ],
  },
  /* ตั้งค่าการบีบอัดรูปภาพให้ใช้ Format ที่ดีที่สุด */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // กรณีมีการดึงรูปจากภายนอก
      },
    ],
  },
  /* บีบอัดไฟล์ที่ส่งไปหา Client (ปกติเปิดอยู่แล้ว แต่ใส่เพื่อความชัวร์) */
  compress: true,
  /* ปิด Header ที่บอกว่าใช้ Next.js เพื่อความปลอดภัยและลดขนาด Header เล็กน้อย */
  poweredByHeader: false,
};

export default nextConfig;