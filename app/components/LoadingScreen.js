'use client';
export default function LoadingScreen({ loadingPercent }) {
  return (
    <div className="loading-screen fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-3xl px-4">
        <div className="relative mb-10">
          <i className="fas fa-code text-9xl text-emerald-500"></i>
          <div className="absolute -top-4 -right-8 bg-emerald-500 text-black text-2xl font-bold px-4 py-2 rounded">ENG</div>
        </div>

        <div className="progress-bar mx-auto mb-6 w-full max-w-3xl h-8">
          <div className="progress-fill h-full bg-emerald-500" style={{ width: `${loadingPercent}%` }}></div>
        </div>

        <div className="flex items-center justify-center text-emerald-400 font-mono text-5xl mb-4">
          <i className="fas fa-terminal mr-4"></i> {loadingPercent}%
        </div>

        <div className="mt-6 font-mono text-gray-400 text-3xl">&gt; import &#123; Enhui &#125; from './engineer'</div>
      </div>

      <div className="absolute bottom-12 text-gray-400 font-mono text-2xl">© 2026 Enhui Li</div>
    </div>
  );
}