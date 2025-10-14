import type { DestinationPackages } from '../types';

export const darjeelingPackages: DestinationPackages = {
  'darjeeling-delight': {
    id: 1,
    name: 'Darjeeling Delight',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    basePrice: 17999,
    highlights: ['Tiger Hill Sunrise', 'Toy Train Ride', 'Tea Estate Tour', 'Local Markets'],
    itinerary: [
      { day: 1, title: 'Arrival in Darjeeling', activities: ['Check-in', 'Mall Road walk', 'Welcome tea'] },
      { day: 2, title: 'Sunrise & Train', activities: ['Tiger Hill sunrise', 'Toy train joy ride', 'Batasia Loop'] },
      { day: 3, title: 'Tea & Monasteries', activities: ['Happy Valley tea estate', 'Ghoom Monastery', 'Market shopping'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Optional rock garden', 'Transfer'] }
    ],
    inclusions: [
      '3 nights hill view hotel',
      'Daily breakfast',
      'Toy train ticket',
      'All local transfers',
      'Tea tasting',
      'Entry fees'
    ],
    exclusions: [
      'Travel to Darjeeling',
      'Meals beyond breakfast',
      'Personal shopping',
      'Guide fees',
      'Insurance',
      'Tips'
    ]
  },
  'darjeeling-gangtok-tour': {
    id: 2,
    name: 'Darjeeling-Gangtok Tour',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    basePrice: 32999,
    highlights: ['Darjeeling', 'Gangtok', 'Tsomgo Lake', 'Monastery Visits'],
    itinerary: [
      { day: 1, title: 'Arrival in Darjeeling', activities: ['Check-in', 'Local sightseeing'] },
      { day: 2, title: 'Darjeeling Highlights', activities: ['Tiger Hill', 'Toy train', 'Tea garden'] },
      { day: 3, title: 'Darjeeling to Gangtok', activities: ['Transfer', 'Enchey Monastery', 'Flower exhibition'] },
      { day: 4, title: 'Gangtok Excursion', activities: ['Tsomgo Lake', 'Baba Mandir', 'Cable car'] },
      { day: 5, title: 'Rumtek & More', activities: ['Rumtek Monastery', 'Ban Jhakri Falls', 'Tashi view point'] },
      { day: 6, title: 'Gangtok Leisure', activities: ['MG Marg shopping', 'Free time'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Transfer to airport'] }
    ],
    inclusions: [
      '6 nights accommodation',
      'All meals (breakfast & dinner)',
      'AC vehicle transfers',
      'All excursions',
      'Permits for lake',
      'Guides'
    ],
    exclusions: [
      'Airfare',
      'Lunch',
      'Personal expenses',
      'Optional ropeway',
      'Insurance',
      'Tips'
    ]
  },
  'luxury-hill-retreat': {
    id: 3,
    name: 'Luxury Hill Retreat',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1569941554646-85373de614a8?w=800',
    basePrice: 41999,
    highlights: ['Heritage Hotel', 'Private Car', 'Gourmet Dining', 'Spa Treatments'],
    itinerary: [
      { day: 1, title: 'VIP Arrival', activities: ['Private transfer', 'Heritage hotel check-in', 'High tea'] },
      { day: 2, title: 'Sunrise & Spa', activities: ['Tiger Hill private', 'Full spa day', 'Gourmet dinner'] },
      { day: 3, title: 'Tea & Train', activities: ['Private tea tour', 'Steam train', 'Bonfire'] },
      { day: 4, title: 'Monastery & Markets', activities: ['Guided monastery', 'Chowrasta shopping', 'Wine tasting'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Leisure', 'Transfer'] }
    ],
    inclusions: [
      '4 nights luxury heritage stay',
      'All meals gourmet',
      'Private car and chauffeur',
      'Spa treatments',
      'All activities',
      'Concierge'
    ],
    exclusions: [
      'Flights',
      'Personal shopping',
      'Extra spa',
      'Gratuities',
      'Insurance'
    ]
  }
};