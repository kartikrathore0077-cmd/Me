import React, { useState } from 'react';
import { MapPin, Phone, Menu, X, Clock } from 'lucide-react';
import { getStoreStatus } from '../utils/storeHours';

interface NavbarProps {
  onOpenInquiry: (topic?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onNavigateToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getStoreStatus();

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-amber-950 transition-colors">
              Deep Handloom
            </span>
          </a>

          {/* Zone 2: 4-6 nav links, 1-2 word labels */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={() => handleNavClick('categories')}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('brands')}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Brands
            </button>
            <button
              onClick={() => handleNavClick('handloom')}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Handloom
            </button>
            <button
              onClick={() => handleNavClick('locations')}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Locations
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Reviews
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('locations')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>Merta & Gotan</span>
            </button>
            <button
              onClick={() => onOpenInquiry('General Store Inquiry')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-950 rounded-md transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Store</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 rounded-md hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-[#FAFAF8] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs text-stone-600 pb-2 border-b border-stone-200">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>{status.statusText} · {status.detailText}</span>
          </div>
          <div className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <button
              onClick={() => handleNavClick('categories')}
              className="text-left py-2 hover:text-amber-900"
            >
              Collections & Garments
            </button>
            <button
              onClick={() => handleNavClick('brands')}
              className="text-left py-2 hover:text-amber-900"
            >
              Branded Wear (Jockey, Mufti, Red Tape)
            </button>
            <button
              onClick={() => handleNavClick('handloom')}
              className="text-left py-2 hover:text-amber-900"
            >
              Authentic Handloom & Fabrics
            </button>
            <button
              onClick={() => handleNavClick('locations')}
              className="text-left py-2 hover:text-amber-900"
            >
              Showroom Locations & Hours
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left py-2 hover:text-amber-900"
            >
              Customer Reviews (4.2 Rating)
            </button>
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Call Showroom');
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-md shadow-xs"
            >
              Call or WhatsApp Showroom
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
