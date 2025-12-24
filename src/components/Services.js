// src/components/Services.js
import React from 'react';

const services = [
  {
    title: "Custom Software Development",
    description: "รับพัฒนาซอฟต์แวร์และแอปพลิเคชันตามความต้องการของธุรกิจ ด้วยเทคโนโลยีทันสมัย",
    icon: "💻", // หรือจะใช้ SVG/Icon library ก็ได้
  },
  {
    title: "Cloud Infrastructure",
    description: "บริการวางระบบ Cloud Server ที่มีความปลอดภัยและยืดหยุ่นสูง (AWS, Google Cloud)",
    icon: "☁️",
  },
  {
    title: "Data Analytics & AI",
    description: "วิเคราะห์ข้อมูลเชิงลึกและสร้างโมเดล AI เพื่อช่วยในการตัดสินใจทางธุรกิจ",
    icon: "📊",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            เรามุ่งมั่นนำเสนอเทคโนโลยีที่ดีที่สุด เพื่อขับเคลื่อนธุรกิจของคุณให้เติบโตอย่างยั่งยืน
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;