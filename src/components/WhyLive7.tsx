"use client";

import React from "react";
import { Handshake, Banknote, Truck, Package } from "lucide-react";
import { Advantage } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface WhyLive7Props {
  advantages: Advantage[];
}

const iconMap: Record<string, React.ReactNode> = {
  handshake: <Handshake className="w-5 h-5" />,
  request_quote: <Banknote className="w-5 h-5" />,
  local_shipping: <Truck className="w-5 h-5" />,
  inventory_2: <Package className="w-5 h-5" />,
};

export function WhyLive7({ advantages }: WhyLive7Props) {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Our Trade Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            The Advantage of Partnering with an Emerging Merchant
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            As a newly launched wholesale supplier, our reputation is built on every single crate we dispatch. We offer the agility, responsiveness, and genuine partnership that large distributors often overlook.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((adv, idx) => (
            <Card key={idx} className="bg-slate-50/70 border-slate-200">
              <CardHeader className="p-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                  {iconMap[adv.icon] || <Handshake className="w-5 h-5" />}
                </div>
                <CardTitle className="text-base text-slate-900 font-bold">
                  {adv.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-slate-600 mt-1">
                  {adv.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

