'use client';

import { useStore } from '@/app/context/StoreContext';
import { mockProducts } from '@/app/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Scale, X, Trash2, ArrowLeft } from 'lucide-react';
import Header from '@/app/components/Header';

function normalizeKey(key: string): string {
  const k = key.trim().toLowerCase();
  const map: Record<string, string> = {
    'температурный режим': 'Диапазон рабочих температур',
    'размер (шхвхг)': 'Габаритные размеры (ШхВхГ)',
    'размер': 'Габаритные размеры (ШхВхГ)',
    'цвет': 'Цвет',
    'материал': 'Материал',
    'защита ip': 'Степень защиты',
    'кол-во портов poe': 'Кол-во портов PoE',
    'кол-во портов sfp': 'Кол-во портов SFP',
    'питание': 'Напряжение питания',
    'обогреватель': 'Мощность обогрева',
    'управляемый': 'Управляемый',
    'коммутатор': 'Коммутатор',
    'блок питания': 'Блок питания',
    'оптический кросс': 'Оптический кросс',
    'гермовводы': 'Гермовводы',
    'грозозащита': 'Грозозащита',
    'аккумулятор': 'Аккумулятор',
    'бренд': 'Бренд',
    'наличие': 'Наличие',
    'гарантия': 'Гарантия',
    'ударопрочность': 'Ударопрочность',
    'интерфейс rj-45 poe watchdog': 'Интерфейс RJ-45 PoE watchdog',
    'интерфейс sfp': 'Интерфейс SFP',
    'poe стандарт': 'PoE стандарт',
    'бюджет poe': 'Бюджет PoE',
    'напряжение питания': 'Напряжение питания',
    'максимальная потребляемая мощность': 'Максимальная потребляемая мощность',
    'мощность обогрева': 'Мощность обогрева',
    'диапазон рабочих температур': 'Диапазон рабочих температур',
    'масса': 'Масса',
    'вес': 'Масса',
    'климатическое исполнение по гост 15150': 'Климатическое исполнение по ГОСТ 15150',
    'габаритные размеры без гермовводов (шхвхг)': 'Габаритные размеры без гермовводов (ШхВхГ)',
    'цвет (краска порошковая полиэфирная)': 'Цвет',
    'степень защиты': 'Степень защиты',
    'материал и толщина корпуса, мм': 'Материал',
    'габаритные размеры (шхвхг)': 'Габаритные размеры (ШхВхГ)',
    'материал корпуса': 'Материал',
    'окно': 'Окно'
  };
  return map[k] || (k.charAt(0).toUpperCase() + k.slice(1));
}

function normalizeValue(value: string, specKey: string): string {
  if (!value || value === '—') return value;
  if (specKey === 'Материал') {
    if (value === 'Металл, 1.5 мм') return 'сталь, 1,5 мм';
    return value;
  }
  if (specKey === 'Цвет') {
    if (value === 'RAL 7035 (серый)') return 'RAL 7035 (светло-серый)';
    return value;
  }
  return value;
}

function extractNumber(str: string): number | null {
  if (!str || str === '—') return null;
  const match = str.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[0]) : null;
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
  let total = 0;
  const matches = value.matchAll(/\((\d+)\s*шт\.?\)/g);
  for (const m of matches) total += parseInt(m[1]);
  return total;
}

