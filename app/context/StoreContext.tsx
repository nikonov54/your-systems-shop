'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/app/lib/products';

interface CompareItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: Record<string, string>;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface StoreContextType {
  compareItems: CompareItem[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const savedCompare = localStorage.getItem('compareItems');
    const savedCart = localStorage.getItem('cartItems');
    if (savedCompare) setCompareItems(JSON.parse(savedCompare));
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem('compareItems', JSON.stringify(compareItems));
  }, [compareItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Сравнение
  const addToCompare = (product: Product) => {
    if (compareItems.length >= 4) {
      alert('Можно сравнивать не более 4 товаров');
      return;
    }
    if (!compareItems.some(item => item.id === product.id)) {
      setCompareItems([...compareItems, {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        specs: product.specs || {}
      }]);
    }
  };

  const removeFromCompare = (id: string) => {
    setCompareItems(compareItems.filter(item => item.id !== id));
  };

  const clearCompare = () => setCompareItems([]);

  const isInCompare = (id: string) => compareItems.some(item => item.id === id);

  // Корзина
  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image
      }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <StoreContext.Provider value={{
      compareItems,
      addToCompare,
      removeFromCompare,
      clearCompare,
      isInCompare,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
}