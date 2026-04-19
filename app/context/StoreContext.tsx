// app/context/StoreContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image?: string;
  brand?: string;
  sku?: string;
  inStock?: boolean;
  category: string;
  subcategory: string;
  description?: string;
  specs?: Record<string, string>;
  docs?: { name: string; url: string }[];
}

export interface CompareItem {
  id: string;
  name: string;
  image?: string;
  price: number;
  brand?: string;
  specs?: Record<string, string>;
  category: string;
  subcategory: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  compareItems: CompareItem[];
  addToCompare: (product: Product, showToast?: (msg: string, link?: string, linkText?: string) => void) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
  lastCategory: string;
  lastSubcategory: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);
  const [lastCategory, setLastCategory] = useState<string>('');
  const [lastSubcategory, setLastSubcategory] = useState<string>('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) try { setCartItems(JSON.parse(savedCart)); } catch(e) {}
    const savedCompare = localStorage.getItem('compare');
    if (savedCompare) try { setCompareItems(JSON.parse(savedCompare)); } catch(e) {}
    const savedLastCat = localStorage.getItem('lastCategory');
    if (savedLastCat) setLastCategory(savedLastCat);
    const savedLastSub = localStorage.getItem('lastSubcategory');
    if (savedLastSub) setLastSubcategory(savedLastSub);
  }, []);

  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cartItems)); }, [cartItems]);
  useEffect(() => { localStorage.setItem('compare', JSON.stringify(compareItems)); }, [compareItems]);
  useEffect(() => {
    if (lastCategory) localStorage.setItem('lastCategory', lastCategory);
    if (lastSubcategory) localStorage.setItem('lastSubcategory', lastSubcategory);
  }, [lastCategory, lastSubcategory]);

  const addToCart = (product: Product, quantity = 1) => {
    if (product.category && product.subcategory) {
      setLastCategory(product.category);
      setLastSubcategory(product.subcategory);
    }
    setCartItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.product.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(i => (i.product.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const clearCart = () => setCartItems([]);
  const getCartTotal = () => cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const getCartCount = () => cartItems.reduce((cnt, i) => cnt + i.quantity, 0);

  const addToCompare = (product: Product, showToast?: (msg: string, link?: string, linkText?: string) => void) => {
    setCompareItems(prev => {
      if (prev.some(i => i.id === product.id)) return prev;
      const newItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        brand: product.brand,
        specs: product.specs,
        category: product.category,
        subcategory: product.subcategory,
      };
      // Исправление: вызов showToast вынесен в setTimeout, чтобы избежать ошибки React
      if (showToast) {
        setTimeout(() => showToast('Товар добавлен к сравнению', '/compare', 'Перейти в сравнение'), 0);
      }
      return [...prev, newItem];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCompare = () => setCompareItems([]);
  const isInCompare = (id: string) => compareItems.some(i => i.id === id);

  return (
    <StoreContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      compareItems,
      addToCompare,
      removeFromCompare,
      clearCompare,
      isInCompare,
      lastCategory,
      lastSubcategory,
    }}>
      {children}
    </StoreContext.Provider>
  );
};