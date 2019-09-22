import React from "react";
import Starships from "./Starships";

const StarshipsList = props => {
  const renderList = () => {
    return props.starships.map(starships => {
      return (
        <li key={starships.id}>
          <Starships starships={starships} />
        </li>
      );
    });
  };
  return <ul className="starshipsList">{renderList()}</ul>;
};

export default StarshipsList;
