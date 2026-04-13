'use client';

import Link from 'next/link';

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
  isHit
}: ProductCardProps) {
  if (price === undefined || price === null) return null;

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <div className="group relative bg-[#0a0c10] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-1">
      <Link href={href} className="block">
        {/* Метки */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {isNew && (
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
              Новинка
            </span>
          )}
          {isHit && (
            <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
              Хит
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -{discount}%
            </span>
          )}
        </div>

        {/* Изображение */}
        <div className="relative aspect-square bg-gradient-to-br from-[#0f1217] to-[#05070a] overflow-hidden">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/10">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {!inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-sm px-3 py-1 bg-red-600/80 rounded-full">
                Нет в наличии
              </span>
            </div>
          )}
        </div>

        {/* Информация */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            {brand && (
              <span className="text-[10px] text-white/40 font-mono">
                {brand}
              </span>
            )}
            <span className="text-[10px] text-white/30 font-mono">
              Арт. {sku}
            </span>
          </div>

          <h3 className="text-white font-bold text-base leading-tight line-clamp-2 min-h-[48px] group-hover:text-blue-400 transition-colors">
            {name}
          </h3>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-black text-white">
                {price.toLocaleString('ru-RU')} ₽
              </span>
              {oldPrice && (
                <span className="text-sm text-white/40 line-through">
                  {oldPrice.toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>
            <div className="text-[10px] text-white/30">
              {price <= 10000 ? 'Цена за 1 шт' : 'Цена указана за 1 шт'}
            </div>
          </div>

          <button
            className={`w-full mt-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-[0_5px_15px_rgba(37,99,235,0.2)]'
                : 'bg-white/5 text-white/30 cursor-not-allowed'
            }`}
            disabled={!inStock}
            onClick={(e) => {
              e.preventDefault();
              if (inStock) {
                console.log('Добавлено в корзину:', id);
              }
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M18 13l1.5 6M9 21h6M12 18v3" />
            </svg>
            {inStock ? 'В корзину' : 'Нет в наличии'}
          </button>
        </div>
      </Link>
    </div>
  );
}