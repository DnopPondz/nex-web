'use client';

import { motion } from "framer-motion";

// Animation Variants (ใช้ชุดเดียวกับ Home เพื่อความต่อเนื่อง)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Background Decoration (แสงฟุ้งๆ จางๆ) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px]" />
      </div>

      {/* --- 1. Hero Section --- */}
      <section className="pt-40 pb-20 px-6">
        <motion.div 
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
           className="max-w-4xl mx-auto text-center"
        >
           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-400 mb-6 tracking-tight">
             We build for the <span className="text-gray-300">future.</span>
           </motion.h1>
           <motion.p variants={fadeInUp} className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
             MyBrand is a digital agency focused on crafting minimal, high-performance web experiences. 
             We believe in the power of simplicity and clean code.
           </motion.p>
        </motion.div>
      </section>

      {/* --- 2. Company Detail (Tall Description) --- */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           
           {/* Text Content */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-8"
           >
              <div>
                <h2 className="text-3xl font-bold text-gray-400 mb-4">Our Story</h2>
                <div className="space-y-4 text-gray-300 leading-loose text-lg">
                  <p>
                    Founded in 2024, MyBrand started with a simple yet ambitious idea: the web has become too cluttered. 
                    We set out to create a design philosophy that prioritizes content over noise, and functionality over flashy gimmicks.
                  </p>
                  <p>
                    Our team consists of passionate developers, designers, and creative thinkers who live and breathe pixels. 
                    We don't just write code; we architect digital experiences that leave a lasting impression. 
                    Whether it's a small landing page or a complex enterprise application, we bring the same level of 
                    dedication, precision, and craftsmanship to every project.
                  </p>
                  <p>
                    We are headquartered in the cloud, giving us the flexibility to work with talent and clients from all over the globe, 
                    but our hearts are grounded in user-centric design principles.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                   <div className="text-3xl font-bold text-gray-900">50+</div>
                   <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                   <div className="text-3xl font-bold text-gray-900">100%</div>
                   <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
              </div>
           </motion.div>

           {/* Image / Visual Placeholder */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24" // ทำให้รูปเลื่อนตามเวลา Scroll อ่าน text ยาวๆ
           >
              <div className="bg-gray-100 rounded-[40px] h-[600px] w-full flex items-center justify-center relative overflow-hidden shadow-2xl shadow-gray-200/50">
                 {/* Decorative Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-gray-100 to-white opacity-80" />
                 
                 {/* Placeholder Text or Image */}
                 <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <span className="text-gray-400 font-medium">Office Space / Team Photo</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* --- 3. Contact & Map Section --- */}
      <section className="py-20 px-6">
         <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               
               {/* Left: Contact Info */}
               <div className="p-12 lg:p-16 flex flex-col justify-center space-y-10 bg-white">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Get in touch</h3>
                    <p className="text-gray-500 text-lg">We'd love to hear from you. Let's build something amazing together.</p>
                  </div>
                  
                  <div className="space-y-8">
                    {/* Email Block */}
                    <div className="flex items-start gap-5 group cursor-pointer">
                       <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                       </div>
                       <div>
                          <p className="text-sm font-bold text-gray-900 mb-1">Email Support</p>
                          <a href="mailto:contact@mybrand.com" className="text-lg text-gray-600 group-hover:text-black transition-colors">contact@mybrand.com</a>
                       </div>
                    </div>

                    {/* Address Block */}
                    <div className="flex items-start gap-5 group cursor-pointer">
                       <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                       </div>
                       <div>
                          <p className="text-sm font-bold text-gray-900 mb-1">Visit Office</p>
                          <p className="text-lg text-gray-600 leading-snug">
                            123 Innovation Dr, Floor 5<br/>
                            Tech City, Bangkok 10110
                          </p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Right: Map (Full Height) */}
               <div className="h-[400px] lg:h-auto w-full relative bg-gray-200">
                  {/* Google Map Iframe */}
                  <iframe 
                    // ใส่ลิงก์ Google Maps Embed ที่นี่
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.604543598748!2d100.52834041482205!3d13.736717090356515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f3d3c7d3d63%3A0x6a1234567890abcdef!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1625632731835!5m2!1sen!2sth" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "grayscale(100%)" }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Office Location"
                    className="absolute inset-0 w-full h-full"
                  />
               </div>

            </div>
         </div>
      </section>

    </div>
  );
}