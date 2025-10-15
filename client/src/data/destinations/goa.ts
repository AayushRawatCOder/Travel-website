import type { DestinationData } from '../types';

export const GoaData: DestinationData = {
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
};