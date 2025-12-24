// src/app/layout.js
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import dynamic from "next/dynamic"; // 1. เพิ่ม import dynamic
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";

// 2. เปลี่ยนการ import Footer เป็นแบบ Dynamic (Lazy Load)
const Footer = dynamic(() => import("@/components/Footer"), {
  // (Optional) แสดง Placeholder ระหว่างรอโหลด เพื่อกัน Layout Shift
  loading: () => <div className="h-20 w-full bg-transparent"></div>, 
});

// 3. ปรับจูน Font: เพิ่ม display: 'swap'
const font = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: 'swap', 
});

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "MyBrand - Minimal Glassmorphism Template",
  description: "A high-performance Next.js template featuring glassmorphism design, bento grid layout, and clean typography.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Glassmorphism", "Template"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Change 1: Removed bg-gray-50 and added text-gray-800 for better default contrast */}
      <body className={`${font.className} min-h-screen flex flex-col relative text-gray-800`}>
        <ScrollProgress />
        <Background />
        
        <Navbar />
        
        <main className="max-w-7xl mx-auto w-full p-6 pt-24 pb-10 flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}