/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { BrandsSection } from './components/BrandsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomerReviews } from './components/CustomerReviews';
import { StoreLocations } from './components/StoreLocations';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('General Store Inquiry');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (topic?: string) => {
    if (topic) setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleNavigateToSection('handloom');
  };

  const handleFilterByBrand = (brandName: string) => {
    setSelectedBrand(brandName);
    setSelectedCategory('all');
    handleNavigateToSection('handloom');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-stone-900 selection:bg-amber-100 selection:text-amber-950 font-sans">
      
      {/* 3-Zone Top Navigation Contract */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Categories & Specialties Overview */}
        <Categories
          onSelectCategory={handleCategorySelect}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Branded Collections (Jockey, Mufti, Red Tape) */}
        <BrandsSection
          onOpenInquiry={handleOpenInquiry}
          onFilterByBrand={handleFilterByBrand}
        />

        {/* Featured Products & Handloom Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenInquiry={handleOpenInquiry}
          filterBrand={selectedBrand}
          onClearBrandFilter={() => setSelectedBrand(undefined)}
        />

        {/* Customer Reviews & Reputation */}
        <CustomerReviews
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Locations & Operating Hours */}
        <StoreLocations
          onOpenInquiry={handleOpenInquiry}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Inquiry & WhatsApp Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialTopic={inquiryTopic}
      />

    </div>
  );
}
