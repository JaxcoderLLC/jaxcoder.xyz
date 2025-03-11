interface MetallicButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const MetallicButton = ({
  onClick,
  children,
  className = '',
  type = 'button'
}: MetallicButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative px-6 py-1.5 min-w-[140px] group overflow-hidden font-medium rounded-lg ${className}`}
    >
      {/* Background layers */}
      <div className="absolute inset-0 w-full h-full transition-all duration-1000 group-hover:scale-105 scale-100">
        {/* Base metal gradient */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,#1a1a1a,#2a2a2a,#1a1a1a)]" />

        {/* Metallic sheen */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-50" />

        {/* Dynamic highlight */}
        <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-30 group-hover:translate-y-0 translate-y-full transition-all duration-1500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_70%)]" />

        {/* Edge highlight */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-white/20 opacity-20" />
      </div>
      {/* Metallic border */}
      <div className="absolute inset-0 w-full h-full rounded-lg border-2 border-gray-400/40 group-hover:border-gray-600/30 transition-colors duration-1000" />

      {/* Inner border glow */}
      <div className="absolute inset-[1px] rounded-lg bg-gradient-to-br from-white/10 via-transparent to-white/10 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-1000" />

      {/* Text shadow for depth */}
      <span className="relative z-30 text-gray-100 group-hover:text-white transition-colors duration-1000 text-shadow-sm">
        {children}
      </span>
    </button>
  );
};

export default MetallicButton; 