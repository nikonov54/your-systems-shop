// app/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, ShoppingCart, Scale, Menu, ChevronRight } from 'lucide-react';
import { catalogData, type Category } from '@/menu-data';

export default function Header() {
  const [activeCat, setActiveCat] = useState<Category | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [cartCount] = useState(0);

  const createSlug = (text: string) => {
    const slugMap: Record<string, string> = {
      // Видеонаблюдение
      'Камеры': 'cameras',
      'Регистраторы': 'recorders',
      'Микрофоны': 'microphones',
      'Монтажные коробки': 'mounting-boxes',
      'Кронштейны': 'brackets',
      
      // Тепловизоры
      'Камеры тепловизионные': 'thermal-cameras',
      'Ручные тепловизоры': 'handheld-thermal',
      'Мобильные тепловизоры': 'mobile-thermal',
      
      // HDD
      'HDD для видеонаблюдения': 'hdd-for-cctv',
      'HDD для серверов': 'hdd-for-servers',
      'SSD': 'ssd',
      'NAS HDD': 'nas-hdd',
      'Внешние HDD': 'external-hdd',
      
      // Сетевое оборудование
      'Коммутаторы': 'switches',
      'Маршрутизаторы': 'routers',
      'Wi-Fi точки': 'wi-fi-access-points',
      'SFP модули': 'sfp-modules',
      'PoE инжекторы': 'poe-injectors',
      'Антенны': 'antennas',
      'Погружная телеметрия': 'telemetry',
      
      // СКУД
      'Считыватели': 'readers',
      'Контроллеры': 'controllers',
      'Бесконтактные ключи': 'contactless-keys',
      'Замки': 'locks',
      'Доводчики': 'door-closers',
      'Металлодетекторы': 'metal-detectors',
      'Турникеты': 'turnstiles',
      'Шлагбаумы': 'barriers',
      'Интроскопы': 'x-ray-scanners',
      
      // Домофония
      'Smart панели': 'smart-panels',
      'Видеомониторы': 'video-monitors',
      'Вызывные панели': 'calling-panels',
      'Аксессуары': 'accessories',
      
      // Сигнализация
      'Контроллеры сигнализации': 'alarm-controllers',
      'Источники питания': 'power-supplies',
      'Извещатели': 'detectors',
      'Пульты управления': 'remote-controls',
      'Ретрансляторы': 'repeaters',
      'Датчики': 'sensors',
      'Модули': 'modules',
      'Реле': 'relays',
      'Розетки': 'sockets',
      
      // Шкафы
      'Монтажные и оболочки': 'mounting-enclosures',
      'Климатические': 'climate-cabinets',
      'Телекоммуникационные': 'telecommunication-racks',
      'Серверные': 'server-racks',
      'Щиты боксы аптечные': 'medical-cabinets',
      'Аксессуары шкафов': 'cabinet-accessories'
    };
    
    return slugMap[text] || text.toLowerCase().replace(/ /g, '-');
  };

  return (
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

        {/* Кнопка УСЛУГИ */}
        <div className="relative group" onMouseLeave={() => setActiveService(null)}>
          <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all uppercase">
            <Menu size={18} className="text-blue-400 group-hover:text-white" /> УСЛУГИ
          </button>
          
          <div className="absolute top-full left-0 w-full h-[20px] invisible group-hover:visible" />

          <div className="absolute top-[calc(100%+15px)] left-0 bg-[#05070a] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[260px] py-2 z-50">
            <Link 
              href="/project" 
              className="block px-8 py-3 text-[11px] uppercase tracking-widest font-black text-white hover:text-blue-500 transition-colors"
            >
              Проектирование
            </Link>
            <Link 
              href="/services/montazh" 
              className="block px-8 py-3 text-[11px] uppercase tracking-widest font-black text-white hover:text-blue-500 transition-colors"
            >
              Монтаж
            </Link>
          </div>
        </div>

        {/* Кнопка КАТАЛОГ */}
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
          <input type="text" placeholder="Поиск..." className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3 text-sm outline-none focus:border-blue-600/30" />
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
  );
}