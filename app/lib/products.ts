// app/lib/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[]; // для галереи
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
    subcategory: 'камеры',
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
    subcategory: 'регистраторы',
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
    subcategory: 'камеры-тепловизионные',
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
    subcategory: 'считыватели',
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
    subcategory: 'контроллеры',
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
    subcategory: 'бесконтактные-ключи'
  }
];