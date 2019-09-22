import starships from "../images/starships.png";
const formatStarshipItem = (starshipsItem, index) => {
  return {
    id: index,
    name: starshipsItem.name,
    model: starshipsItem.model,
    manufacturer: starshipsItem.manufacturer,
    image: starships,
    pilots: starshipsItem.pilots,
    films: starshipsItem.films
  };
};

const getDataFromApi = () => {
  return fetch(`https://swapi.co/api/starships/`)
    .then(response => response.json())
    .then(starships => starships.results.map(formatStarshipItem));
};

export default getDataFromApi;
