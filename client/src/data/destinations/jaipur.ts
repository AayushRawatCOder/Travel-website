import type { DestinationData } from '../types';

export const JaipurData: DestinationData = {
    name: "Jaipur",
    tagline: "The Pink City",
    region: "North India",
    hero: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&h=900&fit=crop",
    overview: [
      "Jaipur, the capital of Rajasthan, is a vibrant city that perfectly blends ancient traditions with modern urban life. Founded in 1727 by Maharaja Sawai Jai Singh II, the city is famously known as the 'Pink City' due to the distinctive terracotta pink color of its buildings in the old city. As part of the Golden Triangle tourist circuit, Jaipur offers a magnificent glimpse into Rajasthan's royal heritage through its majestic forts, opulent palaces, and bustling markets.",
      "The city's architecture is a stunning example of Rajput and Mughal styles, with intricate carvings, beautiful courtyards, and grand facades. From the hilltop Amber Fort to the iconic Hawa Mahal and the astronomical instruments at Jantar Mantar, every monument tells a story of Jaipur's glorious past. The city's vibrant bazaars are filled with traditional handicrafts, precious gemstones, textiles, and leather goods, making it a shopper's paradise.",
      "Jaipur's rich cultural tapestry is woven with traditional music, dance, festivals, and cuisine that continue to thrive in the modern era. The city's warm hospitality, colorful streets, and royal ambiance make it one of India's most beloved destinations for experiencing the grandeur of Rajasthan's royal legacy."
    ],
    attractions: [
      {
        id: 1,
        name: "Amber Fort",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
        description: "Magnificent hilltop fort with palaces, temples, and stunning views"
      },
      {
        id: 2,
        name: "Hawa Mahal",
        image: "https://images.unsplash.com/photo-1477587458880-447c1b0a70c3?w=800&h=600&fit=crop",
        description: "Iconic Palace of Winds with 953 windows for royal women"
      },
      {
        id: 3,
        name: "City Palace",
        image: "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800&h=600&fit=crop",
        description: "Royal residence blending Rajasthani and Mughal architecture"
      },
      {
        id: 4,
        name: "Jantar Mantar",
        image: "https://images.unsplash.com/photo-1580737142383-9f0b8b2e4b0a?w=800&h=600&fit=crop",
        description: "UNESCO World Heritage site with ancient astronomical instruments"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Royal Jaipur Experience",
        duration: "4 Days / 3 Nights",
        price: 15999,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop",
        highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Traditional Dinner"]
      },
      {
        id: 2,
        name: "Rajasthan Cultural Tour",
        duration: "7 Days / 6 Nights",
        price: 32999,
        image: "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=400&h=300&fit=crop",
        highlights: ["Jaipur", "Jodhpur", "Udaipur", "Desert Safari"]
      },
      {
        id: 3,
        name: "Luxury Palace Stay",
        duration: "5 Days / 4 Nights",
        price: 48999,
        image: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=400&h=300&fit=crop",
        highlights: ["Heritage Hotel", "Elephant Ride", "Private Guide", "Cultural Shows"]
      }
    ],
    seasonalInfo: [
      {
        season: "Winter",
        months: "October - March",
        temperature: "8°C - 25°C",
        description: "Perfect for sightseeing and outdoor activities. Pleasant weather throughout.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "April - June",
        temperature: "25°C - 45°C",
        description: "Extremely hot. Early mornings and evenings are better for sightseeing.",
        icon: "☀️"
      },
      {
        season: "Monsoon",
        months: "July - September",
        temperature: "25°C - 35°C",
        description: "Moderate rainfall, humid weather. Fewer tourists, lush surroundings.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1477587458880-447c1b0a70c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580737142383-9f0b8b2e4b0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Wear comfortable shoes for extensive walking",
        "Hire a certified guide for historical sites",
        "Bargain while shopping in local markets",
        "Try traditional Rajasthani cuisine",
        "Carry water and stay hydrated"
      ],
      donts: [
        "Don't visit during peak afternoon heat in summer",
        "Avoid touching monuments and artifacts",
        "Don't miss the light and sound show at Amber Fort",
        "Avoid unlicensed guides",
        "Don't forget to carry cash for local markets"
      ],
      localFood: [
        "Dal Baati Churma - Traditional Rajasthani meal",
        "Laal Maas - Spicy mutton curry",
        "Ghewar - Sweet disc-shaped dessert",
        "Pyaaz Kachori - Fried pastry with onion filling",
        "Mawa Kachori - Sweet fried pastry"
      ]
    }
};