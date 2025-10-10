import React, { useState } from 'react';
import './FAQs.scss';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  faqs: FAQ[];
}

const FAQs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('payment');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: FAQCategory[] = [
    {
      id: 'payment',
      title: 'Payment & Refunds',
      icon: '💳',
      faqs: [
        {
          id: 1,
          question: 'What payment methods do you accept?',
          answer: 'We accept multiple payment methods including credit cards (Visa, Mastercard, American Express), debit cards, net banking, UPI, digital wallets (Paytm, PhonePe, Google Pay), and international wire transfers. All payments are processed through secure payment gateways with SSL encryption.'
        },
        {
          id: 2,
          question: 'Do I need to pay the full amount upfront?',
          answer: 'No, we offer flexible payment options. You can book your trip with a 30% advance payment, and the remaining balance is due 30 days before your departure date. For bookings made within 30 days of travel, full payment is required at the time of booking.'
        },
        {
          id: 3,
          question: 'Are there any hidden charges or additional fees?',
          answer: 'No, we believe in transparent pricing. All costs including accommodation, transportation, guided tours, and mentioned meals are included in the package price. Any optional activities, personal expenses, or items not mentioned in the itinerary will be clearly stated as exclusions.'
        },
        {
          id: 4,
          question: 'How do I get a refund if I cancel my trip?',
          answer: 'Refunds are processed based on our cancellation policy. Once your cancellation is approved, the refund amount (after deducting applicable cancellation charges) will be credited to your original payment method within 7-10 business days. For detailed cancellation charges, please refer to our Cancellation Policy section.'
        },
        {
          id: 5,
          question: 'Can I get an invoice for my booking?',
          answer: 'Yes, a detailed invoice will be sent to your registered email address immediately after booking confirmation. You can also download invoices anytime from your account dashboard. GST invoices are provided for all bookings within India.'
        },
        {
          id: 6,
          question: 'What currency should international travelers pay in?',
          answer: 'International travelers can pay in USD, EUR, GBP, or INR. Currency conversion rates are updated daily. Payment can be made via international credit cards or wire transfer. Please note that bank charges for international transfers are borne by the traveler.'
        }
      ]
    },
    {
      id: 'health',
      title: 'COVID/Health & Safety',
      icon: '🏥',
      faqs: [
        {
          id: 7,
          question: 'What COVID-19 safety measures are in place?',
          answer: 'We follow all government-mandated COVID-19 protocols including sanitization of vehicles before and after each use, provision of masks and sanitizers, temperature checks, social distancing in accommodations, and contactless check-ins where possible. Our tour guides and drivers are fully vaccinated.'
        },
        {
          id: 8,
          question: 'Do I need to be vaccinated to travel?',
          answer: 'While vaccination is not mandatory for domestic travel within India, we strongly recommend being fully vaccinated for your safety and the safety of others. Some destinations or accommodations may have their own vaccination requirements. International travelers should check specific country requirements.'
        },
        {
          id: 9,
          question: 'What happens if I test positive for COVID-19 during the trip?',
          answer: 'If you test positive during your trip, you must quarantine as per local health guidelines. We will assist in arranging suitable accommodation for isolation and connecting you with medical facilities. Additional costs for extended stay and medical care are not covered unless you have appropriate travel insurance.'
        },
        {
          id: 10,
          question: 'What medical facilities are available at destinations?',
          answer: 'All our destinations have access to medical facilities. Major cities have multi-specialty hospitals, while remote areas have basic medical centers. We provide 24/7 emergency support and can arrange medical assistance if needed. We recommend carrying basic first-aid supplies and any personal medications.'
        },
        {
          id: 11,
          question: 'Are there any health precautions for high-altitude destinations?',
          answer: 'Yes, for destinations like Leh-Ladakh (above 10,000 ft), acclimatization is crucial. We build rest days into itineraries, recommend staying hydrated, avoiding alcohol in the first 48 hours, and consulting with doctors if you have heart or respiratory conditions. Altitude sickness medication should be carried as a precaution.'
        },
        {
          id: 12,
          question: 'What should I do in case of a medical emergency?',
          answer: 'Contact our 24/7 emergency helpline immediately. We will coordinate with local medical services and guide you to the nearest hospital. Keep your travel insurance details handy. For serious emergencies, we can arrange medical evacuation if covered under your insurance policy.'
        }
      ]
    },
    {
      id: 'visa',
      title: 'Visa Info for Foreigners',
      icon: '🛂',
      faqs: [
        {
          id: 13,
          question: 'Do I need a visa to visit India?',
          answer: 'Most foreign nationals require a visa to enter India. Citizens of Nepal and Bhutan are exempt. Indian-origin individuals may be eligible for OCI (Overseas Citizen of India) cards. Check the Indian embassy website or contact us for country-specific visa requirements.'
        },
        {
          id: 14,
          question: 'What is an e-Visa and how do I apply?',
          answer: 'An e-Visa is an electronic travel authorization issued by the Government of India. Citizens of over 160 countries are eligible. Apply online at the official Indian e-Visa portal at least 4 days before arrival. You need a valid passport (minimum 6 months validity), recent photograph, and payment card. E-Visa is valid for 30 days for tourism purposes.'
        },
        {
          id: 15,
          question: 'Can you help with visa processing?',
          answer: 'Yes, we provide visa assistance services for an additional fee. We guide you through the application process, review your documents, and provide support letters if needed. However, visa approval is at the sole discretion of the Indian government, and we cannot guarantee approval.'
        },
        {
          id: 16,
          question: 'What documents do I need for a tourist visa?',
          answer: 'You need: (1) Passport with at least 6 months validity and two blank pages, (2) Recent passport-size photographs, (3) Proof of accommodation in India, (4) Return flight tickets, (5) Proof of sufficient funds, (6) Travel itinerary, and (7) Completed visa application form. Requirements may vary by country.'
        },
        {
          id: 17,
          question: 'How long does visa processing take?',
          answer: 'E-Visa processing typically takes 2-4 business days. Regular tourist visas processed through embassies/consulates can take 5-10 business days. We recommend applying at least 2-3 weeks before your travel date to avoid any delays. During peak seasons, processing may take longer.'
        },
        {
          id: 18,
          question: 'Can I extend my visa while in India?',
          answer: 'E-Visas cannot be extended. Regular tourist visas may be extended by the Foreigners Regional Registration Office (FRRO) in exceptional circumstances. Extension requests must be made at least 2 weeks before visa expiry. We can guide you through the extension process if needed.'
        }
      ]
    },
    {
      id: 'cancellation',
      title: 'Cancellation Policies',
      icon: '📋',
      faqs: [
        {
          id: 19,
          question: 'What is your cancellation policy?',
          answer: 'Cancellation charges: (1) 45+ days before departure: 10% of package cost, (2) 30-44 days: 25% of package cost, (3) 15-29 days: 50% of package cost, (4) 7-14 days: 75% of package cost, (5) Less than 7 days or no-show: 100% of package cost. Peak season (December 15 - January 15, April, May) may have stricter policies.'
        },
        {
          id: 20,
          question: 'How do I cancel my booking?',
          answer: 'To cancel, email us at cancellations@company.com with your booking reference number. You will receive a cancellation acknowledgment within 24 hours. Cancellations are processed only on business days. Ensure you receive written confirmation before considering your booking cancelled.'
        },
        {
          id: 21,
          question: 'Can I modify my booking instead of cancelling?',
          answer: 'Yes, modifications are possible subject to availability. Date changes made 30+ days before departure incur a ₹2,000 fee per person. Changes within 30 days are treated as cancellations with new bookings. Itinerary modifications, upgrades, or changes in traveler numbers may have additional costs based on availability.'
        },
        {
          id: 22,
          question: 'What if I need to cancel due to an emergency?',
          answer: 'We understand emergencies happen. In case of medical emergencies (with valid medical certificates), severe weather, or natural disasters preventing travel, we review cases individually. Travel insurance often covers emergency cancellations. Please contact us immediately to discuss options.'
        },
        {
          id: 23,
          question: 'Are flight and train tickets refundable?',
          answer: 'Refund eligibility depends on the fare type and airline/railway policies. We assist in processing refund requests, but cancellation charges imposed by carriers are borne by travelers. Some discounted tickets may be non-refundable. We recommend purchasing tickets with flexible cancellation options when possible.'
        },
        {
          id: 24,
          question: 'What happens if you cancel my trip?',
          answer: 'If we cancel your trip due to insufficient bookings, operational reasons, or force majeure events, you will receive a full refund or the option to reschedule without penalty. We typically provide at least 15 days notice for cancellations, except in cases of unforeseen circumstances.'
        }
      ]
    },
    {
      id: 'insurance',
      title: 'Travel Insurance',
      icon: '🛡️',
      faqs: [
        {
          id: 25,
          question: 'Is travel insurance mandatory?',
          answer: 'While not mandatory for domestic travel, we strongly recommend comprehensive travel insurance for all trips. It\'s mandatory for adventure activities like trekking, rafting, and skiing. Insurance protects against trip cancellations, medical emergencies, lost baggage, and other unforeseen events.'
        },
        {
          id: 26,
          question: 'What should travel insurance cover?',
          answer: 'Your insurance should cover: (1) Medical expenses and emergency evacuation, (2) Trip cancellation and interruption, (3) Lost, stolen, or damaged baggage, (4) Personal accident and liability, (5) Adventure activities if applicable, and (6) COVID-19 related coverage. Ensure coverage limits are adequate for your destination.'
        },
        {
          id: 27,
          question: 'Can you arrange travel insurance for me?',
          answer: 'Yes, we partner with leading insurance providers to offer comprehensive travel insurance at competitive rates. We can help you choose a policy that suits your needs and budget. Insurance must be purchased at the time of booking or at least 15 days before departure.'
        },
        {
          id: 28,
          question: 'Does insurance cover adventure activities?',
          answer: 'Standard travel insurance may not cover high-risk adventure activities. For activities like trekking above 4,000m, white-water rafting, paragliding, or skiing, you need additional adventure sports coverage. Inform us about planned activities so we can recommend appropriate insurance.'
        },
        {
          id: 29,
          question: 'How do I make an insurance claim?',
          answer: 'In case of an incident: (1) Inform your insurance provider immediately, (2) Collect all relevant documents (medical reports, police reports, receipts), (3) Fill out the claim form provided by your insurer, (4) Submit claims within the specified timeframe (usually 30 days). We can assist with documentation and coordinate with insurers.'
        },
        {
          id: 30,
          question: 'What if I have pre-existing medical conditions?',
          answer: 'Pre-existing conditions may not be covered by standard policies or may require additional premiums. Declare all pre-existing conditions when purchasing insurance. Some insurers offer coverage for stable pre-existing conditions. Failure to declare may result in claim rejection.'
        }
      ]
    }
  ];

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const filteredFAQs = categories
    .find(cat => cat.id === activeCategory)
    ?.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about booking, travel, and our services</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <div className="container">
          <div className="search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-layout">
            {/* Category Sidebar */}
            <aside className="category-sidebar">
              <h3>Categories</h3>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery('');
                    setExpandedFAQ(null);
                  }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-title">{category.title}</span>
                  <span className="category-count">{category.faqs.length}</span>
                </button>
              ))}
            </aside>

            {/* FAQ List */}
            <main className="faq-main">
              <div className="faq-header">
                <h2>
                  {categories.find(cat => cat.id === activeCategory)?.icon}
                  {' '}
                  {categories.find(cat => cat.id === activeCategory)?.title}
                </h2>
                {searchQuery && (
                  <p className="search-results">
                    Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </p>
                )}
              </div>

              <div className="faq-list">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map(faq => (
                    <div key={faq.id} className="faq-item">
                      <button
                        className={`faq-question ${expandedFAQ === faq.id ? 'active' : ''}`}
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        <span>{faq.question}</span>
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                          className={`chevron ${expandedFAQ === faq.id ? 'rotated' : ''}`}
                        >
                          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <div className={`faq-answer ${expandedFAQ === faq.id ? 'expanded' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                      <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="11" y1="8" x2="11" y2="14" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="11" cy="17" r="0.5" fill="currentColor" strokeWidth="2"/>
                    </svg>
                    <h3>No results found</h3>
                    <p>Try different keywords or browse categories</p>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>Still Have Questions?</h2>
            <p>Can't find what you're looking for? Our support team is here to help!</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <h4>Call Us</h4>
                <p>+91 1800-123-4567</p>
                <span>Mon-Sat, 9 AM - 6 PM IST</span>
              </div>
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <h4>Email Us</h4>
                <p>support@company.com</p>
                <span>Response within 24 hours</span>
              </div>
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <h4>Live Chat</h4>
                <p>Chat with our team</p>
                <span>Available 24/7</span>
              </div>
            </div>
            <button className="contact-btn">Contact Support</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;