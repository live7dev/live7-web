"use client";

import React from "react";
import { ArrowRight, Truck, Snowflake, ShieldCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/types";
import { useQuote } from "@/context/QuoteContext";

interface HeroProps {
  config: SiteConfig;
}

export function Hero({ config }: HeroProps) {
  const { setIsDrawerOpen } = useQuote();

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span>Newly Launched Wholesale Supply Partner</span>
        </div>

        {/* Clean, Impactful Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl">
          Fresh Farm Produce &amp; Bulk Grains.{" "}
          <span className="text-emerald-800 block sm:inline">Direct Depot Logistics.</span>
        </h1>

        {/* Crisp Subtitle */}
        <p className="mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
          Supplying UK restaurants, caterers, and independent grocers with direct-sourced vegetables, seasonal fruits, and bulk basmati rice. All wholesale prices provided directly on request.
        </p>

        {/* Clean Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Button
            asChild
            size="lg"
            className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-7 font-bold shadow-sm"
          >
            <a href="#catalog">
              Browse Catalog
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsDrawerOpen(true)}
            className="rounded-full px-6 font-semibold border-slate-300 text-slate-800 hover:bg-slate-100"
          >
            Request a Quote
          </Button>
        </div>

        {/* WhatsApp Subtext Link */}
        <a
          href={config.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-800 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Need rapid rates? Chat directly with our trade desk on WhatsApp</span>
        </a>

        {/* Minimalist Trust Points Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center">
          <div className="flex sm:flex-col items-center sm:justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Next-Day Depot Dispatch</h4>
              <p className="text-xs text-slate-500 mt-0.5">London &amp; Midlands fleet</p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Snowflake className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Refrigerated Cold Chain</h4>
              <p className="text-xs text-slate-500 mt-0.5">Continuous 4°C temperature log</p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Flexible Trial Orders</h4>
              <p className="text-xs text-slate-500 mt-0.5">Low MOQs for testing new accounts</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
