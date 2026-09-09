import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  return (
    <div className={`transition-opacity duration-300 ease-out animate-fadeIn ${className}`}>
      {children}
    </div>
  );
};
