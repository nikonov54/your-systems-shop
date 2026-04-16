// app/services/montazh/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, ShieldCheck, Clock, ThumbsUp, Camera, Lock, Thermometer, Wifi, HardDrive, Home, Building, Users, ChevronDown } from 'lucide-react';
import Header from '@/app/components/Header';

export default function MontazhPage() {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Camera,
      title: "Видеонаблюдение",
      description: "Монтаж IP-камер, аналоговых систем, видеорегистраторов. Настройка удаленного доступа.",
      price: "от 5 000 ₽",
      items: ["IP-камеры", "Аналоговые системы", "Видеорегистраторы", "Удаленный доступ"]
    },
    {
      icon: Lock,
      title: "СКУД",
      description: "Установка систем контроля доступа: считыватели, турникеты, шлагбаумы.",
      price: "от 7 000 ₽",
      items: ["Считыватели", "Турникеты", "Шлагбаумы", "Контроллеры"]
    },
    {
      icon: ShieldCheck,
      title: "Охранная сигнализация",
      description: "Монтаж датчиков движения, открытия, разбития стекла. Подключение к ПЦН.",
      price: "от 4 000 ₽",
      items: ["Датчики движения", "Датчики открытия", "Датчики разбития", "Подключение к ПЦН"]
    },
    {
      icon: Thermometer,
      title: "Пожарная сигнализация",
      description: "Установка дымовых, тепловых извещателей. Системы оповещения.",
      price: "от 6 000 ₽",
      items: ["Дымовые извещатели", "Тепловые извещатели", "Системы оповещения", "Пульты контроля"]
    },
    {
      icon: Wifi,
      title: "Сетевые решения",
      description: "Монтаж коммутаторов, маршрутизаторов, Wi-Fi точек доступа.",
      price: "от 3 000 ₽",
      items: ["Коммутаторы", "Маршрутизаторы", "Wi-Fi точки", "PoE инжекторы"]
    },
    {
      icon: HardDrive,
      title: "Серверные и СХД",
      description: "Установка серверного оборудования, систем хранения данных.",
      price: "от 10 000 ₽",
      items: ["Серверы", "Системы хранения", "Стойки", "Охлаждение"]
    },
    {
      icon: Home,
      title: "Умный дом",
      description: "Автоматизация освещения, отопления, управление голосом.",
      price: "от 8 000 ₽",
      items: ["Управление освещением", "Управление отоплением", "Голосовое управление", "Датчики"]
    },
    {
      icon: Building,
      title: "Интеграция систем",
      description: "Объединение всех систем безопасности в единый комплекс.",
      price: "от 15 000 ₽",
      items: ["Единая платформа", "Сквозная аналитика", "Единый интерфейс", "Автоматизация"]
    }
  ];

  const stages = [
    { step: "01", title: "Выезд специалиста", desc: "Бесплатный осмотр объекта, анализ рисков, консультация" },
    { step: "02", title: "Составление сметы", desc: "Детальный расчет стоимости работ и оборудования" },
    { step: "03", title: "Монтаж", desc: "Профессиональная установка оборудования" },
    { step: "04", title: "Пусконаладка", desc: "Настройка и тестирование всех систем" },
    { step: "05", title: "Обучение", desc: "Инструктаж персонала по работе с системами" },
    { step: "06", title: "Гарантия", desc: "Гарантийное и постгарантийное обслуживание" }
  ];

  const benefits = [
    { icon: ShieldCheck, title: "Лицензия МЧС", desc: "Все виды работ имеют необходимые допуски" },
    { icon: Users, title: "Штат инженеров", desc: "15+ сертифицированных специалистов" },
    { icon: Clock, title: "Соблюдение сроков", desc: "Четкое планирование и контроль" },
    { icon: ThumbsUp, title: "Гарантия работ", desc: "На все виды монтажных работ" }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      
      {/* Hero-секция с видео - затемненное */}
      <div className="relative w-full h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
        >
          <source src="/montazh-video.mp4" type="video/mp4" />
        </video>
        
        {/* Затемняющий оверлей - видео становится темнее */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/40 to-transparent"></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-2xl">
            <div className="text-sm text-slate-300 mb-4">
              <Link href="/" className="hover:text-blue-400 transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Монтаж</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              Монтаж<br />
              <span className="text-blue-500">систем безопасности</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
              Профессиональная установка оборудования любой сложности. 
              Работаем с объектами любого масштаба — от частных домов до промышленных предприятий.
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

      {/* Услуги */}
      <section 
        ref={setRef(0)}
        id="services"
        className="py-16 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
            Виды <span className="text-blue-500">монтажных работ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all">
                  <service.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.items.map((item, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-slate-300">{item}</span>
                  ))}
                </div>
                <div className="text-blue-400 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этапы работ */}
      <section 
        ref={setRef(1)}
        id="stages"
        className="py-16 bg-white/5 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
            Этапы <span className="text-blue-500">работ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-4xl font-black text-blue-500/30">{stage.step}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{stage.title}</h3>
                  <p className="text-sm text-slate-400">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section 
        ref={setRef(2)}
        id="benefits"
        className="py-16 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
            Почему <span className="text-blue-500">выбирают нас</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        ref={setRef(3)}
        id="cta"
        className="py-20 text-center bg-white/5 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужен монтаж систем безопасности?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и наш инженер свяжется с вами в течение 15 минут для согласования выезда на объект
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2">
            Получить консультацию
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}