import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { STORE_LOCATIONS } from '../../data/mockData';
import { MapPin, Phone, Clock, Navigation, Building } from 'lucide-react';

export const StoreLocatorPage: React.FC = () => {
  const { language } = useStore();
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const cities = ['All', 'Dhaka', 'Chittagong', 'Sylhet'];
  const filteredStores = STORE_LOCATIONS.filter(s => selectedCity === 'All' || s.city === selectedCity);

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-blue-800/50 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Building className="w-4 h-4" />
            <span>Official Branches & Customer Experience Hubs</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Store Locations & Support Centers' : 'আউটলেট ও সাপোর্ট সেন্টারের অবস্থান'}
          </h1>
          <p className="text-xs text-blue-200/80 mt-1">
            Visit our physical showrooms in Dhaka, Chittagong & Sylhet for live demos & instant pickup
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-blue-700/50 backdrop-blur-md">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCity === city
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.map(store => (
          <div
            key={store.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  {store.isHeadquarter && (
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30 text-[10px] font-extrabold uppercase tracking-wider mb-1.5 inline-block">
                      Headquarters
                    </span>
                  )}
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {store.name}
                  </h3>
                </div>
                <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <p className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-900 dark:text-white">{store.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{store.hours}</span>
                </p>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
              <iframe
                title={store.name}
                src={store.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
