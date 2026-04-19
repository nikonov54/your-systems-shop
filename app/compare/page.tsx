// app/compare/page.tsx
'use client';

import { useStore } from '@/app/context/StoreContext';
import { mockProducts } from '@/app/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Scale, X, Trash2, ArrowLeft } from 'lucide-react';
import Header from '@/app/components/Header';

// Нормализация ключей (приведение к единому названию)
function normalizeKey(key: string): string {
  const k = key.trim().toLowerCase();
  const map: Record<string, string> = {
    'температурный режим': 'Диапазон рабочих температур',
    'размер (шхвхг)': 'Габаритные размеры без гермовводов (ШхВхГ)',
    'размер': 'Габаритные размеры без гермовводов (ШхВхГ)',
    'цвет': 'Цвет (краска порошковая полиэфирная)',
    'материал': 'Материал и толщина корпуса, мм',
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
    'цвет (краска порошковая полиэфирная)': 'Цвет (краска порошковая полиэфирная)',
    'степень защиты': 'Степень защиты',
    'материал и толщина корпуса, мм': 'Материал и толщина корпуса, мм'
  };
  return map[k] || (k.charAt(0).toUpperCase() + k.slice(1));
}

// Нормализация значений (для единообразия)
function normalizeValue(value: string, specKey: string): string {
  if (!value || value === '—') return value;
  if (specKey === 'Материал и толщина корпуса, мм') {
    if (value === 'Металл, 1.5 мм') return 'сталь, 1,5 мм';
    return value;
  }
  if (specKey === 'Цвет (краска порошковая полиэфирная)') {
    if (value === 'RAL 7035 (серый)') return 'RAL 7035 (светло-серый)';
    return value;
  }
  return value;
}

function extractNumber(str: string): number | null {
  if (!str || str === '—') return null;
  const s = str.toLowerCase();
  if (s.includes('8k')) return 8000;
  if (s.includes('4k')) return 4000;
  const match = s.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[0]) : null;
}

// Рейтинг коммутатора (чем выше, тем лучше)
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

