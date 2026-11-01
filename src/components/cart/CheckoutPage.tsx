import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Order } from '../../types';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Printer,
  Smartphone,
  CreditCard,
  Banknote,
  Lock,
  Sparkles,
  ShoppingBag,
  Loader2,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

/* ── Payment method definitions ─────────────────────────────── */
const PAYMENT_METHODS = [
  {
    id: 'Cash on Delivery',
    label: 'Cash on Delivery (ক্যাশ অন ডেলিভারি)',
    desc: 'Pay when your package arrives at your doorstep',
    tagline: 'Recommended • No advance payment required',
    icon: Banknote,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    borderActive: 'border-emerald-500',
    ringColor: 'ring-emerald-400/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    badgeColor: 'bg-emerald-500',
    isPopular: true,
  },
  {
    id: 'bKash',
    label: 'bKash (বিকাশ)',
    desc: 'Mobile Financial Service',
    tagline: 'Pay with bKash personal/merchant wallet',
    icon: Smartphone,
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderActive: 'border-pink-400',
    ringColor: 'ring-pink-400/30',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    badgeColor: 'bg-pink-500',
  },
  {
    id: 'Nagad',
    label: 'Nagad (নগদ)',
    desc: 'Instant MFS Checkout',
    tagline: 'Fast & secure Nagad digital pay',
    icon: Smartphone,
    gradient: 'from-orange-500 to-amber-600',
    lightBg: 'bg-gradient-to-br from-orange-50 to-amber-50',
    borderActive: 'border-orange-400',
    ringColor: 'ring-orange-400/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 'SSLCommerz',
    label: 'Credit / Debit Card (কার্ড পেমেন্ট)',
    desc: 'Visa, Mastercard, AMEX, UnionPay',
    tagline: '256-bit SSL encrypted bank gateway',
    icon: CreditCard,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    borderActive: 'border-blue-400',
    ringColor: 'ring-blue-400/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badgeColor: 'bg-blue-500',
  },
];

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
    paymentMethod: 'Cash on Delivery' as 'Cash on Delivery' | 'bKash' | 'Nagad' | 'SSLCommerz'
  });

  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const shippingCost = formData.district === 'Dhaka' ? 120 : 200;
  const grandTotal = cartTotal + shippingCost;

  const validateBdPhone = (phone: string): boolean => {
    const clean = phone.replace(/[\s-]/g, '');
    return /^(?:\+88|88)?01[3-9]\d{8}$/.test(clean);
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
        paymentMethod: formData.paymentMethod
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
      <div className="py-12 max-w-2xl mx-auto space-y-6 animate-fadeIn">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100 shadow-2xl text-center space-y-5 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
          
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-200/50">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
              {language === 'EN' ? 'Order Confirmed' : 'অর্ডার গৃহীত হয়েছে'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'EN' ? 'Order Placed Successfully!' : 'অর্ডার সফলভাবে গ্রহণ করা হয়েছে!'}
            </h2>
            <p className="text-xs text-slate-500">
              {language === 'EN'
                ? 'Thank you for shopping at My Computer. Your order is registered in our system.'
                : 'My Computer-এ কেনাকাটা করার জন্য ধন্যবাদ। আপনার অর্ডারটি সফলভাবে সংরক্ষিত হয়েছে।'}
            </p>
          </div>

          {/* Key Confirmation Box */}
          <div className="p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-left text-xs space-y-3.5 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Order ID:' : 'অর্ডার আইডি:'}</span>
              <span className="font-extrabold text-base text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200/60">
                {completedOrder.id || completedOrder.orderId}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Customer Name:' : 'গ্রাহকের নাম:'}</span>
              <span className="font-bold text-slate-800">{completedOrder.customerName}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Phone Number:' : 'ফোন নম্বর:'}</span>
              <span className="font-bold text-slate-800">{completedOrder.customerPhone}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Payment Method:' : 'পেমেন্ট মেথড:'}</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60">
                {completedOrder.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Order Status:' : 'অর্ডার স্ট্যাটাস:'}</span>
              <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                {completedOrder.orderStatus || 'Pending'}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-200/80 pb-3">
              <span className="text-slate-500 font-semibold">{language === 'EN' ? 'Delivery Address:' : 'ডেলিভারি ঠিকানা:'}</span>
              <span className="font-bold text-slate-800 text-right max-w-[60%]">
                {completedOrder.shippingAddress}{completedOrder.area ? `, ${completedOrder.area}` : ''}, {completedOrder.district}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm font-extrabold pt-1">
              <span className="text-slate-900">{language === 'EN' ? 'Total Payable Amount:' : 'সর্বমোট প্রদেয়:'}</span>
              <span className="text-orange-600 text-lg">৳{(completedOrder.total || completedOrder.grandTotal || 0).toLocaleString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setCurrentView('shop')}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-200/50 transition-all hover:scale-[1.02]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{language === 'EN' ? 'Continue Shopping' : 'আরো কেনাকাটা করুন'}</span>
            </button>

            <button
              onClick={handlePrintInvoice}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-all hover:shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'EN' ? 'Print Invoice' : 'ইনভয়েস প্রিন্ট করুন'}</span>
            </button>

            <button
              onClick={() => setCurrentView('order-tracking')}
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-slate-300 transition-all"
            >
              <Truck className="w-4 h-4 text-blue-600" />
              <span>{language === 'EN' ? 'Track Live' : 'লাইভ ট্র্যাকিং'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Empty Cart Notice ───────────────────────────────────── */
  if (cart.length === 0) {
    return (
      <div className="py-16 max-w-xl mx-auto text-center space-y-5 animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800">
          {language === 'EN' ? 'Your Shopping Cart is Empty' : 'আপনার শপিং কার্ট খালি'}
        </h2>
        <p className="text-xs text-slate-500">
          {language === 'EN'
            ? 'Add high-performance laptops, monitors, or accessories to your cart to proceed with checkout.'
            : 'অর্ডার করার জন্য কার্টে পণ্য যোগ করুন।'}
        </p>
        <button
          onClick={() => setCurrentView('shop')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'EN' ? 'Browse Products' : 'প্রোডাক্ট দেখুন'}</span>
        </button>
      </div>
    );
  }

  /* ── Checkout form ───────────────────────────────────────── */
  return (
    <div className="py-8 space-y-6 animate-fadeIn">
      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 text-white border border-blue-900/40 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-purple-600/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span>Checkout & Order Confirmation</span>
            </h1>
            <p className="text-xs text-blue-200/80 mt-1">
              Provide your delivery information and choose your preferred payment method.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            Cash on Delivery Available
          </span>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2.5 animate-fadeIn">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
          <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-600" />
            <span>Customer & Delivery Information (গ্রাহক ও ডেলিভারি তথ্য)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Full Name */}
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Full Name (পূর্ণ নাম) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Ahmed"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
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
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
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
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
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
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-all font-medium"
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
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
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
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
              />
            </div>
          </div>

          {/* Payment Gateway Selection */}
          <div className="space-y-4 pt-5 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Payment Method (পেমেন্ট পদ্ধতি)</span>
              </h4>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SSL Encrypted</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((pay) => {
                const isSelected = formData.paymentMethod === pay.id;
                const IconComp = pay.icon;

                return (
                  <div
                    key={pay.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: pay.id as any })}
                    className={`relative cursor-pointer rounded-2xl border-2 p-4 transition-all duration-300 ${
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

                    <div className="flex items-start gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isSelected ? pay.iconBg : 'bg-slate-100'
                      }`}>
                        <IconComp className={`w-5 h-5 transition-colors duration-300 ${
                          isSelected ? pay.iconColor : 'text-slate-500'
                        }`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h5 className={`font-bold text-xs sm:text-[13px] ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                            {pay.label}
                          </h5>
                        </div>
                        <p className={`text-[10px] mt-0.5 ${isSelected ? 'text-slate-600' : 'text-slate-400'}`}>
                          {pay.desc}
                        </p>
                        {pay.tagline && (
                          <p className={`text-[10px] mt-1 font-semibold ${isSelected ? pay.iconColor : 'text-slate-400'} flex items-center gap-1`}>
                            <Sparkles className="w-3 h-3 flex-shrink-0" />
                            <span>{pay.tagline}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> 256-bit Secure
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> 100% Authentic Products
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Fastest Courier Delivery Across Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Summary Column */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center justify-between">
              <span>Order Summary</span>
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
                      <h5 className="font-bold text-slate-900 truncate max-w-[200px]" title={i.product.name}>
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
                  Payment: <strong>{formData.paymentMethod}</strong> (পণ্য পাওয়ার পর মূল্য পরিশোধ)
                </span>
              </div>
            </div>
          </div>

          {/* Place Order CTA with duplicate order prevention */}
          <button
            type="submit"
            disabled={isSubmitting || cart.length === 0}
            className={`w-full text-white font-extrabold text-sm py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 ${
              isSubmitting || cart.length === 0
                ? 'bg-slate-400 cursor-not-allowed opacity-75'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-200/50 hover:scale-[1.02] active:scale-[0.98]'
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
