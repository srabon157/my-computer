import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { Sparkles, ChevronLeft, ChevronRight, ShoppingBag, ShieldCheck, Flame, Zap, Star } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  titleHighlight: string;
  subtitle: string;
  badge: string;
  discount: string;
  image: string;
  ctaText: string;
  category: string;
  bgFrom: string;
  bgVia: string;
  bgTo: string;
  accentColor: string;
  glowColor: string;
  orb1: string;
  orb2: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'ASUS ROG Strix G16',
    titleHighlight: '(2024)',
    subtitle: 'Intel Core i9 14900HX • RTX 4080 12GB • 240Hz Nebula Display',
    badge: '🔥 Flagship Gaming',
    discount: 'Save ৳26,000 BDT',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Buy ROG Strix Now',
    category: 'laptop',
    bgFrom: '#020617',
    bgVia: '#0f172a',
    bgTo: '#1e1b4b',
    accentColor: '#f97316',
    glowColor: 'rgba(249,115,22,0.4)',
    orb1: 'rgba(59,130,246,0.25)',
    orb2: 'rgba(249,115,22,0.2)',
  },
  {
    id: 2,
    title: 'MacBook Pro 16"',
    titleHighlight: 'M3 Max',
    subtitle: '16-Core CPU • 40-Core GPU • 48GB Unified RAM • Space Black',
    badge: '⚡ Ultimate Creator',
    discount: '0% EMI Up to 12 Months',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Order MacBook Pro',
    category: 'laptop',
    bgFrom: '#020617',
    bgVia: '#0f172a',
    bgTo: '#0c1a3a',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.4)',
    orb1: 'rgba(99,102,241,0.25)',
    orb2: 'rgba(59,130,246,0.2)',
  },
  {
    id: 3,
    title: 'RTX 4090 Custom',
    titleHighlight: 'Gaming Rig',
    subtitle: 'Intel i9 14900K + RTX 4090 + 32GB DDR5 RAM + Lian Li O11',
    badge: '🎮 Custom PC Fest',
    discount: 'Free Assembly & Delivery',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Build Custom Rig',
    category: 'gaming-pc',
    bgFrom: '#020617',
    bgVia: '#0f172a',
    bgTo: '#1a0533',
    accentColor: '#a855f7',
    glowColor: 'rgba(168,85,247,0.4)',
    orb1: 'rgba(168,85,247,0.25)',
    orb2: 'rgba(236,72,153,0.2)',
  },
  {
    id: 4,
    title: 'LG C3 55" 4K OLED',
    titleHighlight: 'Smart TV',
    subtitle: '120Hz Native • G-Sync Compatible • Dolby Vision IQ & Atmos',
    badge: '🖥️ Home Theater',
    discount: '৳20,000 Discount Coupon',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Explore Smart TVs',
    category: 'tv-appliance',
    bgFrom: '#020617',
    bgVia: '#0f172a',
    bgTo: '#042f2e',
    accentColor: '#10b981',
    glowColor: 'rgba(16,185,129,0.4)',
    orb1: 'rgba(16,185,129,0.25)',
    orb2: 'rgba(6,182,212,0.2)',
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
    setTimeout(() => { setIsAnimating(false); }, 600);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
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
    <div
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl text-white my-6 border border-slate-800/60"
      style={{ background: `linear-gradient(135deg, ${slide.bgFrom}, ${slide.bgVia}, ${slide.bgTo})`, transition: 'background 0.8s ease' }}
    >
      {/* ── Animated Background Orbs ─────────────────────────── */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-60 pointer-events-none transition-all duration-1000"
        style={{ background: slide.orb1 }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-50 pointer-events-none transition-all duration-1000"
        style={{ background: slide.orb2 }}
      />

      {/* ── Particle Dots ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              top: `${10 + i * 8}%`,
              left: `${5 + i * 9}%`,
              background: i % 3 === 0 ? slide.accentColor : i % 3 === 1 ? '#3b82f6' : '#8b5cf6',
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i * 0.8}s`,
              borderRadius: '50%',
              position: 'absolute',
              animation: `particleDrift ${5 + i * 0.8}s ${i * 0.7}s infinite ease-in-out`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* ── Grid pattern overlay ─────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="relative min-h-[480px] md:min-h-[520px] flex items-center p-6 md:p-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Text + CTA */}
          <div
            className="lg:col-span-7 space-y-5 z-10"
            key={`text-${current}`}
            style={{ animation: 'fadeInLeft 0.55s ease both' }}
          >
            {/* Badge Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest backdrop-blur-md border"
                style={{
                  background: `${slide.accentColor}25`,
                  borderColor: `${slide.accentColor}55`,
                  color: slide.accentColor,
                  boxShadow: `0 0 16px ${slide.glowColor}`,
                }}
              >
                {slide.badge}
              </span>

              <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold backdrop-blur-md">
                {slide.discount}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              <span className="text-white drop-shadow-lg">{slide.title}</span>
              <br />
              <span style={{ color: slide.accentColor, textShadow: `0 0 40px ${slide.glowColor}` }}>
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-medium">
              {slide.subtitle}
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 frosted-badge px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Official Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 frosted-badge px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" style={{ color: slide.accentColor }} />
                <span>Fast Dhaka Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 frosted-badge px-3 py-1.5 rounded-full">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>0% EMI Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => handleCta(slide)}
                className="btn-glow-orange relative font-extrabold text-sm px-8 py-4 rounded-2xl text-white overflow-hidden flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${slide.accentColor}, ${slide.accentColor}cc)`,
                }}
              >
                <Zap className="w-4 h-4" />
                <span>{slide.ctaText}</span>
              </button>

              <button
                onClick={() => setCurrentView('shop')}
                className="font-bold text-sm px-6 py-4 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-md hover-lift"
              >
                {language === 'EN' ? 'Browse Catalog' : 'ক্যাটালগ দেখুন'}
              </button>
            </div>

            {/* Rating proof */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-xs text-slate-400">
                <span className="text-white font-bold">4.9/5</span> · Trusted by 50,000+ customers
              </span>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            className="lg:col-span-5 relative flex items-center justify-center z-10"
            key={`img-${current}`}
            style={{ animation: 'fadeInRight 0.55s ease both' }}
          >
            {/* Glow ring behind image */}
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl"
              style={{ background: slide.orb1, opacity: 0.8 }}
            />

            <div className="relative w-full max-w-md group">
              {/* Floating badge top-right */}
              <div
                className="absolute -top-4 -right-4 z-20 px-3 py-2 rounded-2xl text-xs font-extrabold animate-float-subtle"
                style={{
                  background: `${slide.accentColor}22`,
                  border: `1px solid ${slide.accentColor}55`,
                  color: slide.accentColor,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>HOT DEAL</span>
                </div>
              </div>

              {/* Image frame */}
              <div
                className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700/40"
                style={{
                  boxShadow: `0 30px 80px ${slide.glowColor}, 0 0 0 1px rgba(255,255,255,0.06)`,
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-4 left-4 right-4 frosted-badge p-3 rounded-2xl flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">Genuine Brand Stock</p>
                  <p className="text-[10px] text-slate-400">Verified · My Computer BD</p>
                </div>
                <span
                  className="px-2.5 py-1 rounded-lg text-white font-extrabold text-[10px] tracking-wider"
                  style={{ background: slide.accentColor }}
                >
                  IN STOCK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide Navigation ─────────────────────────────────── */}
      <button
        onClick={() => goTo(current === 0 ? slides.length - 1 : current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 hover:bg-slate-700 text-white border border-slate-700 transition-all backdrop-blur-md hover-lift"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 hover:bg-slate-700 text-white border border-slate-700 transition-all backdrop-blur-md hover-lift"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dots ─────────────────────────────────────────────── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goTo(idx)}
            className="rounded-full transition-all duration-400"
            style={{
              width: current === idx ? '32px' : '8px',
              height: '8px',
              background: current === idx ? slide.accentColor : 'rgba(148,163,184,0.5)',
              boxShadow: current === idx ? `0 0 10px ${slide.glowColor}` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};
