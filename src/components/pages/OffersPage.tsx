import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_COUPONS } from '../../data/mockData';
import { Tag, Copy, Check, Gift, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const { language, addToast } = useStore();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    addToast('Code Copied!', `Voucher code ${code} copied to clipboard`, 'success');
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="py-6 space-y-8 animate-fadeIn">
      {/* Header Banner - Clean Light Design */}
      <div className="bg-gradient-to-br from-blue-50/70 via-white to-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Customer Rewards &amp; Privileges</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            {language === 'EN' ? 'Store Vouchers & Privileges' : 'স্টোর ভাউচার ও প্রিভিলেজ'}
          </h1>
          <p className="text-sm text-slate-600 max-w-xl">
            Enjoy complimentary delivery, official brand gifts, and 0% EMI partner bank benefits with your verified My Computer purchase.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center flex-shrink-0">
          <Gift className="w-8 h-8 text-blue-600 mx-auto mb-1.5" />
          <span className="text-xs font-semibold text-slate-500 block">Member Benefit</span>
          <span className="text-lg font-extrabold text-slate-900">0% EMI Available</span>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Tag className="w-5 h-5 text-blue-600" />
          <span>Active Store Vouchers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MOCK_COUPONS.map(coupon => (
            <div
              key={coupon.code}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
                    VOUCHER
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Valid till {coupon.validUntil}
                  </span>
                </div>

                <div className="py-2 px-3 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-between">
                  <span className="font-extrabold text-xl tracking-wider text-slate-900 font-mono">
                    {coupon.code}
                  </span>
                  <span className="text-xs text-blue-600 font-semibold">Verified</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Applicable on minimum cart value of <strong className="text-slate-900">৳{coupon.minSpendBDT.toLocaleString()} BDT</strong>
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(coupon.code)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                {copiedCode === coupon.code ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY CODE</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-xs">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-slate-900">0% EMI Available</h4>
            <p className="text-[11px] text-slate-500">Up to 24 months with 18+ leading banks</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-xs">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-slate-900">100% Genuine BD Stock</h4>
            <p className="text-[11px] text-slate-500">Official distributor warranty &amp; support</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-xs">
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-slate-900">Free Setup &amp; Delivery</h4>
            <p className="text-[11px] text-slate-500">Complimentary inside Dhaka on orders ৳5k+</p>
          </div>
        </div>
      </div>
    </div>
  );
};
