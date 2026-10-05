import React from 'react';
import { MapPin, Star, Clock, Sparkles, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import { getStoreStatus } from '../utils/storeHours';

interface HeroProps {
  onOpenInquiry: (topic?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onNavigateToSection }) => {
  const storeStatus = getStoreStatus();

  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_deep_handloom_1791191821623.jpg"
          alt="Deep Handloom Showroom Interior in Merta City"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.08] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl space-y-6">
          
          {/* Metadata Bar (No pills, clean typographic text with separators) */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium tracking-wide text-amber-200/90">
            <span>Merta City & Gotan, Rajasthan</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Readymade Garments & Handlooms</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Est. Family Heritage</span>
          </div>

          {/* Main Title & Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
            Where Modern Brand Fashion Meets Timeless Rajasthani Handloom
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
            Nagaur district’s trusted destination for multi-brand readymade apparel for men, women, and kids — featuring Jockey, Mufti, Red Tape — paired with handwoven pure cotton bedsheets, dohars, and heritage fabrics.
          </p>

          {/* Live Store Status & Proof Bar */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-stone-300">
            <div className="inline-flex items-center gap-2.5 py-1 px-0 text-stone-200">
              <span className={`w-2.5 h-2.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-semibold text-white">{storeStatus.statusText}</span>
              <span className="text-stone-400">({storeStatus.detailText})</span>
            </div>

            <span className="hidden sm:inline text-stone-600">|</span>

            <div className="inline-flex items-center gap-1.5 text-amber-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/50'}`} />
                ))}
              </div>
              <span className="font-bold text-white tabular-nums">4.2 / 5.0</span>
              <span className="text-stone-300">(300+ Verified Customer Reviews)</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigateToSection('categories')}
              className="px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateToSection('locations')}
              className="px-5 py-3.5 text-sm font-medium text-white hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/20 rounded-md transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Visit Showrooms (Merta & Gotan)</span>
            </button>

            <button
              onClick={() => onOpenInquiry('Product & Size Inquiry')}
              className="px-4 py-3.5 text-sm font-medium text-stone-300 hover:text-white hover:underline transition-colors"
            >
              Check Availability via WhatsApp
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Genuine Branded Wear</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Authentic Handwoven Textiles</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Spacious Dedicated Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Open Mon 9–9, Tue–Sat 9–7</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
