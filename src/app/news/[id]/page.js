'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NewsDetailPage() {
  const params = useParams(); // รับ ID จาก URL
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/news/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
            setNewsItem(data);
            setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) return <div className="pt-32 text-center">Loading...</div>;
  if (!newsItem) return <div className="pt-32 text-center">News not found</div>;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-sm">
        <Link href="/news" className="text-gray-500 hover:text-purple-600 mb-6 inline-block text-sm">
          &larr; กลับหน้ารวมข่าว
        </Link>
        
        <header className="mb-8 border-b border-gray-200 pb-8">
          <div className="flex gap-4 items-center mb-4">
             <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
               {newsItem.category}
             </span>
             <span className="text-gray-500 text-sm">{newsItem.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {newsItem.title}
          </h1>
        </header>

        <div className="prose prose-lg text-gray-700 max-w-none whitespace-pre-wrap">
          {newsItem.content}
        </div>
      </article>
    </div>
  );
}