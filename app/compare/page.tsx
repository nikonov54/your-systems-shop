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
    'габаритные размеры (шхвхг)': 'Габаритные размеры (ШхВхГ)',
    'масса': 'Масса',
    'вес': 'Масса',
    'высота в юнитах': 'Высота в юнитах',
    'предстарт': 'Предстарт',
    'обогрев': 'Обогрев',
    'бренд': 'Бренд',
    'наличие': 'Наличие',
    'гарантия': 'Гарантия',
    'материал корпуса': 'Материал',
    'материал и толщина корпуса, мм': 'Материал и толщина корпуса',
    'степень защиты': 'Степень защиты',
    'цвет': 'Цвет',
    'тип установки': 'Тип установки',
    'климатическое исполнение': 'Климатическое исполнение',
    'температура эксплуатации': 'Температура эксплуатации',
    'гермовводы': 'Гермовводы'
  };
  return map[k] || (k.charAt(0).toUpperCase() + k.slice(1));
}

function extractHeight(value: string): number | null {
  if (!value || value === '—') return null;
  const match = value.match(/(\d+)\s*[xх]\s*(\d+)\s*[xх]\s*(\d+)/);
  return match ? parseInt(match[2], 10) : null;
}

function extractNumber(value: string): number | null {
  if (!value || value === '—') return null;
  const match = value.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[0]) : null;
}

function getComparisonType(key: string): 'higher' | 'lower' | 'boolean' {
  const k = key.toLowerCase();
  if (['габаритные размеры (шхвхг)', 'высота в юнитах', 'степень защиты'].includes(k)) return 'higher';
  if (['масса', 'цена'].includes(k)) return 'lower';
  if (['предстарт', 'обогрев'].includes(k)) return 'boolean';
  return 'higher';
}

function getCellClass(cur: string, all: string[], key: string, curIndex: number): string {
  // Если все значения одинаковые – не подсвечиваем ничего
  const allEqual = all.every(v => v === all[0]);
  if (allEqual) return 'text-white';

  const type = getComparisonType(key);
  if (type === 'boolean') {
    const curYes = cur.toLowerCase().includes('да');
    const yesIndices = all.reduce((acc, v, i) => v.toLowerCase().includes('да') ? [...acc, i] : acc, [] as number[]);
    if (curYes && yesIndices.length > 0 && yesIndices.includes(curIndex)) return 'text-green-400 font-semibold';
    return 'text-white';
  }
  let curNum: number | null = null;
  if (key.toLowerCase().includes('габаритные размеры')) {
    curNum = extractHeight(cur);
  } else {
    curNum = extractNumber(cur);
  }
  const nums = all.map(v => key.toLowerCase().includes('габаритные размеры') ? extractHeight(v) : extractNumber(v)).filter((n): n is number => n !== null);
  if (nums.length === 0 || curNum === null) return 'text-white';
  let best: number;
  if (type === 'higher') best = Math.max(...nums);
  else best = Math.min(...nums);
  const bestIndices = all.reduce((acc, v, i) => {
    const n = key.toLowerCase().includes('габаритные размеры') ? extractHeight(v) : extractNumber(v);
    if (n !== null && n === best) return [...acc, i];
    return acc;
  }, [] as number[]);
  if (bestIndices.length > 0 && bestIndices.includes(curIndex)) return 'text-green-400 font-semibold';
  return 'text-white';
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

  const allSpecKeys = (() => {
    const keys = new Set<string>();
    compareItems.forEach(item => {
      if (item.specs) Object.keys(item.specs).forEach(k => keys.add(normalizeKey(k)));
    });
    keys.add('Бренд');
    keys.add('Наличие');
    keys.add('Гарантия');
    return Array.from(keys).sort();
  })();

  const getSpecValue = (item: typeof compareItems[0], normKey: string): string => {
    if (normKey === 'Бренд') return item.brand || '—';
    if (normKey === 'Наличие') {
      const prod = mockProducts.find(p => p.id === item.id);
      return prod?.inStock ? 'В наличии' : 'Нет в наличии';
    }
    if (normKey === 'Гарантия') {
      const fromSpecs = item.specs?.['Гарантия'] || mockProducts.find(p => p.id === item.id)?.specs?.['Гарантия'];
      return fromSpecs || '12 мес.';
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
    return val != null ? String(val) : '—';
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

  const headerCells = compareItems.map((item) => (
    <th key={item.id} className="p-3 text-center relative min-w-[200px] align-top">
      <button onClick={() => removeFromCompare(item.id)} className="absolute top-2 right-2 w-7 h-7 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors z-20" title="Удалить"><X size={16} className="text-white" /></button>
      <div className="w-24 h-24 mx-auto bg-white/5 rounded-xl mb-2 flex items-center justify-center mt-2">
        {item.image ? <Image src={item.image} alt={item.name} width={80} height={80} className="object-contain p-2" /> : <div className="text-xs text-slate-500">Нет фото</div>}
      </div>
      <h3 className="font-bold text-sm line-clamp-2 mt-2">{item.name}</h3>
      {item.brand && <div className="text-xs text-blue-400 mt-1">{item.brand}</div>}
    </th>
  ));

  const priceCells = compareItems.map((item, idx) => {
    const product = mockProducts.find(p => p.id === item.id);
    const price = product?.price ?? item.price ?? 0;
    const allPrices = compareItems.map(i => mockProducts.find(p => p.id === i.id)?.price ?? i.price ?? 0);
    const priceClass = getCellClass(price.toString(), allPrices.map(p => p.toString()), 'цена', idx);
    return (
      <td key={item.id} className="p-3 text-center">
        <div className={`text-xl font-bold ${priceClass}`}>{formatPrice(price)}</div>
        {product?.oldPrice && <div className="text-xs text-slate-500 line-through">{formatPrice(product.oldPrice)}</div>}
        <button onClick={() => { const full = mockProducts.find(p => p.id === item.id); if (full) addToCart(full, 1); }} className="mt-2 w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold"><ShoppingCart size={12} /> В корзину</button>
      </td>
    );
  });

  const specRows = allSpecKeys.map((specKey) => {
    const values = compareItems.map(item => getSpecValue(item, specKey));
    const hasValue = values.some(v => v !== '—');
    if (!hasValue) return null;
    const cells = compareItems.map((item, idx) => {
      const val = values[idx];
      const cls = getCellClass(val, values, specKey, idx);
      return <td key={item.id} className={`p-3 text-center ${cls}`}>{val}</td>;
    });
    return (
      <tr key={specKey} className="border-b border-white/5">
        <td className="p-3 font-bold text-slate-300 sticky left-0 bg-[#020408]">{specKey}</td>
        {cells}
      </tr>
    );
  }).filter(row => row !== null);

  const headerRow = (
    <tr className="border-b border-white/10">
      <th className="p-3 text-left w-48 bg-[#020408] sticky left-0 z-10">Характеристики</th>
      {headerCells}
    </tr>
  );

  const priceRow = (
    <tr className="border-b border-white/5 bg-white/5">
      <td className="p-3 font-bold sticky left-0 bg-[#020408]">Цена</td>
      {priceCells}
    </tr>
  );

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      <div className="container mx-auto px-6 py-6">
        <Link href={backLink} className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-blue-500 mb-4"><ArrowLeft size={14} /> Назад</Link>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black">Сравнение товаров</h1>
          {compareItems.length > 1 && <button onClick={clearCompare} className="px-3 py-1.5 bg-red-600/20 text-red-400 rounded-lg text-sm"><Trash2 size={14} className="inline mr-1" /> Очистить</button>}
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