"use client";

import React from "react";
import { Phone, MessageSquare, Mail, Warehouse, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SiteConfig } from "@/types";
import { useQuote } from "@/context/QuoteContext";

interface DepotsAndContactProps {
  config: SiteConfig;
}

export function DepotsAndContact({ config }: DepotsAndContactProps) {
  const { setIsDrawerOpen } = useQuote();

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Direct Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Depots &amp; Order Desk
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Have an urgent requirement, need bulk pallet pricing, or want to discuss a trial order for your commercial kitchen or shop? Speak with our trade desk today.
            </p>

            <div className="flex flex-col gap-3 pt-2 text-sm">
              <a
                href={config.contact.phoneHref}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Order Hotline:</span>
                  <span className="font-bold text-white">{config.contact.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={config.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">WhatsApp Trade Desk:</span>
                  <span className="font-bold text-white">{config.contact.whatsappDisplay}</span>
                </div>
              </a>

              <a
                href={config.contact.emailHref}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Wholesale Email:</span>
                  <span className="font-bold text-white">{config.contact.email}</span>
                </div>
              </a>
            </div>

            <p className="text-xs text-slate-400 mt-1">
              Depot Operating Hours: {config.contact.hours}
            </p>
          </div>

          {/* Distribution Depots */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Fulfillment Hubs
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Distribution Depots</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.contact.depots.map((depot, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xs"
                >
                  <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                    <Warehouse className="w-5 h-5" />
                    <h4 className="text-base font-bold text-slate-900">{depot.name}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">{depot.location}</p>
                  <p className="text-xs text-slate-500 mt-1">{depot.coverage}</p>
                </div>
              ))}
            </div>

            {/* Quick Quote Callout */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/70 mt-2">
              <h4 className="text-sm font-bold text-white mb-1">
                Looking for container loads or scheduled daily drops?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                If you require full lorry pallets of basmati rice, chipping potatoes, or standing daily kitchen deliveries, our account coordinators will prepare a custom wholesale specification sheet.
              </p>
              <Button
                onClick={() => setIsDrawerOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
              >
                <Receipt className="w-4 h-4 mr-1.5" />
                Open Quote Enquiry Tray
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

