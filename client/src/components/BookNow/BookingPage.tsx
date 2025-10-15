// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Calendar, Users, MapPin, Check, Plus, Minus, Camera, Plane, Car, Utensils, Mountain, Home, Phone, Mail, CreditCard, X } from 'lucide-react';
// import { packageData } from '../../data';
// import { dataById } from '../../data';
// import './BookingPage.scss';

// // Define interfaces
// interface AddOn {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   icon: React.ComponentType<{ className?: string }>;
// }

// // interface PackageData {
// //   id: number;
// //   name: string;
// //   duration: string;
// //   basePrice: number;
// //   image: string;
// //   highlights: string[];
// //   itinerary: { day: number; title: string; activities: string[] }[];
// //   inclusions: string[];
// //   exclusions: string[];
// // }

// interface DestinationData {
//   name: string;
//   region: string;
//   packages: { id: number; name: string; duration: string; price: number; image: string; highlights: string[] }[];
// }

// // Define add-ons data
// const addOnsData: AddOn[] = [
//   {
//     id: 'photographer',
//     name: 'Personal Photographer',
//     description: 'Professional photographer for entire trip',
//     price: 15000,
//     icon: Camera,
//   },
//   {
//     id: 'airport-pickup',
//     name: 'Airport Pickup & Drop',
//     description: 'Private car for airport transfers',
//     price: 3000,
//     icon: Plane,
//   },
//   {
//     id: 'vehicle-upgrade',
//     name: 'Vehicle Upgrade',
//     description: 'Upgrade to luxury SUV',
//     price: 8000,
//     icon: Car,
//   },
//   {
//     id: 'meal-upgrade',
//     name: 'Full Meal Plan',
//     description: 'Add lunch for all days',
//     price: 5000,
//     icon: Utensils,
//   },
//   {
//     id: 'adventure-package',
//     name: 'Adventure Package',
//     description: 'River rafting, paragliding, trekking',
//     price: 12000,
//     icon: Mountain,
//   },
//   {
//     id: 'homestay',
//     name: 'Homestay Experience',
//     description: 'Stay with local families (2 nights)',
//     price: 4000,
//     icon: Home,
//   },
// ];

// // Helper function to find the package key by its ID
// const findPackageKeyById = (id: number): string | undefined => {
//   for (const key in packageData) {
//     if (Object.prototype.hasOwnProperty.call(packageData, key)) {
//       if (packageData[key as keyof typeof packageData].id === id) {
//         return key;
//       }
//     }
//   }
//   return undefined;
// };

// const BookingPage: React.FC = () => {
//   const { packageId } = useParams<{ packageId: string }>();

//   // Determine the actual key (slug) to use for data lookup
//   let initialPackageKey: string | undefined;
//   const idAsNumber = parseInt(packageId || '', 10);
//   if (!isNaN(idAsNumber)) {
//     initialPackageKey = findPackageKeyById(idAsNumber);
//   } else {
//     initialPackageKey = packageId;
//   }

//   const defaultPackageKey = 'leh-ladakh-adventure';

//   // Initialize state
//   const [selectedPackage, setSelectedPackage] = useState<string>(initialPackageKey || defaultPackageKey);
//   const [currentDestination, setCurrentDestination] = useState<DestinationData | null>(null);
//   const [travelers, setTravelers] = useState<number>(2);
//   const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
//   const [showItinerary, setShowItinerary] = useState<boolean>(false);
//   const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
//   const [bookingDetails, setBookingDetails] = useState<{
//     name: string;
//     email: string;
//     phone: string;
//     date: string;
//     specialRequests: string;
//   }>({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     specialRequests: '',
//   });

//   // Find the destination for the current package
//   useEffect(() => {
//     const pkgName = packageData[selectedPackage]?.name;
//     if (pkgName) {
//       for (const [, dest] of Object.entries(dataById)) {
//         const matchingPkg = dest.packages.find((p) => p.name === pkgName);
//         if (matchingPkg) {
//           setCurrentDestination(dest);
//           break;
//         }
//       }
//     }
//   }, [selectedPackage]);

