// app/compare/page.tsx
'use client';

import { useStore } from '../context/StoreContext';
import { mockProducts } from '../lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Scale, X, Trash2, ArrowLeft } from 'lucide-react';
import Header from '@/app/components/Header';

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare, addToCart } = useStore();
  
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
  
  const getAllSpecs = () => {
    const allSpecs = new Set<string>();
    compareItems.forEach(item => {
      if (item.specs) {
        Object.keys(item.specs).forEach(key => allSpecs.add(key));
      }
    });
    return Array.from(allSpecs);
  };
  
  const getSpecValue = (item: typeof compareItems[0], specKey: string): string => {
    return item.specs?.[specKey] || '—';
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
          <p className="text-xl text-slate-400 mb-8">Добавьте товары для сравнения</p>
          <Link href="/catalog/videonablyudenie/камеры" className="inline-block px-8 py-3 bg-blue-600 rounded-xl">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }
  
  const allSpecs = getAllSpecs();
  
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-6">
        <Link href={backLink} className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-blue-500 mb-4">
          <ArrowLeft size={14} />
          Назад
        </Link>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black">Сравнение товаров</h1>
          {compareItems.length > 1 && (
            <button onClick={clearCompare} className="px-3 py-1.5 bg-red-600/20 text-red-400 rounded-lg text-sm">
              <Trash2 size={14} className="inline mr-1" />
              Очистить
            </button>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-3 text-left w-40">Характеристики</th>
                {compareItems.map((item) => (
                  <th key={item.id} className="p-3 text-center">
                    <button
                      onClick={() => removeFromCompare(item.id)}
                      className="float-right w-6 h-6 bg-red-600 rounded-full"
                    >
                      <X size={14} className="mx-auto text-white" />
                    </button>
                    <div className="w-24 h-24 mx-auto bg-white/5 rounded-xl mb-2">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} width={80} height={80} className="object-contain p-2" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs">Нет фото</div>
                      )}
                    </div>
                    <h3 className="font-bold text-xs">{item.name}</h3>
                    {item.brand && <div className="text-xs text-blue-400">{item.brand}</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 bg-white/5">
                <td className="p-3 font-bold">Цена</td>
                {compareItems.map((item) => {
                  const product = mockProducts.find(p => p.id === item.id);
                  const price = product?.price || item.price;
                  return (
                    <td key={item.id} className="p-3 text-center">
                      <div className="text-xl font-bold">{formatPrice(price)}</div>
                      <button
                        onClick={() => {
                          const fullProduct = mockProducts.find(p => p.id === item.id);
                          if (fullProduct) addToCart(fullProduct, 1);
                        }}
                        className="mt-2 px-3 py-1 bg-blue-600 rounded-lg text-xs"
                      >
                        <ShoppingCart size={12} className="inline mr-1" />
                        В корзину
                      </button>
                    </td>
                  );
                })}
              </tr>
              {allSpecs.map((specKey) => (
                <tr key={specKey} className="border-b border-white/5">
                  <td className="p-3 font-bold">{specKey}</td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-3 text-center">
                      {getSpecValue(item, specKey)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}