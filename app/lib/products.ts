// app/lib/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  brand: string;
  sku: string;
  inStock: boolean;
  category: string;
  subcategory: string;
  isNew?: boolean;
  isHit?: boolean;
  description?: string;
  specs?: Record<string, string>;
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
    subcategory: 'cameras',
    isHit: true,
    description: '4 Мп камера с Full-time цветным изображением.',
    specs: {
      "Производитель": "Hikvision",
      "Видеоаналитика": "Обнаружение лиц, пересечение линии",
      "Тип корпуса": "Цилиндрическая",
      "Исполнение": "Уличное",
      "Разрешение, МП": "4 Мп (2560x1440)",
      "Тип объектива": "Фиксированный",
      "Фокусное расстояние, мм": "2.8 мм",
      "ИК-подсветка": "до 30 м",
      "Wi-Fi": "Нет",
      "SD-карта": "до 256 ГБ",
      "PIR-датчик": "Нет",
      "Аудио": "Встроенный микрофон",
      "Тревожный вход/выход": "1/1",
      "Защита IP": "IP67",
      "IK": "IK08",
      "Особенности": "ColorVu технология",
      "Питание": "DC 12V / PoE"
    }
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
    subcategory: 'recorders',
    isNew: true,
    description: '8-канальный сетевой видеорегистратор.',
    specs: {
      "Каналов": "8",
      "HDD": "2 слота до 10 ТБ",
      "PoE порты": "8",
      "Разрешение": "до 12 Мп",
      "Сжатие": "H.265+"
    }
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
    subcategory: 'thermal-cameras',
    isHit: true,
    description: 'Компактный тепловизор.',
    specs: {
      "Разрешение": "256×192",
      "Диапазон температур": "-20°C ... +550°C",
      "Частота": "25 Гц",
      "Видимый свет": "5 Мп",
      "Питание": "USB-C"
    }
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
    subcategory: 'readers',
    description: 'Считыватель Mifare, интерфейс Wiegand 26/34.'
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
    subcategory: 'controllers',
    isNew: true,
    description: 'Двухдверный контроллер СКУД.'
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
    subcategory: 'contactless-keys',
    description: 'Бесконтактный ключ Mifare 1k.'
  },
  {
    id: '7',
    name: 'Куполная IP-камера 8K Dahua SD8C845FG-HNF',
    price: 58900,
    oldPrice: 74900,
    image: '',
    brand: 'Dahua',
    sku: 'SD8C845FG-HNF',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'cameras',
    isNew: true,
    isHit: true,
    description: 'Премиальная купольная камера 8K.',
    specs: {
      "Производитель": "Dahua",
      "Видеоаналитика": "Автотрекинг, распознавание лиц, номеров",
      "Тип корпуса": "Купольная",
      "Исполнение": "Уличное",
      "Разрешение, МП": "8K (33 Мп)",
      "Тип объектива": "Вариофокальный",
      "Фокусное расстояние, мм": "6.5-195 мм",
      "ИК-подсветка": "до 80 м",
      "Wi-Fi": "Нет",
      "SD-карта": "до 256 ГБ",
      "PIR-датчик": "Нет",
      "Аудио": "Двусторонняя связь",
      "Тревожный вход/выход": "2/2",
      "Защита IP": "IP67 / IK10",
      "IK": "IK10",
      "Особенности": "Оптический зум 30x",
      "Питание": "PoE+ / DC 24V"
    }
  },
  {
    id: 'shkaf-001',
    name: 'Коммутационный термошкаф Mastermann 6 УТП 4К',
    price: 53000,
    image: '',
    brand: 'Mastermann',
    sku: '00-00015642',
    inStock: true,
    category: 'shkafy',
    subcategory: 'mounting-enclosures',
    description: 'Коммутационный термошкаф.',
    specs: {
      'Кол-во портов': '4',
      'Управляемый': 'Нет',
      'Материал': 'Металл',
      'Защита IP': 'IP66',
      'Размер': '300х400х210 мм'
    }
  },
  {
    id: 'shkaf-002',
    name: 'Коммутационный термошкаф Mastermann 6 УТП 8К',
    price: 69000,
    image: '',
    brand: 'Mastermann',
    sku: '00-00015655',
    inStock: true,
    category: 'shkafy',
    subcategory: 'climate-cabinets',
    description: 'Коммутационный термошкаф на 8 портов.',
    specs: {
      'Кол-во портов': '8',
      'Управляемый': 'Нет',
      'Материал': 'Металл',
      'Защита IP': 'IP66',
      'Размер': '300х400х210 мм'
    }
  },
  {
    id: 'shkaf-003',
    name: 'Коммутатор уличный Mastermann MM4GPoE-2SFP',
    price: 63500,
    image: '',
    brand: 'Mastermann',
    sku: '00-01024685',
    inStock: true,
    category: 'shkafy',
    subcategory: 'mounting-enclosures',
    description: 'Промышленный управляемый коммутатор.',
    specs: {
      'Кол-во портов PoE': '4 x 30 Вт',
      'Кол-во портов SFP': '2',
      'Защита IP': 'IP66',
      'Размер': '334х417х200 мм'
    }
  }
];