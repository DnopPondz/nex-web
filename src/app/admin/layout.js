'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation"; // Added for active state
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  const navItems = [
    { name: 'News', href: '/admin/news' },
    { name: 'Services', href: '/admin/services' },
    { name: 'Products', href: '/admin/products' }, // Placeholder for products
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/admin/news" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              NexWeb Admin
            </Link>
            
            {/* Main Navigation */}
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    pathname.startsWith(item.href) 
                    ? 'bg-purple-50 text-purple-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-sm text-gray-500 hover:text-gray-900 hidden md:block">
              ดูหน้าเว็บ &rarr;
            </Link>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-lg border border-red-100 hover:bg-red-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl w-full mx-auto p-6">
        {children}
      </main>
    </div>
  );
}