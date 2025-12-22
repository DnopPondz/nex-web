'use client';

import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      {/* Background Decoration (Gradient Blobs) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[20%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[120px]" />
      </div>

      <section className="pt-32 pb-20 px-6 flex-grow flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Side: Text Info --- */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <div>
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 mb-4 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md text-xs font-semibold text-gray-500">
                👋 Say Hello
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-gray-400 tracking-tight leading-[1.1]">
                Let's start a <br/>
                <span className="text-gray-300">conversation.</span>
              </motion.h1>
            </div>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-md leading-relaxed">
              Have a project in mind or just want to chat? Fill out the form, 
              and our team will get back to you within 24 hours.
            </motion.p>

            {/* Quick Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-4">
               <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="font-medium text-gray-300">contact@mybrand.com</span>
               </div>
               <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className="font-medium text-gray-300">+66 (0) 2 123 4567</span>
               </div>
            </motion.div>
          </motion.div>


          {/* --- Right Side: The Contact Box (Form) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             {/* Form Card */}
             <div className="bg-gray-200 rounded-[40px] p-8 md:p-10 shadow-2xl shadow-gray-200/50 border border-white/50 relative z-10">
                <form className="space-y-6">
                   
                   {/* Name Input */}
                   <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-900 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-gray-300 focus:ring-4 focus:ring-gray-100 outline-none transition-all duration-200 placeholder-gray-400 text-gray-900"
                      />
                   </div>

                   {/* Email Input */}
                   <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-900 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-gray-300 focus:ring-4 focus:ring-gray-100 outline-none transition-all duration-200 placeholder-gray-400 text-gray-900"
                      />
                   </div>

                   {/* Message Input */}
                   <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-900 ml-1">Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        placeholder="Tell us about your project..."
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-gray-300 focus:ring-4 focus:ring-gray-100 outline-none transition-all duration-200 placeholder-gray-400 text-gray-900 resize-none"
                      ></textarea>
                   </div>

                   {/* Submit Button */}
                   <button 
                     type="button"
                     className="
                       w-full py-4 rounded-2xl 
                       bg-black text-white font-bold text-lg
                       shadow-lg shadow-gray-900/20
                       hover:bg-gray-800 hover:scale-[1.02] hover:shadow-xl
                       active:scale-[0.98]
                       transition-all duration-300 ease-out
                     "
                   >
                     Send Message
                   </button>
                </form>
             </div>

             {/* Decorative Element behind form */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-40 -z-10" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10" />
          </motion.div>

        </div>
      </section>

    </div>
  );
}