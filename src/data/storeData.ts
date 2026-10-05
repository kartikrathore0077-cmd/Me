import { StoreLocation, ProductItem, ReviewItem } from '../types';

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'main-merta',
    name: 'Deep Handloom (Main Showroom)',
    type: 'Main Store',
    address: 'Gotan Borunda Circle, Opposite Government College, Gagrana',
    landmark: 'Opposite Government College',
    city: 'Merta City',
    pincode: '341510',
    district: 'Nagaur District',
    state: 'Rajasthan, India',
    phone: '+91 94145 28710',
    mapsUrl: 'https://maps.google.com/?q=Gotan+Borunda+Circle+Opposite+Government+College+Gagrana+Merta+341510',
    features: ['Multi-Level Showroom', 'Dedicated Car & Bike Parking', 'Trial Rooms & Alterations', 'Family Lounging Area']
  },
  {
    id: 'branch-gotan',
    name: 'Deep Handloom (Gotan Branch)',
    type: 'Branch',
    address: 'MDR58, Veer Teja Colony',
    landmark: 'Veer Teja Colony Main Road',
    city: 'Gotan',
    pincode: '342902',
    district: 'Nagaur District',
    state: 'Rajasthan, India',
    phone: '+91 98292 14350',
    mapsUrl: 'https://maps.google.com/?q=MDR58+Veer+Teja+Colony+Gotan+Nagaur+342902',
    features: ['Readymade & Handloom Express Hub', 'Brand Essentials', 'Easy Roadside Access']
  }
];

export const FEATURED_BRANDS = [
  { name: 'Jockey', category: 'Innerwear & Athleisure', highlight: 'Authorized Premium Partner' },
  { name: 'Mufti', category: 'Denim & Casual Shirts', highlight: 'Latest Seasonal Styles' },
  { name: 'Red Tape', category: 'Footwear & Casuals', highlight: 'Premium Urban Fashion' },
  { name: 'Killer', category: 'Denim & Streetwear', highlight: 'Authentic Fit & Durability' },
  { name: 'Raymond', category: 'Fine Shirting & Suiting', highlight: 'Celebration & Formal Wear' },
  { name: 'Duke', category: 'Knitwear & T-Shirts', highlight: 'Everyday Active Comfort' }
];

