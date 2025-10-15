import type { DestinationData } from '../types';

export const RanthamboreData: DestinationData = {
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
};