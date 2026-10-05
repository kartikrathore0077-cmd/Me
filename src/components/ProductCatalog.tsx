import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageSquare, Check, X } from 'lucide-react';
import { PRODUCT_CATALOG } from '../data/storeData';
import { ProductItem } from '../types';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenInquiry: (topic?: string) => void;
  filterBrand?: string;
  onClearBrandFilter?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenInquiry,
  filterBrand,
  onClearBrandFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'mens', label: 'Men\'s Readymade' },
    { id: 'womens', label: 'Women\'s Ethnic' },
    { id: 'handloom', label: 'Handloom & Living' },
    { id: 'kids', label: 'Kids Wear' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCT_CATALOG.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesBrand = !filterBrand || item.brand?.toLowerCase().includes(filterBrand.toLowerCase());
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, filterBrand, searchQuery]);

  return (
    <section id="handloom" className="py-20 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Curated Showcase
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Featured Readymade Garments & Handloom Textiles
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-xl">
              Preview popular styles available across our Merta City and Gotan showrooms. Inquire directly for current size availability and custom orders.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search garments, dohars, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800 text-stone-900 placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Filter Bar: Segmented controls (interactive buttons with click handlers) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-200">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filterBrand && (
            <div className="flex items-center gap-2 text-xs text-amber-900 bg-amber-100/70 px-3 py-1.5 rounded-md">
              <span>Filtered by: <strong>{filterBrand}</strong></span>
              <button
                onClick={onClearBrandFilter}
                className="text-stone-500 hover:text-stone-900"
                title="Clear brand filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-base font-medium text-stone-700">No matching items found.</p>
            <p className="text-xs text-stone-500 mt-1">Try resetting your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
                onClearBrandFilter?.();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-md hover:bg-stone-100"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-stone-200/90 rounded-lg overflow-hidden flex flex-col justify-between hover:border-amber-700/50 hover:shadow-xs transition-all duration-200"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 text-[11px] font-medium bg-stone-900/80 text-white px-2 py-0.5 rounded-sm backdrop-blur-xs">
                    {product.brand}
                  </div>
                  <button
                    onClick={() => setActiveProduct(product)}
                    className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    aria-label={`View details for ${product.title}`}
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-stone-900 text-xs font-semibold rounded-md shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </span>
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Unboxed metadata with typographic separator */}
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1.5">
                      <span>{product.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>In Stock</span>
                    </div>

                    <h3 className="font-medium text-sm text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-stone-400 block">Est. Showroom Price</span>
                      <span className="font-semibold text-sm text-stone-900 font-mono tabular-nums">
                        {product.priceEstimate}
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(`Inquiry about ${product.title} (${product.brand})`)}
                      className="px-2.5 py-1.5 text-xs font-medium text-amber-900 bg-amber-50 hover:bg-amber-100 rounded-md transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3 text-amber-700" />
                      <span>Inquire</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg max-w-xl w-full overflow-hidden shadow-xl border border-stone-200">
            <div className="relative aspect-[16/9] bg-stone-100">
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-3 right-3 p-1.5 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                  {activeProduct.categoryLabel} · {activeProduct.brand}
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
                  {activeProduct.title}
                </h3>
                <div className="mt-2 text-sm font-mono tabular-nums text-stone-900 font-semibold">
                  Estimated Range: {activeProduct.priceEstimate}
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {activeProduct.description}
              </p>

              <div>
                <div className="text-xs font-medium text-stone-700 mb-2">Key Quality Highlights:</div>
                <div className="flex flex-wrap gap-2 text-xs text-stone-700">
                  {activeProduct.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-sm">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProduct(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const prod = activeProduct;
                    setActiveProduct(null);
                    onOpenInquiry(`Check stock & sizes for: ${prod.title}`);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-950 rounded-md transition-colors"
                >
                  Ask Staff for Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