function isBetterWhenHigher(specKey: string): boolean {
  const higher = [
    'бюджет poe', 'блок питания', 'коммутатор', 'аккумулятор',
    'кол-во портов', 'кол-во портов poe', 'кол-во портов sfp',
    'интерфейс rj-45 poe watchdog', 'интерфейс sfp',
    'ёмкость', 'мощность', 'гарантия', 'портов',
    'габаритные размеры без гермовводов (шхвхг)', 'габаритные размеры (шхвхг)',
    'масса', 'вес', 'мощность обогрева', 'степень защиты'
  ];
  return higher.some(k => specKey.toLowerCase().includes(k));
}

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare, addToCart } = useStore();

  const getBackLink = () => {
    if (compareItems.length === 0) return '/';
    const first = mockProducts.find(p => p.id === compareItems[0]?.id);
    if (!first) return '/';
    return `/catalog/${first.category}/${first.subcategory}`;
  };
  const backLink = getBackLink();
  const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(price);

  const getNormalizedSpecKeys = () => {
    const keys = new Set<string>();
    compareItems.forEach(item => {
      if (item.specs) Object.keys(item.specs).forEach(k => keys.add(normalizeKey(k)));
    });
    mockProducts.forEach(product => {
      if (product.specs) Object.keys(product.specs).forEach(k => keys.add(normalizeKey(k)));
    });
    keys.add('Бренд');
    keys.add('Наличие');
    keys.add('Гарантия');
    return Array.from(keys).sort();
  };

  const getSpecValue = (item: typeof compareItems[0], normKey: string): string => {
    if (normKey === 'Бренд') return item.brand || '—';
    if (normKey === 'Наличие') {
      const prod = mockProducts.find(p => p.id === item.id);
      return prod?.inStock ? 'В наличии' : 'Нет в наличии';
    }
    if (normKey === 'Гарантия') {
      if (item.brand === 'Dahua') return '48 мес.';
      if (item.brand === 'Hikvision') return '36 мес.';
      return '12 мес.';
    }
    const find = (specs: Record<string, string> | undefined): string | null => {
      if (!specs) return null;
      for (const [orig, val] of Object.entries(specs)) {
        if (normalizeKey(orig) === normKey) return val;
      }
      return null;
    };
    let val = find(item.specs);
    if (val === null) {
      const full = mockProducts.find(p => p.id === item.id);
      val = find(full?.specs);
    }
    const raw = val != null ? String(val) : '—';
    return normalizeValue(raw, normKey);
  };

  const getCellClass = (cur: string, all: string[], key: string): string => {
    const k = key.toLowerCase();
    if (k === 'гермовводы') {
      const curCnt = getGlandPortCount(cur);
      const allCnt = all.map(v => getGlandPortCount(v));
      const maxCnt = Math.max(...allCnt);
      if (curCnt === maxCnt && maxCnt > 0) return 'text-green-400 font-semibold';
      return 'text-white';
    }
    if (k === 'коммутатор') {
      const curR = getSwitchRating(cur);
      const allR = all.map(v => getSwitchRating(v));
      const maxR = Math.max(...allR);
      if (curR === maxR && maxR > 0) return 'text-green-400 font-semibold';
      return 'text-white';
    }
    if (isBetterWhenHigher(key)) {
      const curNum = extractNumber(cur);
      const nums = all.map(v => extractNumber(v)).filter((n): n is number => n !== null);
      if (nums.length === 0 || curNum === null) return 'text-white';
      const maxNum = Math.max(...nums);
      if (curNum === maxNum) return 'text-green-400 font-semibold';
      return 'text-white';
    }
    if (key === 'Цена') {
      const curNum = extractNumber(cur);
      const nums = all.map(v => extractNumber(v)).filter((n): n is number => n !== null);
      if (nums.length === 0 || curNum === null) return 'text-white';
      const minPrice = Math.min(...nums);
      if (curNum === minPrice) return 'text-green-400 font-semibold';
      return 'text-white';
    }
    return 'text-white';
  };

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex p-6 bg-white/5 rounded-full mb-8">
            <Scale size={64} className="text-slate-600" />
          </div>
          <h1 className="text-4xl font-black mb-4">Список сравнения пуст</h1>
          <p className="text-xl text-slate-400 mb-8">Добавьте товары для оформления заказа</p>
          <Link href="/catalog/videonablyudenie/cameras" className="inline-block px-8 py-3 bg-blue-600 rounded-xl">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  const allSpecKeys = getNormalizedSpecKeys();

  const headerRow = (
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
  );

  const priceRow = (
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
                const full = mockProducts.find(p => p.id === item.id);
                if (full) addToCart(full, 1);
              }}
              className="mt-2 w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold"
            >
              <ShoppingCart size={12} /> В корзину
            </button>
          </td>
        );
      })}
    </tr>
  );

  const specRows = allSpecKeys.map((specKey) => {
    const values = compareItems.map(item => getSpecValue(item, specKey));
    const hasValue = values.some(v => v !== '—');
    if (!hasValue) return null;
    const allVals = values;
    const cells = compareItems.map((item, idx) => {
      const val = values[idx];
      const cls = getCellClass(val, allVals, specKey);
      return <td key={item.id} className={`p-3 text-center ${cls}`}>{val}</td>;
    });
    return (
      <tr key={specKey} className="border-b border-white/5">
        <td className="p-3 font-bold text-slate-300 sticky left-0 bg-[#020408]">{specKey}</td>
        {cells}
      </tr>
    );
  }).filter(row => row !== null);

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
            <thead>{headerRow}</thead>
            <tbody>
              {priceRow}
              {specRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}