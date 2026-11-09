"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, Copy, Trash2, ShoppingBag, Plus, Minus, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useQuote } from "@/context/QuoteContext";
import { SiteConfig } from "@/types";

interface QuoteDrawerProps {
  config: SiteConfig;
}

export function QuoteDrawer({ config }: QuoteDrawerProps) {
  const {
    quoteList,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromQuote,
    clearQuote,
  } = useQuote();

  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const getItemsSummary = () => {
    return quoteList
      .map(
        (item, i) =>
          `${i + 1}. ${item.title} (${item.packSize}) x ${item.quantity} units [SKU: ${item.sku}]`
      )
      .join("\n");
  };

  const handleSendWhatsApp = () => {
    if (quoteList.length === 0) return;
    if (!name.trim() || !phone.trim()) {
      alert("Please provide at least your Contact Name and Phone number.");
      return;
    }

    const cleanNumber = config.contact.whatsapp.replace(/[^0-9]/g, "");
    const message =
      `*LIVE7 WHOLESALE - NEW QUOTE REQUEST*\n` +
      `--------------------------------------\n` +
      `*Contact Name:* ${name}\n` +
      `*Business Name / Type:* ${business || "Not specified"}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Delivery Postcode:* ${postcode || "N/A"}\n\n` +
      `*Requested Items (Zero Price Catalog):*\n${getItemsSummary()}\n\n` +
      `*Additional Requirements:* ${notes || "Standard wholesale inquiry"}\n` +
      `--------------------------------------\n` +
      `Please provide current wholesale prices and depot dispatch timetable.`;

    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSendEmail = () => {
    if (quoteList.length === 0) return;
    if (!name.trim() || !phone.trim()) {
      alert("Please provide at least your Contact Name and Phone number.");
      return;
    }

    const subject = encodeURIComponent(`Wholesale Quote Request - ${business || name}`);
    const body = encodeURIComponent(
      `Live7 Wholesale Trade Team,\n\n` +
        `I would like to request wholesale pricing and availability for the following items:\n\n` +
        `${getItemsSummary()}\n\n` +
        `Client Details:\n` +
        `- Contact Name: ${name}\n` +
        `- Business: ${business}\n` +
        `- Phone: ${phone}\n` +
        `- Email: ${email}\n` +
        `- Delivery Postcode: ${postcode}\n` +
        `- Notes / Timetable: ${notes}\n\n` +
        `Thank you,\n${name}`
    );

    window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    if (quoteList.length === 0) return;
    const text = `Live7 Wholesale Quote Items:\n${getItemsSummary()}\n\nContact Live7 Foods: ${config.contact.phone}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col h-full bg-white">
        <SheetHeader className="p-5 bg-slate-900 text-white">
          <SheetTitle className="text-white text-base sm:text-lg">
            Wholesale Quote Request
          </SheetTitle>
          <SheetDescription className="text-slate-400 text-xs">
            Zero-price trade inquiry • Direct depot response within 60 mins
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-5">
          {quoteList.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Your Quote List is Empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                Browse our wholesale catalog and click "+ Add to Quote" on any vegetable, fruit, or grain item.
              </p>
              <Button
                size="sm"
                onClick={() => setIsDrawerOpen(false)}
                className="mt-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold"
              >
                Browse Products
              </Button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Selected Items ({quoteList.length})
                  </span>
                  <button
                    type="button"
                    onClick={clearQuote}
                    className="text-[11px] text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {quoteList.map((item, idx) => (
                    <div
                      key={`${item.productId}-${item.packSize}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-lg object-cover shrink-0 bg-slate-200"
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {item.title}
                          </h4>
                          <Badge variant="brand" className="text-[10px] px-1.5 py-0 mt-0.5">
                            {item.packSize}
                          </Badge>
                          <span className="block text-[11px] text-slate-400 font-mono mt-0.5">
                            SKU: {item.sku}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(idx, -1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(idx, 1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromQuote(idx)}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="border-t border-slate-200 pt-4 flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Your Trade Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Contact Name *
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Campbell"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Business Name
                    </label>
                    <Input
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="e.g. Royal Curry Lounge"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7911 123456"
                      type="tel"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="orders@mybusiness.co.uk"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Delivery Postcode / Town
                  </label>
                  <Input
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. NW10 7PA or Birmingham B6"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Delivery Notes / Requirements
                  </label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Pre-7am drops preferred, trial 5 sacks first."
                    rows={2}
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col gap-2">
                  <Button
                    onClick={handleSendWhatsApp}
                    variant="whatsapp"
                    className="w-full font-bold"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    Send Quote Request via WhatsApp
                  </Button>

                  <Button
                    onClick={handleSendEmail}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold"
                  >
                    <Mail className="w-4 h-4 mr-1.5" />
                    Submit via Email
                  </Button>

                  <Button
                    onClick={handleCopySummary}
                    variant="secondary"
                    className="w-full font-semibold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1.5 text-emerald-700" />
                        <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1.5" />
                        <span>Copy Quote Summary to Clipboard</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

