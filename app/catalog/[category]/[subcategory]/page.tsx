'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { catalogData } from '@/menu-data';
import { mockProducts } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import Header from '@/app/components/Header';
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
      <Header />

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