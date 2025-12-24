// src/app/page.js
'use client';

import { useState, useEffect } from 'react'; // 1. เพิ่ม import useState และ useEffect
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  // 2. เพิ่ม State และ Logic ดึงข้อมูลข่าว
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก API ที่เราสร้างไว้
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        // ตรวจสอบว่าเป็น Array และตัดมาแสดงแค่ 4 ข่าวล่าสุด
        if (Array.isArray(data)) {
          setLatestNews(data.slice(0, 4));
        }
      })
      .catch((err) => console.error("Failed to fetch news:", err));
  }, []);

  return (
    // Change 1: Removed 'bg-white' so the Background.js blobs show through
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative pt-20 pb-20 px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-white/50 bg-white/30 backdrop-blur-md text-xs font-bold text-purple-700 shadow-sm">
              🚀 Driving Innovation for Your Business
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
              Scalable Software. <br />
              {/* Change 2: Updated gradient to match Purple/Blue/Pink blobs */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 drop-shadow-sm">
                Cloud & AI Solutions.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            variants={fadeInUp} 
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            Tech Company ที่เชี่ยวชาญด้านการพัฒนา Web Application, Cloud Infrastructure และ AI 
            เราพร้อมเปลี่ยนไอเดียของคุณให้เป็นนวัตกรรมดิจิทัลระดับ Enterprise
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/contact"
              // Change 3: Button gradient to match theme
              className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              Consult Now
            </Link>
            <Link 
              href="#services"
              className="px-8 py-4 rounded-full font-bold bg-white/70 backdrop-blur-sm text-gray-900 border border-white/50 shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* --- 2. Bento Grid Services --- */}
      {/* Change 4: Removed solid background, reduced padding */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <p className="text-gray-600 mt-2">โซลูชันครบวงจรที่เรามอบให้ลูกค้า (Product & Services)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Glassmorphism Style */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 flex flex-col justify-between h-[300px] relative overflow-hidden group"
            >
              {/* Subtle inner gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full items-start justify-between">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Web & App Development</h3>
                  <p className="text-gray-600 max-w-sm">
                    พัฒนาซอฟต์แวร์ด้วย Next.js, React และ Node.js ที่เน้น Performance, SEO และ Scalability
                  </p>
                </div>
                <Link href="/services/custom-development" className="mt-4 px-5 py-2 bg-white/60 hover:bg-white text-gray-900 text-sm font-semibold rounded-full border border-white/50 transition-colors">
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Glassmorphism Stats */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center h-[300px]"
            >
               <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-500 mb-2">50+</h3>
               <p className="text-gray-600 font-medium">Enterprise Projects</p>
               <div className="mt-6 flex -space-x-2 overflow-hidden justify-center">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-${300 + (i*100)}`} />
                 ))}
               </div>
            </motion.div>

            {/* Card 3: Cloud Infrastructure */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 h-[300px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-gray-600 mb-4">วางระบบ Server (AWS/Google Cloud) พร้อม CI/CD Pipeline อัตโนมัติ</p>
                <Link href="/services/cloud-infrastructure" className="text-purple-600 text-sm font-bold hover:underline flex items-center gap-1">
                  Read More &rarr;
                </Link>
              </div>
              <div className="w-full bg-purple-100/50 rounded-xl h-32 flex items-center justify-center text-purple-500 mt-auto">
                 <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
            </motion.div>

            {/* Card 4: Dark Glass Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gray-900/80 backdrop-blur-md text-white rounded-3xl p-10 border border-gray-700 shadow-md hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-[300px]"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                   <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded font-mono border border-pink-500/30">NEW SERVICE</span>
                </div>
                <h3 className="text-2xl font-bold">AI & Data Analytics</h3>
                <p className="text-gray-300">
                  บริการวิเคราะห์ข้อมูลธุรกิจ (BI) และสร้างโมเดล AI เพื่อช่วยทำนายแนวโน้มตลาด
                </p>
                <Link href="/services/ai-data" className="inline-block px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors mt-2">
                  Read More
                </Link>
              </div>
              <div className="w-full md:w-1/3 bg-black/40 rounded-2xl h-40 border border-gray-600/50 flex flex-col items-center justify-center p-4">
                <div className="text-green-400 font-mono text-xs mb-2">AI Processing...</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 w-[80%]"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. Latest News Section (เพิ่มใหม่) --- */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          {/* Header & Button */}
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News & Update</h2>
              <p className="text-gray-600">ติดตามข่าวสารและกิจกรรมล่าสุดจากทางเรา</p>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <Link 
                  href="/news" 
                  className="px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2"
               >
                 View All News &rarr;
               </Link>
            </motion.div>
          </div>

          {/* Grid Cards (4 columns on Large screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.length === 0 ? (
              <div className="col-span-full text-center py-10 bg-white/40 rounded-3xl border border-dashed border-gray-300">
                 <p className="text-gray-500">ยังไม่มีข่าวสารล่าสุดในขณะนี้</p>
              </div>
            ) : (
              latestNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/50 backdrop-blur-md border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow font-light">
                    {item.content}
                  </p>
                  
                  <Link 
                    href={`/news/${item.id}`} 
                    className="text-sm font-semibold text-gray-900 hover:text-purple-600 flex items-center gap-1 mt-auto"
                  >
                    Read more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* --- 4. Company Information --- */}
      {/* Change 5: Added semi-transparent white background to section for readability without blocking blobs completely */}
      <section className="py-20 px-6 border-t border-white/20 bg-white/20 backdrop-blur-sm">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Company</h2>
               <p className="text-lg text-gray-700 leading-relaxed mb-8">
                 เราคือกุล่มนักพัฒนาและวิศวกรซอฟต์แวร์ที่มีความหลงใหลในเทคโนโลยี ก่อตั้งขึ้นเพื่อแก้ปัญหาทางธุรกิจด้วย Code ที่สะอาดและมีคุณภาพ
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Founded', value: '2024' },
                    { label: 'Team Size', value: '20+' },
                    { label: 'Projects', value: '100+' },
                    { label: 'Uptime', value: '99.9%' },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-white/50 rounded-2xl border border-white/40">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- 5. Testimonials --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">What Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ทีมงานมีความเป็นมืออาชีพมาก ระบบที่ได้เสถียรและรองรับลูกค้าได้มหาศาล",
                author: "K. Nawat",
                role: "CEO, E-Commerce Platform",
                avatar: "N"
              },
              {
                quote: "การออกแบบ UX/UI ทันสมัยมาก ช่วยให้ยอดขายของเราเพิ่มขึ้น 200%",
                author: "K. Sarah",
                role: "Marketing Director",
                avatar: "S"
              },
              {
                quote: "บริการหลังการขายดีเยี่ยม ปรึกษาได้ตลอดเวลา แนะนำเลยครับ",
                author: "K. David",
                role: "CTO, Fintech Startup",
                avatar: "D"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                // Change 6: Glassmorphism cards for testimonials
                className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.author}</div>
                    <div className="text-xs text-gray-600">{item.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{item.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}