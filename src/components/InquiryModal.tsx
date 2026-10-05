import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, Check, MapPin } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/storeData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'General Store Inquiry'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredStore, setPreferredStore] = useState('main-merta');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Allow user to reset or view confirmed state
    }, 500);
  };

  const handleWhatsAppRedirect = () => {
    const selectedStore = STORE_LOCATIONS.find(s => s.id === preferredStore) || STORE_LOCATIONS[0];
    const text = encodeURIComponent(
      `Hello Deep Handloom (${selectedStore.city}), I am inquiring about: ${topic}. My Name: ${name || 'Shopper'}. ${message ? `Message: ${message}` : ''}`
    );
    // Real standard WhatsApp click to chat URL
    window.open(`https://wa.me/919414528710?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200">
        
        {/* Header */}
        <div className="px-6 py-5 bg-stone-900 text-white flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300 font-medium">
              Deep Handloom Customer Desk
            </div>
            <h3 className="font-display text-xl font-bold mt-0.5">
              Contact & Store Assistance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display text-2xl font-bold text-stone-900">
              Inquiry Received!
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Thank you, <span className="font-semibold text-stone-900">{name || 'Valued Shopper'}</span>. Our showroom team will reach out at <span className="font-mono font-medium text-stone-900">{phone || 'your number'}</span> shortly.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue via WhatsApp Chat</span>
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rameshwar Choudhary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 94140 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Preferred Showroom
                </label>
                <select
                  value={preferredStore}
                  onChange={(e) => setPreferredStore(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800 bg-white"
                >
                  <option value="main-merta">Main Store (Merta City / Gagrana)</option>
                  <option value="branch-gotan">Gotan Branch (Veer Teja Colony)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Inquiry Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Specific Sizes, Products, or Question (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific brand sizes (e.g. Mufti 32 jeans, Jockey L size trackpants, double bedsheet prints)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect Instantly on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-950 rounded-md transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Callback</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Footer Note */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-stone-400" />
            <span>Showroom: +91 94145 28710</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>Gotan Borunda Circle</span>
          </div>
        </div>

      </div>
    </div>
  );
};
