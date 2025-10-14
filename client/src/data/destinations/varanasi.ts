import type { DestinationData } from '../types';

export const VaranasiData: DestinationData = {
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

};