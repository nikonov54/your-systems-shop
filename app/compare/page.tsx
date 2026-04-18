// app/compare/page.tsx
'use client';

import { useStore } from '@/app/context/StoreContext';
import { mockProducts } from '@/app/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Scale, X, Trash2, ArrowLeft } from 'lucide-react';
import Header from '@/app/components/Header';
import { useMemo } from 'react';

// ----------------------------------------------------------------------
// ТОЧНАЯ НОРМАЛИЗАЦИЯ КЛЮЧЕЙ (учитывает все ваши варианты)
// ----------------------------------------------------------------------
const normalizeKey = (key: string): string => {
  let k = key.trim().toLowerCase();
  
  // Точные соответствия для всех ваших реальных ключей
  const exact: Record<string, string> = {
    'аккумулятор': 'Аккумулятор',
    'грозозащита': 'Грозозащита',
    'грохозащита': 'Грозозащита',
    'гроссовщика': 'Грозозащита',
    'защита ip': 'Защита IP',
    'гермовводы': 'Гермовводы',
    'гармонизация': 'Гермовводы',
    'гормоноиды': 'Гермовводы',
    'коммутатор': 'Коммутатор',
    'блок питания': 'Блок питания',
    'температурный режим': 'Температурный режим',
    'обогреватель': 'Обогреватель',
    'термостат': 'Термостат',
    'оптический кросс': 'Оптический кросс',
    'размер (шхвхг)': 'Размер (ШхВхГ)',
    'размер': 'Размер (ШхВхГ)',
    'цвет': 'Цвет',
    'материал': 'Материал',
    'управляемый': 'Управляемый',
    'кол-во портов': 'Кол-во портов',
    'количество портов': 'Кол-во портов',
    'бренд': 'Бренд',
    'наличие': 'Наличие',
    'гарантия': 'Гарантия'
  };
  
  if (exact[k]) return exact[k];
  // Если не найдено, возвращаем с заглавной буквы
  return k.charAt(0).toUpperCase() + k.slice(1);
};

// ----------------------------------------------------------------------
// ФУНКЦИИ ДЛЯ СПЕЦИАЛЬНЫХ ТИПОВ СРАВНЕНИЯ
// ----------------------------------------------------------------------
function extractNumber(str: string): number | null {
  if (!str || str === '—') return null;
  const s = str.toLowerCase();
  if (s.includes('8k')) return 8000;
  if (s.includes('4k')) return 4000;
  const match = s.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[0]) : null;
}

function getBatteryCapacity(value: string): number {
  if (!value || value === '—') return 0;
  const ahMatch = value.match(/(\d+(?:\.\d+)?)А·ч/);
  let ah = ahMatch ? parseFloat(ahMatch[1]) : 0;
  const countMatch = value.match(/\((\d+)\s*шт\)/);
  const count = countMatch ? parseInt(countMatch[1]) : 1;
  return ah * count;
}

function getSurgeRating(value: string): number {
  if (value.includes('220В + PoE')) return 2;
  if (value.includes('220В')) return 1;
  return 0;
}

function getSwitchRating(value: string): number {
  if (!value || value === '—') return 0;
  let rating = 0;
  const poeMatch = value.match(/(\d+)xPoE/);
  if (poeMatch) rating += parseInt(poeMatch[1]) * 10;
  if (value.includes('управляемый')) rating += 50;
  if (value.includes('консоль')) rating += 30;
  const sfpMatch = value.match(/(\d+)xSFP/);
  if (sfpMatch) rating += parseInt(sfpMatch[1]) * 20;
  return rating;
}

function getGlandPortCount(value: string): number {
  if (!value || value === '—') return 0;
  const matches = value.matchAll(/(\d+)xPG/g);
  let total = 0;
  for (const m of matches) total += parseInt(m[1]);
  return total;
}

function isBetterWhenHigher(specKey: string): boolean {
  const higherIsBetter = [
    'разрешение', 'ик-подсветка', 'угол обзора', 'мп',
    'количество', 'гарантия', 'ёмкость', 'объём', 'портов',
    'блок питания', 'коммутатор', 'аккумулятор'
  ];
  return higherIsBetter.some(keyword => specKey.toLowerCase().includes(keyword));
}

