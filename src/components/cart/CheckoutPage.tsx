import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Order } from '../../types';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Printer,
  Banknote,
  Lock,
  Sparkles,
  Loader2,
  AlertCircle,
  ArrowLeft,
  Copy,
  Check,
  PhoneCall,
  Hash
} from 'lucide-react';

/* ── MFS & Brand Logos ─────────────────────────────────────── */
const BkashLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#E2136E" />
    <path
      d="M30 65 L48 20 L66 65 Z M48 38 L38 60 L58 60 Z"
      fill="#ffffff"
      fillRule="evenodd"
    />
    <circle cx="50" cy="50" r="14" fill="#ffffff" />
    <path d="M44 43 L56 50 L44 57 Z" fill="#E2136E" />
  </svg>
);

const NagadLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#F7941D" />
    <path
      d="M50 18 C32 18 22 34 22 48 C22 66 36 82 50 82 C64 82 78 66 78 48 C78 34 68 18 50 18 Z M50 68 C40 68 32 58 32 48 C32 38 40 28 50 28 C60 28 68 38 68 48 C68 58 60 68 50 68 Z"
      fill="#ffffff"
    />
    <path
      d="M50 34 C42 34 38 42 38 48 C38 56 44 62 50 62 C56 62 62 56 62 48 C62 42 58 34 50 34 Z"
      fill="#ED1C24"
    />
  </svg>
);

const RocketLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#8C3494" />
    <path
      d="M50 18 L64 45 L50 40 L36 45 Z M42 43 L58 43 L62 68 L50 62 L38 68 Z M50 64 L56 82 L50 78 L44 82 Z"
      fill="#ffffff"
    />
    <circle cx="50" cy="52" r="5" fill="#8C3494" />
  </svg>
);

const UpayLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#002C6C" />
    <path
      d="M32 25 L44 25 L44 55 C44 62 46 66 50 66 C54 66 56 62 56 55 L56 25 L68 25 L68 56 C68 70 60 76 50 76 C40 76 32 70 32 56 Z"
      fill="#FFC400"
    />
    <circle cx="68" cy="22" r="5" fill="#FFC400" />
  </svg>
);

/* ── Payment method definitions (Card removed, bKash, Nagad, Rocket, Upay active) ── */
const PAYMENT_METHODS = [
  {
    id: 'Cash on Delivery',
    label: 'Cash on Delivery (ক্যাশ অন ডেলিভারি)',
    desc: 'Pay when your package arrives at your doorstep',
    tagline: 'Recommended • No advance payment required',
    customIcon: Banknote,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50/60',
    borderActive: 'border-emerald-500',
    ringColor: 'ring-emerald-400/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    badgeColor: 'bg-emerald-500',
    isMFS: false,
  },
  {
    id: 'bKash',
    label: 'bKash (বিকাশ)',
    desc: 'Send Money to 01873434639',
    tagline: 'Instant mobile payment via bKash App or *247#',
    logoComponent: BkashLogo,
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50/60',
    borderActive: 'border-pink-500',
    ringColor: 'ring-pink-400/30',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    badgeColor: 'bg-pink-500',
    isMFS: true,
  },
  {
    id: 'Nagad',
    label: 'Nagad (নগদ)',
    desc: 'Send Money to 01873434639',
    tagline: 'Instant digital payment via Nagad App or *167#',
    logoComponent: NagadLogo,
    gradient: 'from-orange-500 to-amber-600',
    lightBg: 'bg-orange-50/60',
    borderActive: 'border-orange-500',
    ringColor: 'ring-orange-400/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badgeColor: 'bg-orange-500',
    isMFS: true,
  },
  {
    id: 'Rocket',
    label: 'Rocket (রকেট)',
    desc: 'Send Money to 01873434639',
    tagline: 'DBBL Rocket MFS via App or *322#',
    logoComponent: RocketLogo,
    gradient: 'from-purple-600 to-indigo-700',
    lightBg: 'bg-purple-50/60',
    borderActive: 'border-purple-500',
    ringColor: 'ring-purple-400/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    badgeColor: 'bg-purple-600',
    isMFS: true,
  },
  {
    id: 'Upay',
    label: 'Upay (উপায়)',
    desc: 'Send Money to 01873434639',
    tagline: 'UCB Upay Digital Pay via App or *268#',
    logoComponent: UpayLogo,
    gradient: 'from-blue-700 to-amber-500',
    lightBg: 'bg-blue-50/60',
    borderActive: 'border-blue-600',
    ringColor: 'ring-blue-400/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    badgeColor: 'bg-blue-700',
    isMFS: true,
  },
];

