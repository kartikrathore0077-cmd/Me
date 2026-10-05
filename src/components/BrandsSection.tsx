import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { FEATURED_BRANDS } from '../data/storeData';

interface BrandsSectionProps {
  onOpenInquiry: (brandName: string) => void;
  onFilterByBrand: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onOpenInquiry, onFilterByBrand }) => {
  return (
    <section id="brands" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Branded Collection
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              India’s Most Trusted Fashion Brands
            </h2>
            <p className="mt-3 text-stone-600 text-base leading-relaxed">
              No need to travel to Jodhpur or Jaipur for authentic branded apparel. Deep Handloom brings original label fashion directly to Merta City and Gotan.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-600 bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-lg shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-semibold text-stone-900 block">100% Authentic Guarantee</span>
              <span>Direct factory authorized distribution</span>
            </div>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group p-5 bg-stone-50/70 hover:bg-white border border-stone-200 hover:border-amber-700/50 rounded-lg flex flex-col justify-between transition-all duration-200 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
                    {brand.name}
                  </span>
                  <Award className="w-4 h-4 text-stone-400 group-hover:text-amber-700 transition-colors" />
                </div>
                <div className="text-xs font-medium text-stone-700">
                  {brand.category}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  {brand.highlight}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between">
                <button
                  onClick={() => onFilterByBrand(brand.name)}
                  className="text-[11px] font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  View Styles
                </button>
                <button
                  onClick={() => onOpenInquiry(`Check size availability for ${brand.name}`)}
                  className="text-[11px] text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Promise Callouts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-100">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Extensive Size Inclusivity</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                From Small to 4XL & 5XL in shirts, trousers, and ethnic suits. Personal fitting and on-site alteration support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Seasonal Catalog Refreshes</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Fresh stocks arriving monthly ahead of Diwali, Eid, Holi, winter weddings, and peak summer seasons.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Transparent Pricing & Discounts</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Fair retail pricing matching official brand MRPs with seasonal festival offers and package savings.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
