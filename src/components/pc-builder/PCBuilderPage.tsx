import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS } from '../../data/mockData';
import type { Product } from '../../types';
import {
  Sparkles,
  Cpu,
  HardDrive,
  MemoryStick,
  CircuitBoard,
  Database,
  Zap,
  Box,
  Fan,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Printer,
  ShoppingCart
} from 'lucide-react';

const slotIcons: Record<string, React.ReactNode> = {
  cpu: <Cpu className="w-6 h-6 text-orange-500" />,
  motherboard: <HardDrive className="w-6 h-6 text-blue-500" />,
  ram: <MemoryStick className="w-6 h-6 text-cyan-500" />,
  gpu: <CircuitBoard className="w-6 h-6 text-purple-500" />,
  storage: <Database className="w-6 h-6 text-emerald-500" />,
  psu: <Zap className="w-6 h-6 text-amber-500" />,
  case: <Box className="w-6 h-6 text-slate-500" />,
  cooler: <Fan className="w-6 h-6 text-indigo-500" />
};

export const PCBuilderPage: React.FC = () => {
  const {
    pcBuildComponents,
    addPCComponent,
    removePCComponent,
    clearPCBuild,
    pcBuildTotalBDT,
    pcBuildTotalWattage,
    pcBuildCompatibilityIssue,
    addAllPCToCart,
    language
  } = useStore();

  const [activeSlot, setActiveSlot] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Get available products for active slot modal
  const slotProducts = activeSlot
    ? PRODUCTS.filter(p => p.pcBuilderCategory === activeSlot)
    : [];

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-blue-900/60 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-orange-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Compatibility Engine</span>
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-3">
            {language === 'EN' ? 'Custom PC Builder' : 'কাস্টম পিসি বিল্ডার'}
          </h1>
          <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-xl">
            Choose your core components, check CPU socket & motherboard compatibility, monitor estimated wattage, and order directly.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3 min-w-[260px] text-right">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Estimated Price</span>
            <span className="text-2xl md:text-3xl font-extrabold text-orange-400">
              ৳{pcBuildTotalBDT.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-end gap-2 text-xs text-slate-300 border-t border-slate-800 pt-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Est. Power: <strong className="text-amber-400 font-bold">{pcBuildTotalWattage} W</strong></span>
          </div>
        </div>
      </div>

      {/* Compatibility Banner */}
      {pcBuildCompatibilityIssue ? (
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
          <div className="text-xs font-semibold">{pcBuildCompatibilityIssue}</div>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
          <div className="text-xs font-semibold">
            All selected components are 100% compatible! Complete your build and add all to cart.
          </div>
        </div>
      )}

      {/* Slots Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md overflow-hidden">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
            PC Component Slots
          </h3>

          <div className="flex items-center space-x-3">
            <button
              onClick={clearPCBuild}
              className="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1 font-semibold transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset All</span>
            </button>

            <button
              onClick={handlePrint}
              className="text-xs text-slate-700 dark:text-slate-200 hover:text-blue-600 flex items-center gap-1 font-semibold px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Quotation</span>
            </button>

            <button
              onClick={addAllPCToCart}
              disabled={pcBuildComponents.every(s => s.product === null)}
              className="text-xs bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-extrabold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add Build to Cart</span>
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {pcBuildComponents.map(slot => {
            const hasProduct = slot.product !== null;

            return (
              <div key={slot.slotId} className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                
                {/* Slot Name & Icon */}
                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    {slotIcons[slot.slotId] || <Cpu className="w-6 h-6 text-slate-500" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {language === 'EN' ? slot.slotName : slot.slotNameBn}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium uppercase">
                      Required Component
                    </span>
                  </div>
                </div>

                {/* Product Detail if selected */}
                <div className="flex-1">
                  {hasProduct ? (
                    <div className="flex items-center space-x-4 bg-slate-100/70 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                      <img
                        src={slot.product!.images[0]}
                        alt={slot.product!.name}
                        className="w-12 h-12 object-contain rounded-xl bg-white dark:bg-slate-900 p-1"
                      />
                      <div className="flex-1">
                        <h5 className="font-bold text-xs md:text-sm text-slate-900 dark:text-white line-clamp-1">
                          {slot.product!.name}
                        </h5>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          <span>Brand: <strong>{slot.product!.brand}</strong></span>
                          {slot.product!.socketType && <span>Socket: <strong className="text-blue-500">{slot.product!.socketType}</strong></span>}
                          {slot.product!.wattage && <span>Draw: <strong className="text-amber-500">{slot.product!.wattage}W</strong></span>}
                        </div>
                      </div>
                      <div className="text-right pr-2">
                        <span className="font-extrabold text-sm text-orange-500 block">
                          ৳{slot.product!.discountPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 italic">
                      No part selected for this slot yet
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end space-x-2 min-w-[140px]">
                  {hasProduct ? (
                    <>
                      <button
                        onClick={() => setActiveSlot(slot.slotId)}
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/50"
                      >
                        Change
                      </button>
                      <button
                        onClick={() => removePCComponent(slot.slotId)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setActiveSlot(slot.slotId)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Select Part</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Selector */}
      {activeSlot && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-base">
                Select {activeSlot.toUpperCase()} Component
              </h3>
              <button
                onClick={() => setActiveSlot(null)}
                className="text-slate-400 hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3">
              {slotProducts.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-sm">
                  No products available for this slot right now.
                </div>
              ) : (
                slotProducts.map((p: Product) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      addPCComponent(activeSlot, p);
                      setActiveSlot(null);
                    }}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 cursor-pointer flex items-center justify-between gap-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >
                    <img src={p.images[0]} alt={p.name} className="w-14 h-14 object-contain rounded-xl bg-slate-100 dark:bg-slate-950 p-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs md:text-sm text-slate-900 dark:text-white line-clamp-1">{p.name}</h4>
                      <p className="text-[11px] text-slate-400 mt-1">{p.shortSpecs.join(' • ')}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-base text-orange-500 block">৳{p.discountPrice.toLocaleString()}</span>
                      <button className="mt-1 bg-blue-600 text-white font-bold text-[11px] px-3 py-1 rounded-lg">Select</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
