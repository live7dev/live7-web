"use client";

import React from "react";
import { Receipt } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuote } from "@/context/QuoteContext";

export function MobileQuoteBar() {
  const { totalCount, setIsDrawerOpen } = useQuote();

  if (totalCount === 0) return null;

  return (
    <div className="sm:hidden fixed bottom-4 right-4 left-4 z-40 animate-in slide-in-from-bottom-3 duration-200">
      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3.5 px-4 rounded-2xl shadow-xl flex items-center justify-between font-bold text-sm cursor-pointer transition-all active:scale-[0.99]"
      >
        <div className="flex items-center gap-2">
          <Receipt className="w-5 h-5 text-emerald-300" />
          <span>View Trade Quote Request</span>
        </div>
        <Badge className="bg-emerald-400 text-slate-900 hover:bg-emerald-400 font-extrabold px-2.5 py-0.5">
          {totalCount} {totalCount === 1 ? "item" : "items"}
        </Badge>
      </button>
    </div>
  );
}

