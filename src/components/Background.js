// src/components/Background.js
import React from 'react';

const Background = () => {
  return (
    // เพิ่ม will-change-transform เพื่อบอก Browser ว่า layer นี้อาจมีการเปลี่ยนแปลง (ถ้าอนาคตจะขยับ)
    // แต่สำหรับ Static ใช้ transform-gpu เพื่อผลักภาระไปที่ GPU
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50 pointer-events-none">
      {/* Blob 1: สีม่วง/ฟ้า */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] transform-gpu" />
      {/* Blob 2: สีฟ้า/น้ำเงิน */}
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] transform-gpu" />
      {/* Blob 3: สีชมพู (ตรงกลางๆ) */}
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-[80px] transform-gpu" />
    </div>
  );
};

// ใช้ React.memo เพื่อป้องกันการ Re-render โดยไม่จำเป็น
export default React.memo(Background);