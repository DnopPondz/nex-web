// src/app/services/[slug]/page.js
'use client'; // 1. Convert to Client Component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ServiceDetailPage({ params }) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all services and find the one matching the slug
        // (Alternatively, you could update your API to support fetching by slug directly)
        const res = await fetch('/api/services'); 
        if (!res.ok) throw new Error('Failed to fetch');
        
        const data = await res.json();
        const foundService = data.find((s) => s.slug === params.slug);

        if (foundService) {
          setService(foundService);
        } else {
          setError(true); // Service not found
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) return <div className="min-h-screen pt-24 text-center">Loading...</div>;
  
  // Handle 404 manually for Client Component
  if (error || !service) {
    return (
        <div className="min-h-screen pt-24 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Service Not Found</h1>
            <Link href="/services" className="text-blue-600 hover:underline mt-4 inline-block">Back to Services</Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Breadcrumb */}
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
           {/* Render HTML content safely */}
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