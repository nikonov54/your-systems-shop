// app/product/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Scale, Check, Truck, Shield, Clock, ArrowLeft as ArrowLeftIcon } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { mockProducts } from '../../lib/products';
import Header from '@/app/components/Header';

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  
  const { addToCart, addToCompare, removeFromCompare, isInCompare } = useStore();
  
  const product = mockProducts.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }
  
  const isProductInCompare = isInCompare(product.id);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const images = [product.image];
  
  // Похожие товары (из той же категории)
  const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href={`/catalog/${product.category}/${product.subcategory}`} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowLeftIcon size={14} />
            Назад в каталог
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
              {images[selectedImage] && images[selectedImage] ? (
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                  Нет изображения
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              {product.brand && (
                <span className="text-sm text-blue-400 font-bold">{product.brand}</span>
              )}
              <h1 className="text-3xl md:text-4xl font-black mb-4">{product.name}</h1>
              <div className={product.inStock ? 'text-green-400' : 'text-red-400'}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </div>
              <div className="text-3xl font-bold text-blue-500 mt-4">{formatPrice(product.price)}</div>
              {product.oldPrice && (
                <div className="text-sm text-slate-500 line-through">{formatPrice(product.oldPrice)}</div>
              )}
            </div>
            
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl transition-all"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl transition-all"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all disabled:bg-slate-700 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} />
                В корзину
              </button>
              <button
                onClick={() => isProductInCompare ? removeFromCompare(product.id) : addToCompare(product)}
                className={`p-3 rounded-xl transition-all ${isProductInCompare ? 'bg-blue-600' : 'bg-white/5 hover:bg-white/10'}`}
              >
                <Scale size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm">
                <Truck size={18} className="text-blue-400" />
                <span>Бесплатная доставка от 50 000₽</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield size={18} className="text-blue-400" />
                <span>Гарантия 12 месяцев</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={18} className="text-blue-400" />
                <span>Сборка за 24 часа</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check size={18} className="text-blue-400" />
                <span>Официальная гарантия</span>
              </div>
            </div>
          </div>
        </div>
        
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Характеристики</h2>
            <div className="bg-white/5 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-white/5' : ''}>
                      <td className="px-6 py-4 font-bold text-slate-300 w-1/3">{key}</td>
                      <td className="px-6 py-4 text-white">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <div className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                    <div className="relative aspect-square bg-slate-900">
                      {relatedProduct.image ? (
                        <Image src={relatedProduct.image} alt={relatedProduct.name} fill className="object-contain p-4" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                          Нет фото
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2 text-sm">{relatedProduct.name}</h3>
                      <div className="text-blue-400 font-bold">{formatPrice(relatedProduct.price)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}