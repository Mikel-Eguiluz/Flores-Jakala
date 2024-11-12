import React from "react";

const FlowerCard = ({ flower }) => {
  console.log(flower);

  return (
    <div className="flower" key={flower.id}>
      <div>
        <p>{flower.name}</p>
      </div>

      <div>
        <img
          src={
            flower.imgUrl ? flower.imgUrl : "https://via.placeholder.com/400"
          }
          alt={flower.binomialName}
        />
      </div>

      <div>
        <span>{flower.price} €</span>
        <h3>{flower.heightInCm} cm</h3>
      </div>
    </div>
  );
};

export default FlowerCard;
