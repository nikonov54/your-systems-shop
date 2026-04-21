'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, Building, HardDrive, ArrowUp, ArrowDown } from 'lucide-react';
import Header from '@/app/components/Header';

export default function ProjectPage() {
  const [activeSection, setActiveSection] = useState(0);
  
  // Создаем refs для каждого блока (оставляем для отслеживания активного, но без кнопки навигации)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Функция для установки ref
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[index] = el;
    }
  };
  
  // Прокрутка вверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Прокрутка вниз
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  
  // Отслеживаем видимый блок при скролле (опционально, можно убрать, но оставим для возможных будущих индикаторов)
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
      <Header />
      
      {/* Hero-секция с видео */}
      <div className="relative w-full h-[calc(100vh-80px)] flex items-center overflow-hidden">
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/60 to-transparent"></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-2xl">
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

      {/* Блок 1: Лицензии и сертификаты */}
      <div ref={setRef(0)} id="licenses" className="container mx-auto px-6 py-16 scroll-mt-20">
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
                <CheckCircle className="w-8 h-8 text-blue-400" />
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
      <div ref={setRef(1)} id="standards" className="container mx-auto px-6 py-8 scroll-mt-20">
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
      <div ref={setRef(2)} id="stages" className="container mx-auto px-6 py-12 scroll-mt-20">
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

      {/* Блок 4: Преимущества */}
      <div ref={setRef(3)} id="advantages" className="container mx-auto px-6 py-12 scroll-mt-20">
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
      <div ref={setRef(4)} id="cta" className="container mx-auto px-6 py-16 text-center scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужен проект системы безопасности?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и наш инженер свяжется с вами в течение 15 минут
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2">
          Получить консультацию
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Плавающие кнопки навигации (вверх/вниз) */}
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
    </div>
  );
}