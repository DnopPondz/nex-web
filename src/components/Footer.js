import Link from "next/link";

// --- Data Section ---
const productLinks = [
  { path: '#', name: 'Features' },
  { path: '#', name: 'Integrations' },
  { path: '#', name: 'Pricing' },
  { path: '#', name: 'Changelog' },
];

const companyLinks = [
  { path: '#', name: 'About Us' },
  { path: '#', name: 'Careers' },
  { path: '#', name: 'Blog' },
  { path: '#', name: 'Contact' },
];

const legalLinks = [
  { path: '#', name: 'Privacy Policy' },
  { path: '#', name: 'Terms of Service' },
];

const Footer = () => {
  return (
    <div className="w-full flex justify-center mt-10 mb-20">
      <footer
        className="
          w-[95%] md:w-[80%] max-w-7xl
          bg-gray-400/30 backdrop-blur-xl
          border border-white/20 shadow-2xl 
          rounded-3xl 
          p-8 md:p-12
          /* 1. เปลี่ยน Base Text เป็นสีขาว */
          text-white
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              MyBrand
            </h3>
            <p className="text-sm text-gray-100 leading-relaxed">
              Creating glassmorphism UI components for the modern web. Simple, beautiful, and functional.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            {/* 2. เปลี่ยนสีลิ้งค์เป็นขาวอมเทา (gray-200) เวลา Hover เป็นขาวชัด (white) */}
            <ul className="space-y-3 text-sm text-gray-200">
              {productLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-200">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h4 className="font-bold text-white mb-6">Subscribe</h4>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full px-4 py-3 rounded-xl 
                  bg-white/40 border border-white/30 
                  focus:outline-none focus:ring-2 focus:ring-black/10
                  /* 3. ปรับสี Text ใน Input และ Placeholder เป็นโทนขาว */
                  placeholder-gray-200 text-sm text-white
                  transition-all
                "
              />
              <button
                className="
                  w-full bg-black text-white 
                  py-3 rounded-xl text-sm font-bold
                  hover:bg-gray-800 transition-all transform hover:scale-[1.02]
                  cursor-pointer shadow-lg
                "
              >
                Join Newsletter
              </button>
            </div>

            {/* Social Icons - เปลี่ยนเป็นสีขาว */}
            <div className="flex gap-5 mt-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        {/* 4. ปรับเส้น Border ให้เป็นสีขาวจางๆ และ Text ขาว */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200">
          <p>© 2024 MyBrand Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             {legalLinks.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.path} 
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;