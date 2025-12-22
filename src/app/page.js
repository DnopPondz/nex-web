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
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* --- Background Decorations --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-200/20 rounded-full blur-[80px]" />
      </div>

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
            <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md text-xs font-semibold text-gray-600 shadow-sm">
              ✨ Redefining Digital Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-400 leading-[1.1]">
              Simple. Clean. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 drop-shadow-md">
                Impactful.
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp} 
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed font-light"
          >
            Designed with whitespace in mind. A minimal template that lets your 
            product speak for itself. Fast, responsive, and easy to customize.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Get Started Button - Single Line ClassName */}
            <Link 
              href="/about"
              className="px-8 py-4 rounded-full font-medium bg-gray-900 text-white shadow-none hover:bg-black hover:shadow-2xl hover:shadow-gray-900/40 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              Get Started
            </Link>

            {/* View Demo Button - Single Line ClassName */}
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full font-medium bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              View Demo
            </Link>

          </motion.div>

        </motion.div>
      </section>

      {/* --- 2. Bento Grid Features --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-400">Why choose us?</h2>
            <p className="text-gray-300 mt-2">Everything you need to build faster.</p>
          </motion.div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Large Box - Single Line ClassName */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between h-[300px] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-110" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lightning Fast Performance</h3>
                <p className="text-gray-500 max-w-sm">Optimized with Next.js 14 and Turbopack. Experience zero latency and instant page loads.</p>
              </div>
            </motion.div>

            {/* Card 2: Small Box - Single Line ClassName */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-center items-center text-center h-[300px]"
            >
               <h3 className="text-5xl font-extrabold text-gray-900 mb-2">99%</h3>
               <p className="text-gray-500 font-medium">Customer Satisfaction</p>
               <div className="mt-6 flex -space-x-2 overflow-hidden">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300" />
                  ))}
               </div>
            </motion.div>

            {/* Card 3: Tall Box - Single Line ClassName */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500 ease-out h-[300px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Safe</h3>
                <p className="text-sm text-gray-500">Enterprise grade security built-in.</p>
              </div>
              <div className="w-full bg-gray-100 rounded-xl h-32 flex items-center justify-center">
                 <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
            </motion.div>

            {/* Card 4: Wide Box - Single Line ClassName */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-black text-white rounded-3xl p-10 border border-gray-800 shadow-md hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-[300px]"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to start?</h3>
                <p className="text-gray-400 max-w-sm">Join thousands of developers building the future with our tools today.</p>
                <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
                  Create Account
                </button>
              </div>
              <div className="w-full md:w-1/2 bg-gray-800/50 rounded-2xl h-40 border border-gray-700 flex items-center justify-center">
                <span className="text-gray-500 font-mono text-xs">console.log("Hello World")</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. Simple Stats --- */}
      <section className="py-20 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Active Users', value: '10K+' },
            { label: 'Downloads', value: '50K+' },
            { label: 'Countries', value: '20+' },
            { label: 'Server Uptime', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}