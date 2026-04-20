// app/catalog/[category]/[subcategory]/page.tsx
'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';
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

  const filteredProducts = mockProducts.filter(product => 
    product.category === decodedCat && 
    product.subcategory === decodedSub
  );

  const activeFilters = 
    (decodedSub === 'cameras') ? cameraFilters :
    (decodedSub === 'recorders') ? recorderFilters :
    (decodedSub === 'microphones') ? microphoneFilters :
    (decodedSub === 'mounting-boxes') ? mountingBoxFilters :
    (decodedSub === 'brackets') ? bracketFilters :
    (decodedSub === 'thermal-cameras') ? thermalCameraFilters :
    (decodedSub === 'handheld-thermal') ? handheldThermalFilters :
    (decodedSub === 'mobile-thermal') ? mobileThermalFilters :
    (decodedSub === 'readers') ? scudReaderFilters :
    (decodedSub === 'controllers') ? controllerFilters :
    (decodedSub === 'contactless-keys') ? contactlessKeyFilters :
    (decodedSub === 'locks') ? lockFilters :
    (decodedSub === 'door-closers') ? closerFilters :
    (decodedSub === 'metal-detectors') ? metalDetectorFilters :
    (decodedSub === 'turnstiles') ? turnstileFilters :
    (decodedSub === 'barriers') ? barrierFilters :
    (decodedSub === 'smart-panels') ? smartPanelFilters :
    (decodedSub === 'video-monitors') ? videoMonitorFilters :
    (decodedSub === 'calling-panels') ? callingPanelFilters :
    (decodedSub === 'accessories') ? accessoriesFilters :
    (decodedSub === 'alarm-controllers') ? securityControllerFilters :
    (decodedSub === 'power-supplies') ? alarmPowerSupplyFilters :
    (decodedSub === 'detectors') ? detectorFilters :
    (decodedSub === 'remote-controls') ? remoteControlFilters :
    (decodedSub === 'repeaters') ? repeaterFilters :
    (decodedSub === 'sensors') ? sensorFilters :
    (decodedSub === 'modules') ? moduleFilters :
    (decodedSub === 'relays') ? relayFilters :
    (decodedSub === 'sockets') ? socketFilters :
    (decodedSub === 'mounting-enclosures') ? mountingCabinetFilters :
    (decodedSub === 'climate-cabinets') ? climateCabinetFilters :
    (decodedSub === 'telecommunication-racks') ? rackCabinetFilters :
    (decodedSub === 'server-racks') ? rackCabinetFilters :
    (decodedSub === 'medical-cabinets') ? enclosureMedicalFilters :
    (decodedSub === 'cabinet-accessories') ? cabinetAccessoriesFilters :
    (decodedSub === 'hdd-for-cctv') ? hddFilters :
    (decodedSub === 'hdd-for-servers') ? hddFilters :
    (decodedSub === 'ssd') ? hddFilters :
    (decodedSub === 'nas-hdd') ? hddFilters :
    (decodedSub === 'external-hdd') ? hddFilters :
    (decodedSub === 'switches') ? switchFilters :
    (decodedSub === 'routers') ? routerFilters :
    (decodedSub === 'wi-fi-access-points') ? accessPointFilters :
    (decodedSub === 'sfp-modules') ? sfpFilters :
    (decodedSub === 'poe-injectors') ? poeInjectorFilters :
    (decodedSub === 'antennas') ? antennaFilters :
    (decodedSub === 'telemetry') ? telemetryFilters : [];

  const toggleGroup = (id: string) => setOpenGroups(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);

  const createSlug = (text: string) => {
    const slugMap: Record<string, string> = {
      'Камеры': 'cameras',
      'Регистраторы': 'recorders',
      'Микрофоны': 'microphones',
      'Монтажные коробки': 'mounting-boxes',
      'Кронштейны': 'brackets',
      'Камеры тепловизионные': 'thermal-cameras',
      'Ручные тепловизоры': 'handheld-thermal',
      'Мобильные тепловизоры': 'mobile-thermal',
      'HDD для видеонаблюдения': 'hdd-for-cctv',
      'HDD для серверов': 'hdd-for-servers',
      'SSD': 'ssd',
      'NAS HDD': 'nas-hdd',
      'Внешние HDD': 'external-hdd',
      'Коммутаторы': 'switches',
      'Маршрутизаторы': 'routers',
      'Wi-Fi точки': 'wi-fi-access-points',
      'SFP модули': 'sfp-modules',
      'PoE инжекторы': 'poe-injectors',
      'Антенны': 'antennas',
      'Погружная телеметрия': 'telemetry',
      'Считыватели': 'readers',
      'Контроллеры': 'controllers',
      'Бесконтактные ключи': 'contactless-keys',
      'Замки': 'locks',
      'Доводчики': 'door-closers',
      'Металлодетекторы': 'metal-detectors',
      'Турникеты': 'turnstiles',
      'Шлагбаумы': 'barriers',
      'Интроскопы': 'x-ray-scanners',
      'Smart панели': 'smart-panels',
      'Видеомониторы': 'video-monitors',
      'Вызывные панели': 'calling-panels',
      'Аксессуары': 'accessories',
      'Контроллеры сигнализации': 'alarm-controllers',
      'Источники питания': 'power-supplies',
      'Извещатели': 'detectors',
      'Пульты управления': 'remote-controls',
      'Ретрансляторы': 'repeaters',
      'Датчики': 'sensors',
      'Модули': 'modules',
      'Реле': 'relays',
      'Розетки': 'sockets',
      'Монтажные и оболочки': 'mounting-enclosures',
      'Климатические': 'climate-cabinets',
      'Телекоммуникационные': 'telecommunication-racks',
      'Серверные': 'server-racks',
      'Щиты боксы аптечные': 'medical-cabinets',
      'Аксессуары шкафов': 'cabinet-accessories'
    };
    return slugMap[text] || text.toLowerCase().replace(/ /g, '-');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#020408] font-sans text-white">
      <Header />

      <div className="flex">
        {/* Боковая панель фильтров – липкая */}
        <aside className="w-80 shrink-0 border-r border-white/5 bg-[#05070a] sticky top-0 self-start h-screen overflow-y-auto">
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

        {/* Основной контент */}
        <div className="flex-1 bg-[#020408]">
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
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    image={product.image || '/images/placeholder.jpg'}
                    brand={product.brand || ''}
                    sku={product.sku || ''}
                    inStock={product.inStock ?? true}
                    href={`/product/${product.id}`}
                    category={product.category}
                    subcategory={product.subcategory}
                    isNew={false}
                    isHit={false}
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

      {/* Плавающие кнопки навигации */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20"
          aria-label="Вверх"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
        <button
          onClick={scrollToBottom}
          className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20"
          aria-label="Вниз"
        >
          <ArrowDown size={24} className="text-white" />
        </button>
      </div>
    </main>
  );
}