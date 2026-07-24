import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  variant = 'auto',
  size = 'md'
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8 text-xl', title: 'text-lg', tagline: 'text-[9px]', gap: 'gap-2' },
    md: { icon: 'w-10 h-10 text-xl', title: 'text-xl', tagline: 'text-[9px]', gap: 'gap-2.5' },
    lg: { icon: 'w-12 h-12 text-2xl', title: 'text-2xl', tagline: 'text-[10px]', gap: 'gap-3' }
  };

  const s = sizeMap[size];

  const titleColor =
    variant === 'dark'
      ? 'text-white'
      : variant === 'light'
      ? 'text-slate-900'
      : 'text-slate-900 dark:text-white';

  const taglineColor =
    variant === 'dark'
      ? 'text-slate-300'
      : variant === 'light'
      ? 'text-slate-500'
      : 'text-slate-500 dark:text-slate-400';

  return (
    <div className={`inline-flex items-center ${s.gap} select-none ${className}`}>
      {/* Icon Box */}
      <div
        className={`${s.icon} rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-extrabold shadow-md flex-shrink-0`}
      >
        {/* MC monogram */}
        <span className="leading-none tracking-tight">MC</span>
      </div>

      {/* Text Section */}
      <div className="flex flex-col leading-none">
        {/* Brand Name */}
        <span className={`font-extrabold ${s.title} tracking-tight leading-tight ${titleColor}`}>
          MY<span className="text-orange-500">COMPUTER</span>
        </span>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`font-semibold uppercase tracking-[0.18em] ${s.tagline} ${taglineColor} mt-0.5`}
          >
            Your Tech, Our Passion
          </span>
        )}
      </div>
    </div>
  );
};
