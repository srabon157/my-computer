import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_COUPONS } from '../../data/mockData';
import { Tag, Copy, Check, Percent, CreditCard, Gift, Flame } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const { language, addToast } = useStore();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    addToast('Coupon Copied!', `Coupon code ${code} copied to clipboard`, 'success');
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 rounded-3xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-amber-200 font-extrabold text-xs uppercase tracking-wider">
            <Flame className="w-5 h-5 fill-current animate-bounce" />
            <span>Exclusive BDT Deals & Discount Coupons</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Special Offers & Promo Codes' : 'স্পেশাল অফার ও কুপন কোড'}
          </h1>
          <p className="text-sm text-red-100 max-w-xl">
            Save extra on custom PC builds, gaming laptops, monitors & smart TVs with instant cashback & 0% EMI partner bank offers!
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 text-center relative z-10">
          <Gift className="w-10 h-10 text-amber-300 mx-auto mb-1 animate-pulse" />
          <span className="text-xs font-bold block">Instant Savings</span>
          <span className="text-xl font-extrabold text-white">Up to ৳10,000 Off</span>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Tag className="w-5 h-5 text-orange-500" />
          <span>Active Promo Codes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_COUPONS.map(coupon => (
            <div
              key={coupon.code}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-dashed border-orange-500/40 dark:border-orange-500/30 shadow-lg relative flex flex-col justify-between space-y-4 hover:border-orange-500 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 font-extrabold text-xs flex items-center gap-1">
                    <Percent className="w-3.5 h-3.5" />
                    {coupon.discountPercent}% DISCOUNT
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">
                    Valid till {coupon.validUntil}
                  </span>
                </div>

                <h3 className="font-extrabold text-2xl tracking-wider text-slate-900 dark:text-white font-mono">
                  {coupon.code}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Save up to <strong className="text-slate-900 dark:text-white">৳{coupon.maxDiscountBDT.toLocaleString()} BDT</strong> on minimum order of ৳{coupon.minSpendBDT.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(coupon.code)}
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow"
              >
                {copiedCode === coupon.code ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bank EMI Partners Banner */}
      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-emerald-400" />
          <div>
            <h3 className="font-extrabold text-lg">0% Interest EMI Partners in Bangladesh</h3>
            <p className="text-xs text-slate-400">Available for City Bank, EBL, BRAC Bank, SCB, DBBL & MTB Credit Cards</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
          {['City Bank AMEX', 'Eastern Bank (EBL)', 'BRAC Bank', 'Dutch-Bangla Bank', 'Standard Chartered', 'MTB Bank'].map(bank => (
            <div key={bank} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center text-xs font-bold text-slate-200">
              {bank}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
