import type { DestinationPackages } from '../types';

export const jaipurPackages: DestinationPackages = {
  'royal-jaipur-experience': {
    id: 1,
    name: 'Royal Jaipur Experience',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
    basePrice: 15999,
    highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Traditional Dinner'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', activities: ['Airport pickup', 'Check-in to heritage hotel', 'Hawa Mahal visit', 'Welcome Rajasthani dinner'] },
      { day: 2, title: 'Fort & Palace Tour', activities: ['Amber Fort elephant ride', 'City Palace', 'Jantar Mantar', 'Light & sound show'] },
      { day: 3, title: 'Markets & Culture', activities: ['Johari Bazaar shopping', 'Local cooking class', 'Evening cultural dance show', 'Free time'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Optional Chokhi Dhani visit', 'Airport drop'] }
    ],
    inclusions: [
      '3 nights in heritage hotel',
      'Daily breakfast and one dinner',
      'All sightseeing with guide',
      'AC car transfers',
      'Entry fees to monuments',
      'Cultural show ticket'
    ],
    exclusions: [
      'Airfare/train tickets',
      'Meals not mentioned',
      'Shopping expenses',
      'Elephant ride extra',
      'Insurance',
      'Tips'
    ]
  },
  'rajasthan-cultural-tour': {
    id: 2,
    name: 'Rajasthan Cultural Tour',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800',
    basePrice: 32999,
    highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Desert Safari'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', activities: ['Check-in', 'City Palace visit', 'Rest'] },
      { day: 2, title: 'Jaipur Sightseeing', activities: ['Amber Fort', 'Hawa Mahal', 'Jantar Mantar', 'Evening at Chokhi Dhani'] },
      { day: 3, title: 'Jaipur to Jodhpur', activities: ['En route Pushkar', 'Mehrangarh Fort', 'Jaswant Thada'] },
      { day: 4, title: 'Jodhpur Exploration', activities: ['Umaid Bhawan Palace', 'Clock Tower market', 'Blue City walk'] },
      { day: 5, title: 'Jodhpur to Udaipur', activities: ['Ranakpur Temples stop', 'City Palace Udaipur', 'Lake Pichola boat ride'] },
      { day: 6, title: 'Udaipur Culture', activities: ['Saheliyon ki Bari', 'Bagore ki Haveli show', 'Shopping'] },
      { day: 7, title: 'Departure from Udaipur', activities: ['Breakfast', 'Airport drop'] }
    ],
    inclusions: [
      '6 nights in heritage properties',
      'All meals (breakfast, lunch, dinner)',
      'AC vehicle for entire tour',
      'Professional guide',
      'All entry fees',
      'Desert safari in Jodhpur'
    ],
    exclusions: [
      'Flight tickets',
      'Personal expenses',
      'Optional activities',
      'Beverages',
      'Insurance',
      'Tips'
    ]
  },
  'luxury-palace-stay': {
    id: 3,
    name: 'Luxury Palace Stay',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800',
    basePrice: 48999,
    highlights: ['Heritage Hotel', 'Elephant Ride', 'Private Guide', 'Cultural Shows'],
    itinerary: [
      { day: 1, title: 'Royal Arrival', activities: ['Private transfer', 'Check-in to palace hotel', 'Welcome high tea', 'Palace tour'] },
      { day: 2, title: 'Amber Fort Day', activities: ['Private elephant ride', 'Fort exploration', 'Afternoon spa', 'Royal dinner'] },
      { day: 3, title: 'City Highlights', activities: ['City Palace with private guide', 'Hawa Mahal', 'Jal Mahal photo stop', 'Evening folk dance'] },
      { day: 4, title: 'Culinary & Shopping', activities: ['Rajasthani cooking demo', 'Bazaar shopping with expert', 'Sound & light show'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Leisure', 'Airport transfer'] }
    ],
    inclusions: [
      '4 nights in luxury palace hotel',
      'All meals with royal dining',
      'Private AC car and guide',
      'Elephant ride and entries',
      'Spa session',
      'Cultural performances'
    ],
    exclusions: [
      'Airfare',
      'Personal shopping',
      'Additional excursions',
      'Gratuities',
      'Travel insurance'
    ]
  }
};