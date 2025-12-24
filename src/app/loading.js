export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner แบบกำหนดเอง */}
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="text-purple-900 font-bold animate-pulse">Loading...</p>
      </div>
    </div>
  );
}