const OFFICIAL_PAYMENT_NUMBER = '01873434639';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, couponDiscountBDT, cartTotal, placeOrder, setCurrentView, language } = useStore();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: '',
    district: 'Dhaka',
    note: '',
    paymentMethod: 'Cash on Delivery' as 'Cash on Delivery' | 'bKash' | 'Nagad' | 'Rocket' | 'Upay',
    senderNumber: '',
    trxId: '',
  });

  const [copiedNumber, setCopiedNumber] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const shippingCost = formData.district === 'Dhaka' ? 120 : 200;
  const grandTotal = cartTotal + shippingCost;
  const isMFSSelected = formData.paymentMethod !== 'Cash on Delivery';

  const validateBdPhone = (phone: string): boolean => {
    const clean = phone.replace(/[\s-]/g, '');
    return /^(?:\+88|88)?01[3-9]\d{8}$/.test(clean);
  };

  const handleCopyNumber = () => {
    try {
      navigator.clipboard.writeText(OFFICIAL_PAYMENT_NUMBER);
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2500);
    } catch {
      // Fallback
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (cart.length === 0) {
      setErrorMessage(language === 'EN' ? 'Your cart is empty. Please add products.' : 'আপনার কার্ট খালি। পণ্য যোগ করুন।');
      return;
    }

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage(language === 'EN' ? 'Please enter your full name.' : 'অনুগ্রহ করে আপনার পুরো নাম লিখুন।');
      return;
    }

    if (!validateBdPhone(formData.phone)) {
      setErrorMessage(
        language === 'EN'
          ? 'Please enter a valid 11-digit Bangladeshi mobile number (e.g. 017xxxxxxxx).'
          : 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)'
      );
      return;
    }

    if (!formData.address.trim() || formData.address.trim().length < 5) {
      setErrorMessage(
        language === 'EN'
          ? 'Please provide a detailed delivery address.'
          : 'অনুগ্রহ করে বিস্তারিত ডেলিভারি ঠিকানা দিন।'
      );
      return;
    }

    // MFS-specific validations
    if (isMFSSelected) {
      if (!formData.senderNumber.trim() || !validateBdPhone(formData.senderNumber)) {
        setErrorMessage(
          language === 'EN'
            ? `Please enter the 11-digit mobile number from which you sent money via ${formData.paymentMethod}.`
            : `অনুগ্রহ করে আপনার যে নম্বর থেকে ${formData.paymentMethod}-এ টাকা পাঠিয়েছেন সেই সঠিক মোবাইল নম্বরটি দিন।`
        );
        return;
      }

      if (!formData.trxId.trim() || formData.trxId.trim().length < 6) {
        setErrorMessage(
          language === 'EN'
            ? 'Please provide a valid Transaction ID (TrxID) received from your payment SMS.'
            : 'পেমেন্ট মেসেজে প্রাপ্ত সঠিক ট্রানজেকশন আইডি (TrxID) দিন (কমপক্ষে ৬ অক্ষর)।'
        );
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const res = await placeOrder({
        customerName: formData.name,
        customerPhone: formData.phone,
        customerEmail: formData.email,
        shippingAddress: formData.address,
        area: formData.area,
        district: formData.district,
        additionalNote: formData.note,
        paymentMethod: formData.paymentMethod,
        paymentNumber: OFFICIAL_PAYMENT_NUMBER,
        senderNumber: formData.senderNumber.trim(),
        trxId: formData.trxId.trim(),
      });

      if (res.success && res.order) {
        setCompletedOrder(res.order);
      } else {
        setErrorMessage(res.error || (language === 'EN' ? 'Failed to process order' : 'অর্ডার সম্পন্ন হতে সমস্যা হয়েছে'));
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  /* ── Order success view ─────────────────────────────────── */
  if (completedOrder) {
    return (
      <div className="py-8 sm:py-12 max-w-2xl mx-auto px-4 space-y-6 animate-fadeIn">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-emerald-100 shadow-2xl text-center space-y-5 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-200/50">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="space-y-1">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
              {language === 'EN' ? 'Order Confirmed' : 'অর্ডার গৃহীত হয়েছে'}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'EN' ? 'Order Placed Successfully!' : 'অর্ডার সফলভাবে গ্রহণ করা হয়েছে!'}
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {language === 'EN'
                ? 'Thank you for shopping at My Computer. Your order is registered in our system and ready for processing.'
                : 'My Computer-এ কেনাকাটা করার জন্য ধন্যবাদ। আপনার অর্ডারটি সফলভাবে সংরক্ষিত হয়েছে।'}
            </p>
          </div>

          {/* Key Confirmation Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-left text-xs space-y-3 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Order ID:' : 'অর্ডার আইডি:'}</span>
              <span className="font-extrabold text-sm sm:text-base text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200/60 font-mono">
                {completedOrder.id || completedOrder.orderId}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Customer Name:' : 'গ্রাহকের নাম:'}</span>
              <span className="font-bold text-slate-800">{completedOrder.customerName}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Phone Number:' : 'ফোন নম্বর:'}</span>
              <span className="font-bold text-slate-800 font-mono">{completedOrder.customerPhone}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Payment Method:' : 'পেমেন্ট মেথড:'}</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60">
                {completedOrder.paymentMethod}
              </span>
            </div>

            {completedOrder.trxId && (
              <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
                <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Transaction ID (TrxID):' : 'ট্রানজেকশন আইডি:'}</span>
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200/60">
                  {completedOrder.trxId}
                </span>
              </div>
            )}

            {completedOrder.senderNumber && (
              <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
                <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Sender Phone:' : 'প্রেরক নম্বর:'}</span>
                <span className="font-mono font-bold text-slate-800">
                  {completedOrder.senderNumber}
                </span>
              </div>
            )}

            <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Order Status:' : 'অর্ডার স্ট্যাটাস:'}</span>
              <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                {completedOrder.orderStatus || 'Pending'}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-2.5">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Delivery Address:' : 'ডেলিভারি ঠিকানা:'}</span>
              <span className="font-bold text-slate-800 text-right max-w-[65%]">
                {completedOrder.shippingAddress}{completedOrder.area ? `, ${completedOrder.area}` : ''}, {completedOrder.district}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm font-extrabold pt-1">
              <span className="text-slate-900">{language === 'EN' ? 'Total Payable Amount:' : 'সর্বমোট প্রদেয়:'}</span>
              <span className="text-orange-600 text-base sm:text-lg">৳{(completedOrder.total || completedOrder.grandTotal || 0).toLocaleString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handlePrintInvoice}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'EN' ? 'Print Invoice' : 'ইনভয়েস প্রিন্ট করুন'}</span>
            </button>

            <button
              onClick={() => setCurrentView('order-tracking')}
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Truck className="w-4 h-4" />
              <span>{language === 'EN' ? 'Track My Order' : 'অর্ডার ট্র্যাক করুন'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main Checkout Form View ───────────────────────────────── */
  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 animate-fadeIn">
      {/* Top Header */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <button
            onClick={() => setCurrentView('cart')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-orange-600 mb-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'EN' ? 'Back to Cart' : 'কার্টে ফিরে যান'}</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'EN' ? 'Secure Checkout' : 'নিরাপদ চেকআউট'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {language === 'EN'
              ? 'Complete your order with genuine warranty & fast delivery across Bangladesh'
              : 'অরিজিনাল ওয়ারেন্টি ও দ্রুত ডেলিভারির সাথে আপনার অর্ডার নিশ্চিত করুন'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4" />
          <span>SSL Secured • 100% Genuine</span>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-3 animate-shake">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Delivery Details & Payment */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          {/* Section 1: Customer Information */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
              <Truck className="w-4 h-4 text-orange-500" />
              <span>Customer &amp; Delivery Information (গ্রাহক ও ঠিকানা)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Full Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Full Name (সম্পূর্ণ নাম) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Md. Ashraful Islam"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium min-h-[44px]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Mobile Phone (মোবাইল নম্বর) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="01711000111"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium min-h-[44px]"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1.5">
                  Email Address (ইমেইল ঠিকানা) <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium min-h-[44px]"
                />
              </div>

              {/* District */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  District / Division (জেলা / বিভাগ) <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.district}
                  onChange={e => setFormData({ ...formData, district: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-all font-medium min-h-[44px]"
                >
                  <option value="Dhaka">Dhaka (ঢাকা - ৳120 Shipping)</option>
                  <option value="Chittagong">Chittagong (চট্টগ্রাম - ৳200 Shipping)</option>
                  <option value="Sylhet">Sylhet (সিলেট - ৳200 Shipping)</option>
                  <option value="Rajshahi">Rajshahi (রাজশাহী - ৳200 Shipping)</option>
                  <option value="Khulna">Khulna (খুলনা - ৳200 Shipping)</option>
                  <option value="Barisal">Barisal (বরিশাল - ৳200 Shipping)</option>
                  <option value="Rangpur">Rangpur (রংপুর - ৳200 Shipping)</option>
                  <option value="Mymensingh">Mymensingh (ময়মনসিংহ - ৳200 Shipping)</option>
                  <option value="Comilla">Comilla (কুমিল্লা - ৳200 Shipping)</option>
                  <option value="Gazipur">Gazipur (গাজীপুর - ৳200 Shipping)</option>
                  <option value="Narayanganj">Narayanganj (নারায়ণগঞ্জ - ৳200 Shipping)</option>
                  <option value="Other">Other Districts (অন্যান্য জেলা - ৳200 Shipping)</option>
                </select>
              </div>

              {/* Area / Thana */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Area / Thana (থানা / এলাকা) <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dhanmondi / Mirpur / Banani"
                  value={formData.area}
                  onChange={e => setFormData({ ...formData, area: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium min-h-[44px]"
                />
              </div>

              {/* Full Street Address */}
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1.5">
                  Full Street Address (সম্পূর্ণ ঠিকানা) <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House No, Road No, Flat/Apartment, Village/Area"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                ></textarea>
              </div>

              {/* Additional Note */}
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1.5">
                  Order Notes / Special Delivery Instruction <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Please deliver after 3:00 PM or call before arriving"
                  value={formData.note}
                  onChange={e => setFormData({ ...formData, note: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Gateway Selection (bKash, Nagad, Rocket, Upay, COD) */}
          <div className="space-y-4 pt-5 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Payment Method (পেমেন্ট পদ্ধতি)</span>
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Payment Channel</span>
              </div>
            </div>

            {/* Payment Method Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((pay) => {
                const isSelected = formData.paymentMethod === pay.id;
                const LogoC = pay.logoComponent;
                const IconC = pay.customIcon;

                return (
                  <div
                    key={pay.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: pay.id as any })}
                    className={`relative cursor-pointer rounded-2xl border-2 p-3.5 sm:p-4 transition-all duration-200 select-none ${
                      isSelected
                        ? `${pay.lightBg} ${pay.borderActive} ring-4 ${pay.ringColor} shadow-md scale-[1.01]`
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    {isSelected && (
                      <div className={`absolute -top-2 -right-2 w-6 h-6 ${pay.badgeColor} rounded-full flex items-center justify-center shadow-lg z-10`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                        isSelected ? pay.iconBg : 'bg-slate-100'
                      }`}>
                        {LogoC ? (
                          <LogoC className="w-7 h-7" />
                        ) : IconC ? (
                          <IconC className={`w-5 h-5 ${isSelected ? pay.iconColor : 'text-slate-500'}`} />
                        ) : null}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className={`font-extrabold text-xs sm:text-[13px] ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                          {pay.label}
                        </h5>
                        <p className={`text-[10px] mt-0.5 truncate ${isSelected ? 'text-slate-600' : 'text-slate-400'}`}>
                          {pay.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MFS Payment Instructions & TrxID Input (Shown when bKash, Nagad, Rocket, or Upay is selected) */}
            {isMFSSelected && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white space-y-4 shadow-xl border border-slate-800 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      <PhoneCall className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Official {formData.paymentMethod} Payment Number
                      </span>
                      <span className="text-xs text-slate-300">
                        নিচের নাম্বারে Send Money বা ক্যাশ আউট করুন
                      </span>
                    </div>
                  </div>

                  {/* Payment Number & Copy Button */}
                  <div className="flex items-center gap-2 bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700/80">
                    <span className="font-mono text-base sm:text-lg font-black text-amber-400 tracking-wider">
                      {OFFICIAL_PAYMENT_NUMBER}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors cursor-pointer flex items-center gap-1 text-[11px] font-bold"
                      title="নম্বর কপি করুন"
                    >
                      {copiedNumber ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">কপি হয়েছে!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>কপি</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Instructions */}
                <div className="text-[11px] text-slate-300 space-y-1 bg-white/5 p-3 rounded-xl border border-white/10">
                  <p className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>পেমেন্ট নির্দেশনা:</span>
                  </p>
                  <ol className="list-decimal list-inside space-y-0.5 text-slate-300 pl-1">
                    <li>আপনার <strong>{formData.paymentMethod}</strong> অ্যাপে বা ইউএসএসডি কোডে যান।</li>
                    <li><strong className="text-amber-300">{OFFICIAL_PAYMENT_NUMBER}</strong> নাম্বারে মোট <strong>৳{grandTotal.toLocaleString()}</strong> টাকা Send Money করুন।</li>
                    <li>সফল লেনদেনের পর নিচের ঘরে আপনার <strong>প্রেরক মোবাইল নম্বর</strong> এবং <strong>Transaction ID (TrxID)</strong> লিখুন।</li>
                  </ol>
                </div>

                {/* Sender Mobile Number & TrxID Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-200 mb-1 flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-emerald-400" />
                      <span>Sender Phone Number (আপনার নম্বর) <span className="text-red-400">*</span></span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="017xxxxxxxx"
                      value={formData.senderNumber}
                      onChange={e => setFormData({ ...formData, senderNumber: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-200 mb-1 flex items-center gap-1">
                      <Hash className="w-3 h-3 text-amber-400" />
                      <span>Transaction ID (TrxID) <span className="text-red-400">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BL9X4K2P"
                      value={formData.trxId}
                      onChange={e => setFormData({ ...formData, trxId: e.target.value.toUpperCase() })}
                      className="w-full p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-amber-400 placeholder-slate-500 text-xs font-mono font-bold uppercase focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all min-h-[44px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> 256-bit Secure Checkout
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> 100% Genuine Tech Products
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Fastest Courier Delivery Across Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Summary Column */}
        <div className="lg:col-span-5 bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center justify-between">
              <span>Order Summary (অর্ডার বিবরণী)</span>
              <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-bold">
                {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
              </span>
            </h3>

            {/* Cart Items List */}
            <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto my-3 pr-1 text-xs">
              {cart.map(i => (
                <div key={i.product.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-3 min-w-0">
                    <img
                      src={i.product.images[0] || 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop'}
                      alt=""
                      className="w-12 h-12 object-contain rounded-xl bg-slate-50 border border-slate-200/60 p-1 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h5 className="font-bold text-slate-900 truncate max-w-[180px] sm:max-w-[220px]" title={i.product.name}>
                        {i.product.name}
                      </h5>
                      <span className="text-[11px] text-slate-400">
                        Qty: <strong className="text-slate-700">{i.quantity}</strong> × ৳{i.product.discountPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <span className="font-extrabold text-orange-600 flex-shrink-0">
                    ৳{(i.product.discountPrice * i.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-2.5 text-xs pt-4 border-t border-slate-200">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal (সাবটোটাল):</span>
                <span className="font-bold text-slate-800">৳{cartSubtotal.toLocaleString()}</span>
              </div>

              {couponDiscountBDT > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Voucher Discount:</span>
                  <span>-৳{couponDiscountBDT.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-500">
                <span>Delivery Charge ({formData.district}):</span>
                <span className="font-bold text-slate-800">৳{shippingCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                <span>Grand Total (মোট মূল্য):</span>
                <span className="text-orange-600 text-xl font-black">৳{grandTotal.toLocaleString()}</span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  Selected Payment: <strong>{formData.paymentMethod}</strong>
                  {formData.paymentMethod === 'Cash on Delivery' ? ' (পণ্য পেয়ে মূল্য পরিশোধ)' : ' (অগ্রিম পেমেন্ট যাচাই)'}
                </span>
              </div>
            </div>
          </div>

          {/* Place Order CTA with duplicate order prevention */}
          <button
            type="submit"
            disabled={isSubmitting || cart.length === 0}
            className={`w-full text-white font-extrabold text-sm py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4 cursor-pointer min-h-[50px] ${
              isSubmitting || cart.length === 0
                ? 'bg-slate-400 cursor-not-allowed opacity-75'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-200/50 hover:scale-[1.01] active:scale-[0.99]'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Placing Order (অর্ডার প্রসেস হচ্ছে...)...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5" />
                <span>Confirm Order • ৳{grandTotal.toLocaleString()}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
