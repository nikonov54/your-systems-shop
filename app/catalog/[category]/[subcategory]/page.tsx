'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ChevronDown, ShieldCheck, Search, ShoppingCart, ChevronRight } from 'lucide-react';
import { catalogData } from '../../../../menu-data';
import { 
  cameraFilters, 
  recorderFilters, 
  microphoneFilters,
  mountingBoxFilters,
  bracketFilters,
  switchFilters,
  routerFilters,
  accessPointFilters,
  sfpFilters,
  poeInjectorFilters,
  antennaFilters,
  telemetryFilters,
  scudReaderFilters,
  controllerFilters
} from '../../filters-config';

export default function SubcategoryPage({ params }: { params: Promise<{ category: string, subcategory: string }> }) {
  const { subcategory, category } = use(params);
  const decodedSub = decodeURIComponent(subcategory).toLowerCase();
  const decodedCat = decodeURIComponent(category).toLowerCase();

  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const currentCategoryData = catalogData.find(c => c.slug === decodedCat);
  const subcategories = currentCategoryData?.sub || [];

  const activeFilters = 
    (decodedSub.includes('kamery') || decodedSub.includes('камеры')) ? cameraFilters : 
    (decodedSub.includes('registratory') || decodedSub.includes('регистраторы')) ? recorderFilters : 
    (decodedSub.includes('mikrofony') || decodedSub.includes('микрофоны')) ? microphoneFilters :
    (decodedSub.includes('montazhnye-korobki') || decodedSub.includes('монтажные-коробки')) ? mountingBoxFilters :
    (decodedSub.includes('kronshteyny') || decodedSub.includes('кронштейны')) ? bracketFilters : 
    (decodedSub.includes('kommutatory') || decodedSub.includes('коммутаторы')) ? switchFilters :
    (decodedSub.includes('marshrutizatory') || decodedSub.includes('маршрутизаторы') || decodedSub.includes('routery') || decodedSub.includes('роутеры')) ? routerFilters : 
    (decodedSub.includes('wi-fi-tochki') || decodedSub.includes('wi-fi-точки')) ? accessPointFilters : 
    (decodedSub.includes('sfp-moduli') || decodedSub.includes('sfp-модули')) ? sfpFilters :
    (decodedSub.includes('poe-inzhektory') || decodedSub.includes('poe-инжекторы')) ? poeInjectorFilters :
    (decodedSub.includes('antenny') || decodedSub.includes('антенны')) ? antennaFilters :
    (decodedSub.includes('pogruzhnaya-telemetriya') || decodedSub.includes('погружная-телеметрия')) ? telemetryFilters :
    (decodedSub.includes('schityvateli') || decodedSub.includes('считыватели')) ? scudReaderFilters :
    (decodedSub.includes('kontrollery') || decodedSub.includes('контроллеры')) ? controllerFilters : [];

  const toggleGroup = (id: string) => setOpenGroups(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  const createSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

  return (
    <main className="h-screen bg-[#020408] relative flex flex-col font-sans text-white overflow-hidden">
      <header className="relative z-50 bg-[#05070a] border-b border-white/5 shrink-0">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
            <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"><ShieldCheck size={28} /></div>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="text-2xl font-black uppercase">Your<span className="text-blue-500">Systems</span></span>
              <span className="text-[9px] font-bold tracking-[0.3em] mt-1 opacity-80 uppercase">Security Solutions</span>
            </div>
          </Link>
          <div className="hidden lg:flex flex-1 max-w-sm relative">
            <input type="text" placeholder="Поиск по артикулу..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-blue-600/30" />
            <Search className="absolute right-4 top-3 text-slate-500" size={18} />
          </div>
          <div className="flex items-center gap-6 font-black">
            <a href="tel:88000000000" className="text-lg hover:text-blue-500 transition-colors">8 800 000-00-00</a>
            <button className="bg-blue-600 p-3 rounded-xl relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 shrink-0 border-r border-white/5 bg-[#05070a] flex flex-col h-full overflow-hidden">
          <div className="h-14 px-8 border-b border-white/5 flex items-center justify-between shrink-0">
            <span className="text-[11px] uppercase font-black tracking-[0.2em] text-white">ФИЛЬТРЫ</span>
            <button className="text-[9px] uppercase font-bold text-white/30 hover:text-white transition-colors">СБРОСИТЬ</button>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {activeFilters.length > 0 ? (
              activeFilters.map((group) => (
                <div key={group.id} className="border-b border-white/5">
                  <button onClick={() => toggleGroup(group.id)} className="w-full px-8 py-2.5 flex items-center justify-between group text-left">
                    <span className="text-[10px] font-black tracking-widest text-white/60 group-hover:text-blue-500 transition-colors uppercase leading-none">{group.name}</span>
                    <ChevronDown size={14} className={`text-white/20 transition-transform ${openGroups.includes(group.id) ? 'rotate-180 text-blue-500' : ''}`} />
                  </button>
                  {openGroups.includes(group.id) && (
                    <div className="px-8 pb-5 space-y-2.5 animate-in fade-in duration-200">
                      {group.options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group/label">
                          <input type="checkbox" className="w-4 h-4 border border-white/10 rounded bg-white/5 checked:bg-blue-600 transition-all shrink-0" />
                          <span className="text-[12px] font-bold text-white/60 group-hover/label:text-white transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-[10px] text-white/20 uppercase font-bold tracking-widest">Нет доступных фильтров</div>
            )}
          </div>
        </aside>

        <div className="flex-1 overflow-y-auto no-scrollbar bg-[#020408]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="px-12">
            <div className="py-6 border-b border-white/5 sticky top-0 bg-[#020408] z-30">
              <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.3em] font-black">
                {subcategories.map((sub, idx) => {
                  const subSlug = createSlug(sub);
                  const isActive = decodedSub === subSlug;
                  return (
                    <div key={sub} className="flex items-center gap-8">
                      <Link href={`/catalog/${decodedCat}/${subSlug}`} className={isActive ? 'text-blue-500 font-bold' : 'text-white/40 hover:text-white transition-colors'}>
                        {sub}
                      </Link>
                      {idx !== subcategories.length - 1 && <span className="text-white/10">/</span>}
                    </div>
                  );
                })}
              </nav>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 opacity-5">
              {Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-[3/4] bg-white/5 border border-white/10 rounded-[40px]"></div>)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}