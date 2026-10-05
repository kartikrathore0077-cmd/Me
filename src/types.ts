export interface StoreLocation {
  id: string;
  name: string;
  type: 'Main Store' | 'Branch';
  address: string;
  landmark?: string;
  city: string;
  pincode: string;
  district: string;
  state: string;
  phone: string;
  mapsUrl: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'mens' | 'womens' | 'kids' | 'handloom' | 'accessories';
  categoryLabel: string;
  brand?: string;
  priceEstimate?: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
}

export interface OperatingSchedule {
  day: string;
  hours: string;
  isToday?: boolean;
}
