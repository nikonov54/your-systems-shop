// app/components/Toast.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, GitCompare } from 'lucide-react';

interface ToastProps {
  message: string;
  link?: string;
  linkText?: string;
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, link, linkText, duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-[#0a0c10] border border-white/10 rounded-xl shadow-2xl p-4 flex items-center gap-4 min-w-[280px] backdrop-blur-sm">
        <div className="bg-blue-600/20 p-2 rounded-full">
          <GitCompare size={18} className="text-blue-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-white font-medium">{message}</p>
          {link && linkText && (
            <Link href={link} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
              {linkText} →
            </Link>
          )}
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<{ message: string; link?: string; linkText?: string } | null>(null);

  const showToast = (message: string, link?: string, linkText?: string) => {
    setToast({ message, link, linkText });
  };

  const hideToast = () => setToast(null);

  const ToastComponent = toast ? (
    <Toast
      message={toast.message}
      link={toast.link}
      linkText={toast.linkText}
      onClose={hideToast}
    />
  ) : null;

  return { showToast, ToastComponent };
}