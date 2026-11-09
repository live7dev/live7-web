"use client";

import React from "react";
import { Receipt } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export function MobileQuoteBar() {
  const { totalCount, setIsDrawerOpen } = useQuote();

  if (totalCount === 0) return null;

  return (
    <div className="sm:hidden fixed bottom-4 right-4 left-4 z-40 animate-in slide-in-from-bottom-2 duration-150">
      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        className="w-full bg-slate-900 text-white py-3 px-4 rounded-full shadow-lg flex items-center justify-between font-semibold text-xs cursor-pointer active:scale-[0.99] transition-transform"
      >
        <div className="flex items-center gap-2">
          <Receipt className="w-4 h-4 text-emerald-400" />
          <span>View Quote Request</span>
        </div>
        <span className="bg-emerald-500 text-slate-950 font-extrabold px-2 py-0.5 rounded-full text-[11px]">
          {totalCount} {totalCount === 1 ? "item" : "items"}
        </span>
      </button>
    </div>
  );
}
