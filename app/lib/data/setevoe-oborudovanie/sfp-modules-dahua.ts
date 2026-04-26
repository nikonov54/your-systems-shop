// app/lib/data/setevoe-oborudovanie/sfp-modules-dahua.ts
import type { Product } from '@/app/context/StoreContext';

export const dahuaSfpModules: Product[] = [
  // ========== 1. QSFP-850-MMF ==========
  {
    id: 'qsfp-850-mmf',
    name: 'QSFP-модуль Dahua QSFP-850-MMF 40G, 850 нм, 100 м',
    price: 51790,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-qsfp-850-mmf.jpg',
    brand: 'Dahua',
    sku: 'QSFP-850-MMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'QSFP-модуль для передачи данных на скорости 40 Гбит/с по многомодовому волокну (MMF) на расстояние до 100 м. Рабочая длина волны 850 нм. Разъем MPO.',
    specs: {
      'Тип оптического волокна': 'Многомодовое двойное волокно',
      'Тип оптического порта': 'MPO',
      'Скорость': '40 Gbps',
      'Длина волны': '850 нм',
      'Дальность передачи': '100 м',
      'Рабочая температура': '0 … +55 °C',
      'Температура хранения': '–40 … +85 °C',
      'Рабочая влажность': '0%–85% (без конденсата)',
      'Влажность хранения': '0%–85% (без конденсата)',
      'Размеры (Ш×Г×В)': '127 × 18.3 × 8.3 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-qsfp-850-mmf.pdf' }]
  },
  // ========== 2. QSFP-1310-10-SMF ==========
  {
    id: 'qsfp-1310-10-smf',
    name: 'QSFP-модуль Dahua QSFP-1310-10-SMF 40G, 1310 нм, 10 км',
    price: 201490,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-qsfp-1310-10-smf.jpg',
    brand: 'Dahua',
    sku: 'QSFP-1310-10-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'QSFP-модуль для передачи данных на скорости 40 Гбит/с по одномодовому волокну (SMF) на расстояние до 10 км. Рабочая длина волны 1310 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '40 Gbps',
      'Длина волны': '1310 нм',
      'Дальность передачи': '10 км',
      'Рабочая температура': '0 … +55 °C',
      'Температура хранения': '–40 … +85 °C',
      'Рабочая влажность': '0%–85% (без конденсата)',
      'Влажность хранения': '0%–85% (без конденсата)',
      'Размеры (Ш×Г×В)': '120 × 18.35 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-qsfp-1310-10-smf.pdf' }]
  },
  // ========== 3. SFP-850-MMF ==========
  {
    id: 'sfp-850-mmf',
    name: 'SFP-модуль Dahua SFP-850-MMF 100M, 850 нм, 2 км',
    price: 2890,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-sfp-850-mmf.jpg',
    brand: 'Dahua',
    sku: 'SFP-850-MMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP-модуль Fast Ethernet для работы по многомодовому волокну (MMF) на расстояние до 2 км. Скорость 100 Мбит/с, длина волны 850 нм (передача/прием). Разъем LC. Широкий диапазон рабочих температур –40…+85°C.',
    specs: {
      'Тип оптического волокна': 'Многомодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '100 Мбит/с',
      'Длина волны': '850 нм (передача и прием)',
      'Дальность передачи': '2 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–85%',
      'Размеры (Ш×Г×В)': '55.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-sfp-850-mmf.pdf' }]
  },
  // ========== 4. SFP-1310R-20-SMF ==========
  {
    id: 'sfp-1310r-20-smf',
    name: 'SFP-модуль Dahua SFP-1310R-20-SMF 100M, 20 км (1550/1310 нм)',
    price: 4690,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-sfp-1310r-20-smf.jpg',
    brand: 'Dahua',
    sku: 'SFP-1310R-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP-модуль Fast Ethernet для работы по одномодовому волокну (SMF) с одним волокном. Скорость 100 Мбит/с, дальность до 20 км. Передача на 1550 нм, прием на 1310 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое одинарное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '100 Мбит/с',
      'Длина волны (передача)': '1550 нм',
      'Длина волны (прием)': '1310 нм',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '56.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-sfp-1310r-20-smf.pdf' }]
  },
  // ========== 5. SFP-1310T-20-SMF ==========
  {
    id: 'sfp-1310t-20-smf',
    name: 'SFP-модуль Dahua SFP-1310T-20-SMF 100M, 20 км (1310/1550 нм)',
    price: 4690,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-sfp-1310t-20-smf.jpg',
    brand: 'Dahua',
    sku: 'SFP-1310T-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP-модуль Fast Ethernet для работы по одномодовому волокну (SMF) с одним волокном. Скорость 100 Мбит/с, дальность до 20 км. Передача на 1310 нм, прием на 1550 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое одинарное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '100 Мбит/с',
      'Длина волны (передача)': '1310 нм',
      'Длина волны (прием)': '1550 нм',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '56.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-sfp-1310t-20-smf.pdf' }]
  },
  // ========== 6. TSFP-1550-40-SMF ==========
  {
    id: 'tsfp-1550-40-smf',
    name: 'SFP+ модуль Dahua TSFP-1550-40-SMF 10G, 1550 нм, 40 км',
    price: 143890,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-tsfp-1550-40-smf.jpg',
    brand: 'Dahua',
    sku: 'TSFP-1550-40-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP+ модуль для передачи данных на скорости 10 Гбит/с по одномодовому волокну (SMF) на расстояние до 40 км. Рабочая длина волны 1550 нм (передача и прием). Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '10 Гбит/с',
      'Длина волны': '1550 нм (передача и прием)',
      'Дальность передачи': '40 км',
      'Рабочая температура': '–40 … +85 °C',
      'Размеры (Ш×Г×В)': '56.5 × 13.4 × 8.5 мм',
      'Вес': '0.10 кг'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-tsfp-1550-40-smf.pdf' }]
  },
  // ========== 7. TSFP-1270R-20-SMF ==========
  {
    id: 'tsfp-1270r-20-smf',
    name: 'SFP+ модуль Dahua TSFP-1270R-20-SMF 10G, 20 км (1330/1270 нм)',
    price: 29690,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-tsfp-1270r-20-smf.jpg',
    brand: 'Dahua',
    sku: 'TSFP-1270R-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP+ модуль для передачи данных на скорости 10 Гбит/с по одномодовому волокну (SMF) с одним волокном. Дальность до 20 км. Передача на 1330 нм, прием на 1270 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое одинарное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '10 Гбит/с',
      'Длина волны (передача)': '1330 нм',
      'Длина волны (прием)': '1270 нм',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '57.5 × 13.9 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-tsfp-1270r-20-smf.pdf' }]
  },
  // ========== 8. TSFP-1270T-20-SMF ==========
  {
    id: 'tsfp-1270t-20-smf',
    name: 'SFP+ модуль Dahua TSFP-1270T-20-SMF 10G, 20 км (1270/1330 нм)',
    price: 29690,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-tsfp-1270t-20-smf.jpg',
    brand: 'Dahua',
    sku: 'TSFP-1270T-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP+ модуль для передачи данных на скорости 10 Гбит/с по одномодовому волокну (SMF) с одним волокном. Дальность до 20 км. Передача на 1270 нм, прием на 1330 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое одинарное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '10 Гбит/с',
      'Длина волны (передача)': '1270 нм',
      'Длина волны (прием)': '1330 нм',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '57.5 × 13.9 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-tsfp-1270t-20-smf.pdf' }]
  },
  // ========== 9. TSFP-850-MMF ==========
  {
    id: 'tsfp-850-mmf',
    name: 'SFP+ модуль Dahua TSFP-850-MMF 10G, 850 нм, 300 м',
    price: 11590,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-tsfp-850-mmf.jpg',
    brand: 'Dahua',
    sku: 'TSFP-850-MMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP+ модуль для передачи данных на скорости 10 Гбит/с по многомодовому волокну (MMF) на расстояние до 300 м. Рабочая длина волны 850 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Многомодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '10 Гбит/с',
      'Длина волны': '850 нм (передача и прием)',
      'Дальность передачи': '300 м',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '56.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-tsfp-850-mmf.pdf' }]
  },
  // ========== 10. TSFP-1310-20-SMF ==========
  {
    id: 'tsfp-1310-20-smf',
    name: 'SFP+ модуль Dahua TSFP-1310-20-SMF 10G, 1310 нм, 20 км',
    price: 18790,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-tsfp-1310-20-smf.jpg',
    brand: 'Dahua',
    sku: 'TSFP-1310-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'SFP+ модуль для передачи данных на скорости 10 Гбит/с по одномодовому двойному волокну на расстояние до 20 км. Рабочая длина волны 1310 нм (передача и прием). Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '10 Гбит/с',
      'Длина волны': '1310 нм (передача и прием)',
      'Дальность передачи': '20 км',
      'Разъем': 'LC'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-tsfp-1310-20-smf.pdf' }]
  },
  // ========== 11. GSFP-1310T-20-SMF ==========
  {
    id: 'gsfp-1310t-20-smf',
    name: 'Gigabit SFP модуль Dahua GSFP-1310T-20-SMF 1G, 20 км (1310/1550 нм)',
    price: 5190,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-gsfp-1310t-20-smf.jpg',
    brand: 'Dahua',
    sku: 'GSFP-1310T-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'Гигабитный SFP-модуль для работы по одномодовому волокну (SMF) с одним волокном. Скорость 1 Гбит/с, дальность до 20 км. Передача на 1310 нм, прием на 1550 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое одинарное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '1 Гбит/с',
      'Длина волны (передача)': '1310 нм',
      'Длина волны (прием)': '1550 нм',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '55.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-gsfp-1310t-20-smf.pdf' }]
  },
  // ========== 12. GSFP-1310R-20-SMF ==========
  {
    id: 'gsfp-1310r-20-smf',
    name: 'Gigabit SFP модуль Dahua GSFP-1310R-20-SMF 1G, 20 км (1550/1310 нм)',
    price: 5190,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-gsfp-1310r-20-smf.jpg',
    brand: 'Dahua',
    sku: 'GSFP-1310R-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'Гигабитный SFP-модуль для работы по одномодовому волокну (SMF) с одним волокном. Скорость 1 Гбит/с, дальность до 20 км. Передача на 1550 нм, прием на 1310 нм. Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое одинарное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '1 Гбит/с',
      'Длина волны (передача)': '1550 нм',
      'Длина волны (прием)': '1310 нм',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '55.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-gsfp-1310r-20-smf.pdf' }]
  },
  // ========== 13. GSFP-RJ45 ==========
  {
    id: 'gsfp-rj45',
    name: 'Gigabit SFP модуль Dahua GSFP-RJ45 1G, медный, 100 м',
    price: 5190,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-gsfp-rj45.jpg',
    brand: 'Dahua',
    sku: 'GSFP-RJ45',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'Гигабитный SFP-модуль с медным портом RJ-45 для работы по витой паре на расстояние до 100 м. Скорость 1 Гбит/с. Широкий диапазон рабочих температур –40…+85°C.',
    specs: {
      'Тип порта': 'RJ-45',
      'Скорость': '1 Гбит/с',
      'Дальность передачи': '100 м',
      'Рабочая температура': '–40 … +85 °C',
      'Температура хранения': '–40 … +85 °C',
      'Рабочая влажность': '5%–95% (без конденсата)',
      'Размеры (Ш×Г×В)': '68.0 × 13.7 × 13.8 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-gsfp-rj45.pdf' }]
  },
  // ========== 14. GSFP-850-MMF ==========
  {
    id: 'gsfp-850-mmf',
    name: 'Gigabit SFP модуль Dahua GSFP-850-MMF 1G, 850 нм, 550 м',
    price: 3490,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-gsfp-850-mmf.jpg',
    brand: 'Dahua',
    sku: 'GSFP-850-MMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'Гигабитный SFP-модуль для работы по многомодовому волокну (MMF) на расстояние до 550 м. Длина волны 850 нм (передача и прием). Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Многомодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '1 Гбит/с',
      'Длина волны': '850 нм (передача и прием)',
      'Дальность передачи': '550 м',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '55.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-gsfp-850-mmf.pdf' }]
  },
  // ========== 15. GSFP-1310-20-SMF ==========
  {
    id: 'gsfp-1310-20-smf',
    name: 'Gigabit SFP модуль Dahua GSFP-1310-20-SMF 1G, 1310 нм, 20 км',
    price: 5190,
    image: '/images/setevoe-oborudovanie/sfp-modules/dahua-sfp-gsfp-1310-20-smf.jpg',
    brand: 'Dahua',
    sku: 'GSFP-1310-20-SMF',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'sfp-modules',
    description: 'Гигабитный SFP-модуль для работы по одномодовому двойному волокну (SMF) на расстояние до 20 км. Длина волны 1310 нм (передача и прием). Разъем LC.',
    specs: {
      'Тип оптического волокна': 'Одномодовое двойное волокно',
      'Тип оптического порта': 'LC',
      'Скорость': '1 Гбит/с',
      'Длина волны': '1310 нм (передача и прием)',
      'Дальность передачи': '20 км',
      'Рабочая температура': '–40 … +85 °C',
      'Относительная влажность': '5%–95%',
      'Размеры (Ш×Г×В)': '55.5 × 13.4 × 8.5 мм'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-sfp-gsfp-1310-20-smf.pdf' }]
  }
];

export default dahuaSfpModules;