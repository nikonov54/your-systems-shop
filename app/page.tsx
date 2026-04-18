// app/page.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/app/components/Header';

export default function Home() {
  return (
    <main className="h-screen bg-[#020408] relative flex flex-col font-sans overflow-hidden">
      <Header />
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center container mx-auto px-6 gap-12 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase mb-6 font-[family-name:var(--font-inter-tight)]">
              <span className="text-white block">Проектируем</span> 
              <span className="text-blue-600 block">Вашу уверенность</span>
            </h1>
            
            <div className="mb-8 space-y-2">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                Инженерные системы безопасности высшего класса.
              </p>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                От глубокого аудита до полной реализации проекта.
              </p>
            </div>

            <Link href="/project">
              <button className="w-fit bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-base md:text-lg hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95 uppercase shadow-[0_15px_30px_rgba(37,99,235,0.2)]">
                Стать партнером <ArrowRight size={20} />
              </button>
            </Link>
            
            <div className="mt-12 text-white/40 text-[8px] font-black tracking-[1em] uppercase">
              Est. 2020 / YourSystems Engineering
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative p-8">
          <div className="absolute w-[80%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="max-h-[85%] max-w-full object-contain rounded-[48px] shadow-[0_0_100px_rgba(37,99,235,0.15)] border border-white/5"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}