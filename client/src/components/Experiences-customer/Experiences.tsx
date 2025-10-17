import React, { useState } from 'react';
import { Hotel, Camera, Car, Users, Star, MapPin, X, Quote, Calendar, Image as ImageIcon, Heart, CheckCircle, Sparkles } from 'lucide-react';
import './Experiences.style.scss'
import customer1Img from "../../assets/Images/customer1.jpg"
import customer2Img from "../../assets/Images/customer2.jpg"
import customer3Img from "../../assets/Images/customer3.jpg"
import customer4Img from "../../assets/Images/customer4.jpg"
import customer5Img from "../../assets/Images/customer5.jpg"
import customer6Img from "../../assets/Images/customer6.jpg"
import customer7Img from "../../assets/Images/customer7.jpg"
import customer8Img from "../../assets/Images/customer8.jpg"
import customer9Img from "../../assets/Images/customer9.jpg"
import customer10Img from "../../assets/Images/customer10.jpg"
import customer11Img from "../../assets/Images/customer11.jpg"
import driver1Img from "../../assets/Images/Driver Mr irfan Hussain.jpg"
import driver2Img from "../../assets/Images/driver Mr Aijaz Ahmad.jpg"
import driver3Img from "../../assets/Images/driver Mr Nissar Ahmad.jpg"
import photographerImg from "../../assets/Images/PHOTOGRAPHER MR MUSHTAQ AHMAD.jpg"

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  location?: string;
  rating?: number;
  description?: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  feedback: string;
  trip: string;
  date: string;
  rating: number;
  photos: string[];
}

