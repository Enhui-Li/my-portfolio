'use client';
const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 px-6 rounded-md transition shadow-md hover:shadow-emerald-500/30 text-2xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;