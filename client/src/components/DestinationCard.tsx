import React from "react";

interface Props {
  name: string;
  image: string;
  desc: string;
}

const DestinationCard: React.FC<Props> = ({ name, image, desc }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