//   // Update selectedPackage if packageId from URL changes
//   useEffect(() => {
//     let newKey = packageId || '';
//     const newIdAsNumber = parseInt(packageId || '', 10);
//     if (!isNaN(newIdAsNumber)) {
//       newKey = findPackageKeyById(newIdAsNumber) || defaultPackageKey;
//     }
//     if (newKey !== selectedPackage) {
//       setSelectedPackage(newKey);
//     }
//   }, [packageId, selectedPackage]);

//   const currentPackage = packageData[selectedPackage];

//   // Handle invalid package ID
//   if (!currentPackage) {
//     return (
//       <div className="booking-page p-10 text-center">
//         <h1 className="text-3xl font-bold text-red-600">Package Not Found 😞</h1>
//         <p className="mt-4 text-gray-700">The package ID '{packageId}' is invalid. Please check the URL and try again.</p>
//       </div>
//     );
//   }

//   const toggleAddOn = (addOnId: string) => {
//     setSelectedAddOns((prev) =>
//       prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]
//     );
//   };

//   const calculateTotal = () => {
//     let total = currentPackage.basePrice * travelers;
//     selectedAddOns.forEach((addOnId) => {
//       const addOn = addOnsData.find((a) => a.id === addOnId);
//       if (addOn) {
//         total += addOn.price;
//       }
//     });
//     return total;
//   };

