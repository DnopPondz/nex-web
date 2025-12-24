'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateServicePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '⚡',
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('สร้างบริการสำเร็จ!');
        router.push('/admin/services');
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
        <Link href="/admin/services" className="text-gray-500 hover:text-gray-900 text-sm mb-2 inline-block">
          &larr; กลับ
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">เพิ่มบริการใหม่</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อบริการ</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ไอคอน (Emoji หรือ SVG Path)</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.icon}
            onChange={(e) => setFormData({...formData, icon: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">คำอธิบายสั้นๆ</label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 outline-none focus:ring-2 focus:ring-purple-500"
            rows="2"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">เนื้อหาเต็ม (HTML)</label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm"
            rows="6"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all"
        >
          {submitting ? 'กำลังบันทึก...' : 'บันทึกบริการ'}
        </button>
      </form>
    </div>
  );
}