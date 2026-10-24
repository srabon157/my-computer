import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import type { Product, PCBuildComponent } from '../../types';
import {
  Cpu, HardDrive, MemoryStick, CircuitBoard, Database,
  Zap, Box, Fan, Plus, Trash2, ShoppingCart, X, Search,
  CheckCircle2, AlertTriangle, ChevronRight, Sparkles,
  Monitor, Wrench
} from 'lucide-react';

/* ───── Slot metadata ──────────────────────────────────────── */
const SLOT_META: {
  id: PCBuildComponent['slotId'];
  label: string;
  labelBn: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}[] = [
  { id: 'cpu',         label: 'Processor (CPU)',   labelBn: 'প্রসেসর',          icon: <Cpu          className="w-4 h-4" />, color: 'text-orange-500',  glowColor: 'rgba(249,115,22,0.2)' },
  { id: 'motherboard', label: 'Motherboard',        labelBn: 'মাদারবোর্ড',       icon: <HardDrive    className="w-4 h-4" />, color: 'text-blue-500',    glowColor: 'rgba(59,130,246,0.2)' },
  { id: 'ram',         label: 'RAM',                labelBn: 'র‌্যাম',            icon: <MemoryStick  className="w-4 h-4" />, color: 'text-cyan-500',    glowColor: 'rgba(6,182,212,0.2)'  },
  { id: 'gpu',         label: 'Graphics Card (GPU)',labelBn: 'গ্রাফিক্স কার্ড',   icon: <CircuitBoard className="w-4 h-4" />, color: 'text-purple-500',  glowColor: 'rgba(168,85,247,0.2)' },
  { id: 'storage',     label: 'Storage (SSD/HDD)', labelBn: 'স্টোরেজ',          icon: <Database     className="w-4 h-4" />, color: 'text-emerald-500', glowColor: 'rgba(16,185,129,0.2)' },
  { id: 'psu',         label: 'Power Supply (PSU)',labelBn: 'পাওয়ার সাপ্লাই',    icon: <Zap          className="w-4 h-4" />, color: 'text-amber-500',   glowColor: 'rgba(245,158,11,0.2)' },
  { id: 'case',        label: 'Casing',             labelBn: 'কেসিং',            icon: <Box          className="w-4 h-4" />, color: 'text-slate-400',   glowColor: 'rgba(100,116,139,0.2)'},
  { id: 'cooler',      label: 'CPU Cooler',         labelBn: 'সিপিইউ কুলার',     icon: <Fan          className="w-4 h-4" />, color: 'text-indigo-500',  glowColor: 'rgba(99,102,241,0.2)' },
];

/* ───── Product Picker Sub-panel ───────────────────────────── */
interface ProductPickerProps {
  slotId: PCBuildComponent['slotId'];
  slotLabel: string;
  onSelect: (product: Product) => void;
  onClose: () => void;
}

