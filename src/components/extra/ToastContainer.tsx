import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start p-4 rounded-xl shadow-xl backdrop-blur-md border transition-all duration-300 transform translate-y-0 ${
            toast.type === 'warning'
              ? 'bg-amber-500/90 text-white border-amber-400/50'
              : toast.type === 'info'
              ? 'bg-blue-600/90 text-white border-blue-400/50'
              : 'bg-slate-900/95 text-white border-blue-500/40 dark:bg-slate-900/95'
          }`}
        >
          <div className="mr-3 mt-0.5 text-orange-400">
            {toast.type === 'warning' ? (
              <AlertCircle className="w-5 h-5 text-amber-200" />
            ) : toast.type === 'info' ? (
              <Info className="w-5 h-5 text-blue-200" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            )}
          </div>
          <div className="flex-1 pr-2">
            <h4 className="font-semibold text-sm leading-tight">{toast.title}</h4>
            {toast.message && <p className="text-xs text-slate-300 mt-1 line-clamp-2">{toast.message}</p>}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
