'use client'; // Error components ต้องเป็น Client Component

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white/60 backdrop-blur-xl border border-red-100 p-8 rounded-3xl shadow-lg max-w-md w-full">
        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
          ⚠️
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">ขออภัย เกิดข้อผิดพลาดบางอย่างที่ไม่คาดคิด</p>
        
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-2 bg-white text-gray-700 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}