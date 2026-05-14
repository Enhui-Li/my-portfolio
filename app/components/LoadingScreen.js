'use client';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((p) => {
        const next = Math.min(p + 3, 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <i className="fas fa-code text-9xl text-emerald-500 mb-10"></i>
      <div className="w-80 h-5 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 transition-all" style={{ width: percent + "%" }}></div>
      </div>
      <p className="text-emerald-400 text-3xl mt-4">{percent}%</p>
    </div>
  );
};

export default LoadingScreen;