'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
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
        className="flex items-center p-2 bg-gray-400/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-full overflow-hidden"
      >
        
        {/* Logo Section - จุดที่แก้ไข */}
        <motion.div 
          layout 
          onClick={() => setIsExpanded(!isExpanded)}
          // แก้ตรงนี้: ใช้เงื่อนไข check isExpanded
          // ถ้าเปิด (isExpanded): ใช้ 'pl-4 pr-1' เหมือนเดิม
          // ถ้าปิด (!isExpanded): ใช้ 'px-6' (ซ้ายขวาเท่ากัน) เพื่อให้ Logo อยู่ตรงกลางเป๊ะๆ
          className={`cursor-pointer select-none flex items-center h-full ${isExpanded ? 'pl-4 pr-1' : 'px-6'}`}
        >
          <span className="text-lg font-bold text-white whitespace-nowrap">
            MyBrand
          </span>
        </motion.div>

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
                    className={`
                      relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                      ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-gray-500'}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white/20 shadow-sm rounded-full"
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