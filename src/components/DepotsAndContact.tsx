"use client";

import React from "react";
import { Phone, MessageSquare, Mail, Warehouse, Clock } from "lucide-react";
import { SiteConfig } from "@/types";

interface DepotsAndContactProps {
  config: SiteConfig;
}

export function DepotsAndContact({ config }: DepotsAndContactProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                Order Desk &amp; Depots
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Need bulk sack pricing, standing deliveries, or custom container consignments? Reach out directly to our trade desk.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href={config.contact.phoneHref}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Order Hotline:</span>
                  <span className="font-semibold text-white text-sm">{config.contact.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={config.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">WhatsApp Trade Desk:</span>
                  <span className="font-semibold text-white text-sm">{config.contact.whatsappDisplay}</span>
                </div>
              </a>

              <a
                href={config.contact.emailHref}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Wholesale Email:</span>
                  <span className="font-semibold text-white text-sm">{config.contact.email}</span>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Operating Hours: {config.contact.hours}</span>
            </div>
          </div>

          {/* Right: Distribution Depots */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Logistics Hubs
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1">
                Distribution Hubs
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.contact.depots.map((depot, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                      <Warehouse className="w-4 h-4" />
                      <h4 className="text-sm font-bold text-white">{depot.name}</h4>
                    </div>
                    <p className="text-xs text-slate-300 font-normal leading-relaxed">{depot.location}</p>
                    <p className="text-xs text-slate-400 mt-2 font-light">{depot.coverage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 text-xs text-slate-400 mt-2">
              <span className="text-slate-300 font-semibold">Next-Day UK Dispatch: </span>
              Orders confirmed before cut-off are loaded overnight onto temperature-controlled vans for early morning trade delivery.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
