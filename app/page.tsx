// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { catalogData, type Category } from '../menu-data';
import { 
  ChevronRight, 
  Menu, 
  ShieldCheck, 
  Search, 
  ShoppingCart, 
  ArrowRight,
  Scale
} from 'lucide-react';

export default function Home() {
  const [activeCat, setActiveCat] = useState<Category | null>(null);

  const createSlug = (text: string) => {
    return text.toLowerCase().replace(/ /g, '-');
  };

  return (
    <main className="min-h-screen bg-[#020408] relative flex flex-col font-sans">
      
      {/* 1. ПЕРВЫЙ ЭКРАН */}
      <section className="h-screen w-full relative flex flex-col overflow-hidden border-b border-white/5">
        <header className="relative z-50 bg-[#05070a] border-b border-white/5">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
              <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <ShieldCheck size={28} />
              </div>
              <div className="flex flex-col items-center leading-none text-center">
                <span className="text-2xl font-black">Your<span className="text-blue-500">Systems</span></span>
                <span className="text-[9px] font-bold tracking-[0.3em] mt-1 opacity-80 uppercase">Security Solutions</span>
              </div>
            </Link>

            {/* Кнопка УСЛУГИ с прозрачной обводкой и 3 полосками как у каталога */}
            <div className="relative group" onMouseLeave={() => setActiveCat(null)}>
              <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all uppercase">
                <Menu size={18} className="text-blue-400 group-hover:text-white" /> УСЛУГИ
              </button>
              
              <div className="absolute top-full left-0 w-full h-[20px] invisible group-hover:visible" />

              <div className="absolute top-[calc(100%+15px)] left-0 bg-[#0a0c10] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[260px] py-4 z-50">
                <Link href="/project" className="block px-8 py-3 text-[11px] uppercase tracking-widest font-black text-white/70 hover:text-blue-500 hover:bg-white/5 transition-all">
                  Проектирование
                </Link>
                <Link href="/services/montazh" className="block px-8 py-3 text-[11px] uppercase tracking-widest font-black text-white/70 hover:text-blue-500 hover:bg-white/5 transition-all">
                  Монтаж
                </Link>
              </div>
            </div>
            
            <div className="relative group" onMouseLeave={() => setActiveCat(null)}>
              <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all uppercase">
                <Menu size={18} className="text-blue-400 group-hover:text-white" /> КАТАЛОГ
              </button>
              
              <div className="absolute top-full left-0 w-full h-[20px] invisible group-hover:visible" />

              <div className={`absolute top-[calc(100%+15px)] left-0 bg-[#0a0c10] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex overflow-hidden z-50 ${activeCat ? 'w-max' : 'w-[260px]'}`}>
                <div className="w-[260px] py-4 bg-[#05070a]">
                  {catalogData.map((cat: Category) => (
                    <div key={cat.id} onMouseEnter={() => setActiveCat(cat)} className="px-8 py-3.5 cursor-pointer flex justify-between items-center transition-all group/cat text-white">
                      <span className={`text-[11px] uppercase tracking-widest font-black transition-colors ${activeCat?.id === cat.id ? 'text-blue-500' : 'group-hover/cat:text-blue-500'}`}>{cat.name}</span>
                      <ChevronRight size={14} className={activeCat?.id === cat.id ? 'text-blue-500' : 'opacity-20'} />
                    </div>
                  ))}
                </div>
                {activeCat && (
                  <div className="p-10 min-w-[450px] bg-[#0a0c10] border-l border-white/5 animate-in fade-in duration-200">
                    <h3 className="text-3xl font-black mb-8 border-b border-white/5 pb-4 uppercase tracking-tight text-blue-600 font-[family-name:var(--font-inter-tight)]">{activeCat.name}</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-slate-400 font-bold text-sm">
                      {activeCat.sub.map((item: string) => (
                        <a key={item} href={`/catalog/${activeCat.slug}/${createSlug(item)}`} className="hover:text-blue-500 transition-all">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-1 max-w-sm relative">
              <input type="text" placeholder="Поиск..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-blue-600/30" />
              <Search className="absolute right-4 top-3 text-slate-500" size={18} />
            </div>

            <div className="flex items-center gap-6 font-black">
              <a href="tel:88000000000" className="text-lg hover:text-blue-500 transition-colors tracking-tighter">8 800 000-00-00</a>
              <Link href="/compare">
                <button className="p-3 rounded-xl transition-all hover:bg-blue-600">
                  <Scale size={20} className="text-white/60 hover:text-white transition-colors" />
                </button>
              </Link>
              <button className="bg-blue-600 p-3 rounded-xl relative hover:bg-blue-700 transition-all shadow-[0_5px_15px_rgba(37,99,235,0.2)]">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </button>
            </div>
          </div>
        </header>

        <section className="flex-1 flex flex-col md:flex-row items-center container mx-auto px-6 overflow-hidden gap-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center py-12 z-20 md:pl-20">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-[94px] font-black leading-[0.85] tracking-tight uppercase mb-10 font-[family-name:var(--font-inter-tight)]">
                <span className="text-white block">Проектируем</span> 
                <span className="text-blue-600 block">Вашу уверенность</span>
              </h1>
              
              <div className="mb-12 space-y-2">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  Инженерные системы безопасности высшего класса.
                </p>
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  От глубокого аудита до полной реализации проекта.
                </p>
              </div>

              <Link href="/project">
                <button className="w-fit bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95 uppercase shadow-[0_15px_30px_rgba(37,99,235,0.2)]">
                  Стать партнером <ArrowRight size={22} />
                </button>
              </Link>
              
              <div className="mt-20 text-white/40 text-[9px] font-black tracking-[1em] uppercase">
                Est. 2020 / YourSystems Engineering
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center relative p-8">
            <div className="absolute w-[80%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
              <video autoPlay muted loop playsInline className="max-h-[85%] max-w-full object-contain rounded-[48px] shadow-[0_0_100px_rgba(37,99,235,0.15)] border border-white/5">
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </section>

      {/* 2. ВТОРОЙ БЛОК */}
      <section className="py-40 bg-[#020408]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <h2 className="text-5xl md:text-[110px] font-black uppercase leading-[0.8] tracking-tighter font-[family-name:var(--font-inter-tight)]">
              <span className="text-white block">Проектируем</span>
              <span className="text-blue-600 block">Вашу уверенность</span>
            </h2>
            
            <div className="mt-20 max-w-3xl space-y-6">
              <p className="text-3xl md:text-5xl font-black text-white leading-tight uppercase font-[family-name:var(--font-inter-tight)]">
                Инженерные системы <br/> высшего класса.
              </p>
              <p className="text-xl md:text-2xl text-white font-medium">
                От глубокого аудита до полной реализации проекта.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}