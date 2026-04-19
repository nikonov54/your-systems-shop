// app/lib/products.ts
import { climateCabinets } from './data/shkafy/climate-cabinets';
import { switches } from './data/setevoe-oborudovanie/switches';

export const mockProducts = [
  ...climateCabinets,
  ...switches,
];

export type { Product } from '@/app/context/StoreContext';