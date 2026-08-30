import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  size = 'md',
  iconOnly = false
}) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-14 md:h-16',
    xl: 'h-16 sm:h-20'
  };

  const iconSizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const heightClass = iconOnly ? iconSizeMap[size] : sizeMap[size];

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center justify-center select-none flex-shrink-0 ${className}`}>
        <img
          src="/logo-icon.png"
          alt="My Computer"
          className={`${heightClass} w-auto object-contain drop-shadow-sm transition-transform duration-200 hover:scale-105`}
        />
      </div>
    );
  }

  // Variant handling:
  // - 'dark': renders dark version (white text for dark backgrounds)
  // - 'light': renders light version (dark text for light backgrounds)
  // - 'auto': automatically switches between light/dark based on current theme class
  return (
    <div className={`inline-flex items-center select-none flex-shrink-0 ${className}`}>
      {variant === 'dark' ? (
        <img
          src="/logo-dark.png"
          alt="My Computer - Laptop, Desktop, Accessories"
          className={`${heightClass} w-auto object-contain max-w-full drop-shadow-sm transition-transform duration-200 hover:scale-[1.02]`}
        />
      ) : variant === 'light' ? (
        <img
          src="/logo.png"
          alt="My Computer - Laptop, Desktop, Accessories"
          className={`${heightClass} w-auto object-contain max-w-full drop-shadow-sm transition-transform duration-200 hover:scale-[1.02]`}
        />
      ) : (
        <>
          <img
            src="/logo.png"
            alt="My Computer - Laptop, Desktop, Accessories"
            className={`${heightClass} w-auto object-contain max-w-full drop-shadow-sm transition-transform duration-200 hover:scale-[1.02] dark:hidden block`}
          />
          <img
            src="/logo-dark.png"
            alt="My Computer - Laptop, Desktop, Accessories"
            className={`${heightClass} w-auto object-contain max-w-full drop-shadow-sm transition-transform duration-200 hover:scale-[1.02] hidden dark:block`}
          />
        </>
      )}
    </div>
  );
};

