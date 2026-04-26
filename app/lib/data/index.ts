// app/lib/data/index.ts
// Удалите эту строку: import { Product } from './types';
import type { Product } from '@/app/context/StoreContext'; // ← Добавьте эту строку

// Videonablyudenie
import { cameras } from './videonablyudenie/cameras';
import { recorders } from './videonablyudenie/recorders';
// ... остальные импорты

// Signalizatsiya Dahua
import { dahuaControllers } from './signalizatsiya/controllers-dahua';

// Shkafy
import { climateCabinets } from './shkafy/climate-cabinets';
// ... остальные импорты

export const mockProducts: Product[] = [
  ...cameras,
  ...recorders,
  // ...
  ...dahuaControllers,   // <-- добавлено
  ...climateCabinets
  // ...
];

export type { Product };