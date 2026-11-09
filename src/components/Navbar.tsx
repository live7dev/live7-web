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
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      {/* Top Strip */}
      <div className="bg-emerald-900 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate font-medium">
              {config.announcements.topStrip}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 font-medium">
            <a
              href={config.contact.phoneHref}
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{config.contact.phoneDisplay}</span>
            </a>
            <span className="opacity-40">|</span>
            <a
              href={config.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-800 group-hover:bg-emerald-900 transition-colors flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            {config.brand.shortName}
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight">
              {config.brand.name}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Fresh Produce & Grains
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#catalog" className="hover:text-emerald-800 transition-colors">
            Catalog
          </a>
          <a href="#categories" className="hover:text-emerald-800 transition-colors">
            Categories
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

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-xs lg:max-w-md items-center bg-slate-100 rounded-xl px-3 py-1.5 border border-slate-200 focus-within:border-emerald-700 focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vegetables, fruits, rice..."
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            onClick={() => setIsDrawerOpen(true)}
            className="relative bg-emerald-800 hover:bg-emerald-900 text-white font-bold"
          >
            <Receipt className="w-4 h-4" />
            <span className="hidden sm:inline">Quote Request</span>
            {totalCount > 0 && (
              <Badge className="bg-emerald-400 text-slate-900 hover:bg-emerald-400 px-1.5 py-0 text-[11px] font-extrabold ml-1">
                {totalCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-150">
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
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-2 rounded-lg hover:bg-slate-100 hover:text-emerald-800"
            >
              Categories
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-2 rounded-lg hover:bg-slate-100 hover:text-emerald-800"
            >
              Why Live7 (Newly Launched Advantage)
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

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>London & Midlands Fleet</span>
            <a href={config.contact.phoneHref} className="text-emerald-800 font-bold">
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

