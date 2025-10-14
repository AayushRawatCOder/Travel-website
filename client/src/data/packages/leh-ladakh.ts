import type { DestinationPackages } from '../types';

export const lehLadakhPackages: DestinationPackages = {
  'leh-ladakh-adventure': {
    id: 1,
    name: 'Leh-Ladakh Adventure',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    basePrice: 35999,
    highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Monasteries Tour'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', activities: ['Airport pickup', 'Hotel check-in', 'Acclimatization rest', 'Local market visit'] },
      { day: 2, title: 'Leh Local Sightseeing', activities: ['Shanti Stupa', 'Leh Palace', 'Magnetic Hill', 'Gurudwara Pathar Sahib'] },
      { day: 3, title: 'Leh to Nubra Valley', activities: ['Khardung La Pass', 'Diskit Monastery', 'Hunder Sand Dunes', 'Camel Safari'] },
      { day: 4, title: 'Nubra to Pangong Lake', activities: ['Scenic drive', 'Pangong Lake arrival', 'Lakeside camping', 'Stargazing'] },
      { day: 5, title: 'Pangong to Leh', activities: ['Sunrise at Pangong', 'Chang La Pass', 'Return to Leh', 'Free evening'] },
      { day: 6, title: 'Leh Monasteries Tour', activities: ['Thiksey Monastery', 'Hemis Monastery', 'Shey Palace', 'Shopping time'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Hotel checkout', 'Airport drop', 'End of tour'] }
    ],
    inclusions: [
      '6 nights accommodation in hotels/camps',
      'Daily breakfast and dinner',
      'All sightseeing as per itinerary',
      'Tempo Traveller for all transfers',
      'Experienced driver cum guide',
      'All permits and entry fees'
    ],
    exclusions: [
      'Airfare/train tickets',
      'Lunch and snacks',
      'Personal expenses',
      'Adventure activities',
      'Travel insurance',
      'Tips and gratuities'
    ]
  },
  'complete-ladakh-experience': {
    id: 2,
    name: 'Complete Ladakh Experience',
    duration: '10 Days / 9 Nights',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    basePrice: 52999,
    highlights: ['All attractions', 'Tso Moriri Lake', 'Hanle', 'Cultural experiences'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', activities: ['Airport pickup', 'Hotel check-in', 'Rest and acclimatization'] },
      { day: 2, title: 'Leh Local Tour', activities: ['Shanti Stupa', 'Leh Palace', 'Hall of Fame', 'Sangam Point'] },
      { day: 3, title: 'Leh to Nubra Valley', activities: ['Khardung La Pass', 'Diskit Monastery', 'Hunder Sand Dunes'] },
      { day: 4, title: 'Nubra to Turtuk', activities: ['Turtuk village', 'Balti culture', 'Apricot orchards'] },
      { day: 5, title: 'Turtuk to Pangong', activities: ['Shyok route', 'Pangong Lake', 'Lakeside camping'] },
      { day: 6, title: 'Pangong to Hanle', activities: ['Tangtse', 'Hanle Observatory', 'Dark sky viewing'] },
      { day: 7, title: 'Hanle to Tso Moriri', activities: ['Scenic drive', 'Tso Moriri Lake', 'Korzok village'] },
      { day: 8, title: 'Tso Moriri to Leh', activities: ['Chumathang hot springs', 'Return journey', 'Leh arrival'] },
      { day: 9, title: 'Monasteries Circuit', activities: ['Thiksey', 'Hemis', 'Shey Palace', 'Cultural show'] },
      { day: 10, title: 'Departure', activities: ['Breakfast', 'Last-minute shopping', 'Airport drop'] }
    ],
    inclusions: [
      '9 nights accommodation',
      'All meals (breakfast & dinner)',
      'Complete sightseeing',
      'SUV for all transfers',
      'Professional guide',
      'All permits and fees',
      'Cultural program'
    ],
    exclusions: [
      'Flight tickets',
      'Lunch',
      'Personal expenses',
      'Optional activities',
      'Insurance',
      'Tips'
    ]
  },
  'ladakh-bike-expedition': {
    id: 3,
    name: 'Ladakh Bike Expedition',
    duration: '12 Days / 11 Nights',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    basePrice: 68999,
    highlights: ['Royal Enfield', 'Manali-Leh Highway', 'Off-road trails', 'Camping'],
    itinerary: [
      { day: 1, title: 'Arrival in Manali', activities: ['Hotel check-in', 'Bike allocation', 'Safety briefing', 'Test ride'] },
      { day: 2, title: 'Manali to Jispa', activities: ['Rohtang Pass', 'Keylong', 'Jispa camping'] },
      { day: 3, title: 'Jispa to Sarchu', activities: ['Baralacha La', 'High altitude riding', 'Sarchu camps'] },
      { day: 4, title: 'Sarchu to Leh', activities: ['Gata Loops', 'Nakee La', 'Tanglang La', 'Leh arrival'] },
      { day: 5, title: 'Rest & Acclimatization', activities: ['Bike servicing', 'Local sightseeing', 'Free time'] },
      { day: 6, title: 'Leh to Nubra Valley', activities: ['Khardung La', 'Diskit', 'Hunder', 'Camp stay'] },
      { day: 7, title: 'Nubra Valley Exploration', activities: ['Off-road trails', 'Sand dunes', 'Village visits'] },
      { day: 8, title: 'Nubra to Pangong', activities: ['Shyok river route', 'Pangong Lake', 'Lakeside camping'] },
      { day: 9, title: 'Pangong to Hanle', activities: ['Remote routes', 'Hanle village', 'Observatory visit'] },
      { day: 10, title: 'Hanle to Tso Moriri', activities: ['Off-road adventure', 'Tso Moriri Lake', 'Wildlife spotting'] },
      { day: 11, title: 'Tso Moriri to Leh', activities: ['Return ride', 'Photo stops', 'Celebration dinner'] },
      { day: 12, title: 'Departure', activities: ['Bike return', 'Final breakfast', 'Airport drop'] }
    ],
    inclusions: [
      'Royal Enfield Himalayan bike',
      '11 nights accommodation',
      'All meals included',
      'Support vehicle',
      'Mechanic support',
      'Fuel costs',
      'All permits',
      'Safety gear',
      'First aid kit'
    ],
    exclusions: [
      'Airfare',
      'Bike insurance',
      'Damage charges',
      'Personal gear',
      'Medical expenses',
      'Tips'
    ]
  }
};