'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminNewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันดึงข้อมูลข่าว
  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error('Failed to fetch news', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if(!confirm('ยืนยันการลบข่าวนี้?')) return;
    
    // จำลองการลบ (Client side update) เนื่องจาก Mock API อาจไม่ Persist
    setNews(news.filter(item => item.id !== id));
    // เรียก API จริง: await fetch(`/api/news/${id}`, { method: 'DELETE' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">จัดการข่าวสาร (News Management)</h1>
        <Link 
          href="/admin/news/create"
          className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
        >
          + สร้างข่าวใหม่
        </Link>
      </div>

      {/* News List */}
      <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm">
        {loading ? (
          <p className="text-center text-gray-500 py-10">กำลังโหลดข้อมูล...</p>
        ) : news.length === 0 ? (
          <p className="text-center text-gray-500 py-10">ยังไม่มีข่าวสารในระบบ</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-sm uppercase">
                  <th className="py-3 px-4">วันที่</th>
                  <th className="py-3 px-4">หัวข้อ</th>
                  <th className="py-3 px-4">หมวดหมู่</th>
                  <th className="py-3 px-4 text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <motion.tr 
                    key={item.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-gray-100 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-gray-600 text-sm">{item.date}</td>
                    <td className="py-4 px-4 font-medium text-gray-900">{item.title}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right space-x-2">
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold"
                      >
                        ลบ
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}