import type { DestinationPackages } from '../types';

export const varanasiPackages: DestinationPackages = {
  'spiritual-varanasi': {
    id: 1,
    name: 'Spiritual Varanasi',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
    basePrice: 11999,
    highlights: ['Ganga Aarti', 'Temple Visits', 'Boat Ride', 'Sarnath Excursion'],
    itinerary: [
      { day: 1, title: 'Arrival in Varanasi', activities: ['Check-in', 'Ganges boat ride at sunset', 'Welcome aarti'] },
      { day: 2, title: 'Sacred Sites', activities: ['Kashi Vishwanath Temple', 'Sarnath visit', 'Evening Ganga Aarti'] },
      { day: 3, title: 'Departure', activities: ['Morning boat ride', 'Breakfast', 'Airport drop'] }
    ],
    inclusions: [
      '2 nights ghat view hotel',
      'Daily breakfast',
      'Boat rides',
      'All temple entries',
      'English guide',
      'Aarti viewing spot'
    ],
    exclusions: [
      'Airfare/train',
      'Meals beyond breakfast',
      'Puja donations',
      'Shopping',
      'Insurance',
      'Tips'
    ]
  },
  'varanasi-cultural-immersion': {
    id: 2,
    name: 'Varanasi Cultural Immersion',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1580737142383-9f0b8b2e4b0a?w=800',
    basePrice: 23999,
    highlights: ['All Major Temples', 'Silk Weaving Tour', 'Classical Music', 'Yoga Sessions'],
    itinerary: [
      { day: 1, title: 'Arrival & Ghats', activities: ['Check-in', 'Ghat walk', 'Silk weaving demo'] },
      { day: 2, title: 'Temples & Yoga', activities: ['Kashi Vishwanath', 'Morning yoga', 'Annapurna Temple'] },
      { day: 3, title: 'Sarnath & Music', activities: ['Sarnath stupa', 'Buddhist monastery', 'Evening raga concert'] },
      { day: 4, title: 'Rituals & Markets', activities: ['Ganga puja', 'Bazaar shopping', 'Street food tour'] },
      { day: 5, title: 'Departure', activities: ['Sunrise boat', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '4 nights riverside stay',
      'All meals',
      'Guided cultural tours',
      'Yoga and music sessions',
      'Silk tour',
      'All entries'
    ],
    exclusions: [
      'Flights',
      'Personal donations',
      'Extra classes',
      'Alcohol',
      'Insurance',
      'Tips'
    ]
  },
  'buddhist-circuit-tour': {
    id: 3,
    name: 'Buddhist Circuit Tour',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800',
    basePrice: 37999,
    highlights: ['Sarnath', 'Bodh Gaya', 'Kushinagar', 'Spiritual Guidance'],
    itinerary: [
      { day: 1, title: 'Arrival in Varanasi', activities: ['Check-in', 'Sarnath visit'] },
      { day: 2, title: 'Varanasi Spiritual', activities: ['Ghats', 'Temples', 'Aarti'] },
      { day: 3, title: 'Varanasi to Bodh Gaya', activities: ['Transfer', 'Mahabodhi Temple', 'Nirvana tree'] },
      { day: 4, title: 'Bodh Gaya Meditation', activities: ['Monastery tours', 'Meditation session'] },
      { day: 5, title: 'Bodh Gaya to Kushinagar', activities: ['Parinirvana Temple', 'Ramabhar Stupa'] },
      { day: 6, title: 'Kushinagar to Varanasi', activities: ['Spiritual discourse', 'Return transfer'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Airport'] }
    ],
    inclusions: [
      '6 nights in spiritual retreats',
      'All vegetarian meals',
      'AC bus transfers',
      'Monk guide',
      'All site entries',
      'Meditation sessions'
    ],
    exclusions: [
      'Airfare',
      'Personal offerings',
      'Extra discourses',
      'Shopping',
      'Insurance',
      'Tips'
    ]
  }
};