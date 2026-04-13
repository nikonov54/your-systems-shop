// app/lib/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand: string;
  sku: string;
  inStock: boolean;
  category: string;
  subcategory: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'IP-камера Hikvision DS-2CD2347G2-LU',
    price: 12500,
    oldPrice: 15900,
    image: '',
    brand: 'Hikvision',
    sku: 'DS-2CD2347G2-LU',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'камеры'
  },
  {
    id: '2',
    name: 'Регистратор Hikvision DS-7608NXI-K2/8P',
    price: 28900,
    image: '',
    brand: 'Hikvision',
    sku: 'DS-7608NXI-K2/8P',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'регистраторы'
  },
  {
    id: '3',
    name: 'Тепловизор Guide Sensmart PC230',
    price: 45000,
    oldPrice: 52000,
    image: '',
    brand: 'Guide Sensmart',
    sku: 'PC230',
    inStock: true,
    category: 'teplovizory',
    subcategory: 'камеры-тепловизионные'
  },
  {
    id: '4',
    name: 'Считыватель Hikvision DS-K1102M',
    price: 3200,
    image: '',
    brand: 'Hikvision',
    sku: 'DS-K1102M',
    inStock: false,
    category: 'skud',
    subcategory: 'считыватели'
  },
  {
    id: '5',
    name: 'Контроллер СКУД Hikvision DS-K2601',
    price: 18700,
    image: '',
    brand: 'Hikvision',
    sku: 'DS-K2601',
    inStock: true,
    category: 'skud',
    subcategory: 'контроллеры'
  },
  {
    id: '6',
    name: 'Бесконтактный ключ Mifare 1k',
    price: 45,
    image: '',
    brand: 'ATIX',
    sku: 'MIF-1K',
    inStock: true,
    category: 'skud',
    subcategory: 'бесконтактные-ключи'
  }
];