//   const calculateAdvance = () => {
//     return Math.round(calculateTotal() * 0.25); // 25% advance
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setBookingDetails({
//       ...bookingDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleBooking = () => {
//     if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone || !bookingDetails.date) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     setShowPaymentModal(true);
//   };

//   const handlePayment = (method: string) => {
//     const bookingData = {
//       package: currentPackage.name,
//       travelers,
//       addOns: selectedAddOns.map((id) => {
//         const addOn = addOnsData.find((a) => a.id === id);
//         return addOn ? addOn.name : id;
//       }),
//       total: calculateTotal(),
//       advance: calculateAdvance(),
//       paymentMethod: method,
//       ...bookingDetails,
//     };
//     console.log('Booking Data:', bookingData);

//     alert(
//       `Processing ${method} payment of ₹${calculateAdvance().toLocaleString()} (25% advance)\n\nBooking confirmed! You will receive a confirmation email at ${bookingDetails.email}`
//     );
//     setShowPaymentModal(false);
//   };

//   return (
//     <div className="booking-page">
//       <div className="booking-page__header">
//         <div className="header-content">
//           <h1>Complete Your Booking</h1>
//           <p>Customize your perfect {currentDestination?.name || 'adventure'}</p>
//         </div>
//       </div>

//       <div className="booking-page__container">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <div className="package-details">
//               <img src={currentPackage.image} alt={currentPackage.name} className="package-details__image" />
//               <div className="package-details__content">
//                 <h2 className="package-details__title">{currentPackage.name}</h2>
//                 <div className="package-details__meta">
//                   <div className="meta-item">
//                     <Calendar className="w-5 h-5" />
//                     <span>{currentPackage.duration}</span>
//                   </div>
//                   <div className="meta-item">
//                     <MapPin className="w-5 h-5" />
//                     <span>{currentDestination?.region || 'India'}</span>
//                   </div>
//                 </div>

//                 <div className="package-details__highlights">
//                   <h3>Package Highlights</h3>
//                   <div className="highlights-grid">
//                     {currentPackage.highlights.map((highlight, idx) => (
//                       <div key={idx} className="highlight-item">
//                         <Check className="w-5 h-5" />
//                         <span>{highlight}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setShowItinerary(!showItinerary)}
//                   className="package-details__itinerary-toggle"
//                 >
//                   {showItinerary ? 'Hide' : 'View'} Detailed Itinerary
//                 </button>

//                 {showItinerary && (
//                   <div className="package-details__itinerary">
//                     {currentPackage.itinerary.map((day) => (
//                       <div key={day.day} className="itinerary-day">
//                         <h4>Day {day.day}: {day.title}</h4>
//                         <ul>
//                           {day.activities.map((activity, idx) => (
//                             <li key={idx}>{activity}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <div className="package-details__info-grid">
//                   <div className="info-section info-section--inclusions">
//                     <h3>
//                       <Check className="w-5 h-5" />
//                       Inclusions
//                     </h3>
//                     <ul>
//                       {currentPackage.inclusions.map((item, idx) => (
//                         <li key={idx}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="info-section info-section--exclusions">
//                     <h3>Exclusions</h3>
//                     <ul>
//                       {currentPackage.exclusions.map((item, idx) => (
//                         <li key={idx}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="addons-section">
//               <h2 className="addons-section__title">Enhance Your Experience</h2>
//               <p className="addons-section__description">Add these optional services to make your trip even more special</p>
//               <div className="addons-section__grid">
//                 {addOnsData.map((addOn) => {
//                   const Icon = addOn.icon;
//                   const isSelected = selectedAddOns.includes(addOn.id);
//                   return (
//                     <button
//                       key={addOn.id}
//                       onClick={() => toggleAddOn(addOn.id)}
//                       className={`addons-section__card ${isSelected ? 'addons-section__card--selected' : ''}`}
//                     >
//                       <div className="addons-section__card-header">
//                         <Icon className="w-6 h-6 addons-section__card-icon" />
//                         {isSelected && <Check className="w-5 h-5 addons-section__card-check" />}
//                       </div>
//                       <h3>{addOn.name}</h3>
//                       <p>{addOn.description}</p>
//                       <p className="addons-section__card-price">+₹{addOn.price.toLocaleString()}</p>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="booking-form">
//               <h2 className="booking-form__title">Traveler Details</h2>
//               <div className="booking-form__field">
//                 <label>Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={bookingDetails.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div className="booking-form__grid">
//                 <div className="booking-form__field">
//                   <label>Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={bookingDetails.email}
//                     onChange={handleInputChange}
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//                 <div className="booking-form__field">
//                   <label>Phone *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={bookingDetails.phone}
//                     onChange={handleInputChange}
//                     placeholder="+91 XXXXX XXXXX"
//                   />
//                 </div>
//               </div>
//               <div className="booking-form__field">
//                 <label>Preferred Travel Date *</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={bookingDetails.date}
//                   onChange={handleInputChange}
//                   min={new Date().toISOString().split('T')[0]}
//                 />
//               </div>
//               <div className="booking-form__field">
//                 <label>Special Requests</label>
//                 <textarea
//                   name="specialRequests"
//                   value={bookingDetails.specialRequests}
//                   onChange={handleInputChange}
//                   placeholder="Any dietary restrictions, special occasions, or other requests..."
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="booking-summary">
//               <h2 className="booking-summary__title">Booking Summary</h2>

//               <div className="booking-summary__travelers">
//                 <label>Number of Travelers</label>
//                 <div className="travelers-control">
//                   <button onClick={() => setTravelers(Math.max(1, travelers - 1))}>
//                     <Minus className="w-5 h-5" />
//                   </button>
//                   <div className="travelers-display">
//                     <Users className="w-5 h-5" />
//                     <span>{travelers}</span>
//                   </div>
//                   <button onClick={() => setTravelers(travelers + 1)}>
//                     <Plus className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>

//               <div className="booking-summary__breakdown">
//                 <div className="breakdown-item">
//                   <span>Package ({travelers} {travelers === 1 ? 'person' : 'people'})</span>
//                   <span>₹{(currentPackage.basePrice * travelers).toLocaleString()}</span>
//                 </div>
//                 {selectedAddOns.map((addOnId) => {
//                   const addOn = addOnsData.find((a) => a.id === addOnId);
//                   return (
//                     <div key={addOnId} className="breakdown-item breakdown-item--addon">
//                       <span>{addOn?.name}</span>
//                       <span>₹{addOn?.price.toLocaleString()}</span>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="booking-summary__total">
//                 <div className="total-row">
//                   <span className="total-label">Total Amount</span>
//                   <span className="total-amount">₹{calculateTotal().toLocaleString()}</span>
//                 </div>
//                 <p className="total-note">Inclusive of all taxes</p>
//               </div>

//               <button onClick={handleBooking} className="booking-summary__book-btn">
//                 Confirm Booking
//               </button>

//               <div className="booking-summary__payment-info">
//                 <div className="payment-content">
//                   <CreditCard className="w-5 h-5" />
//                   <div>
//                     <p>Secure Payment</p>
//                     <p>Pay 25% advance (₹{calculateAdvance().toLocaleString()}) to confirm. Balance payable before tour start.</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="booking-summary__contact">
//                 <p className="contact-title">Need Help?</p>
//                 <div className="contact-item">
//                   <Phone className="w-4 h-4" />
//                   <span>+91 98765 43210</span>
//                 </div>
//                 <div className="contact-item">
//                   <Mail className="w-4 h-4" />
//                   <span>booking@indiatours.com</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showPaymentModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
//             <button
//               onClick={() => setShowPaymentModal(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Payment Method</h3>
//             <p className="text-gray-600 mb-6">Pay ₹{calculateAdvance().toLocaleString()} advance to confirm your booking</p>

//             <div className="space-y-3">
//               <button
//                 onClick={() => handlePayment('Credit/Debit Card')}
//                 className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
//               >
//                 <CreditCard className="w-5 h-5" />
//                 Credit / Debit Card
//               </button>

//               <button
//                 onClick={() => handlePayment('UPI')}
//                 className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all"
//               >
//                 UPI Payment
//               </button>

//               <button
//                 onClick={() => handlePayment('Net Banking')}
//                 className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all"
//               >
//                 Net Banking
//               </button>

//               <button
//                 onClick={() => handlePayment('Wallet')}
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
//               >
//                 Wallets (Paytm, PhonePe, etc.)
//               </button>
//             </div>

//             <div className="mt-6 pt-4 border-t border-gray-200">
//               <div className="flex justify-between text-sm mb-2">
//                 <span className="text-gray-600">Advance Payment (25%)</span>
//                 <span className="font-semibold">₹{calculateAdvance().toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">Balance Due</span>
//                 <span className="font-semibold">₹{(calculateTotal() - calculateAdvance()).toLocaleString()}</span>
//               </div>
//             </div>

//             <p className="text-xs text-gray-500 mt-4 text-center">
//               Your payment is secured with SSL encryption
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, MapPin, Check, Plus, Minus, Camera, Plane, Car, Utensils, Mountain, Home, Phone, Mail, CreditCard, X } from 'lucide-react';
import { kashmirLadakhPackages, additionalPackages } from '../../data/newpackage';
import './BookingPage.scss';

// Define interfaces
interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface PackageData {
  id: number;
  name: string;
  duration: string;
  basePrice: number;
  image: string;
  highlights: string[];
  itinerary: { day: number; title: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
}

// Define add-ons data
const addOnsData: AddOn[] = [
  {
    id: 'photographer',
    name: 'Personal Photographer',
    description: 'Professional photographer for entire trip',
    price: 15000,
    icon: Camera,
  },
  {
    id: 'airport-pickup',
    name: 'Airport Pickup & Drop',
    description: 'Private car for airport transfers',
    price: 3000,
    icon: Plane,
  },
  {
    id: 'vehicle-upgrade',
    name: 'Vehicle Upgrade',
    description: 'Upgrade to luxury SUV',
    price: 8000,
    icon: Car,
  },
  {
    id: 'meal-upgrade',
    name: 'Full Meal Plan',
    description: 'Add lunch for all days',
    price: 5000,
    icon: Utensils,
  },
  {
    id: 'adventure-package',
    name: 'Adventure Package',
    description: 'River rafting, paragliding, trekking',
    price: 12000,
    icon: Mountain,
  },
  {
    id: 'homestay',
    name: 'Homestay Experience',
    description: 'Stay with local families (2 nights)',
    price: 4000,
    icon: Home,
  },
];

// Merge all packages into one object
const allPackages = { ...kashmirLadakhPackages, ...additionalPackages };

// Helper function to find the package key by its ID
const findPackageKeyById = (id: number): string | undefined => {
  for (const [key, packageData] of Object.entries(allPackages)) {
    if (packageData.id === id) {
      return key;
    }
  }
  return undefined;
};

// Helper function to find package by slug/packageId
const findPackageBySlug = (slug: string): PackageData | undefined => {
  return allPackages[slug as keyof typeof allPackages];
};

const BookingPage: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();

  // Determine the actual key (slug) to use for data lookup
  let initialPackageKey: string | undefined;
  const idAsNumber = parseInt(packageId || '', 10);
  if (!isNaN(idAsNumber)) {
    initialPackageKey = findPackageKeyById(idAsNumber);
  } else {
    initialPackageKey = packageId;
  }

  const defaultPackageKey = 'leh-cultural-discovery';

  // Initialize state
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackageKey || defaultPackageKey);
  const [travelers, setTravelers] = useState<number>(2);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [showItinerary, setShowItinerary] = useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<{
    name: string;
    email: string;
    phone: string;
    date: string;
    specialRequests: string;
  }>({
    name: '',
    email: '',
    phone: '',
    date: '',
    specialRequests: '',
  });

  const currentPackage = findPackageBySlug(selectedPackage);

  // Update selectedPackage if packageId from URL changes
  useEffect(() => {
    let newKey = packageId || '';
    const newIdAsNumber = parseInt(packageId || '', 10);
    if (!isNaN(newIdAsNumber)) {
      newKey = findPackageKeyById(newIdAsNumber) || defaultPackageKey;
    }
    if (newKey !== selectedPackage) {
      setSelectedPackage(newKey);
    }
  }, [packageId, selectedPackage]);

  // Handle invalid package ID
  if (!currentPackage) {
    return (
      <div className="booking-page booking-page--error">
        <h1 className="booking-page__error-title">Package Not Found 😞</h1>
        <p className="booking-page__error-message">The package ID '{packageId}' is invalid. Please check the URL and try again.</p>
      </div>
    );
  }

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    let total = currentPackage.basePrice * travelers;
    selectedAddOns.forEach((addOnId) => {
      const addOn = addOnsData.find((a) => a.id === addOnId);
      if (addOn) {
        total += addOn.price;
      }
    });
    return total;
  };

  const calculateAdvance = () => {
    return Math.round(calculateTotal() * 0.25); // 25% advance
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone || !bookingDetails.date) {
      alert('Please fill in all required fields');
      return;
    }
    setShowPaymentModal(true);
  };

  const handlePayment = (method: string) => {
    const bookingData = {
      package: currentPackage.name,
      travelers,
      addOns: selectedAddOns.map((id) => {
        const addOn = addOnsData.find((a) => a.id === id);
        return addOn ? addOn.name : id;
      }),
      total: calculateTotal(),
      advance: calculateAdvance(),
      paymentMethod: method,
      ...bookingDetails,
    };
    console.log('Booking Data:', bookingData);

    alert(
      `Processing ${method} payment of ₹${calculateAdvance().toLocaleString()} (25% advance)\n\nBooking confirmed! You will receive a confirmation email at ${bookingDetails.email}`
    );
    setShowPaymentModal(false);
  };

  return (
    <div className="booking-page">
      <div className="booking-page__header">
        <div className="booking-page__header-content">
          <h1>Complete Your Booking</h1>
          <p>Customize your perfect adventure</p>
        </div>
      </div>

      <div className="booking-page__container">
        <div className="booking-page__grid">
          <div className="booking-page__main-content">
            <div className="package-details">
              <img src={currentPackage.image} alt={currentPackage.name} className="package-details__image" />
              <div className="package-details__content">
                <h2 className="package-details__title">{currentPackage.name}</h2>
                <div className="package-details__meta">
                  <div className="package-details__meta-item">
                    <Calendar className="package-details__meta-icon" />
                    <span>{currentPackage.duration}</span>
                  </div>
                  <div className="package-details__meta-item">
                    <MapPin className="package-details__meta-icon" />
                    <span>Kashmir & Ladakh</span>
                  </div>
                </div>

                <div className="package-details__highlights">
                  <h3>Package Highlights</h3>
                  <div className="package-details__highlights-grid">
                    {currentPackage.highlights.map((highlight, idx) => (
                      <div key={idx} className="package-details__highlight-item">
                        <Check className="package-details__highlight-icon" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowItinerary(!showItinerary)}
                  className="package-details__itinerary-toggle"
                >
                  {showItinerary ? 'Hide' : 'View'} Detailed Itinerary
                </button>

                {showItinerary && (
                  <div className="package-details__itinerary">
                    {currentPackage.itinerary.map((day) => (
                      <div key={day.day} className="package-details__itinerary-day">
                        <h4>Day {day.day}: {day.title}</h4>
                        <ul>
                          {day.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <div className="package-details__info-grid">
                  <div className="package-details__info-section package-details__info-section--inclusions">
                    <h3>
                      <Check className="package-details__info-icon" />
                      Inclusions
                    </h3>
                    <ul>
                      {currentPackage.inclusions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="package-details__info-section package-details__info-section--exclusions">
                    <h3>Exclusions</h3>
                    <ul>
                      {currentPackage.exclusions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="addons-section">
              <h2 className="addons-section__title">Enhance Your Experience</h2>
              <p className="addons-section__description">Add these optional services to make your trip even more special</p>
              <div className="addons-section__grid">
                {addOnsData.map((addOn) => {
                  const Icon = addOn.icon;
                  const isSelected = selectedAddOns.includes(addOn.id);
                  return (
                    <button
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`addons-section__card ${isSelected ? 'addons-section__card--selected' : ''}`}
                    >
                      <div className="addons-section__card-header">
                        <Icon className="addons-section__card-icon" />
                        {isSelected && <Check className="addons-section__card-check" />}
                      </div>
                      <h3>{addOn.name}</h3>
                      <p>{addOn.description}</p>
                      <p className="addons-section__card-price">+₹{addOn.price.toLocaleString()}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="booking-form">
              <h2 className="booking-form__title">Traveler Details</h2>
              <div className="booking-form__field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="booking-form__row">
                <div className="booking-form__field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="booking-form__field">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div className="booking-form__field">
                <label>Preferred Travel Date *</label>
                <input
                  type="date"
                  name="date"
                  value={bookingDetails.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="booking-form__field">
                <label>Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={bookingDetails.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any dietary restrictions, special occasions, or other requests..."
                />
              </div>
            </div>
          </div>

          <div className="booking-page__sidebar">
            <div className="booking-summary">
              <h2 className="booking-summary__title">Booking Summary</h2>

              <div className="booking-summary__travelers">
                <label>Number of Travelers</label>
                <div className="booking-summary__travelers-control">
                  <button 
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="booking-summary__travelers-btn"
                  >
                    <Minus className="booking-summary__travelers-icon" />
                  </button>
                  <div className="booking-summary__travelers-display">
                    <Users className="booking-summary__travelers-icon" />
                    <span>{travelers}</span>
                  </div>
                  <button 
                    onClick={() => setTravelers(travelers + 1)}
                    className="booking-summary__travelers-btn"
                  >
                    <Plus className="booking-summary__travelers-icon" />
                  </button>
                </div>
              </div>

              <div className="booking-summary__breakdown">
                <div className="booking-summary__breakdown-item">
                  <span>Package ({travelers} {travelers === 1 ? 'person' : 'people'})</span>
                  <span>₹{(currentPackage.basePrice * travelers).toLocaleString()}</span>
                </div>
                {selectedAddOns.map((addOnId) => {
                  const addOn = addOnsData.find((a) => a.id === addOnId);
                  return (
                    <div key={addOnId} className="booking-summary__breakdown-item booking-summary__breakdown-item--addon">
                      <span>{addOn?.name}</span>
                      <span>₹{addOn?.price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              <div className="booking-summary__total">
                <div className="booking-summary__total-row">
                  <span className="booking-summary__total-label">Total Amount</span>
                  <span className="booking-summary__total-amount">₹{calculateTotal().toLocaleString()}</span>
                </div>
                <p className="booking-summary__total-note">Inclusive of all taxes</p>
              </div>

              <button onClick={handleBooking} className="booking-summary__book-btn">
                Confirm Booking
              </button>

              <div className="booking-summary__payment-info">
                <div className="booking-summary__payment-content">
                  <CreditCard className="booking-summary__payment-icon" />
                  <div>
                    <p>Secure Payment</p>
                    <p>Pay 25% advance (₹{calculateAdvance().toLocaleString()}) to confirm. Balance payable before tour start.</p>
                  </div>
                </div>
              </div>

              <div className="booking-summary__contact">
                <p className="booking-summary__contact-title">Need Help?</p>
                <div className="booking-summary__contact-item">
                  <Phone className="booking-summary__contact-icon" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="booking-summary__contact-item">
                  <Mail className="booking-summary__contact-icon" />
                  <span>booking@indiatours.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div className="payment-modal">
          <div className="payment-modal__overlay">
            <div className="payment-modal__content">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="payment-modal__close-btn"
              >
                <X className="payment-modal__close-icon" />
              </button>

              <h3 className="payment-modal__title">Choose Payment Method</h3>
              <p className="payment-modal__description">Pay ₹{calculateAdvance().toLocaleString()} advance to confirm your booking</p>

              <div className="payment-modal__methods">
                <button
                  onClick={() => handlePayment('Credit/Debit Card')}
                  className="payment-modal__method-btn payment-modal__method-btn--card"
                >
                  <CreditCard className="payment-modal__method-icon" />
                  Credit / Debit Card
                </button>

                <button
                  onClick={() => handlePayment('UPI')}
                  className="payment-modal__method-btn payment-modal__method-btn--upi"
                >
                  UPI Payment
                </button>

                <button
                  onClick={() => handlePayment('Net Banking')}
                  className="payment-modal__method-btn payment-modal__method-btn--netbanking"
                >
                  Net Banking
                </button>

                <button
                  onClick={() => handlePayment('Wallet')}
                  className="payment-modal__method-btn payment-modal__method-btn--wallet"
                >
                  Wallets (Paytm, PhonePe, etc.)
                </button>
              </div>

              <div className="payment-modal__breakdown">
                <div className="payment-modal__breakdown-item">
                  <span className="payment-modal__breakdown-label">Advance Payment (25%)</span>
                  <span className="payment-modal__breakdown-value">₹{calculateAdvance().toLocaleString()}</span>
                </div>
                <div className="payment-modal__breakdown-item">
                  <span className="payment-modal__breakdown-label">Balance Due</span>
                  <span className="payment-modal__breakdown-value">₹{(calculateTotal() - calculateAdvance()).toLocaleString()}</span>
                </div>
              </div>

              <p className="payment-modal__security-note">
                Your payment is secured with SSL encryption
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;