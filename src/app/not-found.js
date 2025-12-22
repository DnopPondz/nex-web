import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h2 className="text-9xl font-bold text-gray-200">404</h2>
      <h3 className="text-2xl font-bold text-gray-900">Page Not Found</h3>
      <p className="text-gray-500">The page you are looking for doesn't exist or has been moved.</p>
      
      <Link 
        href="/"
        className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all"
      >
        Return Home
      </Link>
    </div>
  )
}