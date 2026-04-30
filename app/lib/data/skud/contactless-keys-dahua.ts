// app/lib/data/skud/contactless-keys-dahua.ts
import type { Product } from '@/app/context/StoreContext';

export const dahuaContactlessKeys: Product[] = [
  // Товар 1: YX-4CM
  {
    id: 'yx-4cm',
    name: 'Mifare-брелок Dahua YX-4CM (13.56 МГц, лого)',
    price: 190,
    image: '/images/skud/contactless-keys/dahua-yx-4cm.jpg',
    brand: 'Dahua',
    sku: 'YX-4CM',
    inStock: true,
    category: 'skud',
    subcategory: 'contactless-keys',
    description:
      'Mifare-брелок с логотипом Dahua. Mifare 1K, 13.56 МГц. Размеры 40×40 мм.',
    specs: {
      'Тип': 'Брелок',
      'Чип': 'Mifare 1K',
      'Частота': '13.56 МГц',
      'Размеры': '40×40 мм',
      'Гарантия': '24 месяца'
    },
    docs: []
  },
  // Товар 2: IC-S50
  {
    id: 'ic-s50',
    name: 'Карта доступа Dahua IC-S50 (Mifare 1K, белая)',
    price: 290,
    image: '/images/skud/contactless-keys/dahua-ic-s50.jpg',
    brand: 'Dahua',
    sku: 'IC-S50',
    inStock: true,
    category: 'skud',
    subcategory: 'contactless-keys',
    description:
      'Белая пластиковая карта доступа. Mifare 1K Philips, 13.56 МГц.',
    specs: {
      'Тип': 'Карта',
      'Чип': 'Mifare 1K (Philips)',
      'Частота': '13.56 МГц',
      'Цвет': 'Белый',
      'Гарантия': '24 месяца'
    },
    docs: []
  },
  // Товар 3: IC-SM
  {
    id: 'ic-sm',
    name: 'Mifare-брелок доступа Dahua IC-SM (13.56 МГц)',
    price: 190,
    image: '/images/skud/contactless-keys/dahua-ic-sm.jpg',
    brand: 'Dahua',
    sku: 'IC-SM',
    inStock: true,
    category: 'skud',
    subcategory: 'contactless-keys',
    description:
      'Mifare-брелок доступа. Mifare 1K, 13.56 МГц. Размеры 30×40 мм.',
    specs: {
      'Тип': 'Брелок',
      'Чип': 'Mifare 1K',
      'Частота': '13.56 МГц',
      'Размеры': '30×40 мм',
      'Гарантия': '24 месяца'
    },
    docs: []
  },
  // Товар 4: ID-EM
  {
    id: 'id-em',
    name: 'Карта доступа Dahua ID-EM (EM-Marin, белая)',
    price: 190,
    image: '/images/skud/contactless-keys/dahua-id-em.jpg',
    brand: 'Dahua',
    sku: 'ID-EM',
    inStock: true,
    category: 'skud',
    subcategory: 'contactless-keys',
    description:
      'Белая пластиковая карта доступа. EM-Marin, 125 кГц. Для считывателей с индексом "-D".',
    specs: {
      'Тип': 'Карта',
      'Чип': 'EM-Marin',
      'Частота': '125 кГц',
      'Цвет': 'Белый',
      'Гарантия': '24 месяца'
    },
    docs: []
  },
  // Товар 5: ID-SM
  {
    id: 'id-sm',
    name: 'EM-Marin-брелок доступа Dahua ID-SM (125 кГц)',
    price: 190,
    image: '/images/skud/contactless-keys/dahua-id-sm.jpg',
    brand: 'Dahua',
    sku: 'ID-SM',
    inStock: true,
    category: 'skud',
    subcategory: 'contactless-keys',
    description:
      'EM-Marin-брелок доступа. EM-Marin, 125 кГц. Для считывателей с индексом "-D". Размеры 30×40 мм.',
    specs: {
      'Тип': 'Брелок',
      'Чип': 'EM-Marin',
      'Частота': '125 кГц',
      'Размеры': '30×40 мм',
      'Гарантия': '24 месяца'
    },
    docs: []
  }
];