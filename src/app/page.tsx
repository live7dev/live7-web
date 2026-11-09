"use client";

import React, { useState } from "react";
import siteConfigData from "../../data/site-config.json";
import categoriesData from "../../data/categories.json";
import productsData from "../../data/products.json";
import faqData from "../../data/faq.json";

import { SiteConfig, Category, Product, FAQ } from "@/types";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { WhyLive7 } from "@/components/WhyLive7";
import { FAQSection } from "@/components/FAQSection";
import { DepotsAndContact } from "@/components/DepotsAndContact";
import { Footer } from "@/components/Footer";
import { QuoteDrawer } from "@/components/QuoteDrawer";
import { MobileQuoteBar } from "@/components/MobileQuoteBar";

const config = siteConfigData as unknown as SiteConfig;
const categories = categoriesData as unknown as Category[];
const products = productsData as unknown as Product[];
const faqs = faqData as unknown as FAQ[];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        config={config}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-1">
        <Hero config={config} />
        <Catalog
          products={products}
          categories={categories}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          whatsappNumber={config.contact.whatsapp}
        />
        <WhyLive7 advantages={config.advantages} />
        <FAQSection faqs={faqs} />
        <DepotsAndContact config={config} />
      </main>

      <Footer config={config} />

      <QuoteDrawer config={config} />
      <MobileQuoteBar />
    </div>
  );
}

