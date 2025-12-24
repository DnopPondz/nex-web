// src/components/Navbar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// แก้ไข 1: ตรวจสอบ key ใน object ให้ตรงกันทั้งหมด (ใช้ 'path' เหมือนกันทุกตัว)
const navItems = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/news', name: 'News' }, // เพิ่มเมนู News (ต้องใช้ key 'path' ให้เหมือนตัวอื่น)
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname() || '/';
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full">
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
          <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
            MyBrand
          </span>
        </motion.button>

        {/* Links Section */}
        <AnimatePresence mode='popLayout'>
          {isExpanded && (
            <motion.div
              // แก้ไข 2: เพิ่ม key ให้ motion.div ที่อยู่ใต้ AnimatePresence โดยตรง
              key="nav-links-container"
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
                    href={item.path} // ตรงนี้จะไม่ error แล้วเพราะทุก item มี .path ครบ
                    className={`
                      relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                      ${isActive ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
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