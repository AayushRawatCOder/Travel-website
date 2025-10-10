import React, { useEffect, useState } from "react";

interface TravelPackage {
  id: number;
  title: string;
  price: number;
  duration: string;
  description: string;
}

const Packages = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1>Travel Packages 💼</h1>
      <div className="package-grid">
        {packages.map((p) => (
          <div key={p.id} className="package-card">
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <p><strong>Duration:</strong> {p.duration}</p>
            <p><strong>Price:</strong> ₹{p.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
