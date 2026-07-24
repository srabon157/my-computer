import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Tanvir Hossain',
    role: 'Full Stack Software Engineer, Dhaka',
    comment: 'Ordered an ASUS ROG Strix G16 from My Computer. Delivered within 18 hours inside Dhaka! The official warranty card and ROG backpack were intact. Outstanding service.',
    rating: 5,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Nusrat Jahan',
    role: 'Architect & 3D Visualizer, Chittagong',
    comment: 'Used their interactive Custom PC Builder tool to select an i9 14900K and RTX 4090. The compatibility checker saved me from choosing wrong RAM. Perfectly assembled rig!',
    rating: 5,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Mahmudur Rahman',
    role: 'Video Editor & Content Creator',
    comment: 'Bought Apple MacBook Pro M3 Max with bKash payment. Got smooth EMI breakdown options. Highly recommended technology shop in BD.',
    rating: 5,
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];

export const ReviewsSlider: React.FC = () => {
  const { language } = useStore();

  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {language === 'EN' ? 'Customer Testimonials' : 'গ্রাহকদের মতামত'}
        </h2>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
          Read genuine feedback from 50,000+ satisfied tech buyers across Bangladesh
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-100 dark:text-slate-800 pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div className="flex text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{t.comment}"
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 relative z-10">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{t.name}</h4>
                  {t.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                </div>
                <p className="text-[10px] text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
