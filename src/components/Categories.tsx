import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (category: 'all' | 'mens' | 'womens' | 'kids' | 'handloom') => void;
  onOpenInquiry: (topic?: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory, onOpenInquiry }) => {
  const departments = [
    {
      id: 'mens',
      title: 'Men\'s Readymade Fashion',
      subtitle: 'Mufti, Red Tape, Jockey & Raymond',
      description: 'Formal shirts, casual washed denims, polo t-shirts, active track pants, and comfortable innerwear tailored for modern daily life.',
      image: '/src/assets/images/category_mens_apparel_1791191845942.jpg',
      highlights: ['Premium Branded Denims', 'Formal Suiting & Shirting', 'Breathable Combed Cotton']
    },
    {
      id: 'handloom',
      title: 'Authentic Rajasthani Handloom',
      subtitle: 'Heritage Home Textiles & Fabrics',
      description: 'Handwoven pure cotton bedsheets, Jaipuri dohars, winter quilts (razai), unstitched suit fabrics, and traditional block prints from master artisans.',
      image: '/src/assets/images/category_handloom_textiles_1791191835078.jpg',
      highlights: ['Sanganeri & Bagru Prints', 'Mulmul All-Weather Dohars', 'Featherlight Jaipuri Quilts']
    },
    {
      id: 'womens',
      title: 'Women\'s Ethnic & Daily Wear',
      subtitle: 'Kurtis, Festive Sets & Dupattas',
      description: 'Vibrant ethnic suits, handcrafted Bandhani and Chanderi dupattas, festive lehengas, everyday comfortable kurtis, and celebration wear.',
      image: '/src/assets/images/category_ethnic_womens_1791191857814.jpg',
      highlights: ['Festive & Wedding Ensembles', 'Pure Cotton Daily Kurtis', 'Intricate Zari & Gotta Work']
    }
  ];

  return (
    <section id="categories" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Overview & Business Category
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight text-balance">
            Complete Wardrobe & Handloom Heritage Under One Roof
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            As Rajasthan’s premier Readymade Garment & Handloom Retailer, Deep Handloom bridges leading contemporary fashion brands with centuries-old handwoven textile traditions.
          </p>
        </div>

        {/* 3 Major Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="group bg-white border border-stone-200/90 rounded-lg overflow-hidden flex flex-col hover:border-amber-700/40 hover:shadow-md transition-all duration-300"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-amber-200">{dept.subtitle}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {dept.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-stone-100">
                  <div className="space-y-1.5 text-xs text-stone-600">
                    {dept.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onSelectCategory(dept.id as 'mens' | 'womens' | 'handloom')}
                      className="text-xs font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>Browse Products</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenInquiry(`Inquiry about ${dept.title}`)}
                      className="text-xs text-stone-500 hover:text-stone-900 underline underline-offset-2"
                    >
                      Inquire Stock
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Kids & Accessories Callout Banner */}
        <div className="mt-10 p-6 bg-amber-50/70 border border-amber-200/80 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-stone-900">
              Kids Readymade Wear & Wardrobe Accessories Also Available
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Complete family shopping with boys & girls festive kurtas, daily playwear, socks, handkerchiefs, stoles, and belts.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectCategory('kids')}
              className="px-4 py-2 text-xs font-semibold text-stone-900 bg-white border border-stone-300 hover:bg-stone-100 rounded-md transition-colors"
            >
              View Kids Wear
            </button>
            <button
              onClick={() => onOpenInquiry('Kids Collection & Accessories')}
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-md transition-colors"
            >
              Ask on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
