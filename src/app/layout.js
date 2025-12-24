// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import { Plus_Jakarta_Sans } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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