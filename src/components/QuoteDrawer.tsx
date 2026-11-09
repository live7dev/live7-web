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
          `${i + 1}. ${item.title} (${item.packSize}) x ${item.quantity} [SKU: ${item.sku}]`
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
      `*Business Name:* ${business || "Not specified"}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Delivery Postcode:* ${postcode || "N/A"}\n\n` +
      `*Requested Items:*\n${getItemsSummary()}\n\n` +
      `*Notes:* ${notes || "Standard wholesale pricing requested"}\n` +
      `--------------------------------------`;

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
            Direct depot quotation • Rapid response during trade hours
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
          {quoteList.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Your quote list is empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                Browse our catalog and select "+ Add to Quote" on any item.
              </p>
              <Button
                size="sm"
                onClick={() => setIsDrawerOpen(false)}
                className="mt-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold px-4"
              >
                Browse Catalog
              </Button>
            </div>
          ) : (
            <>
              {/* Selected Items */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Selected Items ({quoteList.length})
                  </span>
                  <button
                    type="button"
                    onClick={clearQuote}
                    className="text-xs text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {quoteList.map((item, idx) => (
                    <div
                      key={`${item.productId}-${item.packSize}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-200/80"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-11 h-11 rounded-lg object-cover shrink-0 bg-slate-200"
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {item.title}
                          </h4>
                          <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded mt-0.5">
                            {item.packSize}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(idx, -1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(idx, 1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs cursor-pointer"
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
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="border-t border-slate-200/80 pt-4 flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Contact Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Contact Name *
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Campbell"
                      className="h-9 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Business Name
                    </label>
                    <Input
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="e.g. Royal Curry Lounge"
                      className="h-9 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7911 123456"
                      type="tel"
                      className="h-9 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Delivery Postcode
                    </label>
                    <Input
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      placeholder="e.g. NW10 7PA"
                      className="h-9 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Notes / Delivery Timing
                  </label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Need Monday pre-7am drops, trial 5 sacks first."
                    rows={2}
                    className="text-xs min-h-[65px]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col gap-2">
                  <Button
                    onClick={handleSendWhatsApp}
                    variant="whatsapp"
                    className="w-full font-bold text-xs sm:text-sm h-11 rounded-xl"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    Send Quote via WhatsApp
                  </Button>

                  <Button
                    onClick={handleSendEmail}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs h-10 rounded-xl"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1.5" />
                    Submit via Email
                  </Button>

                  <Button
                    onClick={handleCopySummary}
                    variant="ghost"
                    className="w-full text-slate-500 hover:text-slate-900 text-xs h-8"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1 text-emerald-700" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1" />
                        <span>Copy Summary</span>
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
