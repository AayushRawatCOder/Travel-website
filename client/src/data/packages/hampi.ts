import type { DestinationPackages } from '../types';

export const hampiPackages: DestinationPackages = {
  'hampi-heritage-tour': {
    id: 1,
    name: 'Hampi Heritage Tour',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    basePrice: 14999,
    highlights: ['Major Temples', 'Royal Enclosure', 'Sunset Points', 'Local Guide'],
    itinerary: [
      { day: 1, title: 'Arrival in Hampi', activities: ['Check-in', 'Virupaksha Temple', 'Hampi Bazaar'] },
      { day: 2, title: 'Ruins Exploration', activities: ['Vittala Temple', 'Royal Enclosure', 'Hazara Rama', 'Sunset at Hemakuta'] },
      { day: 3, title: 'Departure', activities: ['Coracle ride', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '2 nights riverside resort',
      'Daily breakfast',
      'Guided heritage walk',
      'All entry fees',
      'Bicycle rental',
      'Local guide'
    ],
    exclusions: [
      'Travel to Hampi',
      'Meals beyond breakfast',
      'Coracle extra',
      'Shopping',
      'Insurance',
      'Tips'
    ]
  },
  'hampi-badami-circuit': {
    id: 2,
    name: 'Hampi-Badami Circuit',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=800',
    basePrice: 27999,
    highlights: ['Hampi', 'Badami Caves', 'Pattadakal', 'Aihole Temples'],
    itinerary: [
      { day: 1, title: 'Arrival in Hampi', activities: ['Check-in', 'Virupaksha & Vittala'] },
      { day: 2, title: 'Hampi Full Day', activities: ['Royal center', 'Achyuta Raya', 'Sunset hill'] },
      { day: 3, title: 'Hampi to Badami', activities: ['Transfer', 'Badami cave temples', 'Agastya Lake'] },
      { day: 4, title: 'Badami-Pattadakal-Aihole', activities: ['Pattadakal group', 'Aihole temples', 'Durga temple'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Transfer to Hubli airport'] }
    ],
    inclusions: [
      '4 nights in heritage stays',
      'All breakfast and dinner',
      'AC car transfers',
      'Expert archaeologist guide',
      'All monument entries',
      'Local meals'
    ],
    exclusions: [
      'Airfare',
      'Lunch',
      'Personal expenses',
      'Optional boat rides',
      'Insurance',
      'Tips'
    ]
  },
  'photography-expedition': {
    id: 3,
    name: 'Photography Expedition',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    basePrice: 32999,
    highlights: ['Golden Hour Shoots', 'Architecture Focus', 'Local Life', 'Editing Workshop'],
    itinerary: [
      { day: 1, title: 'Arrival & Sunset', activities: ['Check-in', 'Hemakuta Hill sunset shoot'] },
      { day: 2, title: 'Temples Golden Hour', activities: ['Dawn at Virupaksha', 'Vittala details', 'Boulder landscapes'] },
      { day: 3, title: 'Ruins & Locals', activities: ['Royal Enclosure', 'Village life portraits', 'Evening editing'] },
      { day: 4, title: 'Departure', activities: ['Morning river shoot', 'Workshop review', 'Transfer'] }
    ],
    inclusions: [
      '3 nights boutique stay',
      'All meals',
      'Private photography guide',
      'Editing sessions',
      'All access',
      'Transport'
    ],
    exclusions: [
      'Flights',
      'Personal camera gear',
      'Prints',
      'Extra shoots',
      'Insurance',
      'Tips'
    ]
  }
};