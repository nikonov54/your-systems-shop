// app/lib/data/signalizatsiya/power-supplies-dahua.ts
import type { Product } from '@/app/context/StoreContext';

export const dahuaPowerSupplies: Product[] = [
  // Товар 1: ARA62-V2
  {
    id: 'ara62-v2',
    name: 'Блок питания Dahua ARA62-V2',
    price: 1190,
    image: '/images/signalizatsiya/power-supplies-dahua/dahua-ara62-v2.jpg',
    brand: 'Dahua',
    sku: 'ARA62-V2',
    inStock: true,
    category: 'signalizatsiya',
    subcategory: 'power-supplies',
    description: 'Блок питания 9-15 В DC, 1.2 А для охранных систем.',
    specs: {
      'Выходное напряжение': '9-15 VDC',
      'Максимальный ток нагрузки': '1.2 А',
      'Питание': '9–15 VDC вход',
      'Рабочая температура': '–10 °C до +55 °C (+14 °F до +131 °F)',
      'Рабочая влажность': '10%–90% (RH)',
      'Размеры': '89 мм × 79 мм × 12 мм (3.50" × 3.11" × 0.47")',
      'Масса нетто': '20.00 г (0.04 lb)',
      'Масса брутто': '66.35 г (0.15 lb)',
      'Уровень антикоррозионной защиты': 'Базовая защита',
      'Размеры упаковки (один товар)': '106 мм × 90 мм × 45 мм (4.17" × 3.54" × 1.77")',
      'Размеры упаковки (защитный кейс)': '339 мм × 291 мм × 261 мм (13.35" × 11.46" × 10.28")',
      'Сертификаты': 'CE'
    },
    docs: [{ name: 'Паспорт изделия', url: '/docs/pasport-dahua-ara62-v2.pdf' }]
  }
];

export default dahuaPowerSupplies;