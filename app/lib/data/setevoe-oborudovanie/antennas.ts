import type { Product } from '@/app/context/StoreContext';

export const antennas: Product[] = [
  // 1. A-300LTE
  {
    id: 'ant-001',
    name: 'Антенна Micro-Drive A-300LTE',
    price: 648,
    image: '/images/setevoe-oborudovanie/antennas/microdrive-a-300lte-antenna.jpg',
    brand: 'Micro-Drive',
    sku: 'A-300LTE',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'antennas',
    description: 'Всенаправленная антенна для усиления сигнала 4G/LTE. Рабочий диапазон 780-2700 МГц, усиление 5.5 dBi. Подходит для роутеров Micro-Drive и других устройств с разъёмом SMA.',
    specs: {
      'Диапазон частот': '780-2700 МГц',
      'Усиление': '5.5 dBi',
      'Входное сопротивление': '50 Ом',
      'Поляризация': 'вертикальная',
      'Разъем': 'SMA',
      'Длина кабеля': 'встроенная',
      'Рабочая температура': '-40…+60 °C'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-antennas.pdf' }
    ]
  },
  // 2. A-500LTE
  {
    id: 'ant-002',
    name: 'Антенна Micro-Drive A-500LTE',
    price: 446,
    image: '/images/setevoe-oborudovanie/antennas/microdrive-a-500lte-antenna.jpg',
    brand: 'Micro-Drive',
    sku: 'A-500LTE',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'antennas',
    description: 'Всенаправленная антенна с усилением 7 dBi для 4G/LTE. Обеспечивает стабильный приём в условиях слабого сигнала.',
    specs: {
      'Диапазон частот': '780-2700 МГц',
      'Усиление': '7 dBi',
      'Входное сопротивление': '50 Ом',
      'Поляризация': 'вертикальная',
      'Разъем': 'SMA',
      'Длина кабеля': 'встроенная',
      'Рабочая температура': '-40…+60 °C'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-antennas.pdf' }
    ]
  },
  // 3. A-600LTE
  {
    id: 'ant-003',
    name: 'Антенна Micro-Drive A-600LTE',
    price: 1276,
    image: '/images/setevoe-oborudovanie/antennas/microdrive-a-600lte-antenna.jpg',
    brand: 'Micro-Drive',
    sku: 'A-600LTE',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'antennas',
    description: 'Высокоэффективная всенаправленная антенна 4G/LTE с усилением 9 dBi. Максимальная дальность приёма.',
    specs: {
      'Диапазон частот': '780-2700 МГц',
      'Усиление': '9 dBi',
      'Входное сопротивление': '50 Ом',
      'Поляризация': 'вертикальная',
      'Разъем': 'SMA',
      'Длина кабеля': 'встроенная',
      'Рабочая температура': '-40…+60 °C'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-antennas.pdf' }
    ]
  }
];