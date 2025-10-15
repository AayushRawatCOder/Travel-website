import type { DestinationPackages } from '../types';

export const ranthamborePackages: DestinationPackages = {
  'tiger-safari-adventure': {
    id: 1,
    name: 'Tiger Safari Adventure',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800',
    basePrice: 21999,
    highlights: ['4 Safari Rides', 'Nature Walks', 'Bird Watching', 'Expert Guides'],
    itinerary: [
      { day: 1, title: 'Arrival in Ranthambore', activities: ['Check-in to resort', 'Evening nature walk', 'Wildlife documentary'] },
      { day: 2, title: 'Full Day Safaris', activities: ['Morning jeep safari', 'Afternoon canter safari', 'Bird watching', 'Evening slide show'] },
      { day: 3, title: 'Final Safari & Departure', activities: ['Morning safari', 'Fort visit', 'Breakfast', 'Transfer to station'] }
    ],
    inclusions: [
      '2 nights jungle resort',
      'All meals',
      '4 shared safari rides',
      'Expert naturalist guide',
      'Entry fees',
      'Nature walk'
    ],
    exclusions: [
      'Travel to Ranthambore',
      'Personal expenses',
      'Private safaris',
      'Camera fees',
      'Insurance',
      'Tips'
    ]
  },
  'wildlife-photography-tour': {
    id: 2,
    name: 'Wildlife Photography Tour',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    basePrice: 45999,
    highlights: ['Private Safari', 'Photography Guide', 'Early Morning Sessions', 'Editing Workshop'],
    itinerary: [
      { day: 1, title: 'Arrival & Briefing', activities: ['Check-in', 'Photography gear check', 'Welcome dinner'] },
      { day: 2, title: 'Zone 1-2 Safaris', activities: ['Dawn patrol safari', 'Hide photography', 'Editing session'] },
      { day: 3, title: 'Zone 3-5 Exploration', activities: ['Private jeep safari', 'Bird hides', 'Macro workshop'] },
      { day: 4, title: 'Fort & Lakes', activities: ['Ranthambore Fort', 'Lake side shoots', 'Group critique'] },
      { day: 5, title: 'Departure', activities: ['Final morning safari', 'Print review', 'Transfer'] }
    ],
    inclusions: [
      '4 nights luxury tented camp',
      'All meals',
      'Private safaris with pro photographer',
      'Editing software access',
      'All permits',
      'Transport'
    ],
    exclusions: [
      'Airfare',
      'Personal gear',
      'Extra prints',
      'Alcohol',
      'Insurance',
      'Tips'
    ]
  },
  'rajasthan-wildlife-circuit': {
    id: 3,
    name: 'Rajasthan Wildlife Circuit',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800',
    basePrice: 58999,
    highlights: ['Ranthambore', 'Sariska', 'Bharatpur Bird Sanctuary', 'Cultural Experiences'],
    itinerary: [
      { day: 1, title: 'Arrival in Ranthambore', activities: ['Check-in', 'Evening safari'] },
      { day: 2, title: 'Ranthambore Safaris', activities: ['2 safaris', 'Fort visit'] },
      { day: 3, title: 'Ranthambore to Sariska', activities: ['Transfer', 'Sariska safari', 'Temple visit'] },
      { day: 4, title: 'Sariska Exploration', activities: ['Morning & evening safaris', 'Nature trail'] },
      { day: 5, title: 'Sariska to Bharatpur', activities: ['Keoladeo bird sanctuary', 'Boat rides', 'Cycling tour'] },
      { day: 6, title: 'Bharatpur Culture', activities: ['Bird watching', 'Local village', 'Cultural dinner'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Transfer to Jaipur airport'] }
    ],
    inclusions: [
      '6 nights in wildlife lodges',
      'All meals',
      'Multiple safaris across parks',
      'AC vehicle',
      'Expert guides',
      'All entries'
    ],
    exclusions: [
      'Flights',
      'Personal expenses',
      'Optional bird hides',
      'Beverages',
      'Insurance',
      'Tips'
    ]
  }
};