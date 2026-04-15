// app/project/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, ShoppingCart, Scale, ArrowRight, CheckCircle, FileText, Building, HardDrive, ChevronDown } from 'lucide-react';

export default function ProjectPage() {
  const [cartCount] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  
  // Создаем refs для каждого блока
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Функция для установки ref
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[index] = el;
    }
  };
  
  // Функция прокрутки к следующему блоку
  const scrollToNextSection = () => {
    const nextIndex = activeSection + 1;
    if (nextIndex < sectionRefs.current.length && sectionRefs.current[nextIndex]) {
      sectionRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(nextIndex);
    } else {
      if (sectionRefs.current[0]) {
        sectionRefs.current[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(0);
      }
    }
  };
  
  // Отслеживаем видимый блок при скролле
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const ref = sectionRefs.current[i];
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetBottom = offsetTop + ref.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(i);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      {/* Хедер */}
      <header className="relative z-50 bg-[#05070a] border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
            <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <ShieldCheck size={28} className="text-white" />
            </div>
            <div className="flex flex-col items-center leading-none text-center">
              <span className="text-2xl font-black uppercase">Your<span className="text-blue-500">Systems</span></span>
              <span className="text-[9px] font-bold tracking-[0.3em] mt-1 opacity-80 uppercase">Security Solutions</span>
            </div>
          </Link>

          {/* Навигационные ссылки */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            <Link href="/project" className="text-blue-500 transition-colors">
              Проектирование
            </Link>
          </div>
          
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
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero-секция с видео - блок слева и центрирован по вертикали */}
      <div className="relative w-full h-[calc(100vh-80px)] flex items-center overflow-hidden">
        {/* Видео фон */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        >
          <source src="/project-video.mp4" type="video/mp4" />
        </video>
        
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/60 to-transparent"></div>
        
        {/* Контент поверх видео - слева, центрирован по вертикали */}
        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-2xl">
            {/* Хлебные крошки */}
            <div className="text-sm text-slate-300 mb-4">
              <Link href="/" className="hover:text-blue-400 transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Проектирование</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              Проектирование<br />
              <span className="text-blue-500">систем безопасности</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
              Комплексный подход к обеспечению безопасности объектов любой сложности. 
              Работаем в строгом соответствии с требованиями законодательства РФ и отраслевыми стандартами.
            </p>
            
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-600/20">
              Получить консультацию
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Кнопка "Вниз" - фиксированная в правом нижнем углу */}
      <button
        onClick={scrollToNextSection}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown size={24} className="text-white" />
      </button>

      {/* Блок 1: Лицензии и сертификаты */}
      <div 
        ref={setRef(0)}
        id="licenses"
        className="container mx-auto px-6 py-16 scroll-mt-20"
      >
        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">Лицензии и сертификаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <p className="font-bold">Лицензия МЧС № Л014-01101-77/00123456</p>
              <p className="text-sm text-slate-400">На монтаж, ТО и ремонт систем ПБ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <p className="font-bold">Свидетельство СРО № 1234.5678-2026</p>
              <p className="text-sm text-slate-400">Допуск к особо опасным объектам</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-3">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <p className="font-bold">Лицензия ФСБ № 9876543210</p>
              <p className="text-sm text-slate-400">На криптографические средства</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
              <p className="font-bold">ИСО 9001:2015</p>
              <p className="text-sm text-slate-400">Система менеджмента качества</p>
            </div>
          </div>
        </div>
      </div>

      {/* Блок 2: Нормативная база */}
      <div 
        ref={setRef(1)}
        id="standards"
        className="container mx-auto px-6 py-8 scroll-mt-20"
      >
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">Нормативная база</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { code: "ГОСТ Р 51558-2014", name: "Системы охранные телевизионные. Общие технические требования" },
            { code: "ГОСТ Р 54947-2012", name: "Системы контроля и управления доступом. Технические требования" },
            { code: "ГОСТ Р 53325-2012", name: "Техника пожарная. Извещатели пожарные" },
            { code: "СП 484.1311500.2020", name: "Системы пожарной сигнализации" },
            { code: "ГОСТ Р 50775-95", name: "Системы тревожной сигнализации" },
            { code: "ГОСТ Р 56548-2015", name: "Системы оповещения и управления эвакуацией" }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all">
              <p className="font-bold text-blue-400 mb-1">{item.code}</p>
              <p className="text-sm text-slate-300">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Блок 3: Этапы проектирования */}
      <div 
        ref={setRef(2)}
        id="stages"
        className="container mx-auto px-6 py-12 scroll-mt-20"
      >
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">Этапы проектирования</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Building, title: "Аудит объекта", desc: "Выезд специалиста, анализ рисков, обследование помещений" },
            { icon: FileText, title: "Разработка ТЗ", desc: "Составление технического задания и выбор оптимальных решений" },
            { icon: HardDrive, title: "Проектная документация", desc: "Разработка альбомов чертежей и сметной документации" },
            { icon: CheckCircle, title: "Согласование", desc: "Прохождение экспертизы и получение разрешений" }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center hover:transform hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Блок 4: Преимущества - центрированный */}
      <div 
        ref={setRef(3)}
        id="advantages"
        className="container mx-auto px-6 py-12 scroll-mt-20"
      >
        <div className="p-8 bg-gradient-to-r from-blue-600/10 to-transparent rounded-2xl border border-blue-500/20">
          <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Более 5 лет на рынке</p>
                <p className="text-sm text-slate-400">Более 100 реализованных проектов по всей России</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Штат аттестованных инженеров</p>
                <p className="text-sm text-slate-400">Все специалисты имеют допуски и сертификаты</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Гарантия на проект 5 лет</p>
                <p className="text-sm text-slate-400">Бесплатное сопровождение при изменениях</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg">Полный пакет согласований</p>
                <p className="text-sm text-slate-400">Работа с экспертизой и надзорными органами</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Блок 5: CTA */}
      <div 
        ref={setRef(4)}
        id="cta"
        className="container mx-auto px-6 py-16 text-center scroll-mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужен проект системы безопасности?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и наш инженер свяжется с вами в течение 15 минут
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2">
          Получить консультацию
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}