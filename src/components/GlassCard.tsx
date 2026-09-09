import React, { useRef, useState, useCallback } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  id,
  glow = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!glow || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, [glow]);

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shine-card border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 ${className}`}
    >
      {/* Interactive cursor follower radial shine (desktop only) */}
      {glow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 hidden md:block"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.12), transparent 80%)`
          }}
        />
      )}

      {/* Subtle gold ambient corner glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-28 h-28 bg-[#D4AF37]/5 rounded-full blur-2xl" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
