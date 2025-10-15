import type { DestinationPackages } from './types';

export const kashmirLadakhPackages: DestinationPackages = {
  // Dal Lake Packages
  'dal-lake-houseboat-stay': {
    id: 1,
    name: 'Dal Lake Houseboat Stay',
    duration: '3 Days / 2 Nights',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero?qlt=82&ts=1742154685264',
    basePrice: 15000,
    highlights: ['Shikara ride', 'Floating market visit', 'Mughal gardens tour', 'Local cuisine dinner'],
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
  'srinagar-exploration': {
    id: 2,
    name: 'Srinagar Exploration',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/485422676/photo/shikara-boats-on-dal-lake-srinagar.jpg?s=612x612&w=0&k=20&c=AnenqHTLf68PPJVtke7MoktZoQ4tLs8mXTvedeTSPOk=',
    basePrice: 25000,
    highlights: ['Dal Lake', 'Hazratbal Shrine', 'Shopping in Srinagar', 'Day trip to nearby hills'],
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
  'kashmir-lake-adventure': {
    id: 3,
    name: 'Kashmir Lake Adventure',
    duration: '4 Days / 3 Nights',
    image: 'https://www.shutterstock.com/image-photo/dal-lake-beautiful-mountain-range-600nw-2394893775.jpg',
    basePrice: 20000,
    highlights: ['Boating', 'Fishing', 'Bird watching', 'Cultural experiences'],
    itinerary: [
      { day: 1, title: 'Arrival & Lake Intro', activities: ['Check-in', 'Boating session', 'Welcome cultural talk'] },
      { day: 2, title: 'Adventure Day', activities: ['Fishing excursion', 'Bird watching tour', 'Local experiences'] },
      { day: 3, title: 'Exploration', activities: ['Advanced boating', 'Nature walks', 'Evening cultural show'] },
      { day: 4, title: 'Departure', activities: ['Morning activity', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '3 nights accommodation',
      'All meals',
      'Boating and fishing gear',
      'Guided tours',
      'Entry fees',
      'Local transfers'
    ],
    exclusions: [
      'Travel to Srinagar',
      'Personal expenses',
      'Extra gear rental',
      'Insurance',
      'Tips'
    ]
  },

  // Gulmarg Packages
  'gulmarg-ski-adventure': {
    id: 4,
    name: 'Gulmarg Ski Adventure',
    duration: '4 Days / 3 Nights',
    image: 'https://t3.ftcdn.net/jpg/04/38/04/00/360_F_438040039_H1MeCPJjNfWgZQ7XBdTHgm24hUX7c9Hk.jpg',
    basePrice: 18000,
    highlights: ['Gulmarg Gondola ride', 'Skiing and snowboarding', 'Maharani Temple visit', 'Wildlife sanctuary trails'],
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
  'winter-wonderland-escape': {
    id: 5,
    name: 'Winter Wonderland Escape',
    duration: '5 Days / 4 Nights',
    image: 'https://www.shutterstock.com/image-photo/winter-season-gulmarg-town-hill-260nw-1987436762.jpg',
    basePrice: 22000,
    highlights: ['Heli-skiing', 'Tobogganing', 'Pir Panjal Range views', 'Winter festival events'],
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
  'summer-flower-trail': {
    id: 6,
    name: 'Summer Flower Trail',
    duration: '3 Days / 2 Nights',
    image: 'https://media.gettyimages.com/id/1920697453/photo/srinagar-jammu-and-kashmir-india-general-view-of-dry-ski-slopes-at-the-world-famed-ski-resort.jpg?s=612x612&w=gi&k=20&c=nfm_CcI6OBbypd1UMJxdZyPTxbWH8jTPeqxfV_w9r2A=',
    basePrice: 15000,
    highlights: ['Golfing', 'Wildflower meadow treks', 'Lake picnics', 'Khilanmarg views'],
    itinerary: [
      { day: 1, title: 'Arrival & Golf Intro', activities: ['Hotel check-in', 'Golf course visit', 'Evening meadow walk'] },
      { day: 2, title: 'Flower Trail', activities: ['Wildflower treks', 'Lake picnic', 'Khilanmarg views'] },
      { day: 3, title: 'Departure', activities: ['Morning golf', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '2 nights stay',
      'All meals',
      'Golf equipment',
      'Guided treks',
      'Picnic setup',
      'Local transfers'
    ],
    exclusions: [
      'Travel to Gulmarg',
      'Personal expenses',
      'Extra golf rounds',
      'Insurance',
      'Tips'
    ]
  },

  // Pahalgam Packages
  'pahalgam-valley-explorer': {
    id: 7,
    name: 'Pahalgam Valley Explorer',
    duration: '4 Days / 3 Nights',
    image: 'https://www.shutterstock.com/image-photo/serene-landscape-liddar-valley-phalgam-260nw-2498432239.jpg',
    basePrice: 18000,
    highlights: ['Betaab Valley and Baisaran meadows', 'Kolahoi Glacier trail', 'Lidder River banks', 'Pahalgam Golf Course'],
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
  'amarnath-pilgrimage-base': {
    id: 8,
    name: 'Amarnath Pilgrimage Base',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/488722541/photo/the-beautiful-nature-with-himalaya-mountain-background.jpg?s=612x612&w=0&k=20&c=9TOH5KqrKuHvVC_yd6Y3Vxpi8mBoyKcbQs0YtK8hO4=',
    basePrice: 22000,
    highlights: ['Amarnath Yatra starting point', 'Lidder Valley sightseeing', 'Aru Valley visit', 'Cultural immersion'],
    itinerary: [
      { day: 1, title: 'Arrival & Prep', activities: ['Check-in', 'Pilgrimage briefing', 'Local temple visit'] },
      { day: 2, title: 'Valley Sightseeing', activities: ['Lidder Valley tour', 'Aru Valley drive', 'Cultural sites'] },
      { day: 3, title: 'Pilgrimage Day', activities: ['Yatra starting point', 'Guided trek', 'Spiritual activities'] },
      { day: 4, title: 'Reflection', activities: ['Rest day', 'Local immersion', 'Evening prayers'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Final rituals', 'Transfer'] }
    ],
    inclusions: [
      '4 nights accommodation',
      'All meals',
      'Yatra permits',
      'Guided tours',
      'Local transfers',
      'Cultural programs'
    ],
    exclusions: [
      'Airfare',
      'Personal pilgrimage gear',
      'Extra treks',
      'Insurance',
      'Tips'
    ]
  },
  'scenic-hill-station-retreat': {
    id: 9,
    name: 'Scenic Hill Station Retreat',
    duration: '3 Days / 2 Nights',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/lidder-river-pahalgam-j&k-1-attr-nearby?qlt=82&ts=1726728872783',
    basePrice: 15000,
    highlights: ['Valley panoramic views', 'Lidder River rafting', 'Pine forest walks', 'Local market exploration'],
    itinerary: [
      { day: 1, title: 'Arrival & Views', activities: ['Check-in', 'Panoramic views', 'Evening market'] },
      { day: 2, title: 'Adventure & Walks', activities: ['River rafting', 'Forest walks', 'Local exploration'] },
      { day: 3, title: 'Departure', activities: ['Morning views', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '2 nights stay',
      'All meals',
      'Rafting session',
      'Guided walks',
      'Entry fees',
      'Transfers'
    ],
    exclusions: [
      'Travel to Pahalgam',
      'Personal expenses',
      'Extra rafting',
      'Insurance',
      'Tips'
    ]
  },

  // Sonamarg Packages
  'sonamarg-trekking-escape': {
    id: 10,
    name: 'Sonamarg Trekking Escape',
    duration: '4 Days / 3 Nights',
    image: 'https://media.gettyimages.com/id/584374227/photo/sonamarg-landscape-with-red-hourse.jpg?s=612x612&w=gi&k=20&c=X2muR7Fh8nyQ0qrfNpz-Vn0UogfLnMrG7JQerfjsNA=',
    basePrice: 18000,
    highlights: ['Vishansar and Krishansar Lakes trek', 'Thajiwas Glacier pony ride', 'Sind River fishing', 'Alpine meadow hikes'],
    itinerary: [
      { day: 1, title: 'Arrival in Sonamarg', activities: ['Campsite setup', 'Meadow exploration', 'Evening bonfire'] },
      { day: 2, title: 'Glacier Adventure', activities: ['Thajiwas Glacier visit', 'Pony ride', 'Mountain photography'] },
      { day: 3, title: 'Trekking Day', activities: ['Lakes trek', 'Fishing', 'Alpine hikes'] },
      { day: 4, title: 'Departure', activities: ['Morning walk', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '3 nights camping',
      'All meals',
      'Pony rides',
      'Trekking guides',
      'Fishing gear',
      'Permits'
    ],
    exclusions: [
      'Travel to Sonamarg',
      'Personal gear',
      'Extra treks',
      'Insurance',
      'Tips'
    ]
  },
  'glacier-and-river-adventure': {
    id: 11,
    name: 'Glacier and River Adventure',
    duration: '3 Days / 2 Nights',
    image: 'https://c8.alamy.com/comp/F7634W/road-to-sonamarg-from-srinagar-in-winter-kashmir-india-asia-F7634W.jpg',
    basePrice: 15000,
    highlights: ['Thajiwas Glacier exploration', 'Sind River rafting', 'Sonamarg Valley sightseeing', 'Baltal Valley visit'],
    itinerary: [
      { day: 1, title: 'Arrival & Glacier', activities: ['Check-in', 'Glacier exploration', 'Evening rest'] },
      { day: 2, title: 'River Adventure', activities: ['Rafting', 'Valley sightseeing', 'Baltal visit'] },
      { day: 3, title: 'Departure', activities: ['Breakfast', 'Last activity', 'Transfer'] }
    ],
    inclusions: [
      '2 nights stay',
      'All meals',
      'Rafting and exploration',
      'Guides',
      'Transfers',
      'Entry fees'
    ],
    exclusions: [
      'Travel to Sonamarg',
      'Personal expenses',
      'Extra rafting',
      'Insurance',
      'Tips'
    ]
  },
  'amarnath-yatra-gateway': {
    id: 12,
    name: 'Amarnath Yatra Gateway',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/856560470/photo/views-of-sonmarg-valley.jpg?s=612x612&w=0&k=20&c=H_a3rdDKVMVarPL66ZPvkbIOXhHE4KCPUbuJZugOAjw=',
    basePrice: 25000,
    highlights: ['Amarnath Temple Yatra base', 'Gangabal Lake trek', 'Fishing and hiking', 'Zoji La Pass access'],
    itinerary: [
      { day: 1, title: 'Arrival & Prep', activities: ['Check-in', 'Yatra briefing', 'Local rest'] },
      { day: 2, title: 'Gateway Exploration', activities: ['Temple base visit', 'Gangabal trek', 'Hiking'] },
      { day: 3, title: 'Adventure', activities: ['Fishing', 'Zoji La access', 'Scenic drives'] },
      { day: 4, title: 'Cultural Day', activities: ['Local interactions', 'Rest', 'Evening events'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Final prep', 'Transfer'] }
    ],
    inclusions: [
      '4 nights accommodation',
      'All meals',
      'Yatra permits',
      'Guided treks',
      'Fishing gear',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal gear',
      'Extra hikes',
      'Insurance',
      'Tips'
    ]
  },

  // Doodhpathri Packages
  'doodhpathri-nature-retreat': {
    id: 13,
    name: 'Doodhpathri Nature Retreat',
    duration: '3 Days / 2 Nights',
    image: 'https://www.shutterstock.com/image-photo/rock-stream-doodhpathri-600nw-2437715661.jpg',
    basePrice: 15000,
    highlights: ['Meadow exploration', 'Stream-side picnics', 'Horse riding', 'Local village visit'],
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
  'adventure-in-valley-of-milk': {
    id: 14,
    name: 'Adventure in Valley of Milk',
    duration: '4 Days / 3 Nights',
    image: 'https://www.shutterstock.com/image-photo/doodhpathri-meadow-kashmir-india-looks-600nw-2292495315.jpg',
    basePrice: 18000,
    highlights: ['ATV rides', 'Paragliding', 'Trekking', 'Camping experience'],
    itinerary: [
      { day: 1, title: 'Arrival & Setup', activities: ['Check-in', 'ATV intro', 'Evening rest'] },
      { day: 2, title: 'Adventure Day', activities: ['Paragliding', 'Trekking', 'Camping'] },
      { day: 3, title: 'Exploration', activities: ['More ATV', 'Valley views', 'Cultural'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Last activity', 'Transfer'] }
    ],
    inclusions: [
      '3 nights stay',
      'All meals',
      'Adventure activities',
      'Equipment',
      'Guides',
      'Transfers'
    ],
    exclusions: [
      'Travel to Doodhpathri',
      'Personal expenses',
      'Extra rides',
      'Insurance',
      'Tips'
    ]
  },
  'doodhpathri-photography-tour': {
    id: 15,
    name: 'Doodhpathri Photography Tour',
    duration: '5 Days / 4 Nights',
    image: 'https://vargiskhan.com/log/wp-content/uploads/2018/09/doodhpathri-6.jpg',
    basePrice: 22000,
    highlights: ['Scenic photography spots', 'Wildlife watching', 'Sunrise/sunset sessions', 'Cultural immersion'],
    itinerary: [
      { day: 1, title: 'Arrival & Orientation', activities: ['Check-in', 'Photo spots intro', 'Sunset session'] },
      { day: 2, title: 'Meadow Shoots', activities: ['Wildlife watching', 'Sunrise photography', 'Guided spots'] },
      { day: 3, title: 'Valley Exploration', activities: ['Cultural immersion', 'Landscape shoots', 'Evening editing'] },
      { day: 4, title: 'Advanced Sessions', activities: ['Sunset hikes', 'Wildlife close-ups', 'Group review'] },
      { day: 5, title: 'Departure', activities: ['Morning shoot', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '4 nights accommodation',
      'All meals',
      'Photography guides',
      'Spot access',
      'Equipment rental',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal camera gear',
      'Extra sessions',
      'Insurance',
      'Tips'
    ]
  },

  // Aru Valley Packages
  'aru-valley-trekking-escape': {
    id: 16,
    name: 'Aru Valley Trekking Escape',
    duration: '4 Days / 3 Nights',
    image: 'https://media.istockphoto.com/id/838020756/photo/square-panorama-of-aru-valley-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=kgbQ_BVR2CQTLF4la12ZUYwHKIAgaNDwgGEiS-mMYO0=',
    basePrice: 18000,
    highlights: ['Kolahoi Glacier trek', 'Scenic meadows and lakes', 'Local hut stays', 'Guided hiking'],
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
  'winter-wonderland-adventure': {
    id: 17,
    name: 'Winter Wonderland Adventure',
    duration: '3 Days / 2 Nights',
    image: 'https://www.shutterstock.com/image-photo/winter-scene-aru-valley-near-600nw-2029988210.jpg',
    basePrice: 15000,
    highlights: ['Skiing and snowboarding', 'Winter trekking', 'Photography', 'Hot local meals'],
    itinerary: [
      { day: 1, title: 'Arrival in Winter', activities: ['Check-in', 'Gear setup', 'Snow intro'] },
      { day: 2, title: 'Winter Sports', activities: ['Skiing/snowboarding', 'Trekking', 'Photography'] },
      { day: 3, title: 'Departure', activities: ['Morning meal', 'Last snow', 'Transfer'] }
    ],
    inclusions: [
      '2 nights stay',
      'All hot meals',
      'Winter gear',
      'Guides',
      'Transfers',
      'Entry fees'
    ],
    exclusions: [
      'Travel to Aru',
      'Personal expenses',
      'Extra sports',
      'Insurance',
      'Tips'
    ]
  },
  'biosphere-nature-retreat': {
    id: 18,
    name: 'Biosphere Nature Retreat',
    duration: '5 Days / 4 Nights',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Aruvillage.jpg',
    basePrice: 25000,
    highlights: ['Overa-Aru Biosphere Reserve', 'Wildlife spotting', 'Horse riding', 'Trout fishing'],
    itinerary: [
      { day: 1, title: 'Arrival & Reserve Intro', activities: ['Check-in', 'Reserve orientation', 'Evening wildlife talk'] },
      { day: 2, title: 'Wildlife Day', activities: ['Spotting tours', 'Horse riding', 'Nature walks'] },
      { day: 3, title: 'Fishing & Exploration', activities: ['Trout fishing', 'Reserve hikes', 'Local interactions'] },
      { day: 4, title: 'Deep Dive', activities: ['Advanced spotting', 'Cultural evening', 'Rest'] },
      { day: 5, title: 'Departure', activities: ['Morning activity', 'Breakfast', 'Transfer'] }
    ],
    inclusions: [
      '4 nights accommodation',
      'All meals',
      'Wildlife guides',
      'Horse riding',
      'Fishing gear',
      'Permits and transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal gear',
      'Extra tours',
      'Insurance',
      'Tips'
    ]
  },

  // Betaab Valley Packages
  'betaab-valley-explorer': {
    id: 19,
    name: 'Betaab Valley Explorer',
    duration: '3 Days / 2 Nights',
    image: 'https://images.pexels.com/photos/14434881/pexels-photo-14434881.jpeg',
    basePrice: 15000,
    highlights: ['Lush meadows and Lidder River', 'Trekking base camp', 'Snow-clad mountain views', 'Pahalgam exploration'],
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
  'himalayan-trek-adventure': {
    id: 20,
    name: 'Himalayan Trek Adventure',
    duration: '4 Days / 3 Nights',
    image: 'https://www.shutterstock.com/image-photo/view-betab-valley-winter-season-600nw-1988170538.jpg',
    basePrice: 20000,
    highlights: ['Camping in valley', 'River stream activities', 'Vegetation walks', 'Amarnath Yatra route'],
    itinerary: [
      { day: 1, title: 'Arrival & Camp', activities: ['Setup', 'Stream activities', 'Evening walk'] },
      { day: 2, title: 'Trek Day', activities: ['Himalayan trails', 'Yatra route intro', 'Vegetation exploration'] },
      { day: 3, title: 'Adventure', activities: ['Camping night', 'River fun', 'Guides'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Last trek', 'Transfer'] }
    ],
    inclusions: [
      '3 nights camping',
      'All meals',
      'Trekking guides',
      'Camp equipment',
      'Permits',
      'Transfers'
    ],
    exclusions: [
      'Travel to Betaab',
      'Personal gear',
      'Extra activities',
      'Insurance',
      'Tips'
    ]
  },
  'kashmir-nature-retreat': {
    id: 21,
    name: 'Kashmir Nature Retreat',
    duration: '5 Days / 4 Nights',
    image: 'https://thumbs.dreamstime.com/b/betaab-valley-lidder-river-beautiful-kashmir-pine-tree-leans-over-clean-water-coming-glaciers-mountains-41787209.jpg',
    basePrice: 25000,
    highlights: ['Full valley tour', 'Mountain sightseeing', 'Stream water tasting', 'Green surroundings relaxation'],
    itinerary: [
      { day: 1, title: 'Arrival & Relax', activities: ['Check-in', 'Valley intro', 'Stream tasting'] },
      { day: 2, title: 'Nature Tour', activities: ['Full exploration', 'Mountain sights', 'Relaxation'] },
      { day: 3, title: 'Deep Retreat', activities: ['Green walks', 'Picnics', 'Cultural'] },
      { day: 4, title: 'Leisure', activities: ['Free time', 'Surroundings', 'Evening spa'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Final views', 'Transfer'] }
    ],
    inclusions: [
      '4 nights stay',
      'All meals',
      'Guided tours',
      'Relaxation activities',
      'Entry fees',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra spa',
      'Insurance',
      'Tips'
    ]
  },

  // Leh Packages
  'leh-discovery-tour': {
    id: 22,
    name: 'Leh Discovery Tour',
    duration: '4 Days / 3 Nights',
    image: 'https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/300049555_Leh-Ladakh.jpg',
    basePrice: 18000,
    highlights: ['Leh Palace and old town', 'Shanti Stupa views', 'Namgyal Tsemo Gompa', 'Local markets'],
    itinerary: [
      { day: 1, title: 'Arrival & Acclimatization', activities: ['Hotel check-in', 'Rest for altitude', 'Light walking'] },
      { day: 2, title: 'Leh Exploration', activities: ['Leh Palace', 'Local markets', 'Cultural sites'] },
      { day: 3, title: 'Stupa & Gompa', activities: ['Shanti Stupa', 'Namgyal Tsemo', 'Views'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Last shopping', 'Transfer'] }
    ],
    inclusions: [
      '3 nights hotel stay',
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
  'high-altitude-adventure': {
    id: 23,
    name: 'High Altitude Adventure',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/916575772/photo/namgyal-tsemo-gompa-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=MAdxcJNbCD7lcTB0t7NEWCc_hn16EZBKzyYoabr3pno=',
    basePrice: 22000,
    highlights: ['Srinagar-Leh Highway drive', 'Sankar Monastery trek', 'Sindhu Darshan Festival', 'War Museum visit'],
    itinerary: [
      { day: 1, title: 'Arrival', activities: ['Check-in', 'Highway intro', 'Rest'] },
      { day: 2, title: 'Drive Adventure', activities: ['Srinagar-Leh drive', 'Scenic stops', 'Altitude acclimation'] },
      { day: 3, title: 'Monastery Trek', activities: ['Sankar trek', 'Festival events', 'Cultural'] },
      { day: 4, title: 'History Day', activities: ['War Museum', 'Local exploration', 'Evening'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Final drive', 'Transfer'] }
    ],
    inclusions: [
      '4 nights stay',
      'All meals',
      'Highway transport',
      'Trek guides',
      'Festival access',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra treks',
      'Insurance',
      'Tips'
    ]
  },
  'cultural-immersion-package': {
    id: 24,
    name: 'Cultural Immersion Package',
    duration: '6 Days / 5 Nights',
    image: 'https://media.gettyimages.com/id/1297500238/photo/spituk-gompa-indus-valley-near-leh-ladakh-india.jpg?s=612x612&w=gi&k=20&c=vVMPoSIWw-n4AnbeuB4o73Lllh4sDEYjvy5jzwgHUA=',
    basePrice: 25000,
    highlights: ['Buddhist monastery tours', 'Tibetan heritage exploration', 'Tsampa preparation', 'Seasonal road trips'],
    itinerary: [
      { day: 1, title: 'Arrival & Immersion Start', activities: ['Check-in', 'Heritage intro', 'Tsampa demo'] },
      { day: 2, title: 'Monastery Tours', activities: ['Buddhist sites', 'Cultural talks', 'Evening prayers'] },
      { day: 3, title: 'Heritage Day', activities: ['Tibetan exploration', 'Road trips', 'Local meals'] },
      { day: 4, title: 'Deep Culture', activities: ['Preparation classes', 'Interactions', 'Festivals'] },
      { day: 5, title: 'Road Adventures', activities: ['Seasonal trips', 'Scenic', 'Reflection'] },
      { day: 6, title: 'Departure', activities: ['Breakfast', 'Farewell', 'Transfer'] }
    ],
    inclusions: [
      '5 nights stay',
      'All meals',
      'Cultural tours',
      'Guides',
      'Road trips',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra classes',
      'Insurance',
      'Tips'
    ]
  },

  // Pangong Lake Packages
  'ladakh-lake-explorer': {
    id: 25,
    name: 'Ladakh Lake Explorer',
    duration: '4 Days / 3 Nights',
    image: 'https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg',
    basePrice: 18000,
    highlights: ['Drive to Pangong Tso', 'Sublakes and ranges visit', 'Historical border points', 'Lake shore camping'],
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
  'high-altitude-adventure-pangong': {
    id: 26,
    name: 'High Altitude Adventure',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/1158621189/photo/pangong-tso-or-pangong-an-endorheic-lake-ladakh-india.jpg?s=612x612&w=0&k=20&c=a_4DyrBYLkDhhFdqpOBWhuTmeVOD-BGHMXEsvZTIwLM=',
    basePrice: 22000,
    highlights: ['Northern and southern banks', 'Wildlife spotting', 'Chushul-Lukung Road', 'Tibetan cultural insights'],
    itinerary: [
      { day: 1, title: 'Journey Start', activities: ['Drive to lake', 'Bank exploration', 'Setup'] },
      { day: 2, title: 'Northern Banks', activities: ['Wildlife', 'Scenic road', 'Cultural'] },
      { day: 3, title: 'Southern Adventure', activities: ['Southern banks', 'Road trip', 'Insights'] },
      { day: 4, title: 'Full Exploration', activities: ['Combined activities', 'Photography', 'Rest'] },
      { day: 5, title: 'Return', activities: ['Morning views', 'Drive back', 'Transfer'] }
    ],
    inclusions: [
      '3 nights camping',
      '1 night hotel',
      'All meals',
      'Guides',
      'Permits',
      'Transport'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra spotting',
      'Insurance',
      'Tips'
    ]
  },
  'border-vista-tour': {
    id: 27,
    name: 'Border Vista Tour',
    duration: '3 Days / 2 Nights',
    image: 'https://t3.ftcdn.net/jpg/08/19/15/58/360_F_819155837_UbNqqJH9jvPUb2ESwi6dzxPQF4y0k460.jpg',
    basePrice: 15000,
    highlights: ['Inner Line Permit assistance', 'Disputed area views', 'Bird-watching', 'Lakeshore road trip'],
    itinerary: [
      { day: 1, title: 'To the Border', activities: ['Permit help', 'Drive', 'Vista arrival'] },
      { day: 2, title: 'Vista Day', activities: ['Area views', 'Bird-watching', 'Road trip'] },
      { day: 3, title: 'Departure', activities: ['Morning views', 'Return drive', 'Transfer'] }
    ],
    inclusions: [
      '2 nights camping',
      'All meals',
      'Permit assistance',
      'Guides',
      'Bird gear',
      'Transport'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra trips',
      'Insurance',
      'Tips'
    ]
  },

  // Nubra Valley Packages
  'nubra-desert-safari': {
    id: 28,
    name: 'Nubra Desert Safari',
    duration: '4 Days / 3 Nights',
    image: 'https://www.tripsavvy.com/thmb/yaIbFYWeF3OYepvb2jkAuJujKmo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-469085179-5c6ce9b346e0fb0001e6e812.jpg',
    basePrice: 20000,
    highlights: ['Khardung La crossing', 'Camel ride in Hunder', 'Diskit Monastery', 'Overnight camping'],
    itinerary: [
      { day: 1, title: 'Leh to Nubra', activities: ['Khardung La pass', 'Valley arrival', 'Hotel check-in'] },
      { day: 2, title: 'Desert Experience', activities: ['Camel safari', 'Sand dunes', 'Local culture'] },
      { day: 3, title: 'Monastery & Villages', activities: ['Diskit Monastery', 'Village visits', 'Traditional dinner'] },
      { day: 4, title: 'Return to Leh', activities: ['Morning activities', 'Drive back', 'Farewell'] }
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
  'valley-of-flowers-exploration': {
    id: 29,
    name: 'Valley of Flowers Exploration',
    duration: '5 Days / 4 Nights',
    image: 'https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2015/12/Nubra-Valley.jpg',
    basePrice: 25000,
    highlights: ['Panamik hot springs', 'Yarab Tso trek', 'Village interactions', 'Star gazing'],
    itinerary: [
      { day: 1, title: 'Arrival', activities: ['Pass crossing', 'Check-in', 'Intro'] },
      { day: 2, title: 'Flowers & Trek', activities: ['Yarab Tso trek', 'Village talks', 'Star gazing'] },
      { day: 3, title: 'Hot Springs', activities: ['Panamik visit', 'Relaxation', 'Exploration'] },
      { day: 4, title: 'Deep Valley', activities: ['More interactions', 'Scenic', 'Evening'] },
      { day: 5, title: 'Return', activities: ['Breakfast', 'Drive', 'Transfer'] }
    ],
    inclusions: [
      '4 nights stay',
      'All meals',
      'Trek guides',
      'Hot springs access',
      'Permits',
      'Transport'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra treks',
      'Insurance',
      'Tips'
    ]
  },
  'complete-nubra-experience': {
    id: 30,
    name: 'Complete Nubra Experience',
    duration: '6 Days / 5 Nights',
    image: 'https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2024-08-13-17-21-29-66bb48c168fdf-gallary-%284%29.jpg',
    basePrice: 30000,
    highlights: ['All major attractions', 'Adventure activities', 'Cultural shows', 'Luxury camping'],
    itinerary: [
      { day: 1, title: 'Full Arrival', activities: ['To Nubra', 'Major intro', 'Luxury setup'] },
      { day: 2, title: 'Desert & Camels', activities: ['Safari', 'Dunes', 'Adventures'] },
      { day: 3, title: 'Monastery & Springs', activities: ['Diskit', 'Panamik', 'Shows'] },
      { day: 4, title: 'Trek & Villages', activities: ['Yarab Tso', 'Interactions', 'Camping'] },
      { day: 5, title: 'Complete Exploration', activities: ['All spots', 'Cultural', 'Stars'] },
      { day: 6, title: 'Departure', activities: ['Morning', 'Return', 'Farewell'] }
    ],
    inclusions: [
      '5 nights luxury camping/stay',
      'All meals',
      'Full activities',
      'Guides and shows',
      'Permits',
      'Transport'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra adventures',
      'Insurance',
      'Tips'
    ]
  },

  // Kargil Packages
  'kargil-history-tour': {
    id: 31,
    name: 'Kargil History Tour',
    duration: '4 Days / 3 Nights',
    image: 'https://www.lehladakhindia.com/wp-content/uploads/2024/07/kargil-war-memorial.jpg',
    basePrice: 20000,
    highlights: ['Kargil War Memorial', 'Mulbekh Monastery', 'Dras Valley', 'Local markets'],
    itinerary: [
      { day: 1, title: 'Arrival in Kargil', activities: ['Hotel check-in', 'Local orientation', 'Evening rest'] },
      { day: 2, title: 'Historical Sites', activities: ['War memorial', 'Museum visit', 'Cultural insights'] },
      { day: 3, title: 'Monastery Tour', activities: ['Ancient monasteries', 'Spiritual experience', 'Local interactions'] },
      { day: 4, title: 'Departure', activities: ['Breakfast', 'Last visits', 'Transfer'] }
    ],
    inclusions: [
      '3 nights hotel stay',
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
  },
  'suru-valley-adventure': {
    id: 32,
    name: 'Suru Valley Adventure',
    duration: '5 Days / 4 Nights',
    image: 'https://media.istockphoto.com/id/1471490544/photo/suru-valley-kargil-ladakh-india.jpg?s=612x612&w=0&k=20&c=3R9gQ2k2Y2fX7R8X9Xz2Y2fX7R8X9Xz2Y2fX7R8X9X=',
    basePrice: 25000,
    highlights: ['Trekking in Suru Valley', 'Monastery visits', 'War history exploration', 'Photography'],
    itinerary: [
      { day: 1, title: 'Arrival', activities: ['Check-in', 'Valley intro', 'Rest'] },
      { day: 2, title: 'Trekking Start', activities: ['Suru trails', 'Monasteries', 'History'] },
      { day: 3, title: 'Adventure Day', activities: ['Deep treks', 'Exploration', 'Photography'] },
      { day: 4, title: 'Cultural', activities: ['Local sites', 'War stories', 'Evening'] },
      { day: 5, title: 'Departure', activities: ['Breakfast', 'Final trek', 'Transfer'] }
    ],
    inclusions: [
      '4 nights stay',
      'All meals',
      'Trekking guides',
      'Visits',
      'Photography support',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal gear',
      'Extra treks',
      'Insurance',
      'Tips'
    ]
  },
  'ladakh-gateway-retreat': {
    id: 33,
    name: 'Ladakh Gateway Retreat',
    duration: '6 Days / 5 Nights',
    image: 'https://discoverlehladakh.in/wp-content/uploads/2021/03/Kargil-town-o-Ladakh-at-the-bank-of-Suru-river..jpg',
    basePrice: 28000,
    highlights: ['Full Kargil exploration', 'Zanskar Valley access', 'Cultural immersion', 'Scenic drives'],
    itinerary: [
      { day: 1, title: 'Gateway Arrival', activities: ['Check-in', 'Scenic intro', 'Rest'] },
      { day: 2, title: 'Exploration', activities: ['Full Kargil', 'Drives', 'Immersion'] },
      { day: 3, title: 'Zanskar Access', activities: ['Valley visit', 'Cultural', 'Sites'] },
      { day: 4, title: 'History & Nature', activities: ['Memorials', 'Valleys', 'Photography'] },
      { day: 5, title: 'Retreat Day', activities: ['Relaxation', 'Local', 'Evening'] },
      { day: 6, title: 'Departure', activities: ['Breakfast', 'Final drive', 'Transfer'] }
    ],
    inclusions: [
      '5 nights stay',
      'All meals',
      'Full access',
      'Guides',
      'Drives',
      'Transfers'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Extra access',
      'Insurance',
      'Tips'
    ]
  }
};

// Additional luxury package
export const additionalPackages: DestinationPackages = {
  'luxury-kashmir-retreat': {
    id: 34,
    name: 'Luxury Kashmir Retreat',
    duration: '7 Days / 6 Nights',
    image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=',
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