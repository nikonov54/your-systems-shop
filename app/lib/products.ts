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
    images: ['', '', ''],
    brand: 'Hikvision',
    sku: 'DS-2CD2347G2-LU',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'камеры',  // ← ИСПРАВЛЕНО: кириллица
    isHit: true,
    description: '4 Мп камера с Full-time цветным изображением. Технология ColorVu обеспечивает яркое цветное видео даже в условиях низкой освещенности. ИК-подсветка до 30 м, защита IP67, поддержка microSD до 256 ГБ.',
    specs: {
      'Матрица': '4 Мп CMOS',
      'Разрешение': '2560 × 1440',
      'ИК-подсветка': 'до 30 м',
      'Защита': 'IP67',
      'Питание': 'DC 12V / PoE',
      'Рабочая температура': '-30°C ... +60°C'
    }
  },
  {
    id: '2',
    name: 'Регистратор Hikvision DS-7608NXI-K2/8P',
    price: 28900,
    image: '',
    images: ['', ''],
    brand: 'Hikvision',
    sku: 'DS-7608NXI-K2/8P',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'регистраторы',  // ← ИСПРАВЛЕНО: кириллица
    isNew: true,
    description: '8-канальный сетевой видеорегистратор с поддержкой H.265+. Поддержка 2 HDD до 10 ТБ каждый, 8 портов PoE, разрешение записи до 12 Мп.',
    specs: {
      'Каналов': '8',
      'HDD': '2 слота до 10 ТБ',
      'PoE порты': '8',
      'Разрешение': 'до 12 Мп',
      'Сжатие': 'H.265+ / H.265 / H.264'
    }
  },
  {
    id: '3',
    name: 'Тепловизор Guide Sensmart PC230',
    price: 45000,
    oldPrice: 52000,
    image: '',
    images: ['', ''],
    brand: 'Guide Sensmart',
    sku: 'PC230',
    inStock: true,
    category: 'teplovizory',
    subcategory: 'камеры-тепловизионные',  // ← кириллица
    isHit: true,
    description: 'Компактный тепловизор с разрешением 256×192. Диапазон измерений -20°C до +550°C, частота 25 Гц, 5 Мп видимый свет.',
    specs: {
      'Разрешение': '256×192',
      'Диапазон температур': '-20°C ... +550°C',
      'Частота': '25 Гц',
      'Видимый свет': '5 Мп',
      'Питание': 'USB-C'
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
    subcategory: 'считыватели',  // ← кириллица
    description: 'Считыватель Mifare, интерфейс Wiegand 26/34, защита IP65, световая и звуковая индикация.'
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
    subcategory: 'контроллеры',  // ← кириллица
    isNew: true,
    description: 'Двухдверный контроллер СКУД, поддерживает до 5000 пользователей и 10000 событий.'
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
    subcategory: 'бесконтактные-ключи',  // ← кириллица
    description: 'Бесконтактный ключ Mifare 1k, совместимый с большинством систем контроля доступа.'
  },
  // ========== НОВАЯ КАМЕРА 8K ==========
  {
    id: '7',
    name: 'Куполная IP-камера 8K Dahua SD8C845FG-HNF',
    price: 58900,
    oldPrice: 74900,
    image: '',
    images: ['', '', ''],
    brand: 'Dahua',
    sku: 'SD8C845FG-HNF',
    inStock: true,
    category: 'videonablyudenie',
    subcategory: 'камеры',  // ← кириллица
    isNew: true,
    isHit: true,
    description: 'Премиальная купольная камера с разрешением 8K (7680x4320). Поддержка автотрекинга, распознавания лиц и номеров. ИК-подсветка до 80 м, защита IP67/IK10. Оптический зум 30x.',
    specs: {
      'Разрешение': '8K (7680x4320)',
      'Матрица': 'CMOS 1/1.2"',
      'Угол обзора': '120°',
      'ИК-подсветка': 'до 80 м',
      'Защита': 'IP67 / IK10',
      'Smart AI': 'Автотрекинг, распознавание лиц, номера авто',
      'Оптический зум': '30x',
      'Сжатие': 'H.265/H.264',
      'Питание': 'PoE+ / DC 24V'
    }
  }
];