"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Check, MessageSquare, FileText, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Product, Category } from "@/types";
import { useQuote } from "@/context/QuoteContext";

interface CatalogProps {
  products: Product[];
  categories: Category[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  whatsappNumber: string;
}

export function Catalog({
  products,
  categories,
  searchQuery,
  setSearchQuery,
  whatsappNumber,
}: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPackSizes, setSelectedPackSizes] = useState<Record<string, string>>({});
  const { addToQuote, quoteList } = useQuote();

  const handlePackSizeChange = (productId: string, packSize: string) => {
    setSelectedPackSizes((prev) => ({
      ...prev,
      [productId]: packSize,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      activeCategory === "all" ||
      (product.category && product.category.toLowerCase().includes(activeCategory.toLowerCase()));

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchCategory;

    const matchText =
      product.title.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.origin.toLowerCase().includes(query) ||
      product.grade.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchCategory && matchText;
  });

  const handleQuickWhatsApp = (product: Product, size: string) => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `Hello Live7 Wholesale! I would like to request current wholesale pricing and availability for:\n` +
        `• Product: ${product.title}\n` +
        `• Pack Size: ${size}\n` +
        `• SKU: ${product.sku}\n\n` +
        `Please share your volume rates and delivery schedule.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Fresh Produce & Grains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Wholesale Master Catalog
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your required pack size and add items to your trade quote enquiry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>
        </div>

        {/* Categories Bar */}
        <div id="categories" className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 px-4 text-center bg-white rounded-2xl border border-slate-200">
            <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No wholesale items match your search</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
              Looking for a specific produce crate, container pallet, or ethnic grocery line? Contact our trade desk directly.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
              <Button asChild size="sm" className="bg-emerald-800 hover:bg-emerald-900 text-white">
                <a href="#contact">Contact Trade Desk</a>
              </Button>
            </div>
          </div>
        ) : (
          /* Products Grid (STRICTLY NO PRICES) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const selectedSize =
                selectedPackSizes[product.id] ||
                product.packSizes?.find((s) => s.default)?.name ||
                product.packSizes?.[0]?.name ||
                "Standard";

              const isInQuote = quoteList.some(
                (item) => item.productId === product.id && item.packSize === selectedSize
              );

              return (
                <Card
                  key={product.id}
                  className="overflow-hidden flex flex-col hover:shadow-md transition-all group"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt || product.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <Badge variant="outline" className="bg-white/95 backdrop-blur-xs font-bold text-[11px] shadow-2xs">
                        {product.origin}
                      </Badge>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <Badge variant="default" className="bg-emerald-800/90 text-white font-bold text-[11px] shadow-2xs">
                        {product.stockStatus}
                      </Badge>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-mono text-[11px]">SKU: {product.sku}</span>
                      <span className="font-semibold text-emerald-800">{product.grade}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pack Size Selector */}
                    {product.packSizes && product.packSizes.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                          Pack / Case Size:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {product.packSizes.map((size) => {
                            const isCurrent = selectedSize === size.name;
                            return (
                              <button
                                key={size.name}
                                type="button"
                                onClick={() => handlePackSizeChange(product.id, size.name)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                                  isCurrent
                                    ? "bg-emerald-800 text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                              >
                                {size.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Zero Price Notice Box */}
                    <div className="mt-4 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-emerald-800" />
                        <span className="text-xs font-bold text-emerald-900">Wholesale Price:</span>
                      </div>
                      <Badge variant="success" className="bg-white text-emerald-800 border-emerald-200 shadow-2xs">
                        On Request
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <Button
                        onClick={() => addToQuote(product, selectedSize)}
                        className={`flex-1 font-bold text-xs sm:text-sm ${
                          isInQuote
                            ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                            : "bg-emerald-800 hover:bg-emerald-900 text-white"
                        }`}
                      >
                        {isInQuote ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>In Quote List (+)</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </Button>

                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => handleQuickWhatsApp(product, selectedSize)}
                        title={`Quick WhatsApp Enquiry for ${product.title}`}
                        className="hover:bg-emerald-100 hover:text-emerald-900"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

