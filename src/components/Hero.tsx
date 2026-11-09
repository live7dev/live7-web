"use client";

import React from "react";
import { Truck, Snowflake, Handshake, FileSpreadsheet, ArrowRight, Store, ShoppingBag, PhoneCall, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/types";
import { useQuote } from "@/context/QuoteContext";

interface HeroProps {
  config: SiteConfig;
}

export function Hero({ config }: HeroProps) {
  const { setIsDrawerOpen } = useQuote();

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Details */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="brand" className="px-3 py-1 text-xs uppercase tracking-wide">
                {config.brand.badge}
              </Badge>
              <span className="text-xs text-slate-500 font-medium">
                London & Midlands Logistics
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {config.brand.heroTitle}{" "}
              <span className="text-emerald-800">{config.brand.heroHighlight}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {config.brand.heroDescription}
            </p>

            {/* Zero Price Notice Banner */}
            <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-slate-900">Wholesale Daily Rates: </strong>
                <span>{config.brand.heroNotice}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold">
                <a href="#catalog">
                  Explore Catalog
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsDrawerOpen(true)}
                className="font-bold"
              >
                Open Quote List
              </Button>

              <Button asChild variant="whatsapp" size="lg" className="font-bold">
                <a href={config.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Instant WhatsApp Rates
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 mb-0.5">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs font-bold text-slate-800">Next-Day Run</span>
                </div>
                <p className="text-[11px] text-slate-500">London & Midlands fleet</p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 mb-0.5">
                  <Snowflake className="w-4 h-4" />
                  <span className="text-xs font-bold text-slate-800">Cold Chain</span>
                </div>
                <p className="text-[11px] text-slate-500">4°C chilled dispatch</p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 mb-0.5">
                  <Handshake className="w-4 h-4" />
                  <span className="text-xs font-bold text-slate-800">Trial Orders</span>
                </div>
                <p className="text-[11px] text-slate-500">Low MOQs for testing</p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 mb-0.5">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span className="text-xs font-bold text-slate-800">Zero Markups</span>
                </div>
                <p className="text-[11px] text-slate-500">Direct depot pricing</p>
              </div>
            </div>
          </div>

          {/* Right Spotlight Panel */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <Badge variant="success">New Trade Accounts Welcome</Badge>
                <span className="text-xs text-slate-500 font-mono">Live7 Fresh Foods</span>
              </div>

              <div className="py-4 flex flex-col gap-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">For Restaurants & Caterers</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Heavy 20kg rice sacks, 25kg potato sacks, fresh chillies, and bulk cooking onions delivered directly to your prep door.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">For Independent Grocers</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Air-freighted Alphonso mangoes, crisp gala apples, and pre-packed staple grains ready for your customer shelves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Personal Founder Contact</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Speak directly with our depot coordinators to arrange standing weekly drops or sample crates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Depot Desks Open: <strong>{config.contact.hours}</strong></span>
                <a href="#contact" className="font-bold text-emerald-800 hover:underline">
                  Get In Touch &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

