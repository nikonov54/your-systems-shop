// app/lib/data/setevoe-oborudovanie/poe-injectors.ts
import type { Product } from '@/app/context/StoreContext';

export const poeInjectors: Product[] = [
  // 1. MD101-24V-1A
  {
    id: 'poe-001',
    name: 'PoE инжектор Micro-Drive MD101-24V-1A',
    price: 1121,
    image: '/images/setevoe-oborudovanie/poe-injectors/microdrive-md101-24v-1a-poe-injector.jpg',
    brand: 'Micro-Drive',
    sku: 'MD101-24V-1A',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'accessories',   // ← исправлено и заменено
    description: 'Пассивный PoE инжектор, выходное напряжение 24 В, ток 1 А. Используется для питания устройств по витой паре (контакты 4,5,7,8). Компактный корпус, защита от перегрузки и короткого замыкания.',
    specs: {
      'Напряжение': '24 В DC',
      'Ток': '1 А',
      'Мощность': '24 Вт',
      'Стандарт PoE': 'Passive PoE (контакты 4,5,7,8)',
      'Порты': '2x RJ-45 (IN/OUT)',
      'Корпус': 'пластик, черный',
      'Рабочая температура': '0…+40 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Декларация соответствия', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 2. MD102-48V-0.5A
  {
    id: 'poe-002',
    name: 'PoE инжектор Micro-Drive MD102-48V-0.5A',
    price: 1121,
    image: '/images/setevoe-oborudovanie/poe-injectors/microdrive-md102-48v-0-5a-poe-injector.jpg',
    brand: 'Micro-Drive',
    sku: 'MD102-48V-0.5A',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'accessories',
    description: 'Пассивный PoE инжектор, выходное напряжение 48 В, ток 0.5 А (24 Вт). Предназначен для питания устройств по технологии Passive PoE (контакты 4,5,7,8). Встроенный блок питания, защита от перегрузки.',
    specs: {
      'Напряжение': '48 В DC',
      'Ток': '0.5 А',
      'Мощность': '24 Вт',
      'Стандарт PoE': 'Passive PoE (контакты 4,5,7,8)',
      'Порты': '2x RJ-45 (IN/OUT)',
      'Корпус': 'пластик, черный',
      'Рабочая температура': '0…+40 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Декларация соответствия', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 3. MD1000-48V-0.5A (гигабитный)
  {
    id: 'poe-003',
    name: 'PoE инжектор Micro-Drive MD1000-48V-0.5A гигабитный',
    price: 1121,
    image: '/images/setevoe-oborudovanie/poe-injectors/microdrive-md1000-48v-0-5a-poe-injector.jpg',
    brand: 'Micro-Drive',
    sku: 'MD1000-48V-0.5A',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'accessories',
    description: 'Гигабитный пассивный PoE инжектор, выходное напряжение 48 В, ток 0.5 А (24 Вт). Поддерживает скорость передачи данных до 1000 Мбит/с. Питание подается на контакты 4,5,7,8. Встроенный блок питания, защита от короткого замыкания.',
    specs: {
      'Напряжение': '48 В DC',
      'Ток': '0.5 А',
      'Мощность': '24 Вт',
      'Скорость': '10/100/1000 Мбит/с',
      'Стандарт PoE': 'Passive PoE (контакты 4,5,7,8)',
      'Порты': '2x RJ-45 (IN/OUT)',
      'Корпус': 'пластик, черный',
      'Рабочая температура': '0…+40 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Декларация соответствия', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 4. Mean Well NDR-120-48 (блок питания)
  {
    id: 'poe-004',
    name: 'Блок питания Mean Well NDR-120-48 для PoE',
    price: 0,
    image: '/images/setevoe-oborudovanie/poe-injectors/microdrive-mean-well-ndr-120-48-power-supply.jpg',
    brand: 'Mean Well',
    sku: 'NDR-120-48',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'accessories',
    description: 'Промышленный блок питания Mean Well NDR-120-48, выходное напряжение 48 В, мощность 120 Вт. Устанавливается на DIN-рейку. Используется для питания PoE инжекторов и другого оборудования. Компактный, с защитой от перегрузки и короткого замыкания.',
    specs: {
      'Напряжение': '48 В DC',
      'Мощность': '120 Вт',
      'Ток': '2.5 А',
      'Входное напряжение': '90-264 В AC',
      'КПД': '88%',
      'Монтаж': 'на DIN-рейку',
      'Рабочая температура': '-20…+70 °C',
      'Гарантия': '2 года'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Декларация соответствия', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  }
];

export default poeInjectors;