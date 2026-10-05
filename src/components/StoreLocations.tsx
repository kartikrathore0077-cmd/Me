import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Copy, Check, Car, Landmark } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/storeData';
import { WEEKLY_SCHEDULE, getStoreStatus } from '../utils/storeHours';

interface StoreLocationsProps {
  onOpenInquiry: (topic?: string) => void;
}

export const StoreLocations: React.FC<StoreLocationsProps> = ({ onOpenInquiry }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const storeStatus = getStoreStatus();

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="locations" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Locations & Operating Hours
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Visit Our Showrooms in Merta City & Gotan
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            Conveniently situated with dedicated parking facilities and welcoming showrooms. Stop by to explore fabrics and brand selections in person.
          </p>
        </div>

        {/* 2 Showroom Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {STORE_LOCATIONS.map((loc) => {
            const isMain = loc.type === 'Main Store';
            const fullAddressText = `${loc.name}, ${loc.address}, ${loc.landmark ? `Landmark: ${loc.landmark}, ` : ''}${loc.city} - ${loc.pincode}, ${loc.district}, ${loc.state}`;

            return (
              <div
                key={loc.id}
                className={`bg-white border rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isMain ? 'border-amber-800/40 shadow-xs' : 'border-stone-200'
                }`}
              >
                <div className="space-y-4">
                  {/* Location Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                        {loc.type} · {loc.city}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-stone-900">
                        {loc.name}
                      </h3>
                    </div>
                    {isMain && (
                      <span className="text-[11px] font-semibold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-sm">
                        Flagship Showroom
                      </span>
                    )}
                  </div>

                  {/* Address Details */}
                  <div className="space-y-2 text-sm text-stone-700 bg-stone-50 p-4 rounded-md border border-stone-200/70">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-amber-700 mt-1 shrink-0" />
                      <div>
                        <div className="font-medium text-stone-900">{loc.address}</div>
                        {loc.landmark && (
                          <div className="text-xs text-amber-900 font-medium flex items-center gap-1 mt-0.5">
                            <Landmark className="w-3.5 h-3.5 shrink-0" />
                            <span>Landmark: {loc.landmark}</span>
                          </div>
                        )}
                        <div className="text-xs text-stone-500 mt-0.5">
                          {loc.city} - {loc.pincode}, {loc.district}, {loc.state}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 pt-2 border-t border-stone-200/60 text-xs">
                      <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span className="font-mono">{loc.phone}</span>
                    </div>
                  </div>

                  {/* Amenities / Features */}
                  <div>
                    <div className="text-xs font-medium text-stone-500 mb-2">Showroom Amenities:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                      {loc.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Car className="w-3.5 h-3.5 text-stone-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center gap-3">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-950 rounded-md transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>

                  <button
                    onClick={() => handleCopyAddress(loc.id, fullAddressText)}
                    className="px-3.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedId === loc.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenInquiry(`Directions or assistance for ${loc.name}`)}
                    className="px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors ml-auto"
                  >
                    Ask for Directions
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Operating Hours Table */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-700" />
                <h3 className="font-display text-2xl font-bold text-stone-900">
                  Weekly Operating Hours
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Both Merta City & Gotan branches observe synchronized operational hours.
              </p>
            </div>

            {/* Current Realtime Status Pill */}
            <div className="inline-flex items-center gap-2 text-xs bg-stone-50 border border-stone-200 px-3.5 py-2 rounded-md">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="font-semibold text-stone-900">{storeStatus.statusText}</span>
              <span className="text-stone-500">· {storeStatus.detailText}</span>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 font-semibold">
                  <th className="pb-3 pr-4">Day of Week</th>
                  <th className="pb-3 px-4">Standard Timings</th>
                  <th className="pb-3 pl-4">Schedule Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {WEEKLY_SCHEDULE.map((item) => {
                  const isCurrentDay = item.day === storeStatus.dayName;
                  const isClosed = item.hours.toLowerCase().includes('closed');

                  return (
                    <tr
                      key={item.day}
                      className={`${isCurrentDay ? 'bg-amber-50/80 font-medium' : 'hover:bg-stone-50/50'}`}
                    >
                      <td className="py-3 pr-4 flex items-center gap-2 text-stone-900">
                        <span>{item.day}</span>
                        {isCurrentDay && (
                          <span className="text-[10px] font-semibold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-sm">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono tabular-nums">
                        <span className={isClosed ? 'text-rose-600 font-semibold' : 'text-stone-800'}>
                          {item.hours}
                        </span>
                      </td>
                      <td className="py-3 pl-4 text-xs text-stone-500">
                        {item.highlight}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500">
            <div>
              * Note: Operating hours may extend till 9:30 PM on festive seasons (Navratri, Diwali, Wedding seasons).
            </div>
            <button
              onClick={() => onOpenInquiry('Confirm Today\'s Timings')}
              className="text-amber-800 hover:text-amber-950 font-medium text-left underline underline-offset-2"
            >
              Call to confirm festival timing
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