function isBetterWhenHigher(specKey: string): boolean {
  const higherIsBetter = [
    'разрешение', 'ик-подсветка', 'угол обзора', 'мп',
    'количество', 'гарантия', 'ёмкость', 'объём', 'портов'
  ];
  return higherIsBetter.some(keyword => specKey.toLowerCase().includes(keyword));
}

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

  // Сбор нормализованных ключей из всех товаров (сравниваемые + все mockProducts)
  const getNormalizedSpecKeys = () => {
    const keysSet = new Set<string>();
    compareItems.forEach(item => {
      if (item.specs) {
        Object.keys(item.specs).forEach(k => keysSet.add(normalizeKey(k)));
      }
    });
    mockProducts.forEach(product => {
      if (product.specs) {
        Object.keys(product.specs).forEach(k => keysSet.add(normalizeKey(k)));
      }
    });
    keysSet.add('Бренд');
    keysSet.add('Наличие');
    keysSet.add('Гарантия');
    return Array.from(keysSet).sort();
  };

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
    // Поиск в specs
    const find = (specs: Record<string, string> | undefined): string | null => {
      if (!specs) return null;
      for (const [orig, val] of Object.entries(specs)) {
        if (normalizeKey(orig) === normKey) {
          return val;
        }
      }
      return null;
    };
    let value = find(item.specs);
    if (value === null) {
      const fullProduct = mockProducts.find(p => p.id === item.id);
      value = find(fullProduct?.specs);
    }
    const raw = value != null ? String(value) : '—';
    return normalizeValue(raw, normKey);
  };

  const getCellClass = (currentValue: string, allValues: string[], specKey: string): string => {
    // Особый случай: Коммутатор – используем рейтинг
    if (specKey === 'Коммутатор') {
      const curRating = getSwitchRating(currentValue);
      const allRatings = allValues.map(v => getSwitchRating(v));
      const maxRating = Math.max(...allRatings);
      const minRating = Math.min(...allRatings);
      if (curRating === maxRating && maxRating > 0) return 'text-green-400 font-semibold';
      if (curRating === minRating && allRatings.length > 2 && minRating < maxRating) return 'text-red-400';
      return 'text-white';
    }

    if (allValues.length === 1 || allValues.every(v => v === currentValue)) return 'text-white';
    const currentNum = extractNumber(currentValue);
    const numericValues = allValues.map(v => extractNumber(v)).filter((n): n is number => n !== null);
    if (numericValues.length === 0 || currentNum === null) return 'text-white';

    const isPrice = specKey === 'Цена';
    const betterIsHigher = !isPrice && isBetterWhenHigher(specKey);

    if (isPrice) {
      const minPrice = Math.min(...numericValues);
      if (currentNum === minPrice) return 'text-green-400 font-semibold';
      if (currentNum === Math.max(...numericValues) && numericValues.length > 2) return 'text-red-400';
      return 'text-white';
    }

    if (betterIsHigher) {
      const maxVal = Math.max(...numericValues);
      const minVal = Math.min(...numericValues);
      if (currentNum === maxVal) return 'text-green-400 font-semibold';
      if (currentNum === minVal && numericValues.length > 2) return 'text-red-400';
      return 'text-white';
    }

    const minVal = Math.min(...numericValues);
    const maxVal = Math.max(...numericValues);
    if (currentNum === minVal) return 'text-green-400 font-semibold';
    if (currentNum === maxVal && numericValues.length > 2) return 'text-red-400';
    return 'text-white';
  };

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex p-6 bg-white/5 rounded-full mb-8"><Scale size={64} className="text-slate-600" /></div>
          <h1 className="text-4xl font-black mb-4">Список сравнения пуст</h1>
          <p className="text-xl text-slate-400 mb-8">Добавьте товары для оформления заказа</p>
          <Link href="/catalog/videonablyudenie/cameras" className="inline-block px-8 py-3 bg-blue-600 rounded-xl">Перейти в каталог</Link>
        </div>
      </div>
    );
  }

  const allSpecKeys = getNormalizedSpecKeys();

  // Генерация строк с фильтрацией: показываем только те, у которых есть хотя бы одно непустое значение
  const headerCells = [];
  for (const item of compareItems) {
    headerCells.push(
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
    );
  }

  const priceCells = [];
  for (const item of compareItems) {
    const product = mockProducts.find(p => p.id === item.id);
    const price = product?.price ?? item.price ?? 0;
    const allPrices = compareItems.map(i => mockProducts.find(p => p.id === i.id)?.price ?? i.price ?? 0);
    const priceClass = getCellClass(price.toString(), allPrices.map(p => p.toString()), 'Цена');
    priceCells.push(
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
  }

  const specRows = [];
  for (const specKey of allSpecKeys) {
    // Проверяем, есть ли хотя бы одно значение, не равное '—'
    let hasValue = false;
    const cells = [];
    for (const item of compareItems) {
      const val = getSpecValue(item, specKey);
      if (val !== '—') hasValue = true;
      const allVals = compareItems.map(i => getSpecValue(i, specKey));
      const cls = getCellClass(val, allVals, specKey);
      cells.push(
        <td key={item.id} className={`p-3 text-center ${cls}`}>{val}</td>
      );
    }
    if (!hasValue) continue; // пропускаем строки, где все значения — прочерки
    specRows.push(
      <tr key={specKey} className="border-b border-white/5">
        <td className="p-3 font-bold text-slate-300 sticky left-0 bg-[#020408]">{specKey}</td>
        {cells}
      </tr>
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
                {headerCells}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 bg-white/5">
                <td className="p-3 font-bold sticky left-0 bg-[#020408]">Цена</td>
                {priceCells}
              </tr>
              {specRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}