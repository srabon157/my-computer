import React from 'react';
import { useStore } from '../../context/StoreContext';
import { STORE_LOCATIONS } from '../../data/mockData';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export const StoreLocatorPage: React.FC = () => {
  const { language } = useStore();

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 text-white border border-blue-800/50 shadow-xl text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center mx-auto shadow">
          <MapPin className="w-6 h-6" />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {language === 'EN' ? 'Physical Branch Stores in Bangladesh' : 'মাই কম্পিউটার ব্রাঞ্চসমূহ'}
        </h1>
        <p className="text-xs text-blue-200/80 max-w-lg mx-auto">
          Visit our flagship technology experience centers in Dhaka, Chittagong & Sylhet for live product hands-on and instant pickup.
        </p>
      </div>

      {/* Grid of Stores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_LOCATIONS.map(store => (
          <div
            key={store.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-blue-600 uppercase tracking-wider">{store.city}</span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Open 10 AM - 8 PM</span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900">
                {store.name}
              </h3>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{store.address}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="font-semibold">{store.phone}</span>
                </div>



                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{store.hours}</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-800 font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
