// src/components/Services.js
'use client'; // 1. Add this to make it a Client Component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Optional: fallback to empty list or static data on error
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <div className="container mx-auto">Loading services...</div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            เรามุ่งมั่นนำเสนอเทคโนโลยีที่ดีที่สุด เพื่อขับเคลื่อนธุรกิจของคุณให้เติบโตอย่างยั่งยืน
          </p>
        </div>

        {/* 3. Handle empty state */}
        {services.length === 0 ? (
          <p className="text-center text-gray-500">No services available at the moment.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id || service.slug} // Use ID from API if available
                className="bg-white/40 backdrop-blur-lg p-8 rounded-xl shadow-sm hover:shadow-xl hover:shadow-purple-100/50 transition-all border border-white/50 flex flex-col items-start h-full"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center text-purple-600 font-bold hover:text-purple-800 transition-colors"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;