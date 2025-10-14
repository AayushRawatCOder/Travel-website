import type { DestinationData } from '../types';

export const lehLadakhData: DestinationData = {
    name: "Leh-Ladakh",
    tagline: "Land of High Passes",
    region: "North India",
    hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
    overview: [
      "Nestled in the northernmost region of India, Leh-Ladakh is a land of ethereal beauty and ancient Buddhist culture. Often called the \"Land of High Passes,\" this cold desert region sits at altitudes ranging from 9,000 to 25,000 feet above sea level. The dramatic landscapes feature barren mountains painted in shades of brown and gold, punctuated by deep blue lakes and lush green valleys that seem to emerge from nowhere.",
      "The region's rich cultural heritage is reflected in its ancient monasteries perched on clifftops, prayer flags fluttering in the mountain breeze, and the warm hospitality of the Ladakhi people. From the serene beauty of Pangong Lake to the spiritual tranquility of centuries-old gompas, Ladakh offers a journey that transcends ordinary travel experiences. The unique blend of Tibetan Buddhism, stunning geography, and adventure opportunities makes it a bucket-list destination for travelers worldwide.",
      "Whether you're seeking spiritual enlightenment, thrilling adventure sports, or simply the peace of untouched nature, Ladakh promises an unforgettable experience. The region's accessibility during the summer months, combined with improved infrastructure, has made this Himalayan paradise more welcoming than ever, while still retaining its raw, mystical charm."
    ],
    attractions: [
      {
        id: 1,
        name: "Pangong Lake",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
        description: "Crystal-clear high-altitude lake stretching across India and Tibet"
      },
      {
        id: 2,
        name: "Nubra Valley",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
        description: "Desert oasis with double-humped Bactrian camels and stunning monasteries"
      },
      {
        id: 3,
        name: "Magnetic Hill",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        description: "Mysterious hill where vehicles appear to defy gravity"
      },
      {
        id: 4,
        name: "Thiksey Monastery",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
        description: "12-story Buddhist monastery resembling Potala Palace"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Leh-Ladakh Adventure",
        duration: "7 Days / 6 Nights",
        price: 35999,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Monasteries Tour"]
      },
      {
        id: 2,
        name: "Complete Ladakh Experience",
        duration: "10 Days / 9 Nights",
        price: 52999,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=300&fit=crop",
        highlights: ["All attractions", "Tso Moriri Lake", "Hanle", "Cultural experiences"]
      },
      {
        id: 3,
        name: "Ladakh Bike Expedition",
        duration: "12 Days / 11 Nights",
        price: 68999,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        highlights: ["Royal Enfield", "Manali-Leh Highway", "Off-road trails", "Camping"]
      }
    ],
    seasonalInfo: [
      {
        season: "Summer",
        months: "May - September",
        temperature: "15°C - 30°C",
        description: "Perfect for sightseeing, trekking, and adventure activities. Roads are accessible.",
        icon: "☀️"
      },
      {
        season: "Winter",
        months: "October - April",
        temperature: "-20°C - 5°C",
        description: "Extremely cold with heavy snowfall. Most roads closed. Only for experienced travelers.",
        icon: "❄️"
      },
      {
        season: "Monsoon",
        months: "July - August",
        temperature: "10°C - 20°C",
        description: "Light rainfall, risk of landslides on highways. Beautiful green landscapes.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Acclimatize properly for 24-48 hours before exploring",
        "Carry sufficient cash as ATMs may not work everywhere",
        "Drink plenty of water to prevent altitude sickness",
        "Respect local culture and Buddhist traditions",
        "Obtain Inner Line Permit for restricted areas"
      ],
      donts: [
        "Don't rush activities in the first few days",
        "Avoid alcohol and smoking at high altitudes",
        "Don't litter or disturb the pristine environment",
        "Avoid traveling during heavy snowfall",
        "Don't photograph military installations"
      ],
      localFood: [
        "Thukpa - Traditional noodle soup",
        "Momos - Steamed dumplings",
        "Butter Tea - Salted tea with yak butter",
        "Skyu - Hearty pasta dish with vegetables",
        "Tingmo - Tibetan steamed bread"
      ]
    }
  };