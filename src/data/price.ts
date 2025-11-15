export type PriceCard = {
  name: string;
  description: string[];
  price: string;
  purpose: string;
}[];

export const cards: PriceCard = [
  {
    name: 'Mini',
    description: [
      'Up to 1 hour of shooting',
      '1 outfit / 1 location',
      '20 edited photos',
      'Online gallery',
      'Delivery within 7 days',
    ],
    price: '€150',
    purpose: 'For short sessions and quick results',
  },
  {
    name: 'Classic',
    description: [
      'Up to 2 hours of shooting',
      '2 outfits / 2 locations',
      '40+ edited photos',
      'Online gallery',
      'Pre-shoot consultation',
      'Posing guidance',
      'Delivery within 10 days',
    ],
    price: '€280',
    purpose: 'Perfect for couples, portraits, or lifestyle',
  },
  {
    name: 'Story',
    description: [
      'Up to 4 hours of shooting',
      '3–4 outfits and locations',
      '80+ edited photos',
      'Online gallery + backup link',
      'Custom route planning',
      'Moodboard and styling help',
      'Includes breaks and travel time',
      'Delivery within 14 days',
    ],
    price: '€450',
    purpose: 'For when you want to capture everything',
  },
  {
    name: 'Wedding',
    description: [
      'Up to 8 hours of shooting',
      'All key moments covered',
      '250+ artistically edited photos',
      'Custom timeline planning',
      'Online gallery + USB drive',
      'Delivery within 21 days',
      'Extras: photo album, prints',
      'Optional second-day shoot',
    ],
    price: '€900',
    purpose: 'Full-day or partial wedding coverage',
  },
];
