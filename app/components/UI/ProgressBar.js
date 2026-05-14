'use client';
import { SIZES } from '../../config/constants';

export default function ProgressBar({ label, pct }) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <span className={SIZES.body}>{label}</span>
        <span className={`${SIZES.body} text-emerald-500`}>{pct}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full" style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
}