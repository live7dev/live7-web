"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Search, Receipt, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/types";
import { useQuote } from "@/context/QuoteContext";

interface NavbarProps {
  config: SiteConfig;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function Navbar({ config, searchQuery, setSearchQuery }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsDrawerOpen } = useQuote();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Sleek Minimal Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <p className="truncate font-medium text-slate-200">
            {config.announcements.topStrip}
          </p>
          <div className="hidden md:flex items-center gap-5 shrink-0 text-slate-300">
            <a
              href={config.contact.phoneHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{config.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={config.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Trade Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Live7 Wholesale"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#catalog" className="hover:text-emerald-800 transition-colors">
            Catalog
          </a>
          <a href="#about" className="hover:text-emerald-800 transition-colors">
            Why Live7
          </a>
          <a href="#faq" className="hover:text-emerald-800 transition-colors">
            Wholesale FAQ
          </a>
          <a href="#contact" className="hover:text-emerald-800 transition-colors">
            Depots & Contact
          </a>
        </nav>

        {/* Minimal Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-xs items-center bg-slate-50 hover:bg-slate-100/80 rounded-full px-3.5 py-2 border border-slate-200/80 focus-within:border-emerald-700 focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search produce & grains..."
            className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-4 h-10 font-semibold shadow-xs"
          >
            <Receipt className="w-4 h-4" />
            <span className="hidden sm:inline">Quote Request</span>
            {totalCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-emerald-400 text-slate-950 rounded-full text-xs font-bold">
                {totalCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-700 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-150">
          <div className="flex sm:hidden items-center bg-slate-100 rounded-xl px-3 py-2 border border-slate-200">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog items..."
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-2 rounded-lg hover:bg-slate-100 hover:text-emerald-800"
            >
              Browse Catalog
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-2 rounded-lg hover:bg-slate-100 hover:text-emerald-800"
            >
              Why Live7
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-2 rounded-lg hover:bg-slate-100 hover:text-emerald-800"
            >
              Wholesale FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-2 rounded-lg hover:bg-slate-100 hover:text-emerald-800"
            >
              Depots & Contact
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Direct Depot Desks</span>
            <a href={config.contact.phoneHref} className="text-emerald-800 font-bold">
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
