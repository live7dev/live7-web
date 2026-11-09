"use client";

import React from "react";
import { Handshake, Banknote, Truck, Package } from "lucide-react";
import { Advantage } from "@/types";

interface WhyLive7Props {
  advantages: Advantage[];
}

const iconMap: Record<string, React.ReactNode> = {
  handshake: <Handshake className="w-5 h-5 text-emerald-800" />,
  request_quote: <Banknote className="w-5 h-5 text-emerald-800" />,
  local_shipping: <Truck className="w-5 h-5 text-emerald-800" />,
  inventory_2: <Package className="w-5 h-5 text-emerald-800" />,
};

export function WhyLive7({ advantages }: WhyLive7Props) {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Our Trade Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Built for Modern Food Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            As a newly launched wholesale supplier, we focus on genuine customer care, transparent daily pricing, and fast morning dispatch without corporate bureaucracy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-4">
                  {iconMap[adv.icon] || <Handshake className="w-5 h-5 text-emerald-800" />}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
