// app/cart/page.tsx
'use client';

import { useStore } from '@/app/context/StoreContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Header from '@/app/components/Header';
import { useState } from 'react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart, lastCategory, lastSubcategory } = useStore();
  const total = getCartTotal();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<Record<string, string>>({});

  const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(price);

  const handleQuantityBlur = (id: string, currentQuantity: number) => {
    const newVal = tempValue[id];
    if (newVal === undefined) return;
    const num = parseInt(newVal, 10);
    if (!isNaN(num) && num > 0) {
      updateQuantity(id, num);
    }
    setEditingId(null);
    setTempValue(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const continueHref = lastCategory && lastSubcategory ? `/catalog/${lastCategory}/${lastSubcategory}` : '/';

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#020408] text-white relative overflow-hidden">
        {/* Реалистичная 2D тележка (фон) */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
          <svg width="600" height="600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
            {/* Корзина (сетка) */}
            <rect x="100" y="140" width="200" height="130" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M100 160 L300 160 M100 180 L300 180 M100 200 L300 200 M100 220 L300 220 M100 240 L300 240" stroke="currentColor" strokeWidth="0.8"/>
            <path d="M130 140 L130 270 M160 140 L160 270 M190 140 L190 270 M220 140 L220 270 M250 140 L250 270 M280 140 L280 270" stroke="currentColor" strokeWidth="0.8"/>
            
            {/* Ручка тележки */}
            <path d="M120 140 L120 80 C120 50 280 50 280 80 L280 140" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M140 90 L260 90 M150 70 L250 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
            
            {/* Нижняя платформа */}
            <line x1="80" y1="270" x2="320" y2="270" stroke="currentColor" strokeWidth="2"/>
            <path d="M90 270 L90 290 M310 270 L310 290" stroke="currentColor" strokeWidth="1.5"/>
            
            {/* Колёса */}
            <circle cx="110" cy="310" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="110" cy="310" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="110" cy="310" r="3" fill="currentColor"/>
            <line x1="110" y1="285" x2="110" y2="335" stroke="currentColor" strokeWidth="1"/>
            <line x1="85" y1="310" x2="135" y2="310" stroke="currentColor" strokeWidth="1"/>
            
            <circle cx="290" cy="310" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="290" cy="310" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="290" cy="310" r="3" fill="currentColor"/>
            <line x1="290" y1="285" x2="290" y2="335" stroke="currentColor" strokeWidth="1"/>
            <line x1="265" y1="310" x2="315" y2="310" stroke="currentColor" strokeWidth="1"/>
            
            {/* Поворотные механизмы колёс */}
            <rect x="100" y="290" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="280" y="290" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Товары внутри корзины (упрощённые контуры) */}
            <rect x="120" y="150" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="170" y="160" width="35" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="230" cy="190" r="20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="260" y="170" width="30" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Дополнительные детали: наклейка, блики */}
            <path d="M130 105 L170 105" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
            <circle cx="200" cy="105" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <Header />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="inline-flex p-6 bg-white/5 rounded-full mb-8">
            <ShoppingBag size={64} className="text-slate-600" />
          </div>
          <h1 className="text-4xl font-black mb-4">Корзина пуста</h1>
          <p className="text-xl text-slate-400 mb-8">Добавьте товары для оформления заказа</p>
          <Link href="/" className="inline-block px-8 py-3 bg-blue-600 rounded-xl">Перейти в каталог</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020408] text-white relative overflow-hidden">
      {/* Реалистичная 2D тележка (фон) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <svg width="600" height="600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80">
          {/* Корзина (сетка) */}
          <rect x="100" y="140" width="200" height="130" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M100 160 L300 160 M100 180 L300 180 M100 200 L300 200 M100 220 L300 220 M100 240 L300 240" stroke="currentColor" strokeWidth="0.8"/>
          <path d="M130 140 L130 270 M160 140 L160 270 M190 140 L190 270 M220 140 L220 270 M250 140 L250 270 M280 140 L280 270" stroke="currentColor" strokeWidth="0.8"/>
          
          {/* Ручка тележки */}
          <path d="M120 140 L120 80 C120 50 280 50 280 80 L280 140" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M140 90 L260 90 M150 70 L250 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          
          {/* Нижняя платформа */}
          <line x1="80" y1="270" x2="320" y2="270" stroke="currentColor" strokeWidth="2"/>
          <path d="M90 270 L90 290 M310 270 L310 290" stroke="currentColor" strokeWidth="1.5"/>
          
          {/* Колёса */}
          <circle cx="110" cy="310" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="110" cy="310" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="110" cy="310" r="3" fill="currentColor"/>
          <line x1="110" y1="285" x2="110" y2="335" stroke="currentColor" strokeWidth="1"/>
          <line x1="85" y1="310" x2="135" y2="310" stroke="currentColor" strokeWidth="1"/>
          
          <circle cx="290" cy="310" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="290" cy="310" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="290" cy="310" r="3" fill="currentColor"/>
          <line x1="290" y1="285" x2="290" y2="335" stroke="currentColor" strokeWidth="1"/>
          <line x1="265" y1="310" x2="315" y2="310" stroke="currentColor" strokeWidth="1"/>
          
          {/* Поворотные механизмы колёс */}
          <rect x="100" y="290" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="280" y="290" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
          
          {/* Товары внутри корзины */}
          <rect x="120" y="150" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="170" y="160" width="35" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="230" cy="190" r="20" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="260" y="170" width="30" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
          
          {/* Детали */}
          <path d="M130 105 L170 105" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
          <circle cx="200" cy="105" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <Header />
      <div className="container mx-auto px-6 py-8 relative z-10">
        <Link href={continueHref} className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-blue-500 mb-6">
          <ArrowLeft size={14} /> Продолжить покупки
        </Link>

        <h1 className="text-3xl font-black mb-8">Корзина</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="hidden md:grid grid-cols-12 gap-4 text-slate-400 text-sm pb-3 border-b border-white/10 mb-4">
              <div className="col-span-6">Товар</div>
              <div className="col-span-2 text-center">Цена</div>
              <div className="col-span-2 text-center">Количество</div>
              <div className="col-span-2 text-center">Сумма</div>
            </div>

            <div className="space-y-4">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="col-span-12 md:col-span-6 flex gap-4">
                    <div className="w-20 h-20 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
                      {product.image ? (
                        <Image src={product.image} alt={product.name} width={80} height={80} className="object-contain" />
                      ) : (
                        <div className="text-slate-500 text-xs">Нет фото</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <Link href={`/product/${product.id}`} className="font-bold hover:text-blue-400 transition-colors">
                        {product.name}
                      </Link>
                      {product.brand && <div className="text-xs text-blue-400 mt-1">{product.brand}</div>}
                      {product.sku && <div className="text-xs text-slate-500 mt-1">Арт. {product.sku}</div>}
                    </div>
                  </div>

                  <div className="col-span-4 md:col-span-2 text-center md:text-left">
                    <div className="text-white font-bold">{formatPrice(product.price)}</div>
                    {product.oldPrice && <div className="text-xs text-slate-500 line-through">{formatPrice(product.oldPrice)}</div>}
                  </div>

                  <div className="col-span-4 md:col-span-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <input
                      type="number"
                      value={editingId === product.id ? (tempValue[product.id] ?? quantity) : quantity}
                      onChange={(e) => {
                        const val = e.target.value;
                        setTempValue(prev => ({ ...prev, [product.id]: val }));
                        setEditingId(product.id);
                      }}
                      onBlur={() => handleQuantityBlur(product.id, quantity)}
                      className={`w-16 text-center bg-transparent text-white font-bold text-sm outline-none border rounded-lg transition-all ${
                        editingId === product.id ? 'border-blue-500' : 'border-transparent'
                      } [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                    />
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="col-span-4 md:col-span-2 flex items-center justify-between md:justify-center gap-4">
                    <div className="font-bold text-blue-400">{formatPrice(product.price * quantity)}</div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-400 hover:text-red-500 transition-colors"
                      title="Удалить"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={clearCart}
                className="text-sm text-red-400 hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <Trash2 size={14} /> Очистить корзину
              </button>
            </div>
          </div>

          <div className="lg:w-80 bg-white/5 rounded-xl p-6 border border-white/10 h-fit">
            <h2 className="text-xl font-black mb-4">Итого</h2>
            <div className="space-y-2 text-sm border-b border-white/10 pb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Товаров ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} шт.)</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>К оплате:</span>
              <span className="text-blue-400">{formatPrice(total)}</span>
            </div>
            <button className="w-full mt-6 bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Оформить заказ
            </button>
            <p className="text-xs text-slate-500 text-center mt-4">
              Доставка и способы оплаты рассчитываются при оформлении
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}