import type { DestinationData } from '../types';

export const HampiData: DestinationData = {
    name: "Hampi",
    tagline: "The Lost Empire",
    region: "South India",
    hero: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1600&h=900&fit=crop",
    overview: [
      "Hampi, a UNESCO World Heritage Site, is an ancient city that was once the capital of the magnificent Vijayanagara Empire, one of the largest and richest empires in Indian history. Spread across a surreal landscape of giant boulders, lush paddy fields, and the tranquil Tungabhadra River, Hampi's ruins tell the story of a glorious past that flourished between the 14th and 16th centuries. The city's extraordinary architecture, intricate stone carvings, and historical significance make it one of India's most fascinating archaeological sites.",
      "The ruins of Hampi are scattered over an area of nearly 26 square kilometers, comprising more than 1,600 surviving remains of palaces, temples, royal complexes, market streets, and aquatic structures. The Virupaksha Temple, dedicated to Lord Shiva, remains an active place of worship and is the spiritual center of Hampi. The Vittala Temple complex, with its iconic stone chariot and musical pillars, represents the pinnacle of Vijayanagara architecture and artistic achievement.",
      "Hampi's unique landscape of granite boulders and the Tungabhadra River flowing through the ruins creates a magical atmosphere that captivates historians, archaeologists, photographers, and spiritual seekers alike. The site offers a journey back in time to an era of unparalleled architectural brilliance and cultural sophistication, making it a must-visit destination for anyone interested in India's rich historical heritage."
    ],
    attractions: [
      {
        id: 1,
        name: "Virupaksha Temple",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
        description: "Active Shiva temple with towering gopuram and ancient history"
      },
      {
        id: 2,
        name: "Vittala Temple",
        image: "https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=800&h=600&fit=crop",
        description: "Architectural marvel with stone chariot and musical pillars"
      },
      {
        id: 3,
        name: "Hampi Bazaar",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        description: "Ancient market street with stone structures and local shops"
      },
      {
        id: 4,
        name: "Matanga Hill",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        description: "Best viewpoint for sunrise over Hampi's landscape"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Hampi Heritage Tour",
        duration: "3 Days / 2 Nights",
        price: 14999,
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit=crop",
        highlights: ["Major Temples", "Royal Enclosure", "Sunset Points", "Local Guide"]
      },
      {
        id: 2,
        name: "Hampi-Badami Circuit",
        duration: "5 Days / 4 Nights",
        price: 27999,
        image: "https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=400&h=300&fit=crop",
        highlights: ["Hampi", "Badami Caves", "Pattadakal", "Aihole Temples"]
      },
      {
        id: 3,
        name: "Photography Expedition",
        duration: "4 Days / 3 Nights",
        price: 32999,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        highlights: ["Golden Hour Shoots", "Architecture Focus", "Local Life", "Editing Workshop"]
      }
    ],
    seasonalInfo: [
      {
        season: "Winter",
        months: "October - February",
        temperature: "15°C - 30°C",
        description: "Best time to explore ruins. Pleasant weather for extensive walking.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "March - May",
        temperature: "25°C - 40°C",
        description: "Very hot. Early mornings and late afternoons are better for sightseeing.",
        icon: "☀️"
      },
      {
        season: "Monsoon",
        months: "June - September",
        temperature: "22°C - 32°C",
        description: "Moderate rainfall, lush green surroundings. Some areas may be slippery.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569941554646-85373de614a8?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Hire a knowledgeable guide for historical insights",
        "Carry water and wear comfortable walking shoes",
        "Visit early morning to avoid heat and crowds",
        "Carry cash as card facilities are limited",
        "Respect the monuments and don't climb on fragile structures"
      ],
      donts: [
        "Don't visit during peak afternoon heat",
        "Avoid touching ancient carvings and sculptures",
        "Don't litter in the archaeological area",
        "Avoid monsoon season if you have mobility issues",
        "Don't miss the sunset from Hemakuta Hill"
      ],
      localFood: [
        "Bisi Bele Bath - Spicy rice and lentil preparation",
        "Ragi Mudde - Finger millet balls with curry",
        "Mysore Masala Dosa - Crispy rice crepe with potato filling",
        "Korri Gassi - Mangalorean chicken curry",
        "Holige - Sweet stuffed flatbread"
      ]
    }

};