const ProductPicker: React.FC<ProductPickerProps> = ({ slotId, slotLabel, onSelect, onClose }) => {
  const [search, setSearch] = useState('');

  const products = PRODUCTS.filter(p =>
    p.pcBuilderCategory === slotId &&
    (search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col h-full">
      {/* Picker Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Wrench className="w-4 h-4 text-orange-500" />
          <span className="font-bold text-sm text-slate-900">
            Select {slotLabel}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-slate-100 flex-shrink-0">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-1.5">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            autoFocus
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search product..."
            className="bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none flex-1"
          />
        </div>
      </div>

      {/* Product List */}
      <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-slate-400">
            <Monitor className="w-8 h-8 mb-2 opacity-40" />
            <p className="text-xs font-medium">No products found</p>
            <p className="text-[11px] mt-1">Try a different search</p>
          </div>
        ) : (
          products.map(p => (
            <button
              key={p.id}
              onClick={() => { onSelect(p); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-blue-50 transition-colors text-left group"
            >
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-10 h-10 object-contain rounded-lg bg-slate-100 p-1 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {p.name}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {p.shortSpecs.slice(0, 2).join(' • ')}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-xs font-extrabold text-orange-500 block">
                  ৳{p.discountPrice.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-500 font-bold">In Stock</span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

/* ───── Main PC Build Dropdown ─────────────────────────────── */
export const PCBuildDropdown: React.FC = () => {
  const {
    pcBuildComponents,
    addPCComponent,
    removePCComponent,
    clearPCBuild,
    pcBuildTotalBDT,
    pcBuildTotalWattage,
    pcBuildCompatibilityIssue,
    addAllPCToCart,
    setCurrentView,
    language,
  } = useStore();

  const [open, setOpen] = useState(false);
  const [activePickerSlot, setActivePickerSlot] = useState<PCBuildComponent['slotId'] | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setActivePickerSlot(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filledCount = pcBuildComponents.filter(s => s.product !== null).length;
  const activePicker = activePickerSlot ? SLOT_META.find(m => m.id === activePickerSlot) : null;

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={btnRef}
        onClick={() => { setOpen(prev => !prev); setActivePickerSlot(null); }}
        className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
          open
            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
            : 'bg-orange-500/10 text-orange-600 hover:bg-orange-500 hover:text-white border border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20'
        }`}
        title="PC Build Configurator"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{language === 'EN' ? 'PC Build' : 'পিসি বিল্ড'}</span>
        {filledCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-blue-600 text-white text-[9px] font-extrabold rounded-full flex items-center justify-center shadow">
            {filledCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          ref={panelRef}
          className={`fixed inset-x-2 top-16 bottom-20 sm:bottom-auto sm:inset-auto sm:absolute sm:right-0 sm:top-full sm:mt-2 z-[60] flex shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white sm:max-h-[560px] ${
            activePickerSlot ? 'sm:w-[680px]' : 'sm:w-[400px]'
          }`}
          style={{
            animation: 'slideUpBounce 0.3s cubic-bezier(0.22,1,0.36,1) both',
          }}
        >
          {/* ── Left: Component Slots ──────────────────────── */}
          <div
            className={`flex flex-col bg-white flex-shrink-0 ${
              activePickerSlot ? 'hidden sm:flex sm:w-[300px]' : 'w-full'
            }`}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 to-blue-950 text-white flex-shrink-0">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-400" />
                <span className="font-extrabold text-sm">
                  {language === 'EN' ? 'PC Build Configurator' : 'পিসি বিল্ড কনফিগারেটর'}
                </span>
              </div>
              <button
                onClick={() => { setOpen(false); setActivePickerSlot(null); }}
                className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Compatibility Banner */}
            <div className={`mx-3 mt-2 mb-1 px-3 py-1.5 rounded-xl text-[10px] font-semibold flex items-center gap-2 ${
              pcBuildCompatibilityIssue
                ? 'bg-red-500/10 text-red-600 border border-red-500/20'
                : filledCount > 0
                  ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                  : 'bg-slate-100 text-slate-500 border border-slate-200'
            }`}>
              {pcBuildCompatibilityIssue ? (
                <><AlertTriangle className="w-3 h-3 flex-shrink-0" /><span className="line-clamp-2">{pcBuildCompatibilityIssue}</span></>
              ) : filledCount > 0 ? (
                <><CheckCircle2 className="w-3 h-3 flex-shrink-0" /><span>Components compatible ✓</span></>
              ) : (
                <><Sparkles className="w-3 h-3 flex-shrink-0" /><span>Select components to build your PC</span></>
              )}
            </div>

            {/* Slot List */}
            <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
              {SLOT_META.map(meta => {
                const slot = pcBuildComponents.find(s => s.slotId === meta.id);
                const product = slot?.product ?? null;
                const isActivePicker = activePickerSlot === meta.id;

                return (
                  <div
                    key={meta.id}
                    className={`flex items-center gap-2.5 px-3 py-2.5 transition-colors ${
                      isActivePicker ? 'bg-blue-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Slot Icon */}
                    <div className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 ${meta.color}`}>
                      {meta.icon}
                    </div>

                    {/* Product info or empty */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-none mb-0.5">
                        {language === 'EN' ? meta.label : meta.labelBn}
                      </p>
                      {product ? (
                        <div className="flex items-center gap-1.5">
                          <img src={product.images[0]} alt={product.name} className="w-5 h-5 object-contain rounded" />
                          <p className="text-[11px] font-semibold text-slate-800 line-clamp-1 flex-1">
                            {product.name}
                          </p>
                          <span className="text-[11px] font-extrabold text-orange-500 flex-shrink-0">
                            ৳{product.discountPrice.toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-400 italic">Not selected</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {product ? (
                        <>
                          <button
                            onClick={() => setActivePickerSlot(isActivePicker ? null : meta.id)}
                            className="text-[10px] px-2 py-1 bg-blue-100 text-blue-600 rounded-lg font-bold hover:bg-blue-200 transition-colors"
                          >
                            Change
                          </button>
                          <button
                            onClick={() => {
                              removePCComponent(meta.id);
                              if (activePickerSlot === meta.id) setActivePickerSlot(null);
                            }}
                            className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setActivePickerSlot(isActivePicker ? null : meta.id)}
                          className={`flex items-center gap-1 text-[10px] px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                            isActivePicker
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-900 text-white hover:bg-blue-600'
                          }`}
                        >
                          <Plus className="w-3 h-3" />
                          Select
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer: Total + Actions */}
            <div className="px-3 py-3 border-t border-slate-200 bg-slate-50 flex-shrink-0 space-y-2">
              {/* Price summary */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold">Total Build Cost</p>
                  <p className="text-lg font-extrabold text-orange-500 leading-tight">
                    ৳{pcBuildTotalBDT.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-semibold">Est. Power</p>
                  <p className="text-xs font-bold text-amber-500">{pcBuildTotalWattage}W</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={clearPCBuild}
                  className="text-[11px] font-semibold text-slate-500 hover:text-red-500 transition-colors flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-red-50"
                >
                  <Trash2 className="w-3 h-3" />
                  Reset
                </button>

                <button
                  onClick={() => { setOpen(false); setCurrentView('pc-builder'); }}
                  className="flex-1 flex items-center justify-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-blue-500/40 text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <ChevronRight className="w-3 h-3" />
                  Full Builder
                </button>

                <button
                  onClick={() => {
                    addAllPCToCart();
                    setOpen(false);
                  }}
                  disabled={filledCount === 0}
                  className="flex-1 flex items-center justify-center gap-1 text-[11px] font-extrabold px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-orange-500/30"
                >
                  <ShoppingCart className="w-3 h-3" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* ── Right: Product Picker ──────────────────────── */}
          {activePickerSlot && activePicker && (
            <div
              className="flex-1 flex flex-col bg-white border-l border-slate-200"
              style={{ minWidth: 0 }}
            >
              <ProductPicker
                slotId={activePickerSlot}
                slotLabel={activePicker.label}
                onSelect={p => addPCComponent(activePickerSlot, p)}
                onClose={() => setActivePickerSlot(null)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
