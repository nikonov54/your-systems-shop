// app/search/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { mockProducts } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import Header from '@/app/components/Header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function normalize(str: string): string {
  return str.toLowerCase().replace(/[\s-]/g, '');
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get('q') || '';
  const query = normalize(rawQuery);

  const filteredProducts = mockProducts.filter((product) => {
    if (normalize(product.name).includes(query)) return true;
    if (normalize(product.brand || '').includes(query)) return true;
    if (normalize(product.sku || '').includes(query)) return true;
    if (normalize(product.description || '').includes(query)) return true;
    if (product.specs) {
      for (const val of Object.values(product.specs)) {
        if (normalize(val as string).includes(query)) return true;
      }
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-blue-500 mb-6">
          <ArrowLeft size={14} /> На главную
        </Link>

        <h1 className="text-2xl font-black mb-2">Результаты поиска</h1>
        {rawQuery && (
          <p className="text-slate-400 mb-8">
            По запросу «<span className="text-white font-bold">{rawQuery}</span>» найдено {filteredProducts.length} товаров
          </p>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-400">Ничего не найдено</p>
            <p className="text-slate-500 mt-2">Попробуйте изменить поисковый запрос</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                image={product.image || '/images/placeholder.jpg'}
                brand={product.brand || ''}
                sku={product.sku || ''}
                inStock={product.inStock ?? true}
                href={`/product/${product.id}`}
                category={product.category}
                subcategory={product.subcategory}
                isNew={false}
                isHit={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}