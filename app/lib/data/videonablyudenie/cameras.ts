// app/lib/data/videonablyudenie/cameras.ts
import { Product } from '../types';

export const cameras: Product[] = [
  {
    id: '1',
    name: 'IP-камера Hikvision DS-2CD2347G2-LU',
    price: 12500,
    oldPrice: 15900,
    image: '/images/videonablyudenie/cameras/ds-2cd2347g2-lu.jpg',
    brand: 'Hikvision',
    sku: 'DS-2CD2347G2-LU',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'cameras',
    isHit: true,
    description: '4 Mp kamera s Full-time cvetnym izobrazheniem.',
    specs: {}
  },
  {
    id: '7',
    name: 'Kupolnaya IP-kamera 8K Dahua SD8C845FG-HNF',
    price: 58900,
    oldPrice: 74900,
    image: '/images/videonablyudenie/cameras/sd8c845fg-hnf.jpg',
    brand: 'Dahua',
    sku: 'SD8C845FG-HNF',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'cameras',
    isNew: true,
    isHit: true,
    description: 'Premium kupolnaya kamera 8K.',
    specs: {}
  }
];