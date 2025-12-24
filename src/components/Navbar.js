// src/components/Navbar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname() || '/';
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full">
      {/* 1. เปลี่ยนพื้นหลังเป็นกระจกสีขาวขุ่น (White Glass) 
        2. เพิ่มขอบสีเทาจางๆ และเงา
      */}
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center p-2 bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5 rounded-full overflow-hidden"
      >
        
        {/* Logo Section */}
        <motion.button
          layout 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`cursor-pointer select-none flex items-center h-full outline-none ${isExpanded ? 'pl-4 pr-1' : 'px-6'}`}
        >
          {/* 3. เปลี่ยนสี Logo เป็นสีดำเข้ม (Gray-900) */}
          <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
            MyBrand
          </span>
        </motion.button>

        {/* Links Section */}
        <AnimatePresence mode='popLayout'>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="flex items-center gap-1 overflow-hidden pl-3 pr-2"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    /* 4. Logic สีตัวหนังสือ:
                      - Active: สีดำ (Gray-900) + ตัวหนา
                      - Inactive: สีเทากลาง (Gray-500) -> Hover เป็นสีเทาเข้ม (Gray-700)
                    */
                    className={`
                      relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                      ${isActive ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        /* 5. พื้นหลังของปุ่ม Active เป็นสีขาวชัดเจน + เงา (ให้ดูนูนขึ้นมา) */
                        className="absolute inset-0 bg-white shadow-sm rounded-full border border-gray-100"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </div>
  );
};

export default Navbar;