// ----------------------------------------------------------------------
// ОСНОВНОЙ КОМПОНЕНТ
// ----------------------------------------------------------------------
export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare, addToCart } = useStore();

  const getBackLink = () => {
    if (compareItems.length === 0) return '/';
    const firstProduct = mockProducts.find(p => p.id === compareItems[0]?.id);
    if (!firstProduct) return '/';
    return `/catalog/${firstProduct.category}/${firstProduct.subcategory}`;
  };

  const backLink = getBackLink();
  const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(price);

  const normalizedSpecKeys = useMemo(() => {
    const keysSet = new Set<string>();
    const addKeys = (obj: any) => {
      if (obj.specs) {
        Object.keys(obj.specs).forEach(orig => keysSet.add(normalizeKey(orig)));
      }
    };
    compareItems.forEach(addKeys);
    mockProducts.forEach(addKeys);
    keysSet.add('Бренд');
    keysSet.add('Наличие');
    keysSet.add('Гарантия');
    return Array.from(keysSet).sort();
  }, [compareItems]);

  const getSpecValue = (item: typeof compareItems[0], normKey: string): string => {
    if (normKey === 'Бренд') return item.brand || '—';
    if (normKey === 'Наличие') {
      const product = mockProducts.find(p => p.id === item.id);
      return product?.inStock ? 'В наличии' : 'Нет в наличии';
    }
    if (normKey === 'Гарантия') {
      if (item.brand === 'Dahua') return '48 месяцев';
      if (item.brand === 'Hikvision') return '36 месяцев';
      return '12 месяцев';
    }
    const find = (specs: Record<string, string> | undefined): string | null => {
      if (!specs) return null;
      for (const [orig, val] of Object.entries(specs)) {
        if (normalizeKey(orig) === normKey) return val;
      }
      return null;
    };
    let value = find(item.specs);
    if (value === null) {
      const full = mockProducts.find(p => p.id === item.id);
      value = find(full?.specs);
    }
    return value != null ? String(value) : '—';
  };

  const getCellClass = (currentValue: string, allValues: string[], specKey: string): string => {
    const key = specKey.toLowerCase();
    // Гермовводы – жёлтый для лучшего
    if (key === 'гермовводы') {
      const cur = getGlandPortCount(currentValue);
      const all = allValues.map(v => getGlandPortCount(v));
      const max = Math.max(...all);
      if (cur === max && max > 0) return 'text-yellow-400 font-semibold';
      return 'text-white';
    }
    // Коммутатор – рейтинг
    if (key === 'коммутатор') {
      const cur = getSwitchRating(currentValue);
      const all = allValues.map(v => getSwitchRating(v));
      const max = Math.max(...all);
      const min = Math.min(...all);
      if (cur === max && max > 0) return 'text-green-400 font-semibold';
      if (cur === min && all.length > 2 && min < max) return 'text-red-400';
      return 'text-white';
    }
    // Грозозащита – рейтинг
    if (key === 'грозозащита') {
      const cur = getSurgeRating(currentValue);
      const all = allValues.map(v => getSurgeRating(v));
      const max = Math.max(...all);
      const min = Math.min(...all);
      if (cur === max && max > 0) return 'text-green-400 font-semibold';
      if (cur === min && all.length > 2 && min < max) return 'text-red-400';
      return 'text-white';
    }
    // Аккумулятор – ёмкость
    if (key === 'аккумулятор') {
      const cur = getBatteryCapacity(currentValue);
      const all = allValues.map(v => getBatteryCapacity(v));
      const max = Math.max(...all);
      const min = Math.min(...all);
      if (cur === max && max > 0) return 'text-green-400 font-semibold';
      if (cur === min && all.length > 2 && min < max) return 'text-red-400';
      return 'text-white';
    }
    // Блок питания – числовое значение
    if (key === 'блок питания') {
      const cur = extractNumber(currentValue);
      const all = allValues.map(v => extractNumber(v)).filter((n): n is number => n !== null);
      if (all.length === 0 || cur === null) return 'text-white';
      const max = Math.max(...all);
      const min = Math.min(...all);
      if (cur === max) return 'text-green-400 font-semibold';
      if (cur === min && all.length > 2) return 'text-red-400';
      return 'text-white';
    }
    // Общая логика для числовых
    if (allValues.length === 1 || allValues.every(v => v === currentValue)) return 'text-white';
    const curNum = extractNumber(currentValue);
    const numVals = allValues.map(v => extractNumber(v)).filter((n): n is number => n !== null);
    if (numVals.length === 0 || curNum === null) return 'text-white';
    const isPrice = specKey === 'Цена';
    const betterIsHigher = !isPrice && isBetterWhenHigher(specKey);
    if (isPrice) {
      const minPrice = Math.min(...numVals);
      if (curNum === minPrice) return 'text-green-400 font-semibold';
      if (curNum === Math.max(...numVals) && numVals.length > 2) return 'text-red-400';
      return 'text-white';
    }
    if (betterIsHigher) {
      const maxVal = Math.max(...numVals);
      const minVal = Math.min(...numVals);
      if (curNum === maxVal) return 'text-green-400 font-semibold';
      if (curNum === minVal && numVals.length > 2) return 'text-red-400';
      return 'text-white';
    }
    const minVal = Math.min(...numVals);
    const maxVal = Math.max(...numVals);
    if (curNum === minVal) return 'text-green-400 font-semibold';
    if (curNum === maxVal && numVals.length > 2) return 'text-red-400';
    return 'text-white';
  };

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex p-6 bg-white/5 rounded-full mb-8"><Scale size={64} className="text-slate-600" /></div>
          <h1 className="text-4xl font-black mb-4">Список сравнения пуст</h1>
          <p className="text-xl text-slate-400 mb-8">Добавьте товары для сравнения</p>
          <Link href="/catalog/videonablyudenie/cameras" className="inline-block px-8 py-3 bg-blue-600 rounded-xl">Перейти в каталог</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      <div className="container mx-auto px-6 py-6">
        <Link href={backLink} className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-blue-500 mb-4">
          <ArrowLeft size={14} /> Назад
        </Link>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black">Сравнение товаров</h1>
          {compareItems.length > 1 && (
            <button onClick={clearCompare} className="px-3 py-1.5 bg-red-600/20 text-red-400 rounded-lg text-sm">
              <Trash2 size={14} className="inline mr-1" /> Очистить
            </button>
          )}
        </div>

        <div className="overflow-x-auto overflow-visible">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-3 text-left w-48 bg-[#020408] sticky left-0 z-10">Характеристики</th>
                {compareItems.map((item) => (
                  <th key={item.id} className="p-3 text-center relative min-w-[200px] align-top">
                    <button
                      onClick={() => removeFromCompare(item.id)}
                      className="absolute top-2 right-2 w-7 h-7 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
                      title="Удалить"
                    >
                      <X size={16} className="text-white" />
                    </button>
                    <div className="w-24 h-24 mx-auto bg-white/5 rounded-xl mb-2 flex items-center justify-center mt-2">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} width={80} height={80} className="object-contain p-2" />
                      ) : (
                        <div className="text-xs text-slate-500">Нет фото</div>
                      )}
                    </div>
                    <h3 className="font-bold text-sm line-clamp-2 mt-2">{item.name}</h3>
                    {item.brand && <div className="text-xs text-blue-400 mt-1">{item.brand}</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Цена */}
              <tr className="border-b border-white/5 bg-white/5">
                <td className="p-3 font-bold sticky left-0 bg-[#020408]">Цена</td>
                {compareItems.map((item) => {
                  const product = mockProducts.find(p => p.id === item.id);
                  const price = product?.price ?? item.price ?? 0;
                  const allPrices = compareItems.map(i => mockProducts.find(p => p.id === i.id)?.price ?? i.price ?? 0);
                  const priceClass = getCellClass(price.toString(), allPrices.map(p => p.toString()), 'Цена');
                  return (
                    <td key={item.id} className="p-3 text-center">
                      <div className={`text-xl font-bold ${priceClass}`}>{formatPrice(price)}</div>
                      {product?.oldPrice && <div className="text-xs text-slate-500 line-through">{formatPrice(product.oldPrice)}</div>}
                      <button
                        onClick={() => {
                          const fullProduct = mockProducts.find(p => p.id === item.id);
                          if (fullProduct) addToCart(fullProduct, 1);
                        }}
                        className="mt-2 w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold"
                      >
                        <ShoppingCart size={12} /> В корзину
                      </button>
                    </td>
                  );
                })}
              </tr>

              {/* Все характеристики */}
              {normalizedSpecKeys.map((specKey) => (
                <tr key={specKey} className="border-b border-white/5">
                  <td className="p-3 font-bold text-slate-300 sticky left-0 bg-[#020408]">{specKey}</td>
                  {compareItems.map((item) => {
                    const currentValue = getSpecValue(item, specKey);
                    const allValues = compareItems.map(i => getSpecValue(i, specKey));
                    const cellClass = getCellClass(currentValue, allValues, specKey);
                    return (
                      <td key={item.id} className={`p-3 text-center ${cellClass}`}>
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