export const PRODUCT_CATALOG: ProductItem[] = [
  {
    id: 'p1',
    title: 'Mufti Classic Chambray & Denim Shirts',
    category: 'mens',
    categoryLabel: 'Men\'s Readymade',
    brand: 'Mufti',
    priceEstimate: '₹1,499 – ₹2,899',
    description: 'Authentic 100% cotton washed casual shirts featuring signature detailing, comfort tailored cuts, and long-lasting fabric.',
    image: '/src/assets/images/category_mens_apparel_1791191845942.jpg',
    tags: ['Pure Cotton', 'Original Branded', 'Slim & Regular Fit']
  },
  {
    id: 'p2',
    title: 'Authentic Sanganeri Block Print Cotton Bedsheets',
    category: 'handloom',
    categoryLabel: 'Handloom & Home Living',
    brand: 'Rajasthan Artisan Loom',
    priceEstimate: '₹750 – ₹1,850',
    description: 'Traditional double-bed pure cotton bedsheets handcrafted with eco-friendly fast dyes, showcasing timeless floral and boota motifs.',
    image: '/src/assets/images/category_handloom_textiles_1791191835078.jpg',
    tags: ['Pure Handloom', 'Double Bed + 2 Pillow Covers', '100% Color Fast']
  },
  {
    id: 'p3',
    title: 'Rajasthani Embroidered Kurti & Dupatta Sets',
    category: 'womens',
    categoryLabel: 'Women\'s Ethnic & Readymade',
    brand: 'Deep Heritage Collection',
    priceEstimate: '₹999 – ₹3,499',
    description: 'Graceful ethnic ensembles adorned with delicate zari, mirror accents, and Bandhani silk dupattas designed for festivals and family gatherings.',
    image: '/src/assets/images/category_ethnic_womens_1791191857814.jpg',
    tags: ['Festive & Everyday', 'Chanderi & Cotton Silk', 'Sizes S to 4XL']
  },
  {
    id: 'p4',
    title: 'Jockey Combed Cotton Athleisure & Loungewear',
    category: 'mens',
    categoryLabel: 'Men\'s Essentials',
    brand: 'Jockey',
    priceEstimate: '₹449 – ₹1,299',
    description: 'Signature breathable joggers, supersoft crewneck tees, and comfort briefs engineered with stay-fresh moisture wicking technology.',
    image: '/src/assets/images/hero_deep_handloom_1791191821623.jpg',
    tags: ['100% Genuine Jockey', 'Comfort Stretch', 'Moisture Wicking']
  },
  {
    id: 'p5',
    title: 'Handcrafted All-Season Pure Cotton Dohars',
    category: 'handloom',
    categoryLabel: 'Handloom & Home Living',
    brand: 'Deep Handloom',
    priceEstimate: '₹699 – ₹1,450',
    description: 'Triple-layered soft mulmul cotton dohars with micro-flannel layer inside, ideal for mild winters, AC rooms, and pleasant Rajasthan evenings.',
    image: '/src/assets/images/category_handloom_textiles_1791191835078.jpg',
    tags: ['Mulmul Cotton', 'Air-Conditioner Comfort', 'Lightweight & Reversible']
  },
  {
    id: 'p6',
    title: 'Red Tape Active Casual Sneakers & Polos',
    category: 'mens',
    categoryLabel: 'Men\'s Readymade',
    brand: 'Red Tape',
    priceEstimate: '₹1,199 – ₹2,499',
    description: 'Sport-luxe comfort polos crafted from honeycombed pique cotton paired with lightweight cushioned lifestyle shoes.',
    image: '/src/assets/images/category_mens_apparel_1791191845942.jpg',
    tags: ['Memory Foam Comfort', 'Original Red Tape', 'Youth Lifestyle']
  },
  {
    id: 'p7',
    title: 'Kids Festive Kurtas & Partywear Outfits',
    category: 'kids',
    categoryLabel: 'Kids Wear',
    brand: 'Junior Fashion',
    priceEstimate: '₹599 – ₹1,799',
    description: 'Skin-friendly, comfortable festive sets and playwear for boys and girls from ages 1 to 14 years. Easy to wash and durable.',
    image: '/src/assets/images/category_ethnic_womens_1791191857814.jpg',
    tags: ['Soft Cotton Lining', 'Ages 1–14 Years', 'Vibrant Festive Colors']
  },
  {
    id: 'p8',
    title: 'Jaipuri Razai & Handwoven Winter Blankets',
    category: 'handloom',
    categoryLabel: 'Handloom & Home Living',
    brand: 'Deep Handloom',
    priceEstimate: '₹1,200 – ₹3,200',
    description: 'Lightweight feather-soft Jaipuri quilts hand-quilted with pure carded cotton wool and enveloped in silky soft voil fabric.',
    image: '/src/assets/images/category_handloom_textiles_1791191835078.jpg',
    tags: ['Warm & Featherlight', 'Heritage Quilted', 'Gift Ready']
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Sunil Choudhary',
    location: 'Merta City',
    rating: 5,
    date: 'February 2026',
    comment: 'Best showroom in Merta for branded clothes! We purchased Jockey thermals and Mufti jeans. The staff is polite, and having dedicated parking opposite Government College makes shopping so convenient.',
    tag: 'Branded Clothing & Parking'
  },
  {
    id: 'r2',
    author: 'Priya Maheshwari',
    location: 'Gotan',
    rating: 5,
    date: 'January 2026',
    comment: 'Outstanding collection of handloom bedsheets and pure cotton dohars. Authentic Rajasthani craftsmanship at genuine prices. They also have an impressive range of readymade kurtis.',
    tag: 'Handloom & Pure Cotton'
  },
  {
    id: 'r3',
    author: 'Rameshwar Lal Gurjar',
    location: 'Gagrana',
    rating: 4,
    date: 'December 2025',
    comment: 'Huge showroom with variety for the whole family. Kids clothes, Red Tape footwear, and wedding wear under one roof. Courteous staff who patiently show all varieties.',
    tag: 'Polite Staff & Family Variety'
  },
  {
    id: 'r4',
    author: 'Vikram Singh Rathore',
    location: 'Nagaur',
    rating: 5,
    date: 'November 2025',
    comment: 'Visited from Gotan road. The parking space was clean and hassle-free. Good stock of Red Tape and Mufti with latest season designs. Highly recommended for shoppers in Merta area.',
    tag: 'Brand Variety & Convenient Visit'
  }
];
