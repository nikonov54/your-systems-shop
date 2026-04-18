// app/lib/products.ts
import { climateCabinets } from './data/shkafy/climate-cabinets';

// Для сравнения используем только климатические шкафы
export const mockProducts = [...climateCabinets];

// Экспорт типа Product для использования в других файлах
export type { Product } from '@/app/context/StoreContext';