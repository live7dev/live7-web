import React from "react";
import { SiteConfig } from "@/types";

interface FooterProps {
  config: SiteConfig;
}

export function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-8 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-800 flex items-center justify-center text-white font-bold text-xs">
            {config.brand.shortName}
          </div>
          <span className="font-bold text-slate-200">{config.brand.name}</span>
          <span className="opacity-40">|</span>
          <span>{config.brand.fullName}</span>
        </div>

        <div className="flex items-center gap-4">
          <span>&copy; {config.brand.year} Live7 Foods. All rights reserved.</span>
          <a href="#catalog" className="hover:text-white transition-colors">
            Catalog
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

