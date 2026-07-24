import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ShieldCheck, Award, Truck, DollarSign, CreditCard, Lock, Tag, Headset } from 'lucide-react';

const trustCards = [
  { icon: ShieldCheck, title: 'Genuine Products', desc: '100% authentic tech items directly from global manufacturers.', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/50' },
  { icon: Award, title: 'Official Warranty', desc: 'Official brand replacement & service warranty across Bangladesh.', color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' },
  { icon: Truck, title: 'Superfast Delivery', desc: '24-hour delivery inside Dhaka metro & 48-hour all over BD.', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/50' },
  { icon: DollarSign, title: 'Cash on Delivery', desc: 'Pay cash upon inspecting your product at your doorstep.', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' },
  { icon: CreditCard, title: '0% EMI Support', desc: 'Flexible 3 to 36 months EMI with 30+ major Bangladeshi banks.', color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50' },
  { icon: Lock, title: 'Secure Payment', desc: 'SSLCommerz, bKash, Nagad, Visa & Mastercard encrypted checkout.', color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/50' },
  { icon: Tag, title: 'Best Price Guarantee', desc: 'Unbeatable competitive prices for laptops & PC components.', color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/50' },
  { icon: Headset, title: 'Expert Support', desc: 'Dedicated technical assistance from custom PC specialists.', color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50' }
];

export const WhyChooseUs: React.FC = () => {
  const { language } = useStore();

  return (
    <section className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {language === 'EN' ? 'Why Choose "My Computer"?' : 'কেন বেছে নেবেন "মাই কম্পিউটার"?'}
        </h2>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2">
          Bangladesh’s most trusted online technology store with enterprise service standards
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {trustCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">{card.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
