import { climateCabinets } from './data/shkafy/climate-cabinets';
import { switches } from './data/setevoe-oborudovanie/switches';
import { ver2Cabinets } from './data/shkafy/ver2-cabinets';
import { ver3Cabinets } from './data/shkafy/ver3-cabinets';   // добавлено

// Объединяем все товары для поиска, сравнения и каталога
export const mockProducts = [
  ...climateCabinets,
  ...switches,
  ...ver2Cabinets,
  ...ver3Cabinets,   // добавлено
];

// Экспорт типа Product для использования в других файлах
export type { Product } from '@/app/context/StoreContext';