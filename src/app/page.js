'use client';

import Link from "next/link";
import { motion } from "framer-motion";

// Animation Variants
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
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative pt-40 pb-20 px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md text-xs font-semibold text-blue-600 shadow-sm">
              🚀 Driving Innovation for Your Business
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
              Scalable Software. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 drop-shadow-sm">
                Cloud & AI Solutions.
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp} 
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed font-light"
          >
            Tech Company ที่เชี่ยวชาญด้านการพัฒนา Web Application, Cloud Infrastructure และ AI 
            เราพร้อมเปลี่ยนไอเดียของคุณให้เป็นนวัตกรรมดิจิทัลระดับ Enterprise
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full font-medium bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              Consult Now
            </Link>
            <Link 
              href="#services"
              className="px-8 py-4 rounded-full font-medium bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              View Services
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* --- 2. Bento Grid Services (Products & Services) --- */}
      <section id="services" className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <p className="text-gray-500 mt-2">โซลูชันครบวงจรที่เรามอบให้ลูกค้า (Product & Services)</p>
          </motion.div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Custom Development (Large Box) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 ease-out flex flex-col justify-between h-[300px] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-600/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Web & App Development</h3>
                <p className="text-gray-500 max-w-sm">
                  พัฒนาซอฟต์แวร์ด้วย Next.js, React และ Node.js ที่เน้น Performance, SEO และ Scalability รองรับผู้ใช้งานจำนวนมาก
                </p>
              </div>
            </motion.div>

            {/* Card 2: Company Stats (Small Box) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-center items-center text-center h-[300px]"
            >
               <h3 className="text-5xl font-extrabold text-blue-600 mb-2">50+</h3>
               <p className="text-gray-500 font-medium">Enterprise Projects</p>
               <div className="mt-6 flex -space-x-2 overflow-hidden justify-center">
                 {/* Mock User Avatars */}
                 {[1,2,3,4].map((i) => (
                   <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-${300 + (i*100)}`} />
                 ))}
               </div>
               <p className="text-xs text-gray-400 mt-2">Trusted by top clients</p>
            </motion.div>

            {/* Card 3: Cloud Infrastructure (Tall Box) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 ease-out h-[300px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-gray-500">วางระบบ Server (AWS/Google Cloud) พร้อม CI/CD Pipeline อัตโนมัติ</p>
              </div>
              <div className="w-full bg-purple-50 rounded-xl h-32 flex items-center justify-center text-purple-500">
                 <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
            </motion.div>

            {/* Card 4: AI & Data (Wide Box - Company Info Integration) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gray-900 text-white rounded-3xl p-10 border border-gray-800 shadow-md hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-500 ease-out flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-[300px]"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                   <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded font-mono">NEW SERVICE</span>
                </div>
                <h3 className="text-2xl font-bold">AI & Data Analytics</h3>
                <p className="text-gray-400">
                  บริการวิเคราะห์ข้อมูลธุรกิจ (BI) และสร้างโมเดล AI เพื่อช่วยทำนายแนวโน้มตลาด เพิ่มศักยภาพการแข่งขันให้ธุรกิจของคุณ
                </p>
                <Link href="/about" className="inline-block px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors mt-2">
                  Learn about our Tech
                </Link>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800/50 rounded-2xl h-40 border border-gray-700 flex flex-col items-center justify-center p-4">
                <div className="text-green-400 font-mono text-xs mb-2">AI Processing...</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[80%]"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. Company Information Section --- */}
      <section className="py-20 px-6 border-t border-gray-100">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Company</h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 เราคือกุล่มนักพัฒนาและวิศวกรซอฟต์แวร์ที่มีความหลงใหลในเทคโนโลยี ก่อตั้งขึ้นเพื่อแก้ปัญหาทางธุรกิจด้วย Code ที่สะอาดและมีคุณภาพ เราเชื่อว่าเทคโนโลยีที่ดีต้องไม่ซับซ้อนสำหรับผู้ใช้งาน แต่ต้องทรงพลังอยู่เบื้องหลัง
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Founded', value: '2024' },
                    { label: 'Team Size', value: '20+' },
                    { label: 'Projects', value: '100+' },
                    { label: 'Uptime', value: '99.9%' },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-2xl">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- 4. Testimonials Section --- */}
      <section className="py-20 px-6 bg-white">
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
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.author}</div>
                    <div className="text-xs text-gray-500">{item.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{item.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}