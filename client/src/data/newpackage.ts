import type { DestinationPackages } from './types';

export const kashmirLadakhPackages: DestinationPackages = {
  // Dal Lake Packages
  'dal-lake-houseboat-retreat': {
    id: 1,
    name: 'Dal Lake Houseboat Retreat',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    basePrice: 15000,
    highlights: ['Shikara Ride', 'Floating Market Visit', 'Mughal Gardens Tour', 'Local Cuisine Dinner'],
    itinerary: [
      { day: 1, title: 'Arrival & Shikara Welcome', activities: ['Houseboat check-in', 'Evening shikara ride', 'Welcome Kahwa tea'] },
      { day: 2, title: 'Lake Exploration', activities: ['Floating market visit', 'Mughal gardens tour', 'Local cuisine dinner'] },
      { day: 3, title: 'Departure', activities: ['Morning shikara', 'Breakfast', 'Transfer to airport'] }
    ],
    inclusions: [
      '2 nights houseboat stay',
      'Daily breakfast',
      'Shikara rides',
      'Market visit',
      'Garden entry fees',
      'Local transfers'
    ],
    exclusions: [
      'Travel to Srinagar',
      'Lunch and dinner',
      'Personal shopping',
      'Guide fees',
      'Insurance',
      'Tips'
    ]
  },
  'srinagar-cultural-immersion': {
    id: 2,
    name: 'Srinagar Cultural Immersion',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/485422676/photo/shikara-boats-on-dal-lake-srinagar.jpg?s=800&w=800',
    basePrice: 25000,
    highlights: ['Dal Lake', 'Hazratbal Shrine', 'Local Markets', 'Mughal Architecture'],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar', activities: ['Hotel check-in', 'Mughal garden visit', 'Evening walk'] },
      { day: 2, title: 'Dal Lake Experience', activities: ['Shikara ride', 'Floating market', 'Houseboat lunch'] },
      { day: 3, title: 'City Exploration', activities: ['Hazratbal Shrine', 'Local markets', 'Cultural show'] },
      { day: 4, title: 'Gardens & Heritage', activities: ['Nishat Bagh', 'Shalimar Bagh', 'Traditional dinner'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Last minute shopping', 'Transfer'] }
    ],
    inclusions: [
      '4 nights accommodation',
      'All meals',
      'All local transfers',
      'Entry fees',
      'Shikara rides',
      'Cultural show'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Optional activities',
      'Insurance',
      'Tips'
    ]
  },

  // Gulmarg Packages
  'gulmarg-ski-adventure': {
    id: 3,
    name: 'Gulmarg Ski Adventure',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    basePrice: 18000,
    highlights: ['Gulmarg Gondola', 'Skiing Lessons', 'Snowboarding', 'Mountain Views'],
    itinerary: [
      { day: 1, title: 'Arrival in Gulmarg', activities: ['Hotel check-in', 'Ski gear fitting', 'Evening orientation'] },
      { day: 2, title: 'Ski Adventure', activities: ['Gondola ride', 'Skiing lessons', 'Mountain exploration'] },
      { day: 3, title: 'Winter Sports', activities: ['Snowboarding', 'Snow activities', 'Bonfire night'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Last ski session', 'Transfer'] }
    ],
    inclusions: [
      '3 nights hotel stay',
      'All meals',
      'Gondola tickets',
      'Ski equipment',
      'Instructor fees',
      'Local transfers'
    ],
    exclusions: [
      'Travel to Gulmarg',
      'Personal expenses',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },
  'gulmarg-winter-wonderland': {
    id: 4,
    name: 'Gulmarg Winter Wonderland',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/532959840/photo/gulmarg-high-peaks.jpg?s=800&w=800',
    basePrice: 22000,
    highlights: ['Heli-Skiing', 'Snow Activities', 'Mountain Views', 'Winter Festival'],
    itinerary: [
      { day: 1, title: 'Arrival', activities: ['Resort check-in', 'Winter gear setup', 'Welcome dinner'] },
      { day: 2, title: 'Mountain Adventure', activities: ['Gondola to Apharwat', 'Snow sports', 'Mountain photography'] },
      { day: 3, title: 'Heli-Skiing', activities: ['Helicopter ride', 'Expert skiing', 'Professional guidance'] },
      { day: 4, title: 'Winter Activities', activities: ['Snowmobiling', 'Igloo cafe visit', 'Festival events'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Last snow fun', 'Transfer'] }
    ],
    inclusions: [
      '4 nights luxury stay',
      'All meals gourmet',
      'Heli-skiing session',
      'All equipment',
      'Professional guides',
      'Festival entry'
    ],
    exclusions: [
      'Airfare',
      'Personal shopping',
      'Extra heli-skiing',
      'Alcohol',
      'Insurance'
    ]
  },

  // Pahalgam Packages
  'pahalgam-valley-explorer': {
    id: 5,
    name: 'Pahalgam Valley Explorer',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    basePrice: 18000,
    highlights: ['Betaab Valley', 'Lidder River', 'Meadow Treks', 'Local Culture'],
    itinerary: [
      { day: 1, title: 'Arrival in Pahalgam', activities: ['Hotel check-in', 'Lidder River walk', 'Evening tea'] },
      { day: 2, title: 'Valley Exploration', activities: ['Betaab Valley visit', 'Meadow trekking', 'Local interactions'] },
      { day: 3, title: 'River & Nature', activities: ['Riverside picnic', 'Nature walks', 'Cultural evening'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Last views', 'Transfer'] }
    ],
    inclusions: [
      '3 nights hotel stay',
      'Daily breakfast & dinner',
      'All local transfers',
      'Entry fees',
      'Guide services',
      'Trekking permits'
    ],
    exclusions: [
      'Travel to Pahalgam',
      'Lunch',
      'Personal expenses',
      'Optional activities',
      'Insurance'
    ]
  },

  // Sonamarg Packages
  'sonamarg-golden-meadow': {
    id: 6,
    name: 'Sonamarg Golden Meadow',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    basePrice: 15000,
    highlights: ['Thajiwas Glacier', 'Meadow Walks', 'Mountain Views', 'River Side'],
    itinerary: [
      { day: 1, title: 'Arrival in Sonamarg', activities: ['Campsite setup', 'Meadow exploration', 'Evening bonfire'] },
      { day: 2, title: 'Glacier Adventure', activities: ['Thajiwas Glacier visit', 'Pony ride', 'Mountain photography'] },
      { day: 3, title: 'Departure', activities: ['Morning walk', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '2 nights camping',
      'All meals',
      'Pony rides',
      'Camping equipment',
      'Guide services',
      'Permits'
    ],
    exclusions: [
      'Travel to Sonamarg',
      'Personal gear',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },

  // Leh Packages
  'leh-cultural-discovery': {
    id: 7,
    name: 'Leh Cultural Discovery',
    duration: '6 Days / 5 Nights',
    image: 'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=800&w=800',
    basePrice: 25000,
    highlights: ['Leh Palace', 'Monasteries', 'Local Markets', 'Buddhist Culture'],
    itinerary: [
      { day: 1, title: 'Arrival & Acclimatization', activities: ['Hotel check-in', 'Rest for altitude', 'Light walking'] },
      { day: 2, title: 'Leh Exploration', activities: ['Leh Palace', 'Local markets', 'Cultural sites'] },
      { day: 3, title: 'Monastery Tour', activities: ['Thiksey Monastery', 'Shey Palace', 'Spiritual experience'] },
      { day: 4, title: 'Mountain Views', activities: ['Shanti Stupa', 'Sunrise views', 'Photography'] },
      { day: 5, title: 'Local Culture', activities: ['Traditional meals', 'Cultural interactions', 'Farewell dinner'] },
      { day: 6, title: 'Departure', activities: ['Breakfast', 'Last shopping', 'Transfer'] }
    ],
    inclusions: [
      '5 nights hotel stay',
      'All meals',
      'All local transfers',
      'Monastery entry fees',
      'Guide services',
      'Oxygen support'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Optional activities',
      'Travel insurance',
      'Tips'
    ]
  },

  // Pangong Lake Packages
  'pangong-lake-expedition': {
    id: 8,
    name: 'Pangong Lake Expedition',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    basePrice: 18000,
    highlights: ['Pangong Lake', 'Mountain Passes', 'Camping', 'Starry Nights'],
    itinerary: [
      { day: 1, title: 'Leh to Pangong', activities: ['Scenic drive', 'Lake arrival', 'Camp setup'] },
      { day: 2, title: 'Lake Exploration', activities: ['Sunrise viewing', 'Lakeside walks', 'Photography'] },
      { day: 3, title: 'Mountain Experience', activities: ['Chang La pass', 'Local villages', 'Cultural interactions'] },
      { day: 4, title: 'Return to Leh', activities: ['Morning at lake', 'Drive back', 'Farewell'] }
    ],
    inclusions: [
      '2 nights camping at Pangong',
      '1 night Leh hotel',
      'All meals',
      'Camping equipment',
      'Inner line permits',
      'Guide and driver'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra activities',
      'Travel insurance',
      'Tips'
    ]
  },

  // Nubra Valley Packages
  'nubra-valley-adventure': {
    id: 9,
    name: 'Nubra Valley Adventure',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/1046314758/photo/sunrise-at-nubra-valley-ladakh-with-scenic-landscape.jpg?s=800&w=800',
    basePrice: 22000,
    highlights: ['Bactrian Camels', 'Sand Dunes', 'Diskit Monastery', 'High Passes'],
    itinerary: [
      { day: 1, title: 'Leh to Nubra', activities: ['Khardung La pass', 'Valley arrival', 'Hotel check-in'] },
      { day: 2, title: 'Desert Experience', activities: ['Camel safari', 'Sand dunes', 'Local culture'] },
      { day: 3, title: 'Monastery & Villages', activities: ['Diskit Monastery', 'Village visits', 'Traditional dinner'] },
      { day: 4, title: 'Valley Exploration', activities: ['Panamik hot springs', 'Scenic spots', 'Photography'] },
      { day: 5, title: 'Return to Leh', activities: ['Morning activities', 'Drive back', 'Farewell'] }
    ],
    inclusions: [
      '3 nights Nubra stay',
      '1 night Leh hotel',
      'All meals',
      'Camel safari',
      'All permits',
      'Guide and transport'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },

  // Luxury Kashmir Experience
  'luxury-kashmir-retreat': {
    id: 10,
    name: 'Luxury Kashmir Retreat',
    duration: '7 Days / 6 Nights',
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=800&w=800',
    basePrice: 45000,
    highlights: ['Private Houseboat', 'Personal Guide', 'Gourmet Dining', 'Spa Treatments'],
    itinerary: [
      { day: 1, title: 'VIP Arrival', activities: ['Private transfer', 'Luxury houseboat', 'Welcome ceremony'] },
      { day: 2, title: 'Dal Lake Luxury', activities: ['Private shikara', 'Gourmet meals', 'Spa treatment'] },
      { day: 3, title: 'Gulmarg Experience', activities: ['Private gondola', 'Mountain lunch', 'Luxury resort'] },
      { day: 4, title: 'Pahalgam Retreat', activities: ['Valley exploration', 'Private picnic', 'Cultural evening'] },
      { day: 5, title: 'Sonamarg Adventure', activities: ['Private transport', 'Glacier visit', 'Luxury camping'] },
      { day: 6, title: 'Leisure & Shopping', activities: ['Relaxation', 'Local artisans', 'Farewell dinner'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Private transfer', 'Gift package'] }
    ],
    inclusions: [
      '6 nights luxury accommodation',
      'All gourmet meals',
      'Private car and driver',
      'Personal guide',
      'Spa treatments',
      'All activities and entries'
    ],
    exclusions: [
      'Airfare',
      'Personal shopping',
      'Extra spa services',
      'Premium alcohol',
      'Insurance'
    ]
  }
};

// Additional packages for other destinations
export const additionalPackages: DestinationPackages = {
  // Doodhpathri Packages
  'doodhpathri-nature-escape': {
    id: 11,
    name: 'Doodhpathri Nature Escape',
    duration: '3 Days / 2 Nights',
    image: 'https://media.gettyimages.com/id/971355764/photo/doodhpathri-budgam-jammu-kashmir-india-a-general-view-of-water-flowing-through-meadows-of.jpg?s=800&w=800',
    basePrice: 15000,
    highlights: ['Meadow Exploration', 'Stream-side Picnics', 'Horse Riding', 'Nature Walks'],
    itinerary: [
      { day: 1, title: 'Arrival in Doodhpathri', activities: ['Campsite setup', 'Meadow exploration', 'Evening bonfire'] },
      { day: 2, title: 'Valley Discovery', activities: ['Nature walks', 'Horse riding', 'Stream-side picnic'] },
      { day: 3, title: 'Departure', activities: ['Morning walk', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '2 nights camping',
      'All meals',
      'Horse riding',
      'Camping equipment',
      'Guide services',
      'Entry permits'
    ],
    exclusions: [
      'Travel to Doodhpathri',
      'Personal expenses',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },

  // Aru Valley Packages
  'aru-valley-trekking': {
    id: 12,
    name: 'Aru Valley Trekking',
    duration: '4 Days / 3 Nights',
    image: 'https://media.istockphoto.com/id/838020756/photo/square-panorama-of-aru-valley-jammu-and-kashmir-india.jpg?s=800&w=800',
    basePrice: 18000,
    highlights: ['Mountain Treks', 'Alpine Lakes', 'Local Hut Stays', 'Guided Hiking'],
    itinerary: [
      { day: 1, title: 'Arrival & Acclimatization', activities: ['Local hut check-in', 'Light trekking', 'Evening rest'] },
      { day: 2, title: 'Valley Trek', activities: ['Mountain trails', 'Lake visits', 'Nature photography'] },
      { day: 3, title: 'Alpine Exploration', activities: ['High altitude trek', 'Local culture', 'Traditional dinner'] },
      { day: 4, title: 'Departure', activities: ['Morning walk', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '3 nights local stay',
      'All meals',
      'Trekking guide',
      'Trekking permits',
      'Basic equipment',
      'Local transfers'
    ],
    exclusions: [
      'Travel to Aru',
      'Personal trekking gear',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },

  // Betaab Valley Packages
  'betaab-valley-experience': {
    id: 13,
    name: 'Betaab Valley Experience',
    duration: '3 Days / 2 Nights',
    image: 'https://www.shutterstock.com/image-photo/betaab-valley-betab-very-popular-600nw-2377086873.jpg',
    basePrice: 15000,
    highlights: ['Lush Meadows', 'Lidder River', 'Mountain Views', 'Film Location'],
    itinerary: [
      { day: 1, title: 'Arrival in Betaab', activities: ['Campsite setup', 'River side walk', 'Evening relaxation'] },
      { day: 2, title: 'Valley Exploration', activities: ['Meadow trekking', 'River activities', 'Photography'] },
      { day: 3, title: 'Departure', activities: ['Morning meditation', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '2 nights camping',
      'All meals',
      'Entry fees',
      'Camping equipment',
      'Guide services',
      'Local transfers'
    ],
    exclusions: [
      'Travel to Betaab',
      'Personal expenses',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },

  // Kargil Packages
  'kargil-heritage-tour': {
    id: 14,
    name: 'Kargil Heritage Tour',
    duration: '5 Days / 4 Nights',
    image: 'https://discoverlehladakh.in/wp-content/uploads/2021/03/Kargil-town-o-Ladakh-at-the-bank-of-Suru-river.jpg',
    basePrice: 20000,
    highlights: ['War Memorial', 'Ancient Monasteries', 'Suru Valley', 'Cultural Sites'],
    itinerary: [
      { day: 1, title: 'Arrival in Kargil', activities: ['Hotel check-in', 'Local orientation', 'Evening rest'] },
      { day: 2, title: 'Historical Sites', activities: ['War memorial', 'Museum visit', 'Cultural insights'] },
      { day: 3, title: 'Monastery Tour', activities: ['Ancient monasteries', 'Spiritual experience', 'Local interactions'] },
      { day: 4, title: 'Valley Exploration', activities: ['Suru Valley', 'Mountain views', 'Photography'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Last visits', 'Transfer'] }
    ],
    inclusions: [
      '4 nights hotel stay',
      'All meals',
      'All local transfers',
      'Entry fees',
      'Guide services',
      'Permits'
    ],
    exclusions: [
      'Travel to Kargil',
      'Personal expenses',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  }
};