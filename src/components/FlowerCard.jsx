import React from "react";
import classes from "./FlowerCard.module.scss";

const FlowerCard = ({ flower }) => {
  return (
    <div className={classes.card} key={flower.id}>
      <img
        src={flower.imgUrl ? flower.imgUrl : "https://via.placeholder.com/400"}
        alt={flower.binomialName}
      />

      <div className={classes.card__info}>
        <p>{flower.name}</p>
        <i>{flower.binomialName}</i>
        <p>
          <b>{flower.price} €</b>
        </p>
      </div>
    </div>
  );
};

export default FlowerCard;
