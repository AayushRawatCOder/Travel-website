import type { DestinationPackages } from '../types';

export const goaPackages: DestinationPackages = {
  'goa-beach-bliss': {
    id: 1,
    name: 'Goa Beach Bliss',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    basePrice: 18999,
    highlights: ['North Goa Beaches', 'Fort Aguada', 'Anjuna Market', 'Seafood Dinner Cruise'],
    itinerary: [
      { day: 1, title: 'Arrival in Goa', activities: ['Airport/railway pickup', 'Check-in to North Goa resort', 'Beach relaxation', 'Welcome dinner'] },
      { day: 2, title: 'North Goa Beaches', activities: ['Calangute Beach', 'Baga Beach water sports', 'Fort Aguada visit', 'Sunset at Vagator'] },
      { day: 3, title: 'South Goa Exploration', activities: ['Colva Beach', 'Palolem Beach', 'Dona Paula viewpoint', 'Spice plantation tour'] },
      { day: 4, title: 'Markets & Cruise', activities: ['Anjuna Flea Market', 'Seafood dinner cruise', 'Free shopping time', 'Beach party'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Leisure time', 'Airport drop'] }
    ],
    inclusions: [
      '4 nights beach resort stay',
      'Daily breakfast and one major meal',
      'All beach transfers',
      'Guided tours to forts and markets',
      'Cruise ticket',
      'Entry fees to beaches'
    ],
    exclusions: [
      'Airfare/train tickets',
      'Personal expenses',
      'Water sports and adventure activities',
      'Alcohol and beverages',
      'Travel insurance',
      'Tips'
    ]
  },
  'goa-heritage-trail': {
    id: 2,
    name: 'Goa Heritage Trail',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1598860250177-24d31d8acee4?w=800',
    basePrice: 27999,
    highlights: ['Old Goa Churches', 'Spice Plantation', 'Portuguese Houses', 'Cultural Shows'],
    itinerary: [
      { day: 1, title: 'Arrival & Panjim', activities: ['Airport pickup', 'Check-in', 'Panjim old quarter walk', 'Fontainhas exploration'] },
      { day: 2, title: 'Old Goa Churches', activities: ['Basilica of Bom Jesus', 'Se Cathedral', 'St. Augustine Tower', 'Museum visit'] },
      { day: 3, title: 'South Goa Heritage', activities: ['Cabo de Rama Fort', 'Colva Church', 'Ancestral Goa Museum', 'Local cuisine tasting'] },
      { day: 4, title: 'Spice Plantation', activities: ['Sahakari Spice Farm', 'Elephant ride', 'Traditional Goan lunch', 'Herbal garden tour'] },
      { day: 5, title: 'North Goa Culture', activities: ['Reis Magos Fort', 'Portuguese houses tour', 'Evening cultural show', 'Feni tasting'] },
      { day: 6, title: 'Free Day & Markets', activities: ['Anjuna or Mapusa market', 'Beach time', 'Optional yoga session'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Shopping', 'Airport drop'] }
    ],
    inclusions: [
      '6 nights accommodation in heritage hotels',
      'All meals (breakfast, lunch, dinner)',
      'Guided heritage tours',
      'AC vehicle transfers',
      'Entry to all monuments',
      'Cultural performance'
    ],
    exclusions: [
      'Flight tickets',
      'Personal shopping',
      'Optional activities',
      'Beverages',
      'Insurance',
      'Gratuities'
    ]
  },
  'luxury-goa-retreat': {
    id: 3,
    name: 'Luxury Goa Retreat',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    basePrice: 45999,
    highlights: ['5-Star Beach Resort', 'Private Yacht', 'Spa Treatments', 'Fine Dining'],
    itinerary: [
      { day: 1, title: 'VIP Arrival', activities: ['Private airport transfer', 'Check-in to 5-star resort', 'Welcome spa session', 'Private dinner'] },
      { day: 2, title: 'Beach Indulgence', activities: ['Private beach cabana', 'Ayurvedic massage', 'Sunset yoga', 'Fine dining'] },
      { day: 3, title: 'Yacht Adventure', activities: ['Private yacht charter', 'Grand Island snorkeling', 'Seafood lunch on board', 'Dolphin watching'] },
      { day: 4, title: 'Heritage & Wellness', activities: ['Old Goa guided tour', 'Spa day with treatments', 'Wine tasting'] },
      { day: 5, title: 'South Goa Serenity', activities: ['Palolem beach transfer', 'Kayaking', 'Candlelight dinner'] },
      { day: 6, title: 'Culinary Experience', activities: ['Cooking class', 'Market visit', 'Chef\'s table dinner'] },
      { day: 7, title: 'Leisure & Spa', activities: ['Full spa package', 'Poolside relaxation', 'Farewell gala'] },
      { day: 8, title: 'Departure', activities: ['Breakfast', 'Private transfer to airport'] }
    ],
    inclusions: [
      '7 nights in luxury 5-star resort',
      'All meals and select beverages',
      'Private yacht and spa sessions',
      'Butler service',
      'All transfers in luxury vehicle',
      'Personal concierge'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Additional spa treatments',
      'Gratuities',
      'Travel insurance'
    ]
  }
};