"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { QuoteItem, Product } from "@/types";

interface QuoteContextType {
  quoteList: QuoteItem[];
  addToQuote: (product: Product, selectedPackSize: string) => void;
  updateQuantity: (index: number, delta: number) => void;
  removeFromQuote: (index: number) => void;
  clearQuote: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  totalCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [quoteList, setQuoteList] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("live7_quote_items");
      if (saved) {
        setQuoteList(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("live7_quote_items", JSON.stringify(quoteList));
      } catch {
        // Ignore storage errors
      }
    }
  }, [quoteList, isLoaded]);

  const addToQuote = (product: Product, selectedPackSize: string) => {
    setQuoteList((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.productId === product.id && item.packSize === selectedPackSize
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            title: product.title,
            sku: product.sku,
            packSize: selectedPackSize,
            quantity: 1,
            image: product.image,
          },
        ];
      }
    });
  };

  const updateQuantity = (index: number, delta: number) => {
    setQuoteList((prev) => {
      const item = prev[index];
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      const updated = [...prev];
      updated[index] = { ...item, quantity: newQty };
      return updated;
    });
  };

  const removeFromQuote = (index: number) => {
    setQuoteList((prev) => prev.filter((_, i) => i !== index));
  };

  const clearQuote = () => {
    setQuoteList([]);
  };

  const totalCount = quoteList.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        quoteList,
        addToQuote,
        updateQuantity,
        removeFromQuote,
        clearQuote,
        isDrawerOpen,
        setIsDrawerOpen,
        totalCount,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}

