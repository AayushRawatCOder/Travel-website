import type { DestinationData } from '../types';

export const DarjeelingData: DestinationData = {
    name: "Darjeeling",
    tagline: "Queen of the Hills",
    region: "East India",
    hero: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&h=900&fit=crop",
    overview: [
      "Nestled in the Lesser Himalayas at an elevation of 2,042 meters, Darjeeling is a picturesque hill station renowned for its breathtaking views of the Kanchenjunga mountain range, lush tea gardens, and colonial-era architecture. Often called the 'Queen of the Hills,' this charming town has been a popular summer retreat since the British colonial era. The cool climate, stunning natural beauty, and unique cultural blend of Nepali, Tibetan, and British influences make Darjeeling one of India's most beloved hill stations.",
      "Darjeeling is synonymous with tea, producing the world-famous Darjeeling tea known for its distinctive flavor and aroma. The sprawling tea estates that carpet the hillsides offer fascinating insights into tea production and processing. The town's most iconic experience is the Darjeeling Himalayan Railway, a UNESCO World Heritage Site affectionately called the 'Toy Train,' which chugs through the mountains offering spectacular views of the landscape.",
      "Beyond tea and trains, Darjeeling offers numerous attractions including ancient monasteries, vibrant markets, and stunning viewpoints for sunrise over the Himalayas. The town serves as a gateway to adventure activities like trekking in the Singalila National Park and exploring the nearby border areas. Whether you're seeking tranquility, adventure, or cultural experiences, Darjeeling promises an unforgettable mountain getaway."
    ],
    attractions: [
      {
        id: 1,
        name: "Tiger Hill",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
        description: "Famous viewpoint for spectacular sunrise over Kanchenjunga"
      },
      {
        id: 2,
        name: "Darjeeling Himalayan Railway",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        description: "UNESCO World Heritage toy train through mountain routes"
      },
      {
        id: 3,
        name: "Happy Valley Tea Estate",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        description: "One of the oldest tea gardens offering factory tours"
      },
      {
        id: 4,
        name: "Batasia Loop",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        description: "Spiral railway with garden and war memorial"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Darjeeling Delight",
        duration: "4 Days / 3 Nights",
        price: 17999,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=300&fit=crop",
        highlights: ["Tiger Hill Sunrise", "Toy Train Ride", "Tea Estate Tour", "Local Markets"]
      },
      {
        id: 2,
        name: "Darjeeling-Gangtok Tour",
        duration: "7 Days / 6 Nights",
        price: 32999,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        highlights: ["Darjeeling", "Gangtok", "Tsomgo Lake", "Monastery Visits"]
      },
      {
        id: 3,
        name: "Luxury Hill Retreat",
        duration: "5 Days / 4 Nights",
        price: 41999,
        image: "https://images.unsplash.com/photo-1569941554646-85373de614a8?w=400&h=300&fit=crop",
        highlights: ["Heritage Hotel", "Private Car", "Gourmet Dining", "Spa Treatments"]
      }
    ],
    seasonalInfo: [
      {
        season: "Spring",
        months: "March - May",
        temperature: "6°C - 18°C",
        description: "Best time for clear mountain views. Rhododendrons in full bloom.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "June - August",
        temperature: "13°C - 20°C",
        description: "Pleasant weather with occasional rainfall. Lush green landscapes.",
        icon: "☀️"
      },
      {
        season: "Winter",
        months: "October - February",
        temperature: "2°C - 7°C",
        description: "Cold with possible snowfall. Excellent for clear mountain views.",
        icon: "❄️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569941554646-85373de614a8?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Carry warm clothes throughout the year",
        "Book toy train tickets in advance",
        "Wake up early for Tiger Hill sunrise",
        "Try different varieties of Darjeeling tea",
        "Carry cash as ATMs may be limited"
      ],
      donts: [
        "Don't litter in the mountains",
        "Avoid traveling during political unrest",
        "Don't miss trying local Tibetan cuisine",
        "Avoid monsoon season for trekking",
        "Don't expect guaranteed mountain views due to clouds"
      ],
      localFood: [
        "Thukpa - Tibetan noodle soup",
        "Momos - Steamed dumplings",
        "Darjeeling Tea - World-famous brew",
        "Churpee - Hard cheese made from yak milk",
        "Shaphalay - Tibetan bread with meat filling"
      ]
    }
};