import React from "react";

const Starships = props => {
  return (
    <div className="starship">
      <img
        className="starship_img"
        alt="star wars starship"
        src={props.starships.image}
      />
      <h2 className="starship_name">{props.starships.name}</h2>
      <p className="starship_model">{props.starships.model}</p>
      <p className="starship_manufacturer">{props.starships.manufacturer}</p>
    </div>
  );
};

export default Starships;
