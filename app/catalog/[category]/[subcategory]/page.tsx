'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ShieldCheck, Search, ShoppingCart } from 'lucide-react';
import { cameraFilters } from '../../filters-config';

export default function SubcategoryPage() {
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  
  const toggleGroup = (id: string) => {
    setOpenGroups(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  };

  return (
    <main className="h-screen bg-[#020408] relative flex flex-col font-sans text-white overflow-hidden">
      
      {/* HEADER */}
      <header className="relative z-50 bg-[#05070a] border-b border-white/5 shrink-0">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
            <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]"><ShieldCheck size={28} /></div>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="text-2xl font-black uppercase">Your<span className="text-blue-500">Systems</span></span>
              <span className="text-[9px] font-bold tracking-[0.3em] mt-1 opacity-80 uppercase">Security Solutions</span>
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 max-w-sm relative text-white">
            <input type="text" placeholder="Поиск по артикулу..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none" />
            <Search className="absolute right-4 top-3 text-slate-500" size={18} />
          </div>

          <div className="flex items-center gap-6 font-black">
            <a href="tel:88000000000" className="text-lg hover:text-blue-500 transition-colors tracking-tighter">8 800 000-00-00</a>
            <button className="bg-blue-600 p-3 rounded-xl relative hover:bg-blue-700 transition-all shadow-[0_5px_15px_rgba(37,99,235,0.2)]">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR (УЛЬТРА-КОМПАКТНЫЙ ДЛЯ ОТОБРАЖЕНИЯ ВСЕХ ГРУПП) */}
        <aside className="w-80 shrink-0 border-r border-white/5 bg-[#05070a] flex flex-col h-full overflow-hidden">
          <div className="h-14 px-8 border-b border-white/5 flex items-center justify-between shrink-0">
            <span className="text-[11px] uppercase font-black tracking-[0.2em] text-white">ФИЛЬТРЫ</span>
            <button className="text-[9px] uppercase font-bold text-white/30 hover:text-white transition-colors tracking-widest">СБРОСИТЬ</button>
          </div>

          {/* Контейнер фильтров с минимальными отступами */}
          <div className="flex-1 overflow-y-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {cameraFilters.map((group) => (
              <div key={group.id} className="border-b border-white/5">
                <button 
                  onClick={() => toggleGroup(group.id)}
                  className="w-full px-8 py-2.5 flex items-center justify-between group text-left" 
                >
                  <span className="text-[10px] font-black tracking-widest text-white/60 group-hover:text-blue-500 transition-colors uppercase leading-none">
                    {group.name}
                  </span>
                  <ChevronDown size={14} className={`text-white/10 transition-transform duration-300 ${openGroups.includes(group.id) ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                
                {openGroups.includes(group.id) && (
                  <div className="px-8 pb-4 space-y-2 animate-in fade-in duration-200">
                    {group.options.map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group/label">
                        <input type="checkbox" className="w-4 h-4 border border-white/10 rounded bg-white/5 checked:bg-blue-600 transition-all shrink-0" />
                        <span className="text-xs font-bold text-white/40 group-hover/label:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-[#020408]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
          <div className="px-12">
            
            {/* НАВИГАЦИЯ */}
            <div className="h-14 flex items-center border-b border-white/5">
              <nav className="flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] font-black">
                <Link href="/" className="text-white/40 hover:text-white transition-colors">ГЛАВНАЯ</Link>
                <span className="text-white/10">/</span>
                <Link href="#" className="text-blue-500">КАМЕРЫ</Link>
                <span className="text-white/10">/</span>
                <Link href="#" className="text-white/40 hover:text-white">РЕГИСТРАТОРЫ</Link>
                <span className="text-white/10">/</span>
                <Link href="#" className="text-white/40 hover:text-white">МИКРОФОНЫ</Link>
                <span className="text-white/10">/</span>
                <Link href="#" className="text-white/40 hover:text-white">МОНТАЖНЫЕ КОРОБКИ</Link>
                <span className="text-white/10">/</span>
                <Link href="#" className="text-white/40 hover:text-white">КРОНШТЕЙНЫ</Link>
              </nav>
            </div>

            {/* СЕТКА ТОВАРОВ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 opacity-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-white/5 border border-white/10 rounded-[40px]"></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
