import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PhoneCall, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, addToast } = useStore();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Message Sent!', 'Thank you for contacting My Computer. Our support agent will reach out within 2 hours.', 'success');
  };

  return (
    <div className="py-8 space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 md:p-8 text-white border border-blue-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Contact & Support Desk' : 'যোগাযোগ ও সাপোর্ট ডেস্ক'}
          </h1>
          <p className="text-xs text-blue-200/80 mt-1">
            Have questions about product availability, EMI, or warranty? We are available 7 days a week!
          </p>
        </div>

        <div className="flex items-center gap-3 bg-orange-500 text-white px-5 py-3 rounded-2xl font-bold text-xs shadow-lg self-start md:self-auto">
          <PhoneCall className="w-5 h-5 animate-pulse" />
          <div>
            <span className="text-[10px] block uppercase opacity-80">Hotline Number</span>
            <span className="text-base font-extrabold">16789 / +880 1711-000111</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-200 pb-3">
              Corporate Headquarters
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Shop #304-308 (3rd Floor), BCS Computer City, IDB Bhaban, Agargaon, Dhaka-1207</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="font-semibold text-slate-900">support@mycomputerbd.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>10:00 AM - 8:00 PM (Everyday except Sunday)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <span>Send Us a Direct Inquiry</span>
          </h3>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <h4 className="font-extrabold text-lg text-emerald-800">Inquiry Received!</h4>
              <p className="text-xs text-emerald-700">Our customer care team will contact your phone or email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Shakib Ahmed"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01711000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message Details *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what product specs or quotation you need..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
