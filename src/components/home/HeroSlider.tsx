import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { Sparkles, ChevronLeft, ChevronRight, ShoppingBag, ShieldCheck, Zap, Star } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  titleHighlight: string;
  subtitle: string;
  badge: string;
  tagline: string;
  image: string;
  ctaText: string;
  category: string;
  accentColor: string;
  softBg: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'ASUS ROG Strix G16',
    titleHighlight: '2024 Edition',
    subtitle: 'Intel Core i9 14900HX • RTX 4080 12GB • 240Hz Nebula Display • Liquid Metal Cooling',
    badge: 'Flagship Gaming',
    tagline: 'Official 2-Year BD Warranty',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Explore ROG Strix',
    category: 'laptop',
    accentColor: '#2563eb',
    softBg: 'from-blue-50/70 via-white to-indigo-50/40',
  },
  {
    id: 2,
    title: 'MacBook Pro 16"',
    titleHighlight: 'M3 Max Power',
    subtitle: '16-Core CPU • 40-Core GPU • 48GB Unified RAM • Space Black Liquid Retina XDR',
    badge: 'Pro Creator',
    tagline: 'Official Apple Warranty',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'View MacBook Pro',
    category: 'laptop',
    accentColor: '#0f172a',
    softBg: 'from-slate-100/80 via-white to-sky-50/40',
  },
  {
    id: 3,
    title: 'Custom Gaming Rig',
    titleHighlight: 'RTX 4090 Monster',
    subtitle: 'Intel Core i9 14900K • RTX 4090 24GB • 64GB DDR5 RAM • 360mm Liquid AIO Cooler',
    badge: 'Custom Build',
    tagline: 'Precision Cable & Benchmarked',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Configure Rig',
    category: 'gaming-pc',
    accentColor: '#7c3aed',
    softBg: 'from-purple-50/70 via-white to-slate-50',
  },
  {
    id: 4,
    title: 'LG C3 55" OLED',
    titleHighlight: 'Cinema & 120Hz',
    subtitle: 'Self-Lit OLED Pixels • G-Sync & FreeSync • Dolby Vision IQ & Dolby Atmos Sound',
    badge: 'Home Entertainment',
    tagline: 'Authorised Importer Stock',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Browse Smart TVs',
    category: 'tv-appliance',
    accentColor: '#059669',
    softBg: 'from-emerald-50/70 via-white to-teal-50/40',
  }
];

export const HeroSlider: React.FC = () => {
  const { setCurrentView, setFilters, language } = useStore();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (isAnimating || idx === current) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => { setIsAnimating(false); }, 500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, isAnimating]);

  const handleCta = (slide: Slide) => {
    if (slide.category === 'gaming-pc') {
      setCurrentView('pc-builder');
    } else {
      setFilters(p => ({ ...p, category: slide.category }));
      setCurrentView('shop');
    }
  };

  const slide = slides[current];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 shadow-sm bg-gradient-to-br from-sky-50 via-white to-blue-50/80 transition-colors duration-700">

      {/* Main Content Container */}
      <div className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex items-center p-6 sm:p-8 md:p-10 lg:p-14">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Headline & Actions */}
          <div
            className="lg:col-span-7 space-y-4 lg:space-y-6 z-10"
            key={`text-${current}`}
            style={{ animation: 'fadeInLeft 0.5s ease both' }}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide border shadow-xs"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: 'rgba(226, 232, 240, 0.9)',
                  color: slide.accentColor
                }}
              >
                {slide.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold">
                {slide.tagline}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950">
              <span>{slide.title}</span>
              <br />
              <span className="text-blue-600">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-800 max-w-xl leading-relaxed font-semibold">
              {slide.subtitle}
            </p>

            {/* Trust Features */}
            <div className="flex flex-wrap gap-3 sm:gap-5 pt-1 text-xs text-slate-900 font-bold">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>100% Genuine BD Stock</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Fast Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
                <ShoppingBag className="w-4 h-4 text-emerald-600" />
                <span>EMI Options Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleCta(slide)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4" />
                <span>{slide.ctaText}</span>
              </button>
              <button
                onClick={() => setCurrentView('shop')}
                className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-xl border border-blue-200 transition-all duration-200 shadow-xs"
              >
                {language === 'EN' ? 'Browse Catalog' : 'ক্যাটালগ দেখুন'}
              </button>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-xs text-slate-800 font-semibold">
                <strong className="text-slate-950 font-black">4.9/5</strong> · Verified Customer Ratings
              </span>
            </div>
          </div>

          {/* Right: 3D Animated Product Showcase */}
          <div
            className="flex lg:col-span-5 relative items-center justify-center z-10 perspective-1000 mt-2 lg:mt-0"
            key={`img-${current}`}
            style={{ animation: 'fadeInRight 0.5s ease both' }}
          >
            {/* Subtle background glow */}
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl pointer-events-none opacity-25"
              style={{ background: slide.accentColor }}
            />

            <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_25px_-5px_rgba(37,99,235,0.1)] border border-slate-200 preserve-3d animate-float-3d">
              {/* 3D Floating Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-3 z-30 px-3 py-1 rounded-full bg-white text-slate-900 text-[11px] font-bold shadow-md border border-slate-200 flex items-center gap-1.5 translate-z-30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Stock</span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-slate-50 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-2.5 sm:mt-3 px-2 py-1 flex items-center justify-between">
                <div>
                  <p className="font-bold text-xs text-slate-950">Official Warranty</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium">My Computer BD Genuine Import</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] tracking-wide border border-blue-200">
                  READY TO SHIP
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goTo(current === 0 ? slides.length - 1 : current - 1)}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md transition-all hover:scale-105"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md transition-all hover:scale-105"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goTo(idx)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === idx ? '24px' : '6px',
              height: '6px',
              backgroundColor: current === idx ? '#2563eb' : '#cbd5e1',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
