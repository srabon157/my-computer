import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { addToast, language } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      addToast(
        language === 'EN' ? 'Subscribed!' : 'সাবস্ক্রাইব সম্পন্ন!',
        language === 'EN' ? 'You will receive exclusive offer updates.' : 'আপনি অফারের আপডেটগুলো ইমেইলে পাবেন।'
      );
      setEmail('');
    }
  };

  return (
    <section className="py-12 my-6">
      <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-3xl p-8 md:p-12 text-white border border-blue-800/50 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Technology Club</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Get Special Offers & Tech Deals First' : 'বিশেষ অফার এবং প্রযুক্তি খবরের আপডেট নিন'}
          </h2>

          <p className="text-xs md:text-sm text-blue-100/80 leading-relaxed">
            Subscribe to our newsletter to receive secret discount vouchers, flash sale alerts, and custom PC build tips straight to your inbox.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Thank you for subscribing to My Computer Newsletter!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/90 text-white placeholder-slate-400 border border-slate-700 focus:border-orange-500 focus:outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-7 py-3.5 rounded-xl transition-all shadow-lg whitespace-nowrap"
              >
                {language === 'EN' ? 'Subscribe Now' : 'সাবস্ক্রাইব করুন'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
