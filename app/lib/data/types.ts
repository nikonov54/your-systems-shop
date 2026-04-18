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