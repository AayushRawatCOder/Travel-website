// import React, { useEffect, useState } from "react";
// import DestinationCard from "../components/DestinationCard";

// interface Destination {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   category: string;
// }

// const Destinations = () => {
//   const [destinations, setDestinations] = useState<Destination[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/destinations")
//       .then((res) => res.json())
//       .then((data) => setDestinations(data))
//       .catch(console.error);
//   }, []);

//   const kashmir = destinations.filter((d) => d.category === "kashmir");
//   const international = destinations.filter((d) => d.category === "international");

//   return (
//     <div className="container">
//       <h1>Explore Destinations 🌍</h1>

//       <section>
//         <h2>🗻 Kashmir Destinations</h2>
//         <div className="destination-grid">
//           {kashmir.map((d) => <DestinationCard key={d.id} name={d.name} image={d.image} desc={d.description} />)}
//         </div>
//       </section>

//       <section>
//         <h2>🌎 International Destinations</h2>
//         <div className="destination-grid">
//           {international.map((d) => <DestinationCard key={d.id} name={d.name} image={d.image} desc={d.description} />)}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Destinations;


import React from "react";
// import DestinationCard from "../components/DestinationCard";
import Destinations1 from "../components/Destination/Destination";

const Destinations = () => {
  return (
   <>
      <Destinations1/>
   </>
  );
};

export default Destinations;
