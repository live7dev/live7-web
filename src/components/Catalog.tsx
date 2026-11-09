"use client";

import React, { useState } from "react";
import { Plus, Check, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  return (
    <section id="catalog" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Produce &amp; Grains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Wholesale Catalog
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Choose your required pack size and add items to your quote request.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400">
              {filteredProducts.length} items available
            </span>
          </div>
        </div>

        {/* Minimal Category Filter Pills */}
        <div id="categories" className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 px-4 text-center bg-white rounded-2xl border border-slate-200/80">
            <SearchX className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No products match your search</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Looking for a custom line, spice, or bulk container? Connect with our trade desk directly.
            </p>
            <div className="mt-5 flex justify-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        ) : (
          /* Clean Minimal Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
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
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col hover:border-slate-300 transition-all hover:shadow-xs group"
                >
                  {/* Clean Image */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt || product.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-slate-700 shadow-2xs">
                        {product.origin}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span className="font-mono">SKU: {product.sku}</span>
                      <span className="font-semibold text-emerald-800">{product.grade}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pack Size Selector */}
                    {product.packSizes && product.packSizes.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                          Pack Size
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {product.packSizes.map((size) => {
                            const isCurrent = selectedSize === size.name;
                            return (
                              <button
                                key={size.name}
                                type="button"
                                onClick={() => handlePackSizeChange(product.id, size.name)}
                                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                                  isCurrent
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                              >
                                {size.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Price on Request & Action */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                          Price
                        </span>
                        <span className="text-xs font-bold text-emerald-800">
                          On Request
                        </span>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => addToQuote(product, selectedSize)}
                        className={`rounded-xl text-xs font-bold transition-all ${
                          isInQuote
                            ? "bg-emerald-800 hover:bg-emerald-900 text-white"
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                      >
                        {isInQuote ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-1" />
                            <span>In Quote</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 mr-1" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
