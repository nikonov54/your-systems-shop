// app/components/ProductCard.tsx
'use client';

import Link from 'next/link';
import { ShoppingCart, GitCompare, Minus, Plus } from 'lucide-react';
import { useStore } from '@/app/context/StoreContext';
import { useToast } from './Toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand?: string;
  sku: string;
  inStock: boolean;
  href: string;
  isNew?: boolean;
  isHit?: boolean;
  category: string;
  subcategory: string;
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  brand,
  sku,
  inStock,
  href,
  isNew,
  isHit,
  category,
  subcategory,
}: ProductCardProps) {
  const { cartItems, addToCart, updateQuantity, isInCompare, addToCompare, removeFromCompare } = useStore();
  const { showToast, ToastComponent } = useToast();
  
  if (price === undefined || price === null) return null;

  const cartItem = cartItems.find(item => item.product.id === id);
  const quantity = cartItem?.quantity || 0;

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inStock) {
      addToCart({
        id,
        name,
        price,
        oldPrice,
        image,
        brand: brand || '',
        sku,
        inStock,
        category,
        subcategory,
      }, 1);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inStock) {
      addToCart({
        id,
        name,
        price,
        oldPrice,
        image,
        brand: brand || '',
        sku,
        inStock,
        category,
        subcategory,
      }, 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
      if (val === 0) {
        updateQuantity(id, 0);
      } else {
        updateQuantity(id, val);
      }
    }
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCompare(id)) {
      removeFromCompare(id);
    } else {
      // Передаём showToast, чтобы при добавлении появилось уведомление
      addToCompare({
        id,
        name,
        price,
        oldPrice,
        image,
        brand: brand || '',
        sku,
        inStock,
        category,
        subcategory,
        specs: {},
      }, showToast);
    }
  };

  return (
    <div className="group relative bg-[#0a0c10] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-1">
      <Link href={href} className="block">
        <div className="relative aspect-square bg-gradient-to-br from-[#0f1217] to-[#05070a] overflow-hidden">
          <div className="absolute top-3 left-3 z-10 flex gap-2">
            {isNew && <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg">Новинка</span>}
            {isHit && <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-lg">Хит</span>}
            {discount > 0 && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg">-{discount}%</span>}
          </div>
          <div className="w-full h-full flex items-center justify-center p-6">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="text-white/10">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-center mt-2">Нет фото</p>
              </div>
            )}
          </div>
          {!inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-sm px-3 py-1 bg-red-600/80 rounded-full">Нет в наличии</span>
            </div>
          )}
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            {brand && <span className="text-[10px] text-white/40 font-mono">{brand}</span>}
            <span className="text-[10px] text-white/30 font-mono">Арт. {sku}</span>
          </div>
          <h3 className="text-white font-bold text-base leading-tight line-clamp-2 min-h-[48px] group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <div className="space-y-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-black text-white">{price.toLocaleString('ru-RU')} ₽</span>
              {oldPrice && <span className="text-sm text-white/40 line-through">{oldPrice.toLocaleString('ru-RU')} ₽</span>}
            </div>
            <div className="text-[10px] text-white/30">Цена за 1 шт</div>
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5 pt-0">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {quantity === 0 ? (
              <button
                onClick={handleAddToCart}
                disabled={!inStock}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] active:scale-95'
                    : 'bg-white/5 text-white/30 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={16} />
                <span>{inStock ? 'В корзину' : 'Нет в наличии'}</span>
              </button>
            ) : (
              <div className="flex-1 flex items-center justify-between bg-white/10 rounded-xl">
                <button
                  onClick={handleDecrement}
                  disabled={!inStock}
                  className="w-10 py-3 flex items-center justify-center text-white hover:text-blue-400 transition-colors disabled:opacity-30"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onFocus={(e) => e.stopPropagation()}
                  className="w-12 text-center bg-transparent text-white font-bold text-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={handleIncrement}
                  disabled={!inStock}
                  className="w-10 py-3 flex items-center justify-center text-white hover:text-blue-400 transition-colors disabled:opacity-30"
                >
                  <Plus size={16} />
                </button>
              </div>
            )}

            <button
              onClick={handleCompare}
              className={`px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-1 border ${
                isInCompare(id)
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400 hover:bg-blue-600/30'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10'
              }`}
              title={isInCompare(id) ? 'Убрать из сравнения' : 'Добавить к сравнению'}
            >
              <GitCompare size={16} />
            </button>
          </div>

          {quantity > 0 && (
            <Link
              href="/cart"
              className="text-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Перейти в корзину →
            </Link>
          )}
        </div>
      </div>
      {ToastComponent}
    </div>
  );
}