'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Scale, Check, Truck, Shield, Clock, ArrowLeft as ArrowLeftIcon, Download, FileText } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { mockProducts } from '../../lib/products';
import Header from '@/app/components/Header';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = params.id as string;
  
  const { addToCart, addToCompare, removeFromCompare, isInCompare } = useStore();
  
  const product = mockProducts.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'download'>('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Получаем сохранённую позицию прокрутки из URL
  const fromScroll = searchParams.get('fromScroll');
  
  if (!product) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link href="/" className="text-blue-500 hover:underline">Вернуться на главную</Link>
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
  
  const images = product.image ? [product.image] : [];
  
  const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1) {
      setQuantity(val);
    } else if (e.target.value === '') {
      setQuantity(1);
    }
  };
  
  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product, quantity);
      router.push('/cart');
    }
  };
  
  // Формируем URL для кнопки "Назад", передавая параметр прокрутки
  const backUrl = `/catalog/${product.category}/${product.subcategory}${fromScroll ? `?scroll=${fromScroll}` : ''}`;
  
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <Link href={backUrl} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowLeftIcon size={14} />
            Назад в каталог
          </Link>
        </div>
        
        {/* остальная часть страницы товара без изменений */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: '400px' }}>
            {images[selectedImage] ? (
              <Image
                src={images[selectedImage]}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain w-full h-full"
                priority
              />
            ) : (
              <div className="text-slate-500 text-center p-4">Нет изображения</div>
            )}
          </div>
          
          <div className="space-y-5">
            {product.brand && <div className="text-sm text-blue-400 font-bold">{product.brand}</div>}
            <h1 className="text-3xl md:text-4xl font-black">{product.name}</h1>
            <div className="flex items-center gap-3">
              <div className={product.inStock ? 'text-green-400' : 'text-red-400'}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </div>
              {product.sku && <div className="text-sm text-slate-500">Арт. {product.sku}</div>}
            </div>
            <div className="text-3xl font-bold text-blue-500">{formatPrice(product.price)}</div>
            {product.oldPrice && <div className="text-sm text-slate-500 line-through">{formatPrice(product.oldPrice)}</div>}
            
            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl transition-all"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-16 text-center bg-transparent border-0 focus:outline-none text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl transition-all"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
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
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm">
                <Truck size={18} className="text-blue-400" />
                <span>Бесплатная доставка</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield size={18} className="text-blue-400" />
                <span>Сервисное обслуживание</span>
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
        
        {/* Табы и другое содержимое страницы товара остаётся без изменений */}
        <div className="mt-8">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'description' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'specs' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              Характеристики
            </button>
            <button
              onClick={() => setActiveTab('download')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'download' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              Скачать
            </button>
          </div>
          
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed">
                  {product.description || 'Описание временно отсутствует.'}
                </p>
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div className="overflow-x-auto">
                {product.specs && Object.keys(product.specs).length > 0 ? (
                  <table className="w-full border-collapse">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-white/5' : ''}>
                          <td className="px-6 py-4 font-bold text-slate-300 w-1/3">{key}</td>
                          <td className="px-6 py-4 text-white">{String(value)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-slate-400">Технические характеристики временно отсутствуют.</p>
                )}
              </div>
            )}
            
            {activeTab === 'download' && (
              <div className="space-y-4">
                <p className="text-slate-300 mb-4">Скачайте техническую документацию и сертификаты:</p>
                <div className="flex flex-col gap-3">
                  {product.docs && product.docs.length > 0 ? (
                    product.docs.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FileText size={18} />
                        <span>{doc.name}</span>
                        <Download size={16} className="ml-auto" />
                      </a>
                    ))
                  ) : (
                    <p className="text-slate-400">Документы временно отсутствуют.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <div className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                    <div className="relative aspect-square bg-slate-900 flex items-center justify-center">
                      {relatedProduct.image ? (
                        <Image src={relatedProduct.image} alt={relatedProduct.name} width={200} height={200} className="object-contain p-4" />
                      ) : (
                        <div className="text-slate-500 text-sm p-4">Нет фото</div>
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