// app/lib/data/setevoe-oborudovanie/switches.ts
import { Product } from '../types';

export const switches: Product[] = [
  {
    id: 'komm-001',
    name: 'Коммутатор уличный Mastermann MM4GPoE-2SFP',
    price: 63500,
    image: '/images/setevoe-oborudovanie/switches/mm4gpoe-2sfp.jpg',
    brand: 'Mastermann',
    sku: '00-01024685',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'switches',
    description: 'Промышленный управляемый коммутатор. Корпус из композитного материала.',
    specs: {
      'Кол-во портов PoE': '4 x 30 Вт',
      'Кол-во портов SFP': '2',
      'Управляемый': 'Да',
      'Материал': 'Композит',
      'Защита IP': 'IP66',
      'Ударопрочность': 'IK10',
      'Размер': '334х417х200 мм'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/mastermann-mm4gpoe-2sfp-pasport.pdf' },
      { name: 'Декларация соответствия', url: '/docs/mastermann-switches-declaration.pdf' },
      { name: 'Сертификат соответствия', url: '/docs/mastermann-switches-certificate.pdf' }
    ]
  },
  {
    id: 'komm-002',
    name: 'Коммутатор уличный Mastermann MM8GPoE-2SFP',
    price: 68900,
    image: '/images/setevoe-oborudovanie/switches/mm8gpoe-2sfp.jpg',
    brand: 'Mastermann',
    sku: '00-01024687',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'switches',
    description: 'Промышленный управляемый коммутатор на 8 портов PoE.',
    specs: {
      'Кол-во портов PoE': '8 x 30 Вт',
      'Кол-во портов SFP': '2',
      'Управляемый': 'Да',
      'Материал': 'Композит',
      'Защита IP': 'IP66',
      'Ударопрочность': 'IK10',
      'Размер': '334х417х200 мм'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/mastermann-mm8gpoe-2sfp-pasport.pdf' },
      { name: 'Декларация соответствия', url: '/docs/mastermann-switches-declaration.pdf' },
      { name: 'Сертификат соответствия', url: '/docs/mastermann-switches-certificate.pdf' }
    ]
  },
  {
    id: 'komm-003',
    name: 'Коммутатор уличный Mastermann MM4GPoE-2SFP-UPS',
    price: 83700,
    image: '/images/setevoe-oborudovanie/switches/mm4gpoe-2sfp-ups.jpg',
    brand: 'Mastermann',
    sku: '00-01024686',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'switches',
    description: 'Промышленный управляемый коммутатор с бесперебойным питанием.',
    specs: {
      'Кол-во портов PoE': '4 x 30 Вт',
      'Кол-во портов SFP': '2',
      'Управляемый': 'Да',
      'Материал': 'Композит',
      'Защита IP': 'IP66',
      'Ударопрочность': 'IK10',
      'Питание': '2 источника + UPS',
      'Размер': '334х417х200 мм'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/mastermann-mm4gpoe-2sfp-ups-pasport.pdf' },
      { name: 'Декларация соответствия', url: '/docs/mastermann-switches-declaration.pdf' },
      { name: 'Сертификат соответствия', url: '/docs/mastermann-switches-certificate.pdf' }
    ]
  },
  {
    id: 'komm-004',
    name: 'Коммутатор уличный Mastermann MM8GPoE-2SFP-UPS',
    price: 92700,
    image: '/images/setevoe-oborudovanie/switches/mm8gpoe-2sfp-ups.jpg',
    brand: 'Mastermann',
    sku: '00-01024576',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'switches',
    description: 'Промышленный управляемый коммутатор на 8 портов PoE с бесперебойным питанием.',
    specs: {
      'Кол-во портов PoE': '8 x 30 Вт',
      'Кол-во портов SFP': '2',
      'Управляемый': 'Да',
      'Материал': 'Композит',
      'Защита IP': 'IP66',
      'Ударопрочность': 'IK10',
      'Питание': '2 источника + UPS',
      'Размер': '334х417х200 мм'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/mastermann-mm8gpoe-2sfp-ups-pasport.pdf' },
      { name: 'Декларация соответствия', url: '/docs/mastermann-switches-declaration.pdf' },
      { name: 'Сертификат соответствия', url: '/docs/mastermann-switches-certificate.pdf' }
    ]
  }
];