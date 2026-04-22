import type { Product } from '@/app/context/StoreContext';

export const microdriveRouters: Product[] = [
  // 1. Tandem-4GX-5
  {
    id: 'md-router-001',
    name: '4G роутер Micro-Drive Tandem-4GX-5 с поддержкой PoE',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4gx-5-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4GX-5',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Профессиональный роутер Tandem-4GX-5 предназначен для обеспечения беспроводного доступа в интернет через LAN порты или Wi-Fi с помощью встроенного промышленного LTE модуля Cat.4. Поддерживает мобильные сети 4G/3G/2G. Работает под управлением ОС на ядре Linux. Имеет 2 Ethernet порта, поддержку Passive PoE, Wi-Fi 2.4 ГГц.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '2x 10/100 Мбит/с (1 с PoE)',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n, до 150 Мбит/с',
      'Антенные разъемы': '2x SMA (LTE), 1x RP-SMA (Wi-Fi)',
      'Питание': '9-36 В DC или Passive PoE (24-36 В)',
      'Потребляемая мощность': '≤5 Вт',
      'Рабочая температура': '-40…+60 °C',
      'Материал корпуса': 'анодированный алюминий',
      'Габариты': '13,5 x 10,5 x 5,5 см',
      'Вес': '180 г',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-tandem-4gx-5-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 2. Tandem-4GX-6
  {
    id: 'md-router-002',
    name: '4G роутер Micro-Drive Tandem-4GX-6 LTE Cat.6',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4gx-6-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4GX-6',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Профессиональный роутер Tandem-4GX-6 с LTE Cat.6, агрегацией каналов, 2x Ethernet, PoE, Wi-Fi. Скорость до 300 Мбит/с.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '2x 10/100 Мбит/с (1 с PoE)',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n, до 150 Мбит/с',
      'Антенные разъемы': '2x SMA (LTE), 1x RP-SMA (Wi-Fi)',
      'Питание': '9-36 В DC или Passive PoE (24-36 В)',
      'Потребляемая мощность': '≤6 Вт',
      'Рабочая температура': '-40…+60 °C',
      'Материал корпуса': 'анодированный алюминий',
      'Габариты': '13,5 x 10,5 x 5,5 см',
      'Вес': '180 г',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-tandem-4gx-6-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 3. TR-600
  {
    id: 'md-router-003',
    name: '4G роутер Micro-Drive TR-600',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tr-600-router.jpg',
    brand: 'Micro-Drive',
    sku: 'TR-600',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Профессиональный роутер TR-600 с LTE Cat.6, 5 портов Ethernet, PoE OUT (802.3at/af), Wi-Fi. Подходит для промышленного применения.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '5x 10/100 Мбит/с (PoE OUT на портах 0-3)',
      'PoE OUT': 'IEEE 802.3at/af, бюджет 120 Вт',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n, до 300 Мбит/с',
      'Антенные разъемы': '2x SMA (LTE), 2x RP-SMA (Wi-Fi)',
      'Питание': '9-57 В DC или Passive PoE (порт 4)',
      'Потребляемая мощность': '≤6 Вт (без PoE OUT)',
      'Рабочая температура': '-40…+60 °C',
      'Материал корпуса': 'анодированный алюминий',
      'Габариты': '115x134.5x29 мм',
      'Вес': '340 г',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-tr-600-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 4. TR-601
  {
    id: 'md-router-004',
    name: '4G роутер Micro-Drive TR-601',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tr-601-router.jpg',
    brand: 'Micro-Drive',
    sku: 'TR-601',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Аналог TR-600, но без блока питания в комплекте. Подходит для систем с внешним питанием.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '5x 10/100 Мбит/с (PoE OUT на портах 0-3)',
      'PoE OUT': 'IEEE 802.3at/af, бюджет 120 Вт',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n, до 300 Мбит/с',
      'Антенные разъемы': '2x SMA (LTE), 2x RP-SMA (Wi-Fi)',
      'Питание': '9-57 В DC или Passive PoE (порт 4)',
      'Потребляемая мощность': '≤6 Вт (без PoE OUT)',
      'Рабочая температура': '-40…+60 °C',
      'Материал корпуса': 'анодированный алюминий',
      'Габариты': '115x134.5x29 мм',
      'Вес': '340 г',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-tr-601-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 5. NR-400
  {
    id: 'md-router-005',
    name: 'Уличный 4G роутер Micro-Drive NR-400',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-400-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-400',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный LTE роутер NR-400 в герметичном боксе IP65, встроенные антенны MIMO 2x2, подогрев, питание по PoE. Скорость до 150 Мбит/с.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (micro SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенны': 'встроенные, усиление до +5 dBi',
      'Питание': 'Passive PoE 24-36 В',
      'Мощность подогрева': '4 Вт',
      'Степень защиты': 'IP65',
      'Рабочая температура': '-40…+60 °C',
      'Габариты': '220x80x55 мм',
      'Вес': '0,3 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-400-router.pdf' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 6. NR-410
  {
    id: 'md-router-006',
    name: 'Уличный 4G роутер Micro-Drive NR-410',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-410-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-410',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-410 с панельной антенной MIMO 2x2, усиление до 15.5 dBi, подогрев, PoE. Корпус IP65.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (mini SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенна': 'панельная, усиление 12.5-15.5 dBi',
      'Питание': 'Passive PoE 24-36 В',
      'Мощность подогрева': '4 Вт',
      'Степень защиты': 'IP65',
      'Рабочая температура': '-40…+75 °C',
      'Габариты': '265x240x105 мм',
      'Вес': '1,2 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-410-router.pdf' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 7. NR-412
  {
    id: 'md-router-007',
    name: 'Уличный 4G роутер Micro-Drive NR-412',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-412-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-412',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-412, аналог NR-410 с поддержкой RS-485.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (micro SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Последовательные порты': 'RS-485',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенна': 'панельная, усиление 12.5-15.5 dBi',
      'Питание': 'Passive PoE 24-36 В',
      'Мощность подогрева': '4 Вт',
      'Степень защиты': 'IP65',
      'Рабочая температура': '-40…+75 °C',
      'Габариты': '265x240x105 мм',
      'Вес': '1,2 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-412-router.pdf' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 8. NR-420
  {
    id: 'md-router-008',
    name: 'Уличный 4G роутер Micro-Drive NR-420',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-420-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-420',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-420 в компактном корпусе IP67, встроенные антенны, Wi-Fi, питание PoE.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (mini SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенна': 'встроенная, усиление 4-6 dBi',
      'Питание': 'Passive PoE 9-57 В',
      'Степень защиты': 'IP67',
      'Рабочая температура': '-40…+60 °C',
      'Габариты': '162x193x95 мм',
      'Вес': '0,45 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-420-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 9. NR-600
  {
    id: 'md-router-009',
    name: 'Уличный 4G роутер Micro-Drive NR-600',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-600-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-600',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-600 с LTE Cat.6, скоростью до 300 Мбит/с, корпус IP67, встроенные антенны MIMO 2x2.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (mini SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенна': 'встроенная, усиление 4-6 dBi',
      'Питание': 'Passive PoE 9-57 В',
      'Степень защиты': 'IP67',
      'Рабочая температура': '-40…+60 °C',
      'Габариты': '162x193x95 мм',
      'Вес': '0,45 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-600-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 10. NR-612
  {
    id: 'md-router-010',
    name: 'Уличный 4G роутер Micro-Drive NR-612',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-612-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-612',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-612 с панельной антенной, усиление до 15.5 dBi, LTE Cat.6, подогрев, PoE.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (micro SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенна': 'панельная, усиление 12.5-15.5 dBi',
      'Питание': 'Passive PoE 24-36 В',
      'Мощность подогрева': '4 Вт',
      'Рабочая температура': '-40…+75 °C',
      'Габариты': '265x240x105 мм',
      'Вес': '1,2 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-612-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 11. NR-615
  {
    id: 'md-router-011',
    name: 'Уличный 4G роутер Micro-Drive NR-615',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-615-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-615',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-615 с двумя Ethernet портами, LTE Cat.6, панельной антенной, подогревом.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (micro SIM)',
      'Ethernet порты': '2x 10/100 Мбит/с',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Антенна': 'панельная, усиление 12.5-15.5 dBi',
      'Питание': 'Passive PoE 24-57 В',
      'Мощность подогрева': '4 Вт',
      'Рабочая температура': '-40…+60 °C',
      'Габариты': '265x240x105 мм',
      'Вес': '1,2 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-615-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 12. NR-712
  {
    id: 'md-router-012',
    name: 'Уличный 4G роутер Micro-Drive NR-712',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-nr-712-router.jpg',
    brand: 'Micro-Drive',
    sku: 'NR-712',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'Уличный 4G роутер NR-712 с антенной MIMO 4x4, усиление до 12 dBi, LTE Cat.12, скорость до 600 Мбит/с, PoE 802.3af.',
    specs: {
      'LTE категория': 'Cat.12 (600/150 Мбит/с)',
      'Слоты SIM': '2 (micro SIM) + SIM удлинитель',
      'Ethernet порты': '1x 10/100/1000 Мбит/с',
      'Антенна': 'панельная MIMO 4x4, усиление 9-12 dBi',
      'Питание': 'PoE 802.3af или Passive 38-57 В',
      'Рабочая температура': '-40…+60 °C',
      'Габариты': '265x240x105 мм',
      'Вес': '1,2 кг',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '/docs/pasport-microdrive-nr-712-router.pdf' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 13. Tandem-4GL-OEM-11
  {
    id: 'md-router-013',
    name: '4G роутер Micro-Drive Tandem-4GL-OEM-11',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4gl-oem-11-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4GL-OEM-11',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'OEM-версия роутера Tandem-4GX с LTE Cat.4, 2x Ethernet, Wi-Fi, поддержкой PoE. Компактный корпус для встраивания.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '2x 10/100 Мбит/с (1 с PoE)',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Питание': '9-36 В DC или Passive PoE',
      'Рабочая температура': '-40…+60 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 14. Tandem-4GS-OEM-11
  {
    id: 'md-router-014',
    name: '4G роутер Micro-Drive Tandem-4GS-OEM-11',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4gs-oem-11-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4GS-OEM-11',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'OEM-версия роутера с последовательным портом RS-232/485.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'Последовательные порты': 'RS-232, RS-485',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Питание': '9-36 В DC',
      'Рабочая температура': '-40…+60 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 15. Tandem-4GT-OEM-11
  {
    id: 'md-router-015',
    name: '4G роутер Micro-Drive Tandem-4GT-OEM-11',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4gt-oem-11-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4GT-OEM-11',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'OEM-роутер с поддержкой GPS и последовательным портом.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'GPS': 'да',
      'Последовательные порты': 'RS-232, RS-485',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Питание': '9-36 В DC',
      'Рабочая температура': '-40…+60 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 16. Tandem-4G6-OEM-4G
  {
    id: 'md-router-016',
    name: '4G роутер Micro-Drive Tandem-4G6-OEM-4G',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4g6-oem-4g-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4G6-OEM-4G',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'OEM-роутер с LTE Cat.6, 2x Gigabit Ethernet, Wi-Fi, PoE.',
    specs: {
      'LTE категория': 'Cat.6 (300/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '2x 10/100/1000 Мбит/с (1 с PoE)',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Питание': '9-36 В DC или Passive PoE',
      'Рабочая температура': '-40…+60 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 17. Tandem-4GT2-OEM-1
  {
    id: 'md-router-017',
    name: '4G роутер Micro-Drive Tandem-4GT2-OEM-1',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4gt2-oem-1-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4GT2-OEM-1',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'OEM-роутер с двумя SIM, GPS, последовательным портом.',
    specs: {
      'LTE категория': 'Cat.4 (150/50 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '1x 10/100 Мбит/с',
      'GPS': 'да',
      'Последовательные порты': 'RS-232, RS-485',
      'Wi-Fi': '2.4 ГГц, 802.11b/g/n',
      'Питание': '9-36 В DC',
      'Рабочая температура': '-40…+60 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  },
  // 18. Tandem-4G12-OEM-1
  {
    id: 'md-router-018',
    name: '4G роутер Micro-Drive Tandem-4G12-OEM-1',
    price: 0,
    image: '/images/setevoe-oborudovanie/routers/microdrive-tandem-4g12-oem-1-router.jpg',
    brand: 'Micro-Drive',
    sku: 'Tandem-4G12-OEM-1',
    inStock: true,
    category: 'setevoe-oborudovanie',
    subcategory: 'microdrive-routers',
    description: 'OEM-роутер с LTE Cat.12, 1x Gigabit Ethernet, поддержкой 4x4 MIMO, GPS.',
    specs: {
      'LTE категория': 'Cat.12 (600/150 Мбит/с)',
      'Слоты SIM': '2 (Mini SIM)',
      'Ethernet порты': '1x 10/100/1000 Мбит/с',
      'GPS': 'да',
      'Питание': '9-36 В DC или PoE',
      'Рабочая температура': '-40…+60 °C',
      'Гарантия': '12 мес.'
    },
    docs: [
      { name: 'Паспорт изделия', url: '' },
      { name: 'Руководство пользователя', url: '' },
      { name: 'Руководство по WEB интерфейсу', url: '' },
      { name: 'Декларация соответствия', url: '/docs/declaration-microdrive-routers.pdf' },
      { name: '3D модель (STEP)', url: '' },
      { name: 'Комплектация', url: '' }
    ]
  }
];