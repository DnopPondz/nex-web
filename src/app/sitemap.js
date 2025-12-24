export default async function sitemap() {
  const baseUrl = 'https://your-domain.com'; // เปลี่ยนเป็นโดเมนจริงของคุณเมื่อ Deploy

  // 1. หน้าหลักทั้งหมด (Static)
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/news',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. (Optional) ดึงข้อมูลข่าวเพื่อทำ Dynamic Sitemap
  // ในตัวอย่างนี้ขอ comment ไว้ก่อนเนื่องจากเรายังใช้ Mock API
  /*
  const newsRes = await fetch(`${baseUrl}/api/news`);
  const newsItems = await newsRes.json();
  const newsRoutes = newsItems.map((item) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  */

  return [...routes];
}