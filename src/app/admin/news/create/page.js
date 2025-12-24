'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Announcement',
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('สร้างข่าวสำเร็จ!');
        router.push('/admin/news'); // กลับไปหน้ารายการ
        router.refresh();
      }
    } catch (error) {
      alert('เกิดข้อผิดพลาด');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/admin/news" className="text-gray-500 hover:text-gray-900 text-sm mb-2 inline-block">
          &larr; กลับไปหน้ารายการ
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">สร้างข่าวใหม่</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-sm space-y-6">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">หัวข้อข่าว</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            placeholder="เช่น ปิดปรับปรุงระบบ..."
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">หมวดหมู่</label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-purple-500 outline-none"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="Announcement">Announcement (ประกาศ)</option>
            <option value="Update">Update (อัปเดต)</option>
            <option value="Event">Event (กิจกรรม)</option>
          </select>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">เนื้อหาข่าว</label>
          <textarea
            required
            rows="5"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="รายละเอียดข่าว..."
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all disabled:opacity-50"
        >
          {submitting ? 'กำลังบันทึก...' : 'ประกาศข่าว'}
        </button>

      </form>
    </div>
  );
}