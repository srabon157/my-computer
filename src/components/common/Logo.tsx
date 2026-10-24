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
  // Logo image is 3:2 landscape — height controls scale, maxWidth prevents overflow.
  // Large maxWidth values ensure the brand text ("MY COMPUTER") is fully visible.
  const sizeMap: Record<string, { hClass: string; maxW: string }> = {
    sm: { hClass: 'h-10',  maxW: '180px' },  // mobile header
    md: { hClass: 'h-12',  maxW: '220px' },  // default / tablet
    lg: { hClass: 'h-14',  maxW: '270px' },  // desktop header
    xl: { hClass: 'h-18',  maxW: '340px' },  // footer / about page
  };

  const iconSizeMap: Record<string, string> = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
    xl: 'h-18 w-18',
  };

  // 'multiply' blend mode makes white JPG pixels transparent on light backgrounds.
  // 'isolation: isolate' on the wrapper scopes the blend to this element only.
  const multiplyStyle: React.CSSProperties = { mixBlendMode: 'multiply' };

  if (iconOnly) {
    return (
      <div
        className={`inline-flex items-center justify-center select-none flex-shrink-0 ${className}`}
        style={{ isolation: 'isolate' }}
      >
        <img
          src="/logo-icon.png"
          alt="My Computer"
          className={`${iconSizeMap[size]} object-contain transition-transform duration-200 hover:scale-105`}
          style={multiplyStyle}
        />
      </div>
    );
  }

  const { hClass, maxW } = sizeMap[size];

  // Scale 1.25x inside an overflow-hidden wrapper trims away the baked-in white border
  // padding around the image, making the actual logo and brand name significantly wider & clearer
  const imgClass = `${hClass} w-auto object-contain scale-[1.28] transition-transform duration-200 hover:scale-[1.32]`;

  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden select-none flex-shrink-0 ${className}`}
      style={{ isolation: 'isolate', maxHeight: '100%' }}
    >
      {variant === 'dark' ? (
        <img
          src="/logo-dark.png"
          alt="My Computer - Laptop, Desktop, Accessories"
          className={imgClass}
          style={{ maxWidth: maxW }}
        />
      ) : (
        <img
          src="/logo.png"
          alt="My Computer - Laptop, Desktop, Accessories"
          className={imgClass}
          style={{ ...multiplyStyle, maxWidth: maxW }}
        />
      )}
    </div>
  );
};
