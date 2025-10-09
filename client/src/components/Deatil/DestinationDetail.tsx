import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetail.scss';

interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface TravelPackage {
  id: number;
  name: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
}

interface SeasonalInfo {
  season: string;
  months: string;
  temperature: string;
  description: string;
  icon: string;
}

interface DestinationData {
  name: string;
  tagline: string;
  region: string;
  hero: string;
  overview: string[]; // Array of paragraphs for overview
  attractions: Attraction[];
  packages: TravelPackage[];
  seasonalInfo: SeasonalInfo[];
  gallery: string[];
  tips: {
    dos: string[];
    donts: string[];
    localFood: string[];
  };
}

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract id from URL params
  const [currentAttractionIndex, setCurrentAttractionIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [destinationData, setDestinationData] = useState<DestinationData | null>(null);

  // Sample data mapping - in a real app, this could be fetched from an API based on id
  const dataById: Record<string, DestinationData> = {
  '1': {
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
  },
  '2': {
    name: "Goa",
    tagline: "Tropical Paradise",
    region: "West India",
    hero: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&h=900&fit=crop",
    overview: [
      "Goa, India's smallest state, is a tropical paradise known for its pristine beaches, Portuguese heritage, and vibrant nightlife. Stretching along the Arabian Sea, this former Portuguese colony boasts a unique blend of Indian and European cultures that's evident in its architecture, cuisine, and way of life. From the bustling beaches of North Goa to the serene shores of the South, the state offers something for every type of traveler.",
      "Beyond the beaches, Goa is rich in cultural experiences with magnificent churches, ancient temples, and colorful Portuguese-style houses. The state's culinary scene is equally diverse, featuring fresh seafood, traditional Goan curries, and the famous feni liquor. Whether you're exploring the UNESCO World Heritage churches in Old Goa, shopping at the Anjuna Flea Market, or simply relaxing on the golden sands, Goa promises an unforgettable coastal experience.",
      "With its year-round warm climate, friendly locals, and laid-back atmosphere, Goa has earned its reputation as one of India's premier tourist destinations. The state's unique charm lies in its ability to offer both vibrant party scenes and tranquil retreats, making it perfect for honeymooners, families, and solo travelers alike."
    ],
    attractions: [
      {
        id: 1,
        name: "Calangute Beach",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
        description: "Queen of Beaches with golden sands and water sports"
      },
      {
        id: 2,
        name: "Basilica of Bom Jesus",
        image: "https://images.unsplash.com/photo-1598860250177-24d31d8acee4?w=800&h=600&fit=crop",
        description: "UNESCO World Heritage Site with St. Francis Xavier's relics"
      },
      {
        id: 3,
        name: "Dudhsagar Waterfalls",
        image: "https://images.unsplash.com/photo-1581430871397-88e5319f4e6d?w=800&h=600&fit=crop",
        description: "Majestic four-tiered waterfall in the Western Ghats"
      },
      {
        id: 4,
        name: "Anjuna Flea Market",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        description: "Vibrant Wednesday market with global handicrafts and souvenirs"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Goa Beach Bliss",
        duration: "5 Days / 4 Nights",
        price: 18999,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
        highlights: ["North Goa Beaches", "Fort Aguada", "Anjuna Market", "Seafood Dinner Cruise"]
      },
      {
        id: 2,
        name: "Goa Heritage Trail",
        duration: "7 Days / 6 Nights",
        price: 27999,
        image: "https://images.unsplash.com/photo-1598860250177-24d31d8acee4?w=400&h=300&fit=crop",
        highlights: ["Old Goa Churches", "Spice Plantation", "Portuguese Houses", "Cultural Shows"]
      },
      {
        id: 3,
        name: "Luxury Goa Retreat",
        duration: "8 Days / 7 Nights",
        price: 45999,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        highlights: ["5-Star Beach Resort", "Private Yacht", "Spa Treatments", "Fine Dining"]
      }
    ],
    seasonalInfo: [
      {
        season: "Winter",
        months: "November - February",
        temperature: "20°C - 30°C",
        description: "Perfect weather for beach activities and sightseeing. Peak tourist season.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "March - May",
        temperature: "25°C - 35°C",
        description: "Hot and humid. Good for budget travelers. Sea swimming is pleasant.",
        icon: "☀️"
      },
      {
        season: "Monsoon",
        months: "June - September",
        temperature: "24°C - 30°C",
        description: "Heavy rainfall, lush greenery. Many water sports closed. Lower prices.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598860250177-24d31d8acee4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581430871397-88e5319f4e6d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Try different beaches - each has unique character",
        "Rent a scooter or bike for easy transportation",
        "Bargain at flea markets and local shops",
        "Respect local customs and dress modestly in religious places",
        "Stay hydrated and use sunscreen"
      ],
      donts: [
        "Don't swim in areas without lifeguards",
        "Avoid littering on beaches",
        "Don't purchase drugs - strict penalties apply",
        "Avoid monsoon season for water sports",
        "Don't miss trying local Goan cuisine"
      ],
      localFood: [
        "Fish Curry Rice - Traditional Goan staple",
        "Pork Vindaloo - Spicy Portuguese-inspired dish",
        "Bebinca - Layered coconut dessert",
        "Feni - Cashew or coconut liquor",
        "Chorizo Pão - Goan sausage with bread"
      ]
    }
  },
  '3': {
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
  },
  '4': {
    name: "Kerala Backwaters",
    tagline: "God's Own Country",
    region: "South India",
    hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&h=900&fit=crop",
    overview: [
      "The Kerala Backwaters are a network of interconnected canals, rivers, lakes, and inlets that form a breathtaking labyrinthine system along the Malabar Coast. Often described as 'God's Own Country,' this unique ecosystem is one of India's most tranquil and picturesque destinations. The backwaters stretch over 900 kilometers, offering a serene escape into nature where time seems to move as slowly as the gentle currents.",
      "Traditional houseboats, known as 'kettuvallams,' provide the perfect way to experience this watery paradise. These floating homes, originally used for transporting rice and spices, have been converted into luxurious accommodations with modern amenities. As you glide through the palm-fringed waterways, you'll witness rural Kerala life unfolding along the banks - farmers tending to paddy fields, women washing clothes, children swimming, and local fishermen casting their nets.",
      "The backwaters are not just about scenic beauty; they represent a unique way of life that has remained largely unchanged for centuries. The region's rich biodiversity, including migratory birds, aquatic life, and lush vegetation, adds to its ecological significance. Whether you're seeking romantic solitude, family bonding, or spiritual rejuvenation, the Kerala Backwaters offer an experience that touches the soul and creates memories for a lifetime."
    ],
    attractions: [
      {
        id: 1,
        name: "Alleppey Houseboats",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
        description: "Traditional kettuvallams offering overnight stays on backwaters"
      },
      {
        id: 2,
        name: "Kumarakom Bird Sanctuary",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        description: "Protected area for migratory birds on Vembanad Lake"
      },
      {
        id: 3,
        name: "Kuttanad Region",
        image: "https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=800&h=600&fit=crop",
        description: "Rice bowl of Kerala with farming below sea level"
      },
      {
        id: 4,
        name: "Cochin Marine Drive",
        image: "https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=800&h=600&fit=crop",
        description: "Beautiful promenade with backwater views and shopping"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Backwater Houseboat Cruise",
        duration: "2 Days / 1 Night",
        price: 12999,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
        highlights: ["Private Houseboat", "Traditional Meals", "Village Visits", "Sunset Views"]
      },
      {
        id: 2,
        name: "Complete Kerala Experience",
        duration: "8 Days / 7 Nights",
        price: 38999,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        highlights: ["Backwaters", "Hill Stations", "Beaches", "Ayurvedic Treatments"]
      },
      {
        id: 3,
        name: "Luxury Backwater Retreat",
        duration: "4 Days / 3 Nights",
        price: 42999,
        image: "https://images.unsplash.com/photo-1569941554646-85373de614a8?w=400&h=300&fit=crop",
        highlights: ["Premium Houseboat", "Private Chef", "Ayurvedic Spa", "Cultural Performances"]
      }
    ],
    seasonalInfo: [
      {
        season: "Winter",
        months: "September - March",
        temperature: "22°C - 32°C",
        description: "Best time for houseboat cruises. Pleasant weather with minimal rainfall.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "April - May",
        temperature: "24°C - 35°C",
        description: "Hot and humid but good for backwater tours. Early booking recommended.",
        icon: "☀️"
      },
      {
        season: "Monsoon",
        months: "June - August",
        temperature: "23°C - 30°C",
        description: "Heavy rainfall, lush green landscapes. Some activities may be restricted.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580612076443-bc2565a6d443?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569941554646-85373de614a8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Book houseboats in advance during peak season",
        "Carry mosquito repellent and sunscreen",
        "Try traditional Kerala seafood dishes",
        "Respect local customs and privacy of villagers",
        "Carry light cotton clothes"
      ],
      donts: [
        "Don't litter in the backwaters",
        "Avoid swimming in unfamiliar areas",
        "Don't disturb the wildlife",
        "Avoid monsoon season if prone to seasickness",
        "Don't miss the sunrise and sunset views"
      ],
      localFood: [
        "Karimeen Pollichathu - Pearl spot fish in banana leaf",
        "Appam with Stew - Rice pancakes with vegetable curry",
        "Puttu and Kadala - Steamed rice cakes with chickpeas",
        "Kerala Sadya - Traditional vegetarian feast",
        "Toddy - Local palm wine"
      ]
    }
  },
  '5': {
    name: "Ranthambore",
    tagline: "Land of the Royal Bengal Tiger",
    region: "North India",
    hero: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1600&h=900&fit=crop",
    overview: [
      "Ranthambore National Park, located in Rajasthan, is one of India's premier wildlife destinations and a crucial tiger conservation area. Spread over 1,334 square kilometers, this former royal hunting ground of the Maharajas of Jaipur is now a protected sanctuary that offers some of the best opportunities to spot the majestic Royal Bengal Tiger in its natural habitat. The park's diverse landscape includes dense forests, open grasslands, and ancient ruins that create a dramatic backdrop for wildlife photography.",
      "The park is not just about tigers; it's home to a rich biodiversity including leopards, sloth bears, wild boars, sambar deer, and over 300 species of birds. The picturesque Ranthambore Fort, a UNESCO World Heritage Site located within the park, adds historical significance to the wildlife experience. The park is divided into multiple zones, each offering unique topography and varying probabilities of tiger sightings.",
      "Ranthambore's successful tiger conservation story makes it a model for wildlife protection in India. The park's trained naturalists and guides ensure responsible tourism while providing visitors with memorable safari experiences. Whether you're a wildlife enthusiast, photographer, or nature lover, Ranthambore promises an exhilarating encounter with India's wild heritage."
    ],
    attractions: [
      {
        id: 1,
        name: "Ranthambore Fort",
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop",
        description: "10th century fort with temples and wildlife sightings"
      },
      {
        id: 2,
        name: "Padam Talao",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        description: "Largest lake in park with water lilies and crocodiles"
      },
      {
        id: 3,
        name: "Jogi Mahal",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        description: "Forest rest house near the second largest banyan tree in India"
      },
      {
        id: 4,
        name: "Raj Bagh Ruins",
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop",
        description: "Ancient palace ruins frequented by tigers and other wildlife"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Tiger Safari Adventure",
        duration: "3 Days / 2 Nights",
        price: 21999,
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
        highlights: ["4 Safari Rides", "Nature Walks", "Bird Watching", "Expert Guides"]
      },
      {
        id: 2,
        name: "Wildlife Photography Tour",
        duration: "5 Days / 4 Nights",
        price: 45999,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        highlights: ["Private Safari", "Photography Guide", "Early Morning Sessions", "Editing Workshop"]
      },
      {
        id: 3,
        name: "Rajasthan Wildlife Circuit",
        duration: "7 Days / 6 Nights",
        price: 58999,
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop",
        highlights: ["Ranthambore", "Sariska", "Bharatpur Bird Sanctuary", "Cultural Experiences"]
      }
    ],
    seasonalInfo: [
      {
        season: "Winter",
        months: "October - April",
        temperature: "8°C - 25°C",
        description: "Best time for wildlife sightings. Animals are more active during cooler weather.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "May - June",
        temperature: "20°C - 45°C",
        description: "Excellent for tiger sightings near water bodies. Very hot during afternoons.",
        icon: "☀️"
      },
      {
        season: "Monsoon",
        months: "July - September",
        temperature: "25°C - 35°C",
        description: "Park closed for monsoon. Surrounding areas accessible with lush greenery.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Book safari permits well in advance",
        "Carry binoculars and good camera equipment",
        "Wear earth-colored clothing for better wildlife viewing",
        "Follow park rules and guide instructions strictly",
        "Maintain silence during safari for better experience"
      ],
      donts: [
        "Don't get down from vehicle during safari",
        "Avoid wearing bright colors or strong perfumes",
        "Don't litter in the park",
        "Avoid making loud noises to attract animals",
        "Don't expect guaranteed tiger sightings"
      ],
      localFood: [
        "Laal Maas - Spicy mutton curry",
        "Dal Baati Churma - Traditional Rajasthani meal",
        "Gatte ki Sabzi - Gram flour dumplings in curry",
        "Bajre ki Roti - Millet bread with garlic chutney",
        "Mohan Maas - Royal meat preparation"
      ]
    }
  },
  '6': {
    name: "Varanasi",
    tagline: "The Spiritual Capital",
    region: "North India",
    hero: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1600&h=900&fit=crop",
    overview: [
      "Varanasi, also known as Kashi or Benaras, is one of the world's oldest continually inhabited cities and the spiritual capital of India. Situated on the banks of the sacred River Ganges, this ancient city has been a center of learning, culture, and spirituality for over 3,000 years. Varanasi is considered the holiest of the seven sacred cities in Hinduism and is a major pilgrimage site for Hindus, Buddhists, and Jains.",
      "The city's spiritual essence is most vividly experienced at the ghats - the series of stepped stone embankments along the Ganges where pilgrims perform rituals and ceremonies. The daily Ganga Aarti at Dashashwamedh Ghat is a spectacular spiritual spectacle that draws thousands of devotees and tourists every evening. The narrow, winding lanes of the old city are filled with temples, ashrams, and shops selling religious items, creating an atmosphere that is both chaotic and profoundly spiritual.",
      "Beyond its religious significance, Varanasi is renowned for its silk weaving, classical music, and educational institutions like the Banaras Hindu University. The city represents the continuum of Indian civilization, where ancient traditions coexist with modern life, offering visitors a transformative experience that touches the deepest aspects of human existence."
    ],
    attractions: [
      {
        id: 1,
        name: "Dashashwamedh Ghat",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
        description: "Main ghat famous for spectacular evening Ganga Aarti ceremony"
      },
      {
        id: 2,
        name: "Kashi Vishwanath Temple",
        image: "https://images.unsplash.com/photo-1580737142383-9f0b8b2e4b0a?w=800&h=600&fit=crop",
        description: "One of twelve Jyotirlingas dedicated to Lord Shiva"
      },
      {
        id: 3,
        name: "Sarnath",
        image: "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800&h=600&fit=crop",
        description: "Sacred Buddhist site where Buddha gave his first sermon"
      },
      {
        id: 4,
        name: "Banaras Hindu University",
        image: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&h=600&fit=crop",
        description: "Largest residential university in Asia with beautiful campus"
      }
    ],
    packages: [
      {
        id: 1,
        name: "Spiritual Varanasi",
        duration: "3 Days / 2 Nights",
        price: 11999,
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=300&fit=crop",
        highlights: ["Ganga Aarti", "Temple Visits", "Boat Ride", "Sarnath Excursion"]
      },
      {
        id: 2,
        name: "Varanasi Cultural Immersion",
        duration: "5 Days / 4 Nights",
        price: 23999,
        image: "https://images.unsplash.com/photo-1580737142383-9f0b8b2e4b0a?w=400&h=300&fit=crop",
        highlights: ["All Major Temples", "Silk Weaving Tour", "Classical Music", "Yoga Sessions"]
      },
      {
        id: 3,
        name: "Buddhist Circuit Tour",
        duration: "7 Days / 6 Nights",
        price: 37999,
        image: "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=400&h=300&fit=crop",
        highlights: ["Sarnath", "Bodh Gaya", "Kushinagar", "Spiritual Guidance"]
      }
    ],
    seasonalInfo: [
      {
        season: "Winter",
        months: "October - March",
        temperature: "5°C - 25°C",
        description: "Best time to visit. Pleasant weather for temple visits and ghat ceremonies.",
        icon: "🌤️"
      },
      {
        season: "Summer",
        months: "April - June",
        temperature: "25°C - 45°C",
        description: "Extremely hot and humid. Early mornings and evenings are better for sightseeing.",
        icon: "☀️"
      },
      {
        season: "Monsoon",
        months: "July - September",
        temperature: "25°C - 35°C",
        description: "Heavy rainfall, high humidity. Ganges water levels rise significantly.",
        icon: "🌧️"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580737142383-9f0b8b2e4b0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557237339-db0d6e47b5c8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tips: {
      dos: [
        "Respect religious customs and ceremonies",
        "Carry conservative clothing for temple visits",
        "Take a guided boat ride at sunrise",
        "Try local street food from hygienic places",
        "Keep valuables secure in crowded areas"
      ],
      donts: [
        "Don't take photographs during cremation ceremonies",
        "Avoid leather items in temple premises",
        "Don't swim in the Ganges due to pollution",
        "Avoid visiting during extreme summer heat",
        "Don't miss the evening Ganga Aarti"
      ],
      localFood: [
        "Kachori Sabzi - Fried pastry with potato curry",
        "Chaat - Various savory snacks",
        "Malaiyo - Seasonal milk-based dessert",
        "Lassi - Sweet yogurt drink",
        "Banarasi Paan - Betel leaf preparation"
      ]
    }
  },
  '7': {
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
  },
  '8': {
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
  }
};

  useEffect(() => {
    if (id) {
      const data = dataById[id];
      if (data) {
        setDestinationData(data);
      } else {
        // Handle invalid id, e.g., redirect or show 404
        console.error('Destination not found');
      }
    }
  }, [id]);

  if (!destinationData) {
    return <div>Loading...</div>; // Or a 404 component
  }

  const { name, tagline, region, hero, overview, attractions, packages, seasonalInfo, gallery, tips } = destinationData;

  const nextAttraction = () => {
    setCurrentAttractionIndex((prev) => (prev + 1) % attractions.length);
  };

  const prevAttraction = () => {
    setCurrentAttractionIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
  };

  return (
    <div className="destination-detail">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <img src={hero} alt={name} />
        <div className="hero-content">
          <div className="breadcrumb">
            <span>Home</span> <span>/</span> <span>Destinations</span> <span>/</span> <span>{name}</span>
          </div>
          <h1>{name}</h1>
          <p className="tagline">{tagline}</p>
          <div className="hero-meta">
            <span className="region">📍 {region}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section">
        <div className="container">
          <h2>Discover the Magic of {name.split('-')[0]}</h2> {/* Adjust title dynamically */}
          <div className="overview-content">
            {overview.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions Carousel */}
      <section className="attractions-section">
        <div className="container">
          <h2>Top Attractions</h2>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevAttraction}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="carousel-track">
              {attractions.map((attraction, index) => (
                <div
                  key={attraction.id}
                  className={`attraction-card ${index === currentAttractionIndex ? 'active' : ''}`}
                  style={{ transform: `translateX(-${currentAttractionIndex * 100}%)` }}
                >
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="attraction-content">
                    <h3>{attraction.name}</h3>
                    <p>{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn next" onClick={nextAttraction}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel-dots">
            {attractions.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentAttractionIndex ? 'active' : ''}`}
                onClick={() => setCurrentAttractionIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Best Time to Visit</h2>
          <div className="seasonal-grid">
            {seasonalInfo.map((season, index) => (
              <div key={index} className="seasonal-card">
                <div className="season-icon">{season.icon}</div>
                <h3>{season.season}</h3>
                <div className="season-months">{season.months}</div>
                <div className="season-temp">{season.temperature}</div>
                <p>{season.description}</p>
              </div>
            ))}
          </div>
          <div className="recommendation">
            <strong>💡 Recommended:</strong> Visit between May and September for the best weather and accessibility.
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="packages-section">
        <div className="container">
          <h2>Travel Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <span className="package-badge">{pkg.duration}</span>
                </div>
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  <div className="package-highlights">
                    {pkg.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">✓ {highlight}</span>
                    ))}
                  </div>
                  <div className="package-footer">
                    <div className="package-price">
                      <span className="price-label">Starting from</span>
                      <span className="price-amount">₹{pkg.price.toLocaleString()}</span>
                      <span className="price-per">per person</span>
                    </div>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setLightboxIndex(index)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close">×</button>
          <img src={gallery[lightboxIndex]} alt={`Gallery ${lightboxIndex + 1}`} />
        </div>
      )}

      {/* Traveler Tips */}
      <section className="tips-section">
        <div className="container">
          <h2>Traveler Tips</h2>
          <div className="tips-grid">
            <div className="tips-card">
              <h3>✅ Do's</h3>
              <ul>
                {tips.dos.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tips-card">
              <h3>❌ Don'ts</h3>
              <ul>
                {tips.donts.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tips-card">
              <h3>🍜 Local Food Highlights</h3>
              <ul>
                {tips.localFood.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Explore {name}?</h2>
          <p>Book your dream trip today and create memories that will last a lifetime</p>
          <button className="cta-button">Book Your Trip to {name}</button>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;