interface LightboxData {
  image: string;
  title: string;
  category: string;
  description?: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', title: 'The Grand Palace Resort', category: 'Hotels', location: 'Udaipur', rating: 4.9, description: 'Luxury 5-star accommodation with stunning lake views' },
  { id: 2, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80', title: 'Heritage Boutique Stay', category: 'Hotels', location: 'Jaipur', rating: 4.8, description: 'Royal hospitality in restored heritage property' },
  { id: 3, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', title: 'Mountain View Inn', category: 'Hotels', location: 'Shimla', rating: 4.7, description: 'Cozy hillside retreat with panoramic views' },
  { id: 4, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', title: 'Coastal Paradise Resort', category: 'Hotels', location: 'Goa', rating: 4.9, description: 'Beachfront luxury with private beach access' },
  { id: 5, image: photographerImg, title: 'Mr Mushtaq Ahmad', category: 'Photographers', location: 'Kashmir', rating: 5.0, description: 'Professional travel & landscape photographer' },
  { id: 6, image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80', title: 'Arjun Mehta', category: 'Photographers', location: 'Delhi', rating: 4.9, description: 'Cinematic videography & drone specialist' },
  { id: 7, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', title: 'Sneha Reddy', category: 'Photographers', location: 'Bangalore', rating: 4.8, description: 'Artistic portrait & lifestyle photography' },
  { id: 8, image: driver1Img, title: 'Mr Irfan Hussain', category: 'Drivers', location: 'Kashmir', rating: 4.9, description: 'Experienced driver with local expertise' },
  { id: 9, image: driver2Img, title: 'Mr Aijaz Ahmad', category: 'Drivers', location: 'Srinagar', rating: 4.8, description: 'Professional driver with 15+ years experience' },
  { id: 10, image: driver3Img, title: 'Mr Nissar Ahmad', category: 'Drivers', location: 'Kashmir Valley', rating: 4.9, description: 'Multi-lingual guide & safe driver' },
  { id: 11, image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&q=80', title: 'Luxury Fleet Services', category: 'Drivers', location: 'Metro Cities', rating: 4.9, description: 'Mercedes, BMW & Audi with chauffeurs' },
  { id: 12, image: customer1Img, title: 'Happy Customer Experience', category: 'Customers', location: 'Kashmir', description: 'Memorable journey through beautiful valleys' },
  { id: 13, image: customer2Img, title: 'Family Adventure', category: 'Customers', location: 'Kashmir', description: 'Perfect family vacation with amazing memories' },
  { id: 14, image: customer3Img, title: 'Couple Getaway', category: 'Customers', location: 'Kashmir', description: 'Romantic escape to paradise' },
  { id: 15, image: customer4Img, title: 'Group Tour', category: 'Customers', location: 'Kashmir', description: 'Incredible group travel experience' },
  { id: 16, image: customer5Img, title: 'Solo Traveler', category: 'Customers', location: 'Kashmir', description: 'Safe and memorable solo journey' },
  { id: 17, image: customer6Img, title: 'Mountain Trek', category: 'Customers', location: 'Kashmir', description: 'Adventure of a lifetime in the mountains' },
  { id: 18, image: customer7Img, title: 'Cultural Tour', category: 'Customers', location: 'Kashmir', description: 'Immersive cultural experience' },
  { id: 19, image: customer8Img, title: 'Winter Wonderland', category: 'Customers', location: 'Kashmir', description: 'Magical winter escape' },
  { id: 20, image: customer9Img, title: 'Spring Blooms', category: 'Customers', location: 'Kashmir', description: 'Beautiful spring tour through tulip gardens' },
  { id: 21, image: customer10Img, title: 'Summer Adventure', category: 'Customers', location: 'Kashmir', description: 'Perfect summer getaway' },
  { id: 22, image: customer11Img, title: 'Heritage Discovery', category: 'Customers', location: 'Kashmir', description: 'Exploring rich heritage and culture' },
  { id: 23, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80', title: 'Ladakh Adventure', category: 'Customers', location: 'Ladakh', description: 'Epic mountain expedition with family' },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    feedback: 'Absolutely magical Kashmir honeymoon! The hotel was stunning with mountain views, our photographer Mr Mushtaq captured every precious moment beautifully, and our driver Mr Irfan was so professional and friendly. Everything exceeded our expectations. The Dal Lake experience was unforgettable!',
    trip: 'Kashmir Honeymoon Package - 7 Days',
    date: 'October 2024',
    rating: 5,
    photos: [
      customer1Img,
      customer2Img,
      customer3Img,
      customer4Img,
    ]
  },
  {
    id: 2,
    name: 'Aditya Kumar & Family',
    location: 'Delhi NCR',
    avatar: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
    feedback: 'Our Kashmir family trip was phenomenal! The heritage hotels were breathtaking, photographer was amazing with kids, and our driver Mr Aijaz became like family. He knew all the best spots, helped with everything, and made us feel safe. Kids are still talking about Gulmarg and Pahalgam!',
    trip: 'Kashmir Heritage Tour - 10 Days',
    date: 'September 2024',
    rating: 5,
    photos: [
      customer5Img,
      customer6Img,
      customer7Img,
      customer8Img,
    ]
  },
  {
    id: 3,
    name: 'Arjun Singh Rathore',
    location: 'Bangalore, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    feedback: 'Kashmir expedition was bucket-list worthy! High-altitude hotels were comfortable, photographer captured epic landscape shots with drone, and experienced driver Mr Nissar navigated challenging terrain safely. The entire team made my dream adventure a reality. Worth every penny!',
    trip: 'Kashmir Adventure Expedition - 12 Days',
    date: 'August 2024',
    rating: 5,
    photos: [
      customer9Img,
      customer10Img,
      customer11Img,
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    ]
  },
  {
    id: 4,
    name: 'Meera Verma',
    location: 'Pune, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    feedback: 'Solo female traveler - felt completely safe in Kashmir! Boutique hotel staff was caring, photographer was respectful and professional, driver ensured my safety everywhere. Got stunning photos for my travel blog. The personalized attention and care was outstanding. Highly recommend!',
    trip: 'Kashmir Wellness Retreat - 5 Days',
    date: 'September 2024',
    rating: 5,
    photos: [
      customer1Img,
      customer5Img,
      customer9Img,
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&q=80',
    ]
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const categories = ['All', 'Hotels', 'Photographers', 'Drivers', 'Customers'];

  const filteredGallery = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">OUR GALLERY</div>
          <h1 className="hero-title">Visual Stories & Experiences</h1>
          <p className="hero-subtitle">Explore our premium hotels, professional photographers, trusted drivers, and happy customer memories</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="section-header">
            <div className="header-badge">
              <ImageIcon size={18} />
              <span>EXPLORE GALLERY</span>
            </div>
            <h2 className="section-title">Our Partners & Happy Customers</h2>
            <p className="section-subtitle">
              Browse through our verified hotels, talented photographers, professional drivers, and real customer experiences
            </p>
          </div>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'Hotels' && <Hotel size={18} />}
                {category === 'Photographers' && <Camera size={18} />}
                {category === 'Drivers' && <Car size={18} />}
                {category === 'Customers' && <Users size={18} />}
                {category === 'All' && <Sparkles size={18} />}
                <span>{category}</span>
              </button>
            ))}
          </div>

          <div className="masonry-gallery">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item ${item.category.toLowerCase()}`}
                style={{ '--item-index': index } as React.CSSProperties}
                onClick={() => setLightboxData({
                  image: item.image,
                  title: item.title,
                  category: item.category,
                  description: item.description
                })}
              >
                <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <div className="gallery-category-badge">{item.category}</div>
                    <h3 className="gallery-title">{item.title}</h3>
                    {item.location && (
                      <p className="gallery-location">
                        <MapPin size={16} />
                        {item.location}
                      </p>
                    )}
                    {item.rating && (
                      <div className="gallery-rating">
                        <Star size={16} fill="currentColor" />
                        <span>{item.rating}</span>
                      </div>
                    )}
                    {item.description && (
                      <p className="gallery-description">{item.description}</p>
                    )}
                  </div>
                </div>
                <div className="gallery-icon">
                  {item.category === 'Hotels' && <Hotel size={28} />}
                  {item.category === 'Photographers' && <Camera size={28} />}
                  {item.category === 'Drivers' && <Car size={28} />}
                  {item.category === 'Customers' && <Heart size={28} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <div className="header-badge">
              <Quote size={18} />
              <span>CUSTOMER FEEDBACK</span>
            </div>
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-subtitle">
              Real feedback from real customers about their experiences with our hotels, photographers, and drivers
            </p>
          </div>

          <div className="testimonials-wrapper">
            <div className="testimonials-nav">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`testimonial-nav-btn ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div className="nav-details">
                    <span className="nav-name">{testimonial.name}</span>
                    <span className="nav-location">{testimonial.location}</span>
                  </div>
                  {activeTestimonial === index && <CheckCircle size={20} fill="#10b981" color="white" />}
                </button>
              ))}
            </div>

