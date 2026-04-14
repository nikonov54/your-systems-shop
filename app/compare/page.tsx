'use client';

import { useStore } from '@/app/context/StoreContext';
import Link from 'next/link';
import { ShieldCheck, X, Trash2 } from 'lucide-react';

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare } = useStore();

  const allSpecKeys = Array.from(new Set(compareItems.flatMap(item => Object.keys(item.specs || {})))).sort();

  const isDifferent = (key: string, value: string, index: number) => {
    const values = compareItems.map(item => item.specs?.[key] || '—');
    return values.some(v => v !== values[0]);
  };

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <header className="bg-[#05070a] border-b border-white/5">
          <div className="container mx-auto px-6 h-20 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl"><ShieldCheck size={28} /></div>
              <span className="text-2xl font-black">Your<span className="text-blue-500">Systems</span></span>
            </Link>
          </div>
        </header>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Нет товаров для сравнения</h1>
          <Link href="/" className="text-blue-500 hover:underline">Вернуться на главную</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <header className="bg-[#05070a] border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl"><ShieldCheck size={28} /></div>
            <span className="text-2xl font-black">Your<span className="text-blue-500">Systems</span></span>
          </Link>
          <button onClick={clearCompare} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <Trash2 size={18} /> <span>Очистить всё</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Сравнение товаров</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-white/5 border border-white/10 w-48">Характеристики</th>
                {compareItems.map(item => (
                  <th key={item.id} className="p-4 bg-white/5 border border-white/10 min-w-[250px]">
                    <div className="relative">
                      <button onClick={() => removeFromCompare(item.id)} className="absolute -top-2 -right-2 p-1 bg-red-600 rounded-full hover:bg-red-700">
                        <X size={14} />
                      </button>
                      <div className="w-32 h-32 mx-auto mb-3 bg-[#0f1217] rounded-lg flex items-center justify-center overflow-hidden">
                        {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" /> : <div className="text-white/20">Нет фото</div>}
                      </div>
                      <h3 className="font-bold text-center">{item.name}</h3>
                      <p className="text-blue-500 text-center mt-2">{item.price.toLocaleString('ru-RU')} ₽</p>
                      <Link href={`/product/${item.id}`} className="block text-center mt-3 text-sm text-white/60 hover:text-white">Подробнее</Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-white/10 font-medium bg-white/5">Бренд</td>
                {compareItems.map(item => <td key={item.id} className="p-4 border border-white/10 text-center">{item.brand || '—'}</td>)}
              </tr>
              {allSpecKeys.map(key => {
                const hasDifference = isDifferent(key, '', 0);
                return (
                  <tr key={key}>
                    <td className="p-4 border border-white/10 font-medium bg-white/5">{key}</td>
                    {compareItems.map((item, idx) => {
                      const value = item.specs?.[key] || '—';
                      const different = isDifferent(key, value, idx);
                      return (
                        <td key={item.id} className={`p-4 border border-white/10 text-center transition-colors ${different ? 'bg-yellow-500/10 text-yellow-300' : ''}`}>
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}