"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export const IVA_RATE = 0.16;

// 1. Interfaz unificada y estricta para CUALQUIER producto que entre al carrito
export interface CartProduct {
  id?: string;
  nombre?: string;
  precio?: number;
  priceMXN?: number;
  imageUrl?: string;
  es?: { name: string; description?: string; features?: string[] };
  en?: { name: string; description?: string; features?: string[] };
}

export interface CartItem {
  product: CartProduct;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  count: number;
  subtotal: number;
  iva: number;
  total: number;
  isOpen: boolean;
  hydrated: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (product: CartProduct) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("Devion_cart");
    if (saved) setItems(JSON.parse(saved));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("Devion_cart", JSON.stringify(items));
  }, [items, hydrated]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  const add = (product: CartProduct) => {
    // Generamos un ID seguro en caso de que sea un Paquete de Marketing que solo tiene "nombre"
    const productId = product.id || product.nombre;
    if (!productId) return;

    setItems((prev) => {
      const ex = prev.find((i) => (i.product.id || i.product.nombre) === productId);
      if (ex)
        return prev.map((i) =>
          (i.product.id || i.product.nombre) === productId ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { product, qty: 1 }];
    });
  };

  const setQty = (id: string, qty: number) => {
    if (qty < 1) return remove(id);
    setItems((prev) =>
      prev.map((i) => ((i.product.id || i.product.nombre) === id ? { ...i, qty } : i))
    );
  };

  const remove = (id: string) =>
    setItems((prev) => prev.filter((i) => (i.product.id || i.product.nombre) !== id));
    
  const clear = () => setItems([]);

  const count = items.reduce((acc, i) => acc + i.qty, 0);
  
  // 2. Cálculo de precios dinámico estricto (cero any)
  const subtotal = items.reduce((acc, i) => {
    const price = i.product.priceMXN ?? i.product.precio ?? 0;
    return acc + (price * i.qty);
  }, 0);
  
  const iva = subtotal * IVA_RATE;
  const total = subtotal + iva;

  return (
    <CartContext.Provider
      value={{ items, count, subtotal, iva, total, isOpen, hydrated, open, close, toggle, add, setQty, remove, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}