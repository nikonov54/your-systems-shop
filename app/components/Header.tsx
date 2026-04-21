'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Search, ShoppingCart, Scale, Menu, ChevronRight } from 'lucide-react';
import { catalogData, type Category } from '@/menu-data';
import { mockProducts } from '@/app/lib/products';
import { useStore } from '@/app/context/StoreContext';

// Нормализация для поиска
function normalize(str: string): string {
  return str.toLowerCase().replace(/[\s-]/g, '');
}

export default function Header() {
  const router = useRouter();
  const { getCartCount } = useStore();
  const cartCount = getCartCount();

  const [activeCat, setActiveCat] = useState<Category | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mockProducts>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Дебаунс для поиска
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim().length === 0) {
        setSearchResults([]);
        setShowDropdown(false);
        return;
      }

      const queryNorm = normalize(searchQuery);
      const filtered = mockProducts.filter((product) => {
        if (normalize(product.name).includes(queryNorm)) return true;
        if (normalize(product.brand || '').includes(queryNorm)) return true;
        if (normalize(product.sku || '').includes(queryNorm)) return true;
        if (normalize(product.description || '').includes(queryNorm)) return true;
        if (product.specs) {
          for (const val of Object.values(product.specs)) {
            if (normalize(val).includes(queryNorm)) return true;
          }
        }
        return false;
      });
      setSearchResults(filtered.slice(0, 8));
      setShowDropdown(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Закрытие дропдауна при клике вне
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowDropdown(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleResultClick = (productId: string) => {
    setShowDropdown(false);
    setSearchQuery('');
    router.push(`/product/${productId}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#05070a] border-b border-white/5">
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

        {/* УСЛУГИ */}
        <div className="relative group" onMouseLeave={() => setActiveService(null)}>
          <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all uppercase">
            <Menu size={18} className="text-blue-400 group-hover:text-white" /> УСЛУГИ
          </button>
          <div className="absolute top-full left-0 w-full h-[20px] invisible group-hover:visible" />
          <div className="absolute top-[calc(100%+15px)] left-0 bg-[#05070a] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[260px] py-2 z-50">
            <Link href="/project" className="block px-8 py-3 text-[11px] uppercase tracking-widest font-black text-white hover:text-blue-500 transition-colors">Проектирование</Link>
            <Link href="/services/montazh" className="block px-8 py-3 text-[11px] uppercase tracking-widest font-black text-white hover:text-blue-500 transition-colors">Монтаж</Link>
          </div>
        </div>

        {/* КАТАЛОГ */}
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
                    <a key={item} href={`/catalog/${activeCat.slug}/${createSlug(item)}`} className="hover:text-blue-500 transition-all">{item}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ПОИСК С ВЫПАДАЮЩИМ СПИСКОМ */}
        <div className="flex flex-1 max-w-sm relative" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="w-full relative">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
              className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-blue-600/30"
            />
            <button type="submit" className="absolute right-4 top-3 text-slate-500 hover:text-blue-500 transition-colors">
              <Search size={18} />
            </button>
          </form>

          {showDropdown && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0c10] border border-white/10 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleResultClick(product.id)}
                  className="flex items-center gap-4 p-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-0"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-white/20 text-xs">Нет фото</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white text-sm whitespace-normal break-words">{product.name}</div>
                    <div className="text-xs text-slate-400">{product.price.toLocaleString('ru-RU')} ₽</div>
                    {product.brand && <div className="text-xs text-blue-400">{product.brand}</div>}
                  </div>
                </div>
              ))}
              <div className="p-2 border-t border-white/5">
                <button
                  onClick={handleSearchSubmit}
                  className="w-full text-center text-xs text-slate-400 hover:text-blue-400 py-1"
                >
                  Показать все результаты →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ПРАВЫЙ БЛОК: ТЕЛЕФОН, СРАВНЕНИЕ, КОРЗИНА */}
        <div className="flex items-center gap-6 font-black">
          <a href="tel:+7 (913) 946-44-60" className="text-lg hover:text-blue-500 transition-colors tracking-tighter">+7 (913) 946-44-60</a>
          <Link href="/compare">
            <button className="p-3 rounded-xl transition-all hover:bg-blue-600">
              <Scale size={20} className="text-white/60 hover:text-white transition-colors" />
            </button>
          </Link>
          <Link href="/cart" className="relative">
            <button className="p-3 rounded-xl transition-all hover:bg-blue-600">
              <ShoppingCart size={20} className="text-white/60 hover:text-white transition-colors" />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}