import React from "react";
import Link from "next/link";
import { SiteConfig } from "@/types";

interface FooterProps {
  config: SiteConfig;
}

export function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Live7 Wholesale"
              className="h-8 w-auto object-contain brightness-105"
            />
          </Link>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-medium">{config.brand.fullName}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-slate-400">
          <span>&copy; {config.brand.year} Live7. All rights reserved.</span>
          <a href="#catalog" className="hover:text-white transition-colors">
            Catalog
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
