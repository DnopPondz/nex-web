export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // ป้องกัน Google ไม่ให้เข้ามา Index หน้า Admin
    },
    sitemap: 'https://your-domain.com/sitemap.xml', // เปลี่ยนโดเมนให้ตรงกับของจริง
  };
}