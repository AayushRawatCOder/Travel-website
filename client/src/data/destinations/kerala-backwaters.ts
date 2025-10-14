import type { DestinationData } from '../types';

export const KeralaBackwatersData: DestinationData = {
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
};