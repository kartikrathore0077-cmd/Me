import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Star } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/storeData';

interface FooterProps {
  onOpenInquiry: (topic?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              Deep Handloom
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Merta City & Gotan’s premier retail destination for multi-brand readymade fashion and authentic Rajasthani handwoven textiles.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white tabular-nums">4.2 / 5.0</span>
              <span className="text-stone-400">· Over 300+ customer reviews</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Direct Showroom Consultation')}
                className="px-3.5 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                Inquire or Order on WhatsApp
              </button>
            </div>
          </div>

          {/* Column 2: Main Store (Merta City / Gagrana) */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Main Store (Merta City / Gagrana)
            </div>
            <div className="text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <span>
                  Gotan Borunda Circle, Opposite Government College, Gagrana, Merta - 341510, Nagaur District, Rajasthan
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="font-mono">+91 94145 28710</span>
              </div>
              <div className="text-[11px] text-amber-300/80">
                Landmark: Opposite Government College
              </div>
            </div>
          </div>

          {/* Column 3: Branch (Gotan) & Hours */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Branch Showroom (Gotan)
            </div>
            <div className="text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <span>
                  MDR58, Veer Teja Colony, Gotan, Nagaur - 342902, Rajasthan, India
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span className="font-mono">+91 98292 14350</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-medium">Operating Hours</span>
              </div>
              <div>Mon: 9:00 AM – 9:00 PM</div>
              <div>Tue – Sat: 9:00 AM – 7:00 PM (or till 9:30 PM seasonal)</div>
              <div className="text-amber-300/80">Sunday: Closed</div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Specialties */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Categories & Brands
            </div>
            <ul className="text-xs text-stone-400 space-y-2">
              <li>
                <button
                  onClick={() => onNavigateToSection('brands')}
                  className="hover:text-white transition-colors"
                >
                  Jockey, Mufti & Red Tape Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('handloom')}
                  className="hover:text-white transition-colors"
                >
                  Pure Cotton Bedsheets & Jaipuri Dohars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('categories')}
                  className="hover:text-white transition-colors"
                >
                  Men, Women & Kids Readymade Outfits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('locations')}
                  className="hover:text-white transition-colors"
                >
                  Parking & Showroom Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('reviews')}
                  className="hover:text-white transition-colors"
                >
                  Customer Reviews (300+ Verified)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Deep Handloom (Deep Handloom Merta City). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Readymade Garment & Handloom Retailers</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
