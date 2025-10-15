import type { DestinationPackages } from '../types';

export const keralaBackwatersPackages: DestinationPackages = {
  'backwater-houseboat-cruise': {
    id: 1,
    name: 'Backwater Houseboat Cruise',
    duration: '2 Days / 1 Night',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    basePrice: 12999,
    highlights: ['Private Houseboat', 'Traditional Meals', 'Village Visits', 'Sunset Views'],
    itinerary: [
      { day: 1, title: 'Arrival in Alleppey', activities: ['Check-in to houseboat', 'Cruise start', 'Village life viewing', 'Sunset cruise'] },
      { day: 2, title: 'Morning Cruise & Departure', activities: ['Sunrise views', 'Bird watching', 'Breakfast on board', 'Disembark and transfer'] }
    ],
    inclusions: [
      '1 night luxury houseboat',
      'All meals (breakfast, lunch, dinner)',
      'Private cruise',
      'English-speaking captain',
      'Mineral water'
    ],
    exclusions: [
      'Travel to Alleppey',
      'Personal expenses',
      'Extra meals/snacks',
      'Guide fees',
      'Insurance',
      'Tips'
    ]
  },
  'complete-kerala-experience': {
    id: 2,
    name: 'Complete Kerala Experience',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    basePrice: 38999,
    highlights: ['Backwaters', 'Hill Stations', 'Beaches', 'Ayurvedic Treatments'],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', activities: ['Airport pickup', 'Fort Kochi walk', 'Chinese fishing nets', 'Kathakali show'] },
      { day: 2, title: 'Kochi to Munnar', activities: ['Tea plantations', 'Eravikulam National Park', 'Echo point'] },
      { day: 3, title: 'Munnar Exploration', activities: ['Mattupetty Dam', 'Spice garden', 'Tea factory visit'] },
      { day: 4, title: 'Munnar to Thekkady', activities: ['Periyar Wildlife Sanctuary', 'Boat safari', 'Martial arts demo'] },
      { day: 5, title: 'Thekkady to Alleppey', activities: ['Houseboat cruise', 'Backwater villages', 'Overnight on boat'] },
      { day: 6, title: 'Alleppey to Kovalam', activities: ['Beach arrival', 'Lighthouse visit', 'Ayurvedic massage'] },
      { day: 7, title: 'Kovalam Leisure', activities: ['Beach activities', 'Catamaran ride', 'Spa day'] },
      { day: 8, title: 'Departure from Trivandrum', activities: ['Breakfast', 'Airport drop'] }
    ],
    inclusions: [
      '7 nights accommodation',
      'All meals',
      'AC vehicle transfers',
      'Houseboat stay',
      'Guided tours',
      'Ayurvedic session'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Optional safaris',
      'Alcohol',
      'Insurance',
      'Tips'
    ]
  },
  'luxury-backwater-retreat': {
    id: 3,
    name: 'Luxury Backwater Retreat',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1569941554646-85373de614a8?w=800',
    basePrice: 42999,
    highlights: ['Premium Houseboat', 'Private Chef', 'Ayurvedic Spa', 'Cultural Performances'],
    itinerary: [
      { day: 1, title: 'Arrival & Cruise Start', activities: ['Private transfer', 'Premium houseboat check-in', 'Welcome drink', 'Evening cruise'] },
      { day: 2, title: 'Backwater Bliss', activities: ['Village visit by canoe', 'Private chef lunch', 'Ayurvedic spa on board', 'Sunset performance'] },
      { day: 3, title: 'Nature & Culture', activities: ['Bird sanctuary tour', 'Cooking demo', 'Traditional music show', 'Stargazing'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Leisure cruise', 'Transfer to airport'] }
    ],
    inclusions: [
      '3 nights premium houseboat/resort',
      'All gourmet meals',
      'Private chef and butler',
      'Full spa package',
      'Cultural shows',
      'Luxury transfers'
    ],
    exclusions: [
      'Flights',
      'Extra spa',
      'Personal items',
      'Gratuities',
      'Insurance'
    ]
  }
};