'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ShoppingCart, 
  CheckCircle, 
  XCircle, 
  Minus, 
  Plus,
  Download,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { mockProducts } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'docs' | 'similar'>('specs');
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  
  const product = mockProducts.find(p => p.id === id);
  
  const similarProducts = mockProducts
    .filter(p => p.id !== id && p.subcategory === product?.subcategory)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#020408] text-white">
        <header className="relative z-50 bg-[#05070a] border-b border-white/5">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl"><ShieldCheck size={28} /></div>
              <span className="text-2xl font-black">Your<span className="text-blue-500">Systems</span></span>
            </Link>
          </div>
        </header>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
          <Link href="/" className="text-blue-500 hover:underline">Вернуться на главную</Link>
        </div>
      </div>
    );
  }

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const categorySlug = product.category;
  
  // Определяем название вкладки в навигации
  const getCategoryTabName = () => {
    if (categorySlug === 'videonablyudenie') return 'Камеры';
    if (categorySlug === 'teplovizory') return 'Тепловизоры';
    if (categorySlug === 'skud') return 'СКУД';
    return 'Каталог';
  };

  // Ссылка на подкатегорию (для хлебных крошек)
  const getCategoryLink = () => {
    if (categorySlug === 'videonablyudenie') return '/catalog/videonablyudenie/камеры';
    if (categorySlug === 'teplovizory') return '/catalog/teplovizory/камеры-тепловизионные';
    return `/catalog/${categorySlug}`;
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <header className="relative z-50 bg-[#05070a] border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col items-center leading-none">
              <span className="text-2xl font-black uppercase">Your<span className="text-blue-500">Systems</span></span>
              <span className="text-[9px] font-bold tracking-[0.3em] mt-1 opacity-80 uppercase">Security Solutions</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Хлебные крошки */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <Link href="/" className="hover:text-white/60">Главная</Link>
          <span>/</span>
          <Link href={getCategoryLink()} className="hover:text-white/60">
            {getCategoryTabName()}
          </Link>
          <span>/</span>
          <span className="text-white/80 line-clamp-1">{product.name}</span>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Основная секция: изображение + информация */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Изображение и миниатюры */}
            <div>
              <div className="bg-[#0f1217] rounded-2xl border border-white/10 p-6 flex items-center justify-center h-[320px]">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-white/20 text-center">
                    <svg className="w-24 h-24 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Изображение отсутствует</p>
                  </div>
                )}
              </div>
              {/* Миниатюры дополнительных фото */}
              {product.images && product.images.length > 0 && (
                <div className="flex gap-2 mt-3">
                  {product.images.map((img, idx) => (
                    <div key={idx} className="w-16 h-16 bg-[#0f1217] rounded-lg border border-white/10 overflow-hidden cursor-pointer hover:border-blue-500 transition-colors">
                      {img && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Информация о товаре */}
            <div>
              {/* Метки */}
              <div className="flex gap-2 mb-3">
                {product.isNew && (
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Новинка
                  </span>
                )}
                {product.isHit && (
                  <span className="bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Хит
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Артикул */}
              <div className="text-white/40 text-xs mb-1 font-mono">
                Арт. {product.sku}
              </div>

              {/* Название */}
              <h1 className="text-2xl font-black mb-2 leading-tight">
                {product.name}
              </h1>

              {/* Бренд */}
              {product.brand && (
                <div className="text-white/50 text-xs mb-3">
                  Бренд: <span className="text-white/80">{product.brand}</span>
                </div>
              )}

              {/* Описание с кнопкой "Читать далее" */}
              {product.description && (
                <div className="mb-4">
                  <div className={`text-white/60 text-sm leading-relaxed ${!descriptionExpanded && 'line-clamp-2'}`}>
                    {product.description}
                  </div>
                  <button
                    onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                    className="flex items-center gap-1 text-blue-500 text-xs mt-1 hover:text-blue-400 transition-colors"
                  >
                    {descriptionExpanded ? (
                      <>Свернуть <ChevronUp size={14} /></>
                    ) : (
                      <>Читать далее <ChevronDown size={14} /></>
                    )}
                  </button>
                </div>
              )}

              {/* Цена и наличие */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl font-black text-white">
                    {(product.price * quantity).toLocaleString('ru-RU')} ₽
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-white/40 line-through">
                      {(product.oldPrice * quantity).toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                </div>
                {product.oldPrice && (
                  <div className="text-green-500 text-xs mt-0.5">
                    Экономия {((product.oldPrice - product.price) * quantity).toLocaleString('ru-RU')} ₽
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                {product.inStock ? (
                  <>
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-green-500 text-sm font-medium">В наличии</span>
                  </>
                ) : (
                  <>
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-red-500 text-sm font-medium">Нет в наличии</span>
                  </>
                )}
              </div>

              {/* Количество и кнопка */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-white/60 text-sm">Количество:</span>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg border border-white/10">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-white/10 transition-colors rounded-l-lg"
                    >
                      <Minus size={14} />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val >= 1) setQuantity(val);
                      }}
                      className="w-12 text-center bg-transparent outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-white/10 transition-colors rounded-r-lg"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-[0_5px_15px_rgba(37,99,235,0.3)]'
                      : 'bg-white/5 text-white/30 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                  onClick={() => console.log('Добавлено в корзину:', product.id, 'Количество:', quantity)}
                >
                  <ShoppingCart size={18} />
                  {product.inStock ? 'В корзину' : 'Нет в наличии'}
                </button>
              </div>
            </div>
          </div>

          {/* Вкладки */}
          <div className="mt-8">
            <div className="flex gap-6 border-b border-white/10">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === 'specs'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                Технические характеристики
              </button>
              <button
                onClick={() => setActiveTab('docs')}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === 'docs'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                Документы
              </button>
              <button
                onClick={() => setActiveTab('similar')}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === 'similar'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                Похожие товары
              </button>
            </div>

            <div className="py-5">
              {/* Вкладка: Технические характеристики */}
              {activeTab === 'specs' && product.specs && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/50 text-sm">{key}</span>
                      <span className="text-white/80 text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Вкладка: Документы */}
              {activeTab === 'docs' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <FileText size={20} className="text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Руководство по эксплуатации</p>
                      <p className="text-xs text-white/40">PDF, 2.5 МБ</p>
                    </div>
                    <Download size={16} className="text-white/40" />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <FileText size={20} className="text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Сертификат соответствия</p>
                      <p className="text-xs text-white/40">PDF, 1.2 МБ</p>
                    </div>
                    <Download size={16} className="text-white/40" />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <FileText size={20} className="text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Краткое руководство</p>
                      <p className="text-xs text-white/40">PDF, 0.8 МБ</p>
                    </div>
                    <Download size={16} className="text-white/40" />
                  </div>
                </div>
              )}

              {/* Вкладка: Похожие товары */}
              {activeTab === 'similar' && (
                similarProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {similarProducts.map((similarProduct) => (
                      <ProductCard
                        key={similarProduct.id}
                        id={similarProduct.id}
                        name={similarProduct.name}
                        price={similarProduct.price}
                        oldPrice={similarProduct.oldPrice}
                        image={similarProduct.image}
                        brand={similarProduct.brand}
                        sku={similarProduct.sku}
                        inStock={similarProduct.inStock}
                        href={`/product/${similarProduct.id}`}
                        isNew={similarProduct.isNew}
                        isHit={similarProduct.isHit}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-white/40 text-sm">
                    Нет похожих товаров
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}