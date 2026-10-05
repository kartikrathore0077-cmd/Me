import React, { useState } from 'react';
import { Star, ThumbsUp, Car, Sparkles, HeartHandshake, Layers } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/storeData';

interface CustomerReviewsProps {
  onOpenInquiry: (topic?: string) => void;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ onOpenInquiry }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const highlightBadges = [
    {
      icon: Layers,
      title: 'Wide Variety of Clothes',
      desc: 'Extensive readymade collection across men, women, and kids with full size ranges.'
    },
    {
      icon: Sparkles,
      title: 'Popular Fashion Brands',
      desc: 'Original merchandise from Jockey, Mufti, Red Tape, Killer, Raymond and Duke.'
    },
    {
      icon: HeartHandshake,
      title: 'Polite & Patient Staff',
      desc: 'Friendly showroom assistants renowned for attentive service and no-pressure guidance.'
    },
    {
      icon: Car,
      title: 'Good Parking Facilities',
      desc: 'Spacious dedicated parking outside both Merta City and Gotan showrooms.'
    }
  ];

  const tags = ['All', 'Branded Clothing & Parking', 'Handloom & Pure Cotton', 'Polite Staff & Family Variety', 'Brand Variety & Convenient Visit'];

  const filteredReviews = selectedTag === 'All' 
    ? CUSTOMER_REVIEWS 
    : CUSTOMER_REVIEWS.filter(r => r.tag === selectedTag);

  return (
    <section id="reviews" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Overall Score */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 border-b border-stone-200 gap-8">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Ratings & Customer Feedback
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Trusted by 300+ Local Families & Shoppers
            </h2>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              Serving generations of shoppers across Merta City, Gotan, Gagrana, and the greater Nagaur district with verified product authenticity and warm hospitality.
            </p>
          </div>

          {/* Rating Summary Block */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <div className="text-center sm:text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-stone-900 tabular-nums">4.2</span>
                <span className="text-sm font-semibold text-stone-500">/ 5.0</span>
              </div>
              <div className="flex text-amber-400 mt-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/50'}`} />
                ))}
              </div>
              <div className="text-xs text-stone-600 mt-1 font-medium">
                Based on 300+ public customer reviews
              </div>
            </div>

            <div className="h-12 w-px bg-stone-200 hidden sm:block" />

            <div className="space-y-1.5 text-xs text-stone-600 w-full sm:w-48">
              <div className="flex items-center justify-between">
                <span>5 Stars</span>
                <div className="w-24 bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-600 h-full w-[78%]" />
                </div>
                <span className="tabular-nums font-mono text-[11px]">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>4 Stars</span>
                <div className="w-24 bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-600 h-full w-[17%]" />
                </div>
                <span className="tabular-nums font-mono text-[11px]">17%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>3 Stars</span>
                <div className="w-24 bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-stone-300 h-full w-[5%]" />
                </div>
                <span className="tabular-nums font-mono text-[11px]">5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Customer Complimented */}
        <div className="mt-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-6">
            Key Review Highlights Commended by Visitors
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-stone-50/50 border border-stone-200/80 rounded-lg hover:border-amber-700/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-amber-100/70 text-amber-900 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900">{badge.title}</h3>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filtered Reviews Section */}
        <div className="mt-14">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-medium text-stone-500 mr-2">Filter reviews:</span>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-stone-50/60 border border-stone-200 rounded-lg flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'fill-stone-200'}`} />
                      ))}
                    </div>
                    {/* Unboxed metadata separator */}
                    <div className="text-xs text-stone-500">
                      <span>{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-stone-900">{rev.author}</span>
                    <span className="text-stone-500 ml-1.5">· {rev.location}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] text-emerald-800">
                    <ThumbsUp className="w-3 h-3 text-emerald-600" />
                    <span>Verified Shopper</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Experience Banner */}
        <div className="mt-12 p-6 bg-stone-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-xl font-bold">Have you visited Deep Handloom recently?</h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
              Help our artisan weavers and store staff by sharing your shopping experience or feedback.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Customer Feedback & Review Submission')}
            className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            Leave Feedback
          </button>
        </div>

      </div>
    </section>
  );
};
