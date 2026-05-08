'use client';

import { useState, use, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';
import { catalogData } from '@/menu-data';
import { mockProducts } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import Header from '@/app/components/Header';
import { buildFilters, splitSpecValue, normalizeFragment, type FilterGroup } from '@/app/lib/filters/buildFilters';
import type { Product } from '@/app/context/StoreContext';

export default function SubcategoryPage({ params }: { params: Promise<{ category: string, subcategory: string }> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { subcategory, category } = use(params);
  const decodedSub = decodeURIComponent(subcategory).toLowerCase();
  const decodedCat = decodeURIComponent(category).toLowerCase();

  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, Set<string>>>({});

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product =>
      product.category === decodedCat &&
      product.subcategory === decodedSub
    );
  }, [decodedCat, decodedSub]);

  const dynamicFilters: FilterGroup[] = useMemo(() => {
    return buildFilters(filteredProducts);
  }, [filteredProducts]);

  const finalProducts = useMemo(() => {
    if (Object.keys(selectedFilters).length === 0) return filteredProducts;
    return filteredProducts.filter(product => {
      for (const [groupId, selectedValues] of Object.entries(selectedFilters)) {
        if (selectedValues.size === 0) continue;
        if (groupId === 'brand') {
          if (!selectedValues.has(product.brand || '')) return false;
        } else {
          const raw = product.specs?.[groupId];
          if (!raw) return false;
          const fragments = splitSpecValue(raw);
          const normSet = new Set<string>();
          fragments.forEach(frag => {
            const norms = normalizeFragment(groupId, frag);
            norms.forEach(norm => normSet.add(norm));
          });
          for (const sel of selectedValues) {
            if (!normSet.has(sel)) return false;
          }
        }
      }
      return true;
    });
  }, [filteredProducts, selectedFilters]);

  useEffect(() => {
    const scrollParam = searchParams.get('scroll');
    if (scrollParam) {
      const scrollY = parseInt(scrollParam, 10);
      if (!isNaN(scrollY)) {
        setTimeout(() => {
          window.scrollTo({ top: scrollY, behavior: 'auto' });
        }, 150);
        router.replace(window.location.pathname, { scroll: false });
      }
    }
  }, [searchParams, router]);

  const toggleGroup = (id: string) => setOpenGroups(prev =>
    prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
  );

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
      'Роутеры Micro-Drive': 'microdrive-routers',
      'Wi-Fi точки': 'wi-fi-access-points',
      'SFP модули': 'sfp-modules',
      'PoE инжекторы': 'poe-injectors',
      'Антенны': 'antennas',
      'Погружная телеметрия': 'telemetry',
      'Считыватели': 'readers',
      'Контроллеры': 'controllers',
      'Терминалы': 'terminals',
      'Кнопки выхода': 'exit-buttons',
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
      'Комплекты': 'kits',
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
      'Аптечные': 'medical-cabinets',
      'Аксессуары шкафов': 'cabinet-accessories'
    };
    return slugMap[text] || text.toLowerCase().replace(/ /g, '-');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  const handleCardClick = (productId: string) => {
    const scrollY = window.scrollY;
    router.push(`/product/${productId}?fromScroll=${scrollY}`);
  };

  const handleFilterChange = (groupId: string, optionValue: string) => {
    setSelectedFilters(prev => {
      const current = prev[groupId] || new Set<string>();
      const next = new Set(current);
      if (next.has(optionValue)) {
        next.delete(optionValue);
      } else {
        next.add(optionValue);
      }
      return { ...prev, [groupId]: next };
    });
  };

  const currentCategoryData = catalogData.find(c => c.slug === decodedCat);
  const subcategories: string[] = currentCategoryData?.sub || [];

  return (
    <main className="min-h-screen bg-[#020408] font-sans text-white">
      <Header />
      <div className="flex">
        <aside className="fixed w-80 left-0 top-[80px] h-[calc(100vh-80px)] border-r border-white/5 bg-[#05070a] overflow-y-auto z-30">
          <div className="h-14 px-8 border-b border-white/5 flex items-center justify-between shrink-0">
            <span className="text-[11px] uppercase font-black tracking-[0.2em] text-white">ФИЛЬТРЫ</span>
            <button
              className="text-[9px] uppercase font-bold text-white/30 hover:text-white transition-colors"
              onClick={() => setSelectedFilters({})}
            >
              СБРОСИТЬ
            </button>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {dynamicFilters.length > 0 ? (
              dynamicFilters.map((group) => (
                <div key={group.id} className="border-b border-white/5">
                  <button
                    onClick={() => toggleGroup(group.id)}
                    className="w-full px-8 py-2.5 flex items-center justify-between group text-left"
                  >
                    <span className="text-[10px] font-black tracking-widest text-white/60 group-hover:text-blue-500 transition-colors uppercase leading-none">
                      {group.name}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-white/20 transition-transform ${
                        openGroups.includes(group.id) ? 'rotate-180 text-blue-500' : ''
                      }`}
                    />
                  </button>
                  {openGroups.includes(group.id) && (
                    <div className="px-8 pb-5 space-y-2.5 animate-in fade-in duration-200">
                      {group.options.map((option) => {
                        const isChecked = selectedFilters[group.id]?.has(option.value) || false;
                        return (
                          <label
                            key={option.value}
                            className="flex items-center gap-3 cursor-pointer group/label"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFilterChange(group.id, option.value);
                            }}
                          >
                            <span
                              className={`w-4 h-4 shrink-0 border border-white/10 rounded transition-all ${
                                isChecked ? 'bg-blue-600 border-blue-600' : 'bg-white/5'
                              }`}
                            />
                            <span className="text-[12px] font-bold text-white/60 group-hover/label:text-white transition-colors flex-1 break-all">
                              {option.value}
                            </span>
                            <span className="text-[10px] text-white/30 ml-auto tabular-nums">{option.count}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-[10px] text-white/20 uppercase font-bold tracking-widest">
                Нет доступных фильтров
              </div>
            )}
          </div>
        </aside>

        <div className="ml-80 bg-[#020408]">
          <div className="px-12">
            <div className="py-6 border-b border-white/5 sticky top-[80px] bg-[#020408] z-40">
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
            {finalProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                {finalProducts.map((product) => (
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
                    onCardClick={() => handleCardClick(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-white/30">
                <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-lg">Товаров не найдено</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button onClick={scrollToTop} className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20" aria-label="Вверх"><ArrowUp size={24} className="text-white" /></button>
        <button onClick={scrollToBottom} className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20" aria-label="Вниз"><ArrowDown size={24} className="text-white" /></button>
      </div>
    </main>
  );
}