            <div className="testimonials-display">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${activeTestimonial === index ? 'active' : ''}`}
                >
                  <div className="testimonial-header">
                    <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-location">{testimonial.location}</p>
                      <div className="testimonial-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-date">
                      <Calendar size={18} />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>

                  <div className="testimonial-content">
                    <Quote className="quote-icon" size={48} />
                    <p className="testimonial-text">{testimonial.feedback}</p>
                    <div className="testimonial-trip-badge">{testimonial.trip}</div>
                  </div>

                  <div className="testimonial-photos">
                    <div className="photos-header">
                      <ImageIcon size={20} />
                      <span>Trip Photos</span>
                    </div>
                    <div className="photos-grid">
                      {testimonial.photos.map((photo, photoIndex) => (
                        <div
                          key={photoIndex}
                          className="photo-item"
                          style={{ backgroundImage: `url(${photo})` }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxData({
                              image: photo,
                              title: testimonial.trip,
                              category: 'Customer Photo',
                              description: `Photo by ${testimonial.name}`
                            });
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightboxData && (
        <div className="lightbox" onClick={() => setLightboxData(null)}>
          <button className="lightbox-close" onClick={() => setLightboxData(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxData.image} alt={lightboxData.title} />
            <div className="lightbox-info">
              <div className="lightbox-category">{lightboxData.category}</div>
              <h3>{lightboxData.title}</h3>
              {lightboxData.description && <p>{lightboxData.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
