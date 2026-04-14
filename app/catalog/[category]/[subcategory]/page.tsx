'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ChevronDown, ShieldCheck, Search, ShoppingCart, ChevronRight, Scale } from 'lucide-react';
import { catalogData } from '@/menu-data';
import { mockProducts } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
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
  controllerFilters,
  contactlessKeyFilters,
  lockFilters,
  closerFilters,
  metalDetectorFilters,
  turnstileFilters,
  barrierFilters,
  smartPanelFilters,
  callingPanelFilters,
  videoMonitorFilters,
  accessoriesFilters,
  securityControllerFilters,
  alarmPowerSupplyFilters,
  detectorFilters,
  remoteControlFilters,
  repeaterFilters,
  sensorFilters,
  moduleFilters,
  relayFilters,
  socketFilters,
  mountingCabinetFilters,
  climateCabinetFilters,
  rackCabinetFilters,
  cabinetAccessoriesFilters,
  enclosureMedicalFilters,
  hddFilters,
  thermalCameraFilters,
  handheldThermalFilters,
  mobileThermalFilters
} from '@/app/catalog/filters-config';

export default function SubcategoryPage({ params }: { params: Promise<{ category: string, subcategory: string }> }) {
  const { subcategory, category } = use(params);
  const decodedSub = decodeURIComponent(subcategory).toLowerCase();
  const decodedCat = decodeURIComponent(category).toLowerCase();

  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const currentCategoryData = catalogData.find(c => c.slug === decodedCat);
  const subcategories = currentCategoryData?.sub || [];

  // Фильтруем товары по текущей категории и подкатегории
  const filteredProducts = mockProducts.filter(product => 
    product.category === decodedCat && 
    product.subcategory === decodedSub
  );

  const activeFilters = 
    (decodedSub.includes('камеры-тепловизионные')) ? thermalCameraFilters :
    (decodedSub.includes('ручные-тепловизоры')) ? handheldThermalFilters :
    (decodedSub.includes('мобильные-тепловизоры')) ? mobileThermalFilters :
    (decodedSub.includes('камеры')) ? cameraFilters : 
    (decodedSub.includes('регистраторы')) ? recorderFilters : 
    (decodedSub.includes('микрофоны')) ? microphoneFilters :
    (decodedSub.includes('монтажные-коробки')) ? mountingBoxFilters :
    (decodedSub.includes('кронштейны')) ? bracketFilters : 
    (decodedSub.includes('коммутаторы')) ? switchFilters :
    (decodedSub.includes('маршрутизаторы') || decodedSub.includes('роутеры')) ? routerFilters : 
    (decodedSub.includes('wi-fi-точки')) ? accessPointFilters : 
    (decodedSub.includes('sfp-модули')) ? sfpFilters :
    (decodedSub.includes('poe-инжекторы')) ? poeInjectorFilters :
    (decodedSub.includes('антенны')) ? antennaFilters :
    (decodedSub.includes('погружная-телеметрия')) ? telemetryFilters :
    (decodedSub.includes('считыватели')) ? scudReaderFilters :
    (decodedSub.includes('контроллеры')) ? controllerFilters :
    (decodedSub.includes('бесконтактные-ключи')) ? contactlessKeyFilters :
    (decodedSub.includes('замки')) ? lockFilters :
    (decodedSub.includes('доводчики')) ? closerFilters :
    (decodedSub.includes('металлодетекторы')) ? metalDetectorFilters :
    (decodedSub.includes('турникеты')) ? turnstileFilters :
    (decodedSub.includes('шлагбаумы')) ? barrierFilters :
    (decodedSub.includes('smart-панели') || decodedSub.includes('смарт-панели')) ? smartPanelFilters :
    (decodedSub.includes('вызывные-панели')) ? callingPanelFilters :
    (decodedSub.includes('видеомониторы')) ? videoMonitorFilters :
    (decodedSub.includes('аксессуары')) ? accessoriesFilters :
    (decodedSub.includes('источники-питания') || decodedSub.includes('блоки-питания')) ? alarmPowerSupplyFilters :
    (decodedSub.includes('извещатели')) ? detectorFilters :
    (decodedSub.includes('пульты-управления')) ? remoteControlFilters :
    (decodedSub.includes('ретрансляторы')) ? repeaterFilters :
    (decodedSub.includes('датчики')) ? sensorFilters :
    (decodedSub.includes('модули')) ? moduleFilters :
    (decodedSub.includes('реле')) ? relayFilters :
    (decodedSub.includes('розетки')) ? socketFilters :
    (decodedSub.includes('оболочки') || decodedSub.includes('монтажные')) ? mountingCabinetFilters :
    (decodedSub.includes('климатические')) ? climateCabinetFilters :
    (decodedSub.includes('телекоммуникационные')) ? rackCabinetFilters :
    (decodedSub.includes('серверные')) ? rackCabinetFilters :
    (decodedSub.includes('аксессуары-шкафы')) ? cabinetAccessoriesFilters :
    (decodedSub.includes('щиты-боксы-аптечные')) ? enclosureMedicalFilters :
    (decodedSub.includes('hdd-для-видеонаблюдения') || decodedSub.includes('hdd-для-серверов') || decodedSub.includes('ssd') || decodedSub.includes('nas-hdd') || decodedSub.includes('внешние-hdd') || decodedSub.includes('накопители') || decodedSub.includes('жесткие-диски')) ? hddFilters : [];

  const toggleGroup = (id: string) => setOpenGroups(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  const createSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

  return (
    <main className="min-h-screen bg-[#020408] relative flex flex-col font-sans text-white">
      <header className="relative z-50 bg-[#05070a] border-b border-white/5 shrink-0">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
            <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"><ShieldCheck size={28} /></div>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="text-2xl font-black uppercase">Your<span className="text-blue-500">Systems</span></span>
              <span className="text-[9px] font-bold tracking-[0.3em] mt-1 opacity-80 uppercase">Security Solutions</span>
            </div>
          </Link>
          
          <div className="flex flex-1 max-w-sm relative">
            <input type="text" placeholder="Поиск..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-blue-600/30" />
            <Search className="absolute right-4 top-3 text-slate-500" size={18} />
          </div>

          <div className="flex items-center gap-6 font-black">
            <a href="tel:88000000000" className="text-lg hover:text-blue-500 transition-colors">8 800 000-00-00</a>
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
            
            {/* Сетка товаров */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    image={product.image}
                    brand={product.brand}
                    sku={product.sku}
                    inStock={product.inStock}
                    href={`/product/${product.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-white/30">
                <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-lg">Товаров в этой категории пока нет</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}