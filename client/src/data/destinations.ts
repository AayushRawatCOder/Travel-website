export interface Attraction {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Package {
  id: number;
  name: string;
  duration: string;
  price: number;
  highlights: string[];
  image: string;
}

export interface SeasonalInfo {
  season: string;
  months: string;
  temperature: string;
  description: string;
  icon: string;
}

export interface Tips {
  dos: string[];
  donts: string[];
  localFood: string[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  hero: string;
  alt: string;
  category: 'Kashmir' | 'Ladakh';
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  tagline: string;
  region: 'North India';
  overview: string[];
  attractions: Attraction[];
  packages: Package[];
  seasonalInfo: SeasonalInfo[];
  gallery: string[];
  tips: Tips;
}

export const destinations: Destination[] = [
  {
    id: 'e8e616e0-d894-4936-a3f5-391682ee794c',
    name: 'Dal Lake',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
    hero: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg/1200px-Dal_Lake_Hazratbal_Srinagar.jpg',
    alt: 'Dal Lake houseboats',
    category: 'Kashmir',
    price: 20000,
    duration: '4 Days',
    rating: 4.9,
    reviews: 956,
    description: 'Iconic lake with floating gardens and traditional houseboats',
    tagline: 'The Crown Jewel of Srinagar',
    region: 'North India',
    overview: [
      'Dal Lake, located in Srinagar, Jammu and Kashmir, is renowned for its scenic beauty and floating markets. Spanning 18 square kilometers, it is the second largest freshwater lake in the region, surrounded by Mughal gardens.',
      'Famous for houseboats serving as hotels and shikaras for transportation, the lake supports a unique ecosystem with floating gardens producing vegetables and flowers. Its water is vital for irrigation and drinking.',
      'Tourism includes shikara rides, houseboat stays, and visits to nearby attractions like Hazratbal Shrine, offering insights into Kashmiri culture and stunning views for nature lovers and photographers.'
    ],
    attractions: [
      { id: 1, name: 'Houseboats', description: 'Floating accommodations offering unique stays', image: 'https://t3.ftcdn.net/jpg/06/67/05/60/360_F_667056062_7resdoEYKJ2JkQ0dA0v3tdIMXj5XExEt.jpg' },
      { id: 2, name: 'Shikara Rides', description: 'Traditional boat tours on the lake', image: 'https://www.shutterstock.com/image-photo/view-dal-lake-winter-beautiful-600nw-2044050407.jpg' },
      { id: 3, name: 'Floating Markets', description: 'Vendors selling produce from boats', image: 'https://t4.ftcdn.net/jpg/04/66/74/07/360_F_466740766_ROSqOYMWZo81wDiiABv8CoEwPDxoyUDs.jpg' },
      { id: 4, name: 'Mughal Gardens', description: 'Historic gardens surrounding the lake', image: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=' }
    ],
    packages: [
      { id: 1, name: 'Dal Lake Houseboat Stay', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Shikara ride', 'Floating market visit', 'Mughal gardens tour', 'Local cuisine dinner'], image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero?qlt=82&ts=1742154685264' },
      { id: 2, name: 'Srinagar Exploration', duration: '5 Days / 4 Nights', price: 25000, highlights: ['Dal Lake', 'Hazratbal Shrine', 'Shopping in Srinagar', 'Day trip to nearby hills'], image: 'https://media.istockphoto.com/id/485422676/photo/shikara-boats-on-dal-lake-srinagar.jpg?s=612x612&w=0&k=20&c=AnenqHTLf68PPJVtke7MoktZoQ4tLs8mXTvedeTSPOk=' },
      { id: 3, name: 'Kashmir Lake Adventure', duration: '4 Days / 3 Nights', price: 20000, highlights: ['Boating', 'Fishing', 'Bird watching', 'Cultural experiences'], image: 'https://www.shutterstock.com/image-photo/dal-lake-beautiful-mountain-range-600nw-2394893775.jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - September', temperature: '15 to 30°C', description: 'Ideal for boating and sightseeing with pleasant weather.', icon: '☀️' },
      { season: 'Winter', months: 'October - April', temperature: '-5 to 10°C', description: 'Lake may freeze, offering beautiful snowy views.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - August', temperature: '15 to 25°C', description: 'Lush greenery with possible rainfall, suitable for scenic tours.', icon: '🌧️' }
    ],
    gallery: [
      'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=',
      'https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero?qlt=82&ts=1742154685264',
      'https://media.istockphoto.com/id/485422676/photo/shikara-boats-on-dal-lake-srinagar.jpg?s=612x612&w=0&k=20&c=AnenqHTLf68PPJVtke7MoktZoQ4tLs8mXTvedeTSPOk=',
      'https://www.shutterstock.com/image-photo/dal-lake-beautiful-mountain-range-600nw-2394893775.jpg',
      'https://media.gettyimages.com/id/615641042/photo/shikara-boats-on-lake-dal-srinagar-india.jpg?s=612x612&w=gi&k=20&c=1D1tRElXKwlo1Ju48qSdDjRoUlLKfsBoEPMUBWSoM78='
    ],
    tips: {
      dos: [
        'Take a shikara ride at sunrise or sunset for stunning views.',
        'Stay in a houseboat for a unique experience.',
        'Visit floating vegetable markets early morning.',
        'Respect local customs and dress modestly.',
        'Carry cash for boat rides and shopping.'
      ],
      donts: [
        'Do not litter in the lake to preserve its ecosystem.',
        'Avoid swimming due to dense water plants.',
        'Do not bargain aggressively with local vendors.',
        'Avoid visiting during extreme winter without preparation.',
        'Do not photograph locals without permission.'
      ],
      localFood: [
        'Wazwan - Multi-course Kashmiri meal',
        'Rogan Josh - Lamb curry',
        'Kahwa - Spiced tea',
        'Dum Aloo - Potato curry',
        'Nadru Yakhni - Lotus stem curry'
      ]
    }
  },
  {
    id: 'd3d09d59-7b6d-4ba2-b4de-7cbc28a8b12b',
    name: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80',
    hero: 'https://t4.ftcdn.net/jpg/03/62/19/27/360_F_362192710_3iIlgxQS78PoqysUTzdARNYeKFBaFxE9.jpg',
    alt: 'Gulmarg skiing paradise',
    category: 'Kashmir',
    price: 22000,
    duration: '5 Days',
    rating: 5.0,
    reviews: 812,
    description: 'Asia’s premier skiing destination with scenic gondola rides',
    tagline: 'Meadow of Flowers, Asia’s Premier Ski Haven',
    region: 'North India',
    overview: [
      'Gulmarg, meaning "meadow of flowers," is a historic summer retreat turned world-class ski destination. Established as a ski center in the 1960s, it’s rated by CNN as Asia’s seventh best ski spot, known for skiing, snowboarding, and heli-skiing.',
      'The Gulmarg Gondola, one of Asia’s longest ropeways, connects to Apharwat Peak for skiing and panoramic views of Nanga Parbat and Harmukh mountains. The area features meadows with wildflowers and pine forests.',
      'Tourism includes winter sports, golfing at the world’s highest golf course, and visits to historic sites like Maharani Temple. The town hosts the Gulmarg Winter Festival and has been a Bollywood filming location.'
    ],
    attractions: [
      { id: 1, name: 'Gulmarg Gondola', description: 'Two-stage cable car reaching 3,979 meters, offering access to ski slopes and scenic views.', image: 'https://media.istockphoto.com/id/532959840/photo/gulmarg-high-peaks.jpg?s=612x612&w=0&k=20&c=WP0MGH2QBSzAqrtYG4Ryr17303VkwoCfkONyjiruo7I=' },
      { id: 2, name: 'Maharani Temple', description: 'Built in 1915, dedicated to Shiva and Parvati, a filming site for Bollywood movies.', image: 'https://www.shutterstock.com/image-photo/gulmarg-kashmir-india-heavy-snowfall-260nw-2487153153.jpg' },
      { id: 3, name: 'St Mary’s Church', description: 'Victorian-style church from 1902, renovated in 2003, located in Shepherds Valley.', image: 'https://media.cnn.com/api/v1/images/stellar/prod/240112092135-02-gulmarg-snow.jpg?q=w_1110,c_fill' },
      { id: 4, name: 'World’s Largest Igloo Cafe', description: 'Opened in 2022, accommodating 40 people with a unique dining experience.', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-gulmarg-kashmir-j_k-city-hero?qlt=82&ts=1742154685264' }
    ],
    packages: [
      { id: 1, name: 'Gulmarg Ski Adventure', duration: '4 Days / 3 Nights', price: 18000, highlights: ['Gulmarg Gondola ride', 'Skiing and snowboarding', 'Maharani Temple visit', 'Wildlife sanctuary trails'], image: 'https://t3.ftcdn.net/jpg/04/38/04/00/360_F_438040039_H1MeCPJjNfWgZQ7XBdTHgm24hUX7c9Hk.jpg' },
      { id: 2, name: 'Winter Wonderland Escape', duration: '5 Days / 4 Nights', price: 22000, highlights: ['Heli-skiing', 'Tobogganing', 'Pir Panjal Range views', 'Winter festival events'], image: 'https://www.shutterstock.com/image-photo/winter-season-gulmarg-town-hill-260nw-1987436762.jpg' },
      { id: 3, name: 'Summer Flower Trail', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Golfing', 'Wildflower meadow treks', 'Lake picnics', 'Khilanmarg views'], image: 'https://media.gettyimages.com/id/1920697453/photo/srinagar-jammu-and-kashmir-india-general-view-of-dry-ski-slopes-at-the-world-famed-ski-resort.jpg?s=612x612&w=gi&k=20&c=nfm_CcI6OBbypd1UMJxdZyPTxbWH8jTPeqxfV_w9r2A=' }
    ],
    seasonalInfo: [
      { season: 'Winter', months: 'December - February', temperature: '-7 to 5°C', description: 'Prime skiing season with heavy snowfall and winter sports.', icon: '❄️' },
      { season: 'Summer', months: 'June - August', temperature: '10 to 21°C', description: 'Ideal for golfing and trekking with blooming meadows.', icon: '🌸' },
      { season: 'Monsoon', months: 'July - September', temperature: '8 to 18°C', description: 'Lush greenery, suitable for scenic drives but weather may affect activities.', icon: '🌧️' }
    ],
    gallery: [
      'https://www.shutterstock.com/image-photo/gulmarg-kashmir-india-heavy-snowfall-260nw-2487153153.jpg',
      'https://media.cnn.com/api/v1/images/stellar/prod/240112092135-02-gulmarg-snow.jpg?q=w_1110,c_fill',
      'https://s7ap1.scene7.com/is/image/incredibleindia/2-gulmarg-kashmir-j_k-city-hero?qlt=82&ts=1742154685264',
      'https://t3.ftcdn.net/jpg/04/38/04/00/360_F_438040039_H1MeCPJjNfWgZQ7XBdTHgm24hUX7c9Hk.jpg',
      'https://www.shutterstock.com/image-photo/winter-season-gulmarg-town-hill-260nw-1987436762.jpg'
    ],
    tips: {
      dos: [
        'Wear warm clothing for high-altitude cold.',
        'Use the gondola for safe peak access.',
        'Respect wildlife in the sanctuary.',
        'Book accommodations early during peak seasons.',
        'Follow avalanche safety guidelines in winter.'
      ],
      donts: [
        'Do not ignore weather forecasts for backcountry trips.',
        'Avoid littering to protect the ecosystem.',
        'Do not trek without guides at high altitudes.',
        'Avoid overstaying in gondola cabins during strong winds.',
        'Do not disregard security advisories near the Line of Control.'
      ],
      localFood: [
        'Kashmiri Wazwan multi-course meal',
        'Rogan Josh lamb curry',
        'Dum Aloo spiced potatoes',
        'Kahwa saffron tea',
        'Gustaba yogurt-based meatball dish'
      ]
    }
  },
  {
    id: 'c4f7b2a1-8e4a-4c1b-9d3e-6a9b7c8d2f3e',
    name: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    hero: 'https://media.istockphoto.com/id/1195331435/photo/lidder-river-flowing-through-the-beautiful-mountains-of-pahalgam-kashmir-india.jpg?s=612x612&w=0&k=20&c=eEXREbW7nLR7LHGv-UYXpFpJ-By5eu1Fqs0YtKTIY1U=',
    alt: 'Pahalgam valley streams',
    category: 'Kashmir',
    price: 18000,
    duration: '4 Days',
    rating: 4.8,
    reviews: 674,
    description: 'Picturesque valley with lush meadows and pine forests',
    tagline: 'Village of the Shepherds in the Lidder Valley',
    region: 'North India',
    overview: [
      'Pahalgam, in Anantnag district, is known as the "village of the shepherds," referenced in Hindu texts as Bailgaon, linked to the Amarnath Temple pilgrimage.',
      'Situated at 2,200 meters along the Lidder River, it features evergreen forests and a temperate climate with heavy winter snowfall. Key attractions include Betaab Valley and Kolahoi Glacier.',
      'A popular hill station, it serves as a base for the Amarnath Yatra and offers trekking, golfing, and scenic beauty, though it faces waste management challenges from tourism.'
    ],
    attractions: [
      { id: 1, name: 'Betaab Valley', description: 'Verdant meadow flanked by mountains and evergreen trees, known for its scenic beauty.', image: 'https://media.istockphoto.com/id/1155829196/photo/pahalgao-valley-kashmir.jpg?s=612x612&w=0&k=20&c=xn-kYE2VSCb0zdHGZfJG8MFsOqko25F_9qdrUdPlnU8=' },
      { id: 2, name: 'Baisaran Valley', description: 'Lush valley with meadows surrounded by mountains and pine forests.', image: 'https://www.shutterstock.com/image-photo/serene-landscape-liddar-valley-phalgam-260nw-2498432239.jpg' },
      { id: 3, name: 'Kolahoi Glacier', description: 'Hanging glacier below Kolahoi Peak, accessible via a 35 km trail from Pahalgam.', image: 'https://media.istockphoto.com/id/488722541/photo/the-beautiful-nature-with-himalaya-mountain-background.jpg?s=612x612&w=0&k=20&c=9TOH5KqrKuHvVC_yd6Y3Vxpi8mBoyKcbQs0YtK8hO4=' },
      { id: 4, name: 'Pahalgam Golf Course', description: '18-hole golf course in the Lidder Valley, opened in 2011.', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/lidder-river-pahalgam-j&k-1-attr-nearby?qlt=82&ts=1726728872783' }
    ],
    packages: [
      { id: 1, name: 'Pahalgam Valley Explorer', duration: '4 Days / 3 Nights', price: 18000, highlights: ['Betaab Valley and Baisaran meadows', 'Kolahoi Glacier trail', 'Lidder River banks', 'Pahalgam Golf Course'], image: 'https://www.shutterstock.com/image-photo/serene-landscape-liddar-valley-phalgam-260nw-2498432239.jpg' },
      { id: 2, name: 'Amarnath Pilgrimage Base', duration: '5 Days / 4 Nights', price: 22000, highlights: ['Amarnath Yatra starting point', 'Lidder Valley sightseeing', 'Aru Valley visit', 'Cultural immersion'], image: 'https://media.istockphoto.com/id/488722541/photo/the-beautiful-nature-with-himalaya-mountain-background.jpg?s=612x612&w=0&k=20&c=9TOH5KqrKuHvVC_yd6Y3Vxpi8mBoyKcbQs0YtK8hO4=' },
      { id: 3, name: 'Scenic Hill Station Retreat', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Valley panoramic views', 'Lidder River rafting', 'Pine forest walks', 'Local market exploration'], image: 'https://s7ap1.scene7.com/is/image/incredibleindia/lidder-river-pahalgam-j&k-1-attr-nearby?qlt=82&ts=1726728872783' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'June - October', temperature: '10 to 25°C', description: 'Mild weather, ideal for trekking and sightseeing.', icon: '☀️' },
      { season: 'Winter', months: 'December - February', temperature: '-6 to 8°C', description: 'Cold with heavy snowfall, suitable for snow activities.', icon: '❄️' },
      { season: 'Monsoon', months: 'March - May', temperature: '0 to 20°C', description: 'Peaking precipitation, lush greenery but potential cold winds.', icon: '🌧️' }
    ],
    gallery: [
      'https://media.istockphoto.com/id/1155829196/photo/pahalgao-valley-kashmir.jpg?s=612x612&w=0&k=20&c=xn-kYE2VSCb0zdHGZfJG8MFsOqko25F_9qdrUdPlnU8=',
      'https://www.shutterstock.com/image-photo/serene-landscape-liddar-valley-phalgam-260nw-2498432239.jpg',
      'https://media.istockphoto.com/id/488722541/photo/the-beautiful-nature-with-himalaya-mountain-background.jpg?s=612x612&w=0&k=20&c=9TOH5KqrKuHvVC_yd6Y3Vxpi8mBoyKcbQs0YtK8hO4=',
      'https://s7ap1.scene7.com/is/image/incredibleindia/lidder-river-pahalgam-j&k-1-attr-nearby?qlt=82&ts=1726728872783',
      'https://www.shutterstock.com/image-photo/serene-landscape-aru-valley-near-260nw-2487853101.jpg'
    ],
    tips: {
      dos: [
        'Carry warm clothing for varying temperatures.',
        'Respect local customs during pilgrimage season.',
        'Use authorized transport for safety.',
        'Stay hydrated near the Lidder River.',
        'Support eco-friendly tourism practices.'
      ],
      donts: [
        'Do not litter to avoid waste management issues.',
        'Avoid trekking without guides in remote areas.',
        'Do not ignore weather advisories in winter.',
        'Refrain from unauthorized photography in sensitive sites.',
        'Do not consume unverified local water sources.'
      ],
      localFood: [
        'Kashmiri Wazwan dishes',
        'Rogan Josh lamb curry',
        'Gushtaba meatballs',
        'Dum Aloo potatoes',
        'Kahwa spiced tea'
      ]
    }
  },
  {
    id: 'a2b9c7d4-5e6f-4d3a-8c9b-1d2e3f4a5b6c',
    name: 'Sonamarg',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    hero: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c2/09/26/sonmarg-kashmir-india.jpg',
    alt: 'Sonamarg golden meadow',
    category: 'Kashmir',
    price: 19000,
    duration: '3 Days',
    rating: 4.9,
    reviews: 598,
    description: 'Meadow of gold with magnificent glacier views',
    tagline: 'Meadow of Gold in the Himalayas',
    region: 'North India',
    overview: [
      'Sonamarg, meaning "meadow of gold," is a historic Silk Road gateway in Ganderbal District, located at 2,730 meters, 80 km northeast of Srinagar.',
      'Known for alpine meadows, rivers, and lakes, it has a humid continental climate with heavy winter snowfall, making it inaccessible during that season.',
      'Popular for hikers and fishers, it’s a base for the Amarnath Yatra and offers glacier treks, river rafting, and access to Zoji La pass.'
    ],
    attractions: [
      { id: 1, name: 'Thajiwas Glacier', description: 'Prominent glacier accessible by pony rides in summer, known for scenic beauty.', image: 'https://media.istockphoto.com/id/1326926711/photo/beautiful-view-of-sonmarg-in-winter-sonmarg-kashmir.jpg?s=612x612&w=0&k=20&c=XQ3A8BGL-4HY7_r03z145xWx22IlqBspxGKGcZ__Q8=' },
      { id: 2, name: 'Vishansar Lake', description: 'High-altitude lake reachable by trekking, stocked with snowtrout and brown trout.', image: 'https://thumbs.dreamstime.com/b/beautiful-mountain-landscape-sonamarg-jammu-kashmir-state-india-100488176.jpg' },
      { id: 3, name: 'Sind River', description: 'Meandering river ideal for fishing and river rafting tournaments.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Sonmarg_rishav7336.jpg' },
      { id: 4, name: 'Zoji La Pass', description: 'Mountain pass 15 km east of Sonamarg, used by trekkers to reach Leh.', image: 'https://media.istockphoto.com/id/908260572/photo/valley-of-flowers-at-kashmir-great-lakes-trek-in-sonamarg-town-india-clear-blue-sky-and-white.jpg?s=612x612&w=0&k=20&c=nHgSwnGtxbW_n8ObwtOwYAoxTBBtdP03ITjZbUkb2Ww=' }
    ],
    packages: [
      { id: 1, name: 'Sonamarg Trekking Escape', duration: '4 Days / 3 Nights', price: 18000, highlights: ['Vishansar and Krishansar Lakes trek', 'Thajiwas Glacier pony ride', 'Sind River fishing', 'Alpine meadow hikes'], image: 'https://media.gettyimages.com/id/584374227/photo/sonamarg-landscape-with-red-hourse.jpg?s=612x612&w=gi&k=20&c=X2muR7Fh8nyQ0qrfNpz-Vn0UogfLnMrG7JQerfjsNA=' },
      { id: 2, name: 'Glacier and River Adventure', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Thajiwas Glacier exploration', 'Sind River rafting', 'Sonamarg Valley sightseeing', 'Baltal Valley visit'], image: 'https://c8.alamy.com/comp/F7634W/road-to-sonamarg-from-srinagar-in-winter-kashmir-india-asia-F7634W.jpg' },
      { id: 3, name: 'Amarnath Yatra Gateway', duration: '5 Days / 4 Nights', price: 25000, highlights: ['Amarnath Temple Yatra base', 'Gangabal Lake trek', 'Fishing and hiking', 'Zoji La Pass access'], image: 'https://media.istockphoto.com/id/856560470/photo/views-of-sonmarg-valley.jpg?s=612x612&w=0&k=20&c=H_a3rdDKVMVarPL66ZPvkbIOXhHE4KCPUbuJZugOAjw=' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - August', temperature: '10 to 25°C', description: 'Blooming meadows, ideal for trekking and rafting.', icon: '☀️' },
      { season: 'Winter', months: 'December - February', temperature: '-10 to 0°C', description: 'Inaccessible due to heavy snowfall and avalanches.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - September', temperature: '15 to 20°C', description: 'High precipitation, suitable for some activities with weather risks.', icon: '🌧️' }
    ],
    gallery: [
      'https://thumbs.dreamstime.com/b/beautiful-mountain-landscape-sonamarg-jammu-kashmir-state-india-100488176.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Sonmarg_rishav7336.jpg',
      'https://media.istockphoto.com/id/908260572/photo/valley-of-flowers-at-kashmir-great-lakes-trek-in-sonamarg-town-india-clear-blue-sky-and-white.jpg?s=612x612&w=0&k=20&c=nHgSwnGtxbW_n8ObwtOwYAoxTBBtdP03ITjZbUkb2Ww=',
      'https://media.gettyimages.com/id/584374227/photo/sonamarg-landscape-with-red-hourse.jpg?s=612x612&w=gi&k=20&c=X2muR7Fh8nyQ0qrfNpz-Vn0UogfLnMrG7JQerfjsNA=',
      'https://c8.alamy.com/comp/F7634W/road-to-sonamarg-from-srinagar-in-winter-kashmir-india-asia-F7634W.jpg'
    ],
    tips: {
      dos: [
        'Hire ponies for safe Thajiwas Glacier trips.',
        'Engage in guided trekking to high-altitude lakes.',
        'Participate in organized river rafting tournaments.',
        'Check weather conditions before planning visits.',
        'Respect local languages like Kashmiri and Urdu.'
      ],
      donts: [
        'Do not venture near glaciers without precautions.',
        'Avoid traveling during winter due to inaccessibility.',
        'Do not ignore avalanche warnings.',
        'Refrain from unguided hikes in remote areas.',
        'Do not litter in alpine meadows and rivers.'
      ],
      localFood: [
        'Fresh trout from Sind River',
        'Kashmiri cuisine specialties',
        'Local Pahari dishes',
        'Gujari influenced meals',
        'Traditional Shina style foods'
      ]
    }
  },
  {
    id: 'b7c8d9e5-6f7a-4e5b-9c1d-2e3f4a5b6c7d',
    name: 'Doodhpathri',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    hero: 'https://media.gettyimages.com/id/971355764/photo/doodhpathri-budgam-jammu-kashmir-india-a-general-view-of-water-flowing-through-meadows-of.jpg?s=612x612&w=gi&k=20&c=pyp2aLo6-dS9pdEN8rnHagOsvmJXMgslZm0jj1kg8T0=',
    alt: 'Doodhpathri meadows',
    category: 'Kashmir',
    price: 16000,
    duration: '3 Days',
    rating: 4.7,
    reviews: 385,
    description: 'Valley of milk with pristine meadows and streams',
    tagline: 'The Valley of Milk',
    region: 'North India',
    overview: [
      'Doodhpathri, or "Valley of Milk," is a bowl-shaped alpine valley in Budgam district, surrounded by snow-clad mountains and lush meadows.',
      'Known for its pristine beauty, it remains less crowded, offering peace for nature lovers and photographers with activities like trekking and paragliding.',
      'Emerging tourism includes horse riding and ATV rides, with challenges like limited infrastructure but authentic Kashmiri experiences.'
    ],
    attractions: [
      { id: 1, name: 'Lush Meadows', description: 'Vast green grasslands with wildflowers and scenic views', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/A_bench_with_scenic_view_Doodhpathri_southwest_Jammu_Kashmir_India.jpg' },
      { id: 2, name: 'Gushing Streams', description: 'Crystal clear water bodies flowing through the valley', image: 'https://media.gettyimages.com/id/971355878/photo/doodhpathri-budgam-jammu-kashmir-india-a-general-view-of-meadows-of-doodhpathri-valley-some-50.jpg?s=612x612&w=gi&k=20&c=Q2HETp8YElIrb_MoKsb9mL8QARRqZkc0zqMcYx5GqQ=' },
      { id: 3, name: 'Paragliding Point', description: 'Spot for aerial adventures with panoramic valley views', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d5/19/5e/doodhpathri.jpg?w=1200&h=-1&s=1' },
      { id: 4, name: 'Pine Forests', description: 'Dense forests offering trekking and picnic opportunities', image: 'https://media.gettyimages.com/id/971355784/photo/doodhpathri-budgam-jammu-kashmir-india-a-general-view-of-meadows-of-doodhpathri-valley-some-50.jpg?s=612x612&w=gi&k=20&c=ULmQO8UtTcRNJceJMqixhZzDGHfGVO8eBNxQByC3RzU=' }
    ],
    packages: [
      { id: 1, name: 'Doodhpathri Nature Retreat', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Meadow exploration', 'Stream-side picnics', 'Horse riding', 'Local village visit'], image: 'https://www.shutterstock.com/image-photo/rock-stream-doodhpathri-600nw-2437715661.jpg' },
      { id: 2, name: 'Adventure in Valley of Milk', duration: '4 Days / 3 Nights', price: 18000, highlights: ['ATV rides', 'Paragliding', 'Trekking', 'Camping experience'], image: 'https://www.shutterstock.com/image-photo/doodhpathri-meadow-kashmir-india-looks-600nw-2292495315.jpg' },
      { id: 3, name: 'Doodhpathri Photography Tour', duration: '5 Days / 4 Nights', price: 22000, highlights: ['Scenic photography spots', 'Wildlife watching', 'Sunrise/sunset sessions', 'Cultural immersion'], image: 'https://vargiskhan.com/log/wp-content/uploads/2018/09/doodhpathri-6.jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - September', temperature: '10 to 25°C', description: 'Lush meadows, ideal for paragliding and trekking.', icon: '☀️' },
      { season: 'Winter', months: 'December - February', temperature: '-5 to 5°C', description: 'Snowy landscapes, ideal for winter photography but limited access.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - August', temperature: '15 to 20°C', description: 'Lush greenery with possible rainfall, good for nature walks.', icon: '🌧️' }
    ],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/A_bench_with_scenic_view_Doodhpathri_southwest_Jammu_Kashmir_India.jpg',
      'https://media.gettyimages.com/id/971355878/photo/doodhpathri-budgam-jammu-kashmir-india-a-general-view-of-meadows-of-doodhpathri-valley-some-50.jpg?s=612x612&w=gi&k=20&c=Q2HETp8YElIrb_MoKsb9mL8QARRqZkc0zqMcYx5GqQ=',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d5/19/5e/doodhpathri.jpg?w=1200&h=-1&s=1',
      'https://media.gettyimages.com/id/971355784/photo/doodhpathri-budgam-jammu-kashmir-india-a-general-view-of-meadows-of-doodhpathri-valley-some-50.jpg?s=612x612&w=gi&k=20&c=ULmQO8UtTcRNJceJMqixhZzDGHfGVO8eBNxQByC3RzU=',
      'https://www.shutterstock.com/image-photo/rock-stream-doodhpathri-600nw-2437715661.jpg'
    ],
    tips: {
      dos: [
        'Use ATV or horses for exploring.',
        'Book in advance during peak season.',
        'Carry warm clothes for evenings.',
        'Try local Kashmiri cuisine.',
        'Respect the natural environment.'
      ],
      donts: [
        'Avoid littering in the valley.',
        'Do not venture off marked paths without a guide.',
        'Avoid visiting during heavy snowfall.',
        'Do not disturb wildlife.',
        'Avoid drinking unfiltered water.'
      ],
      localFood: [
        'Rogan Josh',
        'Gushtaba',
        'Dum Aloo',
        'Kahwa',
        'Kashmiri Pulao'
      ]
    }
  },
  {
    id: 'e9f0a1b6-7c8b-4f6c-9d2e-3f4a5b6c7d8e',
    name: 'Aru Valley',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    hero: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=1200&h=-1&s=1',
    alt: 'Aru Valley pristine nature',
    category: 'Kashmir',
    price: 17000,
    duration: '3 Days',
    rating: 4.7,
    reviews: 423,
    description: 'Untouched meadows perfect for trekking adventures',
    tagline: 'Scenic Meadows and Alpine Adventures in Kashmir',
    region: 'North India',
    overview: [
      'Aru Valley, 12 km from Pahalgam, lies at 2,414 meters on the Aru River, a tributary of the Lidder River, and hosts a fodder seed station.',
      'Renowned for meadows, alpine lakes, and the Overa-Aru Biosphere Reserve, it’s ideal for trekking, fishing, and skiing in winter.',
      'Tourism appeals to adventure seekers with treks to Kolahoi Glacier and Tarsar Lake, offering pristine landscapes and rare wildlife.'
    ],
    attractions: [
      { id: 1, name: 'Kolahoi Glacier', description: 'Largest glacier in Kashmir Valley, near Mt. Kolahoi, a key trekking destination.', image: 'https://www.shutterstock.com/image-photo/stunning-view-kashmirs-aru-valley-600nw-2473158391.jpg' },
      { id: 2, name: 'Tarsar Lake', description: 'Pristine alpine lake accessible via trekking, known for scenic beauty.', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a3/63/d9/back-view-of-a-government.jpg?w=900&h=500&s=1' },
      { id: 3, name: 'Overa-Aru Biosphere Reserve', description: 'Wildlife sanctuary spanning 511 km², home to rare species.', image: 'https://i0.wp.com/beyondwildplaces.com/wp-content/uploads/2021/12/bbj/ae2zfkg9b52yemoj1gkw.jpg' },
      { id: 4, name: 'Aru River', description: 'Tributary of Lidder River, offering trout fishing and scenic views.', image: 'https://taleof2backpackers.com/wp-content/uploads/2021/08/Aru-Valley-Travel-Guide-1.jpg' }
    ],
    packages: [
      { id: 1, name: 'Aru Valley Trekking Escape', duration: '4 Days / 3 Nights', price: 18000, highlights: ['Kolahoi Glacier trek', 'Scenic meadows and lakes', 'Local hut stays', 'Guided hiking'], image: 'https://media.istockphoto.com/id/838020756/photo/square-panorama-of-aru-valley-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=kgbQ_BVR2CQTLF4la12ZUYwHKIAgaNDwgGEiS-mMYO0=' },
      { id: 2, name: 'Winter Wonderland Adventure', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Skiing and snowboarding', 'Winter trekking', 'Photography', 'Hot local meals'], image: 'https://www.shutterstock.com/image-photo/winter-scene-aru-valley-near-600nw-2029988210.jpg' },
      { id: 3, name: 'Biosphere Nature Retreat', duration: '5 Days / 4 Nights', price: 25000, highlights: ['Overa-Aru Biosphere Reserve', 'Wildlife spotting', 'Horse riding', 'Trout fishing'], image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Aruvillage.jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'June - August', temperature: '10 to 25°C', description: 'Ideal for trekking and hiking with blooming landscapes.', icon: '☀️' },
      { season: 'Winter', months: 'December - February', temperature: '-5 to 5°C', description: 'Snow-covered, perfect for skiing and winter photography.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - September', temperature: '15 to 20°C', description: 'Lush greenery, suitable for sightseeing and horse riding.', icon: '🌧️' }
    ],
    gallery: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a3/63/d9/back-view-of-a-government.jpg?w=900&h=500&s=1',
      'https://i0.wp.com/beyondwildplaces.com/wp-content/uploads/2021/12/bbj/ae2zfkg9b52yemoj1gkw.jpg?fit=1600%2C1200&ssl=1',
      'https://taleof2backpackers.com/wp-content/uploads/2021/08/Aru-Valley-Travel-Guide-1.jpg',
      'https://media.istockphoto.com/id/838020756/photo/square-panorama-of-aru-valley-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=kgbQ_BVR2CQTLF4la12ZUYwHKIAgaNDwgGEiS-mMYO0=',
      'https://www.shutterstock.com/image-photo/winter-scene-aru-valley-near-600nw-2029988210.jpg'
    ],
    tips: {
      dos: [
        'Pack warm clothing for high elevation.',
        'Hire local guides for safe trekking.',
        'Respect wildlife in the biosphere reserve.',
        'Stay hydrated during hiking.',
        'Book accommodations in advance during peak seasons.'
      ],
      donts: [
        'Do not litter in meadows or lakes.',
        'Avoid trekking without proper permits.',
        'Do not disturb endangered species.',
        'Refrain from off-trail hiking to protect flora.',
        'Do not ignore weather warnings in winter.'
      ],
      localFood: [
        'Kashmiri Wazwan traditional meals',
        'Trout fish from the Lidder River',
        'Local Kashmiri Kahwa tea',
        'Rogan Josh lamb curry',
        'Gushtaba yogurt-based meatballs'
      ]
    }
  },
  {
    id: 'f0a1b2c7-8d9c-4f7d-9e3f-4a5b6c7d8e9f',
    name: 'Betaab Valley',
    image: 'https://images.unsplash.com/photo-1548013146-13a21f08d0f7?auto=format&fit=crop&w=600&q=80',
    hero: 'https://static.toiimg.com/img/99910099/Master.jpg',
    alt: 'Betaab Valley scenic beauty',
    category: 'Kashmir',
    price: 16500,
    duration: '2 Days',
    rating: 4.8,
    reviews: 531,
    description: 'Crystal clear streams surrounded by snow-capped peaks',
    tagline: 'Scenic Himalayan Paradise in Kashmir',
    region: 'North India',
    overview: [
      'Betaab Valley, 15 km from Pahalgam, is named after the 1983 Bollywood film Betaab, shot here, boosting its tourism appeal.',
      'Located between Pir Panjal and Zanskar ranges, it features meadows, the Lidder River, and snow-clad peaks at 7,851 feet elevation.',
      'A campsite for trekkers and a base for Amarnath Yatra, it offers scenic beauty with streams and dense vegetation.'
    ],
    attractions: [
      { id: 1, name: 'Lidder River', description: 'Crystal clear river flowing through the valley, used by locals for drinking.', image: 'https://www.shutterstock.com/image-photo/betaab-valley-betab-very-popular-600nw-2377086873.jpg' },
      { id: 2, name: 'Lush Green Meadows', description: 'Expansive meadows with dense vegetation, ideal for relaxation.', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Betaab_Valley.jpg' },
      { id: 3, name: 'Snow-Clad Mountains', description: 'Himalayan peaks of Pir Panjal and Zanskar ranges, ideal for trekking.', image: 'https://media.gettyimages.com/id/1242961885/photo/betaab-valley-kashmir-india-stream-gushes-through-the-betaab-valley-on-september-4-2022-in.jpg?s=612x612&w=gi&k=20&c=skVyRRvR5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=' },
      { id: 4, name: 'Stream from Snowy Hills', description: 'Delightful stream from snowy mountains, enhancing natural beauty.', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/06/45/eb/betaab-valley-view-from.jpg?w=1200&h=1200&s=1' }
    ],
    packages: [
      { id: 1, name: 'Betaab Valley Explorer', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Lush meadows and Lidder River', 'Trekking base camp', 'Snow-clad mountain views', 'Pahalgam exploration'], image: 'https://images.pexels.com/photos/14434881/pexels-photo-14434881.jpeg' },
      { id: 2, name: 'Himalayan Trek Adventure', duration: '4 Days / 3 Nights', price: 20000, highlights: ['Camping in valley', 'River stream activities', 'Vegetation walks', 'Amarnath Yatra route'], image: 'https://www.shutterstock.com/image-photo/view-betab-valley-winter-season-600nw-1988170538.jpg' },
      { id: 3, name: 'Kashmir Nature Retreat', duration: '5 Days / 4 Nights', price: 25000, highlights: ['Full valley tour', 'Mountain sightseeing', 'Stream water tasting', 'Green surroundings relaxation'], image: 'https://thumbs.dreamstime.com/b/betaab-valley-lidder-river-beautiful-kashmir-pine-tree-leans-over-clean-water-coming-glaciers-mountains-41787209.jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'April - June', temperature: '10 to 25°C', description: 'Pleasant weather with blooming meadows, ideal for trekking.', icon: '☀️' },
      { season: 'Winter', months: 'December - February', temperature: '-5 to 10°C', description: 'Snow-covered landscapes, suitable for winter camping.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - September', temperature: '15 to 20°C', description: 'Lush greenery, potential trekking challenges due to rains.', icon: '🌧️' }
    ],
    gallery: [
      'https://www.shutterstock.com/image-photo/betaab-valley-betab-very-popular-600nw-2377086873.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Betaab_Valley.jpg',
      'https://media.gettyimages.com/id/1242961885/photo/betaab-valley-kashmir-india-stream-gushes-through-the-betaab-valley-on-september-4-2022-in.jpg?s=612x612&w=gi&k=20&c=skVyRRvR5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/06/45/eb/betaab-valley-view-from.jpg?w=1200&h=1200&s=1',
      'https://images.pexels.com/photos/14434881/pexels-photo-14434881.jpeg'
    ],
    tips: {
      dos: [
        'Carry warm clothing for high elevation.',
        'Drink from safe streams if verified.',
        'Use valley as trekking base.',
        'Walk from Pahalgam to explore nearby.',
        'Respect natural vegetation and meadows.'
      ],
      donts: [
        'Do not ignore Amarnath Yatra route.',
        'Do not litter in green areas.',
        'Do not venture unprepared into mountains.',
        'Do not miss film history significance.',
        'Do not overstay without checking weather.'
      ],
      localFood: [
        'Fresh stream water from hills',
        'Local Kashmiri breads from Pahalgam',
        'Mountain herbs in simple meals',
        'Valley-sourced dairy products',
        'Traditional Jammu and Kashmir cuisine'
      ]
    }
  },
  {
    id: 'a1b2c3d8-9e0f-4g6h-9i1j-2k3l4m5n6o7p',
    name: 'Leh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    hero: 'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=',
    alt: 'Leh Ladakh monastery',
    category: 'Ladakh',
    price: 25000,
    duration: '6 Days',
    rating: 5.0,
    reviews: 654,
    description: 'Ancient Buddhist monasteries and vibrant local culture',
    tagline: 'Gateway to the Himalayas: Where Ancient Trade Routes Meet Majestic Peaks',
    region: 'North India',
    overview: [
      'Leh, Ladakh’s capital, was a key stop on ancient trade routes, with the 17th-century Leh Palace resembling Tibet’s Potala Palace.',
      'At 3,500 meters, it features a cold desert climate with minimal rainfall and a tourism-driven economy, attracting over 500,000 visitors annually.',
      'Known for Buddhist heritage, monasteries, and festivals like Sindhu Darshan, it faces challenges like water scarcity and flash flood risks.'
    ],
    attractions: [
      { id: 1, name: 'Leh Palace', description: 'Nine-storey royal residence from the 17th century, similar to Potala Palace.', image: 'https://media.gettyimages.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=gi&k=20&c=4r22ey2_CTwuzFI3AF1DM1IB_OxMToZnBaWdK4FtuaA=' },
      { id: 2, name: 'Shanti Stupa', description: 'White-domed stupa offering panoramic views, built to promote peace.', image: 'https://static.toiimg.com/thumb/msid-48262604,width-748,height-499,resizemode=4,imgsize-179958/.jpg' },
      { id: 3, name: 'Namgyal Tsemo Gompa', description: 'Ancient hilltop monastery, a main Buddhist center with historic fortifications.', image: 'https://plus.unsplash.com/premium_photo-1661962344178-19930ba15492?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFkYWtofGVufDB8fDB8fHww&fm=jpg&q=60&w=3000' },
      { id: 4, name: 'Sankar Monastery', description: 'Small two-storeyed monastery, seat of Bakula Rinpoche, with historic elements.', image: 'https://t3.ftcdn.net/jpg/02/64/31/46/360_F_264314658_bMWblZcsJj9XTTwkOo1l4Z3eOIx9T3Qv.jpg' }
    ],
    packages: [
      { id: 1, name: 'Leh Discovery Tour', duration: '4 Days / 3 Nights', price: 18000, highlights: ['Leh Palace and old town', 'Shanti Stupa views', 'Namgyal Tsemo Gompa', 'Local markets'], image: 'https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/300049555_Leh-Ladakh.jpg' },
      { id: 2, name: 'High Altitude Adventure', duration: '5 Days / 4 Nights', price: 22000, highlights: ['Srinagar-Leh Highway drive', 'Sankar Monastery trek', 'Sindhu Darshan Festival', 'War Museum visit'], image: 'https://media.istockphoto.com/id/916575772/photo/namgyal-tsemo-gompa-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=MAdxcJNbCD7lcTB0t7NEWCc_hn16EZBKzyYoabr3pno=' },
      { id: 3, name: 'Cultural Immersion Package', duration: '6 Days / 5 Nights', price: 25000, highlights: ['Buddhist monastery tours', 'Tibetan heritage exploration', 'Tsampa preparation', 'Seasonal road trips'], image: 'https://media.gettyimages.com/id/1297500238/photo/spituk-gompa-indus-valley-near-leh-ladakh-india.jpg?s=612x612&w=gi&k=20&c=vVMPoSIWw-n4AnbeuB4o73Lllh4sDEYjvy5jzwgHUA=' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - August', temperature: '10 to 25°C', description: 'Warm days, ideal for tourism and festivals.', icon: '☀️' },
      { season: 'Winter', months: 'November - March', temperature: '-14 to 2°C', description: 'Harsh cold, limited access but open local roads.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - September', temperature: '6 to 22°C', description: 'Minimal precipitation, possible flash floods.', icon: '🌧️' }
    ],
    gallery: [
      'https://media.gettyimages.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=gi&k=20&c=4r22ey2_CTwuzFI3AF1DM1IB_OxMToZnBaWdK4FtuaA=',
      'https://static.toiimg.com/thumb/msid-48262604,width-748,height-499,resizemode=4,imgsize-179958/.jpg',
      'https://plus.unsplash.com/premium_photo-1661962344178-19930ba15492?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFkYWtofGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
      'https://t3.ftcdn.net/jpg/02/64/31/46/360_F_264314658_bMWblZcsJj9XTTwkOo1l4Z3eOIx9T3Qv.jpg',
      'https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/300049555_Leh-Ladakh.jpg'
    ],
    tips: {
      dos: [
        'Acclimatize to 3,500-meter altitude to avoid sickness.',
        'Carry warm clothing for cold desert climate.',
        'Respect Buddhist and Muslim customs.',
        'Check road conditions for seasonal highways.',
        'Support sustainable tourism to reduce waste.'
      ],
      donts: [
        'Do not travel without permits for restricted areas.',
        'Avoid alcohol or caffeine at high altitude initially.',
        'Do not litter in the fragile environment.',
        'Refrain from impacting historical sites.',
        'Do not ignore weather warnings for floods or snow.'
      ],
      localFood: [
        'Tsampa from roasted naked barley',
        'Apricot-based dishes',
        'Skyu barley and vegetable stew',
        'Thukpa Tibetan noodle soup',
        'Chutagi wheat flour dumplings'
      ]
    }
  },
  {
    id: 'b2c3d4e9-0f1a-4g8h-9i2j-3k4l5m6n7o8p',
    name: 'Pangong Lake',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80',
    hero: 'https://media.gettyimages.com/id/1947093127/photo/pangong-tso-panorama-ladakh-india.jpg?s=612x612&w=gi&k=20&c=vvQvRmvTPFw1Wz3-Ddn97KakrfX3vimfpvRzKOoJN5o=',
    alt: 'Pangong Lake crystal waters',
    category: 'Ladakh',
    price: 32000,
    duration: '7 Days',
    rating: 5.0,
    reviews: 892,
    description: 'Mesmerizing high-altitude lake with changing colors',
    tagline: 'High-altitude enchanted lake bridging borders and breathtaking vistas',
    region: 'North India',
    overview: [
      'Pangong Tso, a saline lake at 4,225 meters, spans India and China, covering 700 km² with five sublakes, historically part of the Indus River basin.',
      'Surrounded by Changchenmo, Pangong, and Kailash ranges, it freezes in winter and supports migratory birds like bar-headed geese.',
      'Tourism requires permits, offering stunning turquoise waters and bird-watching, but faces environmental challenges from increased visitors.'
    ],
    attractions: [
      { id: 1, name: 'Khurnak Fort', description: 'Historic fort on the northern bank, central to territorial disputes.', image: 'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=' },
      { id: 2, name: 'Bird Islet', description: 'Breeding ground for migratory birds like bar-headed geese.', image: 'https://media.istockphoto.com/id/513421290/photo/pangong-lake-in-ladakh-jammu-and-kashmir-state-india.jpg?s=612x612&w=0&k=20&c=fVxlGduCa6wcCW0y4XiBi85qWdaXDwbeA-1RP-hM2f8=' },
      { id: 3, name: 'Finger-4 Area', description: 'Northern bank area near the Line of Actual Control with scenic views.', image: 'https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8' },
      { id: 4, name: 'Lukung Area', description: 'Southern bank with access to marshes and wetlands.', image: 'https://media.istockphoto.com/id/1155675399/photo/pangong-lake.jpg?s=612x612&w=0&k=20&c=nBGDknbZslRWqMtQGZOyqkb_KzcT-Mx4DrSfVLQUYxQ=' }
    ],
    packages: [
      { id: 1, name: 'Ladakh Lake Explorer', duration: '4 Days / 3 Nights', price: 18000, highlights: ['Drive to Pangong Tso', 'Sublakes and ranges visit', 'Historical border points', 'Lake shore camping'], image: 'https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg' },
      { id: 2, name: 'High Altitude Adventure', duration: '5 Days / 4 Nights', price: 22000, highlights: ['Northern and southern banks', 'Wildlife spotting', 'Chushul-Lukung Road', 'Tibetan cultural insights'], image: 'https://media.istockphoto.com/id/1158621189/photo/pangong-tso-or-pangong-an-endorheic-lake-ladakh-india.jpg?s=612x612&w=0&k=20&c=a_4DyrBYLkDhhFdqpOBWhuTmeVOD-BGHMXEsvZTIwLM=' },
      { id: 3, name: 'Border Vista Tour', duration: '3 Days / 2 Nights', price: 15000, highlights: ['Inner Line Permit assistance', 'Disputed area views', 'Bird-watching', 'Lakeshore road trip'], image: 'https://t3.ftcdn.net/jpg/08/19/15/58/360_F_819155837_UbNqqJH9jvPUb2ESwi6dzxPQF4y0k460.jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - August', temperature: '5 to 20°C', description: 'Milder weather, ideal for tourism and bird migration.', icon: '☀️' },
      { season: 'Winter', months: 'December - February', temperature: '-20 to -5°C', description: 'Frozen lake, extreme cold limits access.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - September', temperature: '0 to 15°C', description: 'Low precipitation, supports marsh vegetation.', icon: '🌧️' }
    ],
    gallery: [
      'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=',
      'https://media.istockphoto.com/id/513421290/photo/pangong-lake-in-ladakh-jammu-and-kashmir-state-india.jpg?s=612x612&w=0&k=20&c=fVxlGduCa6wcCW0y4XiBi85qWdaXDwbeA-1RP-hM2f8=',
      'https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
      'https://media.istockphoto.com/id/1155675399/photo/pangong-lake.jpg?s=612x612&w=0&k=20&c=nBGDknbZslRWqMtQGZOyqkb_KzcT-Mx4DrSfVLQUYxQ=',
      'https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg'
    ],
    tips: {
      dos: [
        'Obtain Inner Line Permit before visiting.',
        'Travel with an accredited guide.',
        'Acclimatize to high altitude gradually.',
        'Respect border restrictions and security.',
        'Carry warm clothing for varying temperatures.'
      ],
      donts: [
        'Do not attempt boating on the Indian side.',
        'Do not litter to preserve the ecosystem.',
        'Do not venture into disputed zones without permission.',
        'Do not ignore weather advisories.',
        'Do not disturb wildlife or breeding grounds.'
      ],
      localFood: [
        'Traditional Ladakhi thukpa noodle soup',
        'Barley-based tsampa porridge',
        'Momos stuffed with vegetables or meat',
        'Chutagi wheat dumplings in broth',
        'Butter tea for warmth at high altitude'
      ]
    }
  },
  {
    id: 'c3d4e5f0-1a2b-4g9h-9i3j-4k5l6m7n8o9p',
    name: 'Nubra Valley',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    hero: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b9/e6/1c/nubra-valley.jpg?w=1200&h=-1&s=1',
    alt: 'Nubra Valley sand dunes',
    category: 'Ladakh',
    price: 30000,
    duration: '6 Days',
    rating: 4.9,
    reviews: 521,
    description: 'Cold desert with unique Bactrian camel safaris',
    tagline: 'The Valley of Flowers in Ladakh’s High Desert',
    region: 'North India',
    overview: [
      'Nubra Valley, at 10,000 ft, is accessed via Khardung La, the world’s highest motorable pass, known for sand dunes and Bactrian camels.',
      'Divided into Diskit, Hundar, and Panamik, it features a cold desert climate with Shyok and Nubra Rivers creating fertile patches.',
      'Tourism includes camel safaris, monastery visits, and hot springs, with growing infrastructure supporting adventure and cultural experiences.'
    ],
    attractions: [
      { id: 1, name: 'Diskit Monastery', description: 'Ancient Buddhist monastery with a giant Maitreya Buddha statue.', image: 'https://media.istockphoto.com/id/1046314758/photo/sunrise-at-nubra-valley-ladakh-with-scenic-landscape.jpg?s=612x612&w=0&k=20&c=tWk6ttlr70qQPVmMdazHoy9n5tMpGqf63W5FEGEupbA=' },
      { id: 2, name: 'Hunder Sand Dunes', description: 'High-altitude desert with Bactrian camel rides and sunset views.', image: 'https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2024-08-13-17-21-29-66bb48c168fdf-gallary-%284%29.jpg' },
      { id: 3, name: 'Panamik Hot Springs', description: 'Natural sulphur springs with medicinal properties.', image: 'https://cdn.audleytravel.com/1050/749/79/1332595-nubra-valley.webp' },
      { id: 4, name: 'Yarab Tso Lake', description: 'Sacred high-altitude lake with crystal-clear waters.', image: 'https://media.istockphoto.com/id/531372055/photo/camel-safari-in-nubra-valley-ladakh-india.jpg?s=612x612&w=0&k=20&c=8W03ZoUg0ten7vpfpqJatFiRU2rcN9zpSZgGajRSEA4=' }
    ],
    packages: [
      { id: 1, name: 'Nubra Desert Safari', duration: '4 Days / 3 Nights', price: 20000, highlights: ['Khardung La crossing', 'Camel ride in Hunder', 'Diskit Monastery', 'Overnight camping'], image: 'https://www.tripsavvy.com/thmb/yaIbFYWeF3OYepvb2jkAuJujKmo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-469085179-5c6ce9b346e0fb0001e6e812.jpg' },
      { id: 2, name: 'Valley of Flowers Exploration', duration: '5 Days / 4 Nights', price: 25000, highlights: ['Panamik hot springs', 'Yarab Tso trek', 'Village interactions', 'Star gazing'], image: 'https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2015/12/Nubra-Valley.jpg' },
      { id: 3, name: 'Complete Nubra Experience', duration: '6 Days / 5 Nights', price: 30000, highlights: ['All major attractions', 'Adventure activities', 'Cultural shows', 'Luxury camping'], image: 'https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2024-08-13-17-21-29-66bb48c168fdf-gallary-%284%29.jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - October', temperature: '5 to 25°C', description: 'Accessible roads, pleasant weather for exploration.', icon: '☀️' },
      { season: 'Winter', months: 'November - April', temperature: '-20 to 5°C', description: 'Extremely cold, passes closed, snowy landscapes.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - August', temperature: '10 to 20°C', description: 'Minimal rain, possible landslides, blooming flowers.', icon: '🌧️' }
    ],
    gallery: [
      'https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2024-08-13-17-21-29-66bb48c168fdf-gallary-%284%29.jpg',
      'https://cdn.audleytravel.com/1050/749/79/1332595-nubra-valley.webp',
      'https://upload.wikimedia.org/wikipedia/commons/7/75/5_Nubra_valley.jpg',
      'https://t4.ftcdn.net/jpg/01/75/16/81/360_F_175168193_q20ClSiiKVOe36SjJywBDO0OFbMjXonE.jpg',
      'https://cdn.audleytravel.com/1050/748/79/16033413-nubra-valley-in-ladakh.webp'
    ],
    tips: {
      dos: [
        'Obtain Inner Line Permit for access.',
        'Acclimatize to high altitude.',
        'Carry warm clothes even in summer.',
        'Try camel safari in Hunder.',
        'Respect local Buddhist customs.'
      ],
      donts: [
        'Do not litter in the fragile ecosystem.',
        'Avoid driving at night over passes.',
        'Do not disturb wildlife.',
        'Avoid alcohol at high altitude.',
        'Do not miss Diskit Buddha statue.'
      ],
      localFood: [
        'Thukpa noodle soup',
        'Momos dumplings',
        'Skyu stew',
        'Chhurpi cheese',
        'Butter tea'
      ]
    }
  },
  {
    id: 'd4e5f6g1-2a3b-4h0i-9j4k-5l6m7n8o9p0q',
    name: 'Kargil',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    hero: 'https://discoverlehladakh.in/wp-content/uploads/2021/03/Kargil-town-o-Ladakh-at-the-bank-of-Suru-river..jpg',
    alt: 'Kargil mountain valley',
    category: 'Ladakh',
    price: 28000,
    duration: '5 Days',
    rating: 4.8,
    reviews: 287,
    description: 'Historic town gateway with war memorial sites',
    tagline: 'Gateway to Ladakh with Rich History and Scenic Beauty',
    region: 'North India',
    overview: [
      'Kargil, situated at 2,676 meters along the Suru River in Ladakh, serves as a vital stop on the Srinagar-Leh Highway and a gateway to the Zanskar Valley.',
      'Renowned for the 1999 Kargil War, it features a cold desert climate with extreme winters and is a hub for trekkers, history enthusiasts, and cultural explorers visiting war memorials and ancient monasteries.',
      'Tourism highlights include the Kargil War Memorial, Mulbekh Monastery, and the scenic Suru and Dras Valleys, though challenges like harsh weather and limited infrastructure persist.'
    ],
    attractions: [
      { id: 1, name: 'Kargil War Memorial', description: 'Tribute to soldiers of the 1999 Kargil War, located at Dras with war artifacts.', image: 'https://media.istockphoto.com/id/1471490544/photo/kargil-war-memorial-in-dras-ladakh-india.jpg?s=612x612&w=0&k=20&c=3R9gQ2k2Y2fX7R8X9Xz2Y2fX7R8X9Xz2Y2fX7R8X9X=' },
      { id: 2, name: 'Mulbekh Monastery', description: 'Ancient Buddhist site with a 9-meter Maitreya Buddha statue carved into rock.', image: 'https://www.shutterstock.com/image-photo/mulbekh-monastery-kargil-ladakh-india-600nw-2377086873.jpg' },
      { id: 3, name: 'Suru Valley', description: 'Scenic valley with lush greenery and snow-capped peaks, ideal for trekking.', image: 'https://media.gettyimages.com/id/1242961885/photo/suru-valley-kargil-ladakh-india.jpg?s=612x612&w=gi&k=20&c=skVyRRvR5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=' },
      { id: 4, name: 'Dras Valley', description: 'Coldest inhabited place in India, known for war history and scenic beauty.', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/06/45/eb/dras-valley.jpg?w=1200&h=1200&s=1' }
    ],
    packages: [
      { id: 1, name: 'Kargil History Tour', duration: '4 Days / 3 Nights', price: 20000, highlights: ['Kargil War Memorial', 'Mulbekh Monastery', 'Dras Valley', 'Local markets'], image: 'https://www.lehladakhindia.com/wp-content/uploads/2024/07/kargil-war-memorial.jpg' },
      { id: 2, name: 'Suru Valley Adventure', duration: '5 Days / 4 Nights', price: 25000, highlights: ['Trekking in Suru Valley', 'Monastery visits', 'War history exploration', 'Photography'], image: 'https://media.istockphoto.com/id/1471490544/photo/suru-valley-kargil-ladakh-india.jpg?s=612x612&w=0&k=20&c=3R9gQ2k2Y2fX7R8X9Xz2Y2fX7R8X9Xz2Y2fX7R8X9X=' },
      { id: 3, name: 'Ladakh Gateway Retreat', duration: '6 Days / 5 Nights', price: 28000, highlights: ['Full Kargil exploration', 'Zanskar Valley access', 'Cultural immersion', 'Scenic drives'], image: 'https://discoverlehladakh.in/wp-content/uploads/2021/03/Kargil-town-o-Ladakh-at-the-bank-of-Suru-river..jpg' }
    ],
    seasonalInfo: [
      { season: 'Summer', months: 'May - September', temperature: '5 to 25°C', description: 'Mild weather, ideal for trekking and sightseeing.', icon: '☀️' },
      { season: 'Winter', months: 'November - March', temperature: '-20 to 0°C', description: 'Harsh cold, limited access due to snow.', icon: '❄️' },
      { season: 'Monsoon', months: 'July - August', temperature: '10 to 20°C', description: 'Low rainfall, possible landslides on highways.', icon: '🌧️' }
    ],
    gallery: [
      'https://media.istockphoto.com/id/1471490544/photo/kargil-war-memorial-in-dras-ladakh-india.jpg?s=612x612&w=0&k=20&c=3R9gQ2k2Y2fX7R8X9Xz2Y2fX7R8X9Xz2Y2fX7R8X9X=',
      'https://www.shutterstock.com/image-photo/mulbekh-monastery-kargil-ladakh-india-600nw-2377086873.jpg',
      'https://media.gettyimages.com/id/1242961885/photo/suru-valley-kargil-ladakh-india.jpg?s=612x612&w=gi&k=20&c=skVyRRvR5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/06/45/eb/dras-valley.jpg?w=1200&h=1200&s=1',
      'https://www.lehladakhindia.com/wp-content/uploads/2024/07/kargil-war-memorial.jpg'
    ],
    tips: {
      dos: [
        'Visit the war memorial to honor history.',
        'Acclimatize to high altitude before trekking.',
        'Respect local Balti and Buddhist cultures.',
        'Carry warm clothing for cold nights.',
        'Check road accessibility before travel.'
      ],
      donts: [
        'Do not travel without Inner Line Permits.',
        'Avoid littering in valleys.',
        'Do not trek without guides in remote areas.',
        'Do not ignore extreme weather warnings.',
        'Avoid photographing sensitive military areas.'
      ],
      localFood: [
        'Balti-style dishes',
        'Thukpa noodle soup',
        'Momos dumplings',
        'Skyu vegetable stew',
        'Butter tea'
      ]
    }
  }
]