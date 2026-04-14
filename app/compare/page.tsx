// app/compare/page.tsx
'use client';

import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { mockProducts } from '../lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Scale, X, Trash2, ArrowLeft, ShieldCheck, Search } from 'lucide-react';

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare, addToCart } = useStore();
  const [cartCount] = useState(0);
  
  const getBackLink = () => {
    if (compareItems.length === 0) return '/';
    const firstProduct = mockProducts.find(p => p.id === compareItems[0]?.id);
    if (!firstProduct) return '/';
    return `/catalog/${firstProduct.category}/${firstProduct.subcategory}`;
  };
  
  const backLink = getBackLink();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  // Функция для извлечения числового значения
  const extractNumericValue = (value: string, specKey: string): number | null => {
    if (specKey.includes('Разрешение')) {
      if (value.includes('8K')) return 8000;
      if (value.includes('4K')) return 4000;
      const match = value.match(/(\d+)/);
      if (match) return parseInt(match[0]);
      return null;
    }
    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) return null;
    return parseFloat(match[0]);
  };
  
  // Функция для сравнения и возврата класса цвета
  const getComparisonClass = (currentValue: string, allValues: string[], specKey: string): string => {
    if (allValues.length === 1 || allValues.every(v => v === currentValue)) {
      return 'text-white';
    }
    
    const numericValues: { value: string; num: number | null }[] = allValues.map(v => ({
      value: v,
      num: extractNumericValue(v, specKey)
    }));
    
    const hasAnyNumeric = numericValues.some(n => n.num !== null);
    if (!hasAnyNumeric) return 'text-white';
    
    const validNumerics = numericValues.filter(n => n.num !== null) as { value: string; num: number }[];
    if (validNumerics.length === 0) return 'text-white';
    
    const currentNum = numericValues.find(n => n.value === currentValue)?.num;
    if (currentNum === null) return 'text-white';
    
    if (specKey === 'Цена') {
      const minPrice = Math.min(...validNumerics.map(n => n.num));
      if (currentNum === minPrice) return 'text-green-400 font-semibold';
      return 'text-white';
    }
    
    const betterIsMore = ['ИК-подсветка', 'ИК', 'Разрешение', 'Угол обзора', 'Мп'];
    const isBetterMore = betterIsMore.some(keyword => specKey.includes(keyword));
    
    if (isBetterMore) {
      const maxValue = Math.max(...validNumerics.map(n => n.num));
      if (currentNum === maxValue) return 'text-green-400 font-semibold';
      return 'text-white';
    }
    
    return 'text-white';
  };
  
  const getAllSpecs = () => {
    const allSpecs = new Set<string>();
    compareItems.forEach(item => {
      if (item.specs) {
        Object.keys(item.specs).forEach(key => allSpecs.add(key));
      }
    });
    allSpecs.add('Бренд');
    allSpecs.add('Наличие');
    allSpecs.add('Гарантия');
    return Array.from(allSpecs);
  };
  
  const getSpecValue = (item: typeof compareItems[0], specKey: string): string => {
    if (specKey === 'Бренд') return item.brand || '—';
    if (specKey === 'Наличие') {
      const product = mockProducts.find(p => p.id === item.id);
      return product?.inStock ? 'В наличии' : 'Нет в наличии';
    }
    if (specKey === 'Гарантия') {
      if (item.brand === 'Dahua') return '48 месяцев';
      if (item.brand === 'Hikvision') return '36 месяцев';
      return '12 месяцев';
    }
    return item.specs?.[specKey] || '—';
  };
  
  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <header className="relative z-50 bg-[#05070a] border-b border-white/5">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
              <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <ShieldCheck size={28} />
              </div>
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
                <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
              </button>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex p-6 bg-white/5 rounded-full mb-8">
            <Scale size={64} className="text-slate-600" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-4">Список <span className="text-blue-600">сравнения</span> пуст</h1>
          <p className="text-xl text-slate-400 mb-8">Добавьте товары для сравнения, чтобы выбрать лучшее решение</p>
          <Link href="/catalog/videonablyudenie/камеры" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }
  
  const allSpecs = getAllSpecs();
  
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <header className="relative z-50 bg-[#05070a] border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 uppercase tracking-tighter">
            <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <ShieldCheck size={28} />
            </div>
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
              <span className="absolute -top-1 -right-1 bg-white text-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-6 py-6">
        <Link href={backLink} className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-white/40 hover:text-blue-500 transition-colors mb-4">
          <ArrowLeft size={14} />
          Назад
        </Link>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black uppercase tracking-tight">Сравнение <span className="text-blue-600">товаров</span></h1>
          {compareItems.length > 1 && (
            <button onClick={clearCompare} className="flex items-center gap-2 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-xs">
              <Trash2 size={14} />
              Очистить список
            </button>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-3 text-left text-white font-bold w-36 bg-white/5">Характеристики</th>
                {compareItems.map((item) => (
                  <th key={item.id} className="p-3 text-center bg-white/5 relative">
                    <Link href={`/product/${item.id}`}>
                      <div className="relative w-24 h-24 mx-auto bg-white/5 rounded-xl overflow-hidden mb-2">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs">Нет фото</div>
                        )}
                      </div>
                    </Link>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-bold text-white hover:text-blue-400 transition-colors text-xs line-clamp-2">{item.name}</h3>
                    </Link>
                    {item.brand && <div className="text-xs text-blue-400 mt-1">{item.brand}</div>}
                    
                    <button
                      onClick={() => removeFromCompare(item.id)}
                      className="mt-2 mx-auto flex items-center justify-center gap-1 px-2 py-1 bg-red-600/30 hover:bg-red-600 text-white rounded-md transition-all text-xs"
                    >
                      <X size={12} />
                      Удалить
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Цена с подсветкой */}
              <tr className="border-b border-white/5 bg-white/5">
                <td className="p-3 font-bold text-white">Цена</td>
                {compareItems.map((item) => {
                  const product = mockProducts.find(p => p.id === item.id);
                  const price = product?.price || item.price;
                  const oldPrice = product?.oldPrice;
                  const allPrices = compareItems.map(i => {
                    const p = mockProducts.find(prod => prod.id === i.id);
                    return p?.price || i.price;
                  });
                  const priceStrings = allPrices.map(p => p.toString());
                  const priceClass = getComparisonClass(price.toString(), priceStrings, 'Цена');
                  
                  return (
                    <td key={item.id} className="p-3 text-center">
                      <div className={`text-xl font-bold ${priceClass}`}>{formatPrice(price)}</div>
                      {oldPrice && <div className="text-xs text-slate-500 line-through">{formatPrice(oldPrice)}</div>}
                      <button
                        onClick={() => {
                          const fullProduct = mockProducts.find(p => p.id === item.id);
                          if (fullProduct) addToCart(fullProduct, 1);
                        }}
                        className="mt-2 w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition-all"
                      >
                        <ShoppingCart size={12} />
                        В корзину
                      </button>
                    </td>
                  );
                })}
              </tr>
              
              {/* Характеристики с подсветкой */}
              {allSpecs.map((specKey) => (
                <tr key={specKey} className="border-b border-white/5">
                  <td className="p-3 font-bold text-white bg-white/5">{specKey}</td>
                  {compareItems.map((item) => {
                    const currentValue = getSpecValue(item, specKey);
                    const allValues = compareItems.map(i => getSpecValue(i, specKey));
                    const textColor = getComparisonClass(currentValue, allValues, specKey);
                    
                    return (
                      <td key={item.id} className={`p-3 text-center ${textColor}`}>
                        {currentValue}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}