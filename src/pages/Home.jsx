import React, { useState, useEffect } from "react";

import FlowerCard from "../components/FlowerCard";
import SearchBar from "../components/SearchBar";
import classes from "./Home.module.scss";

import getFlowers from "../services/getFlowers";

const Home = () => {
  const [flowers, setFlowers] = useState([]);
  //We declare the query state here to pass down to the search component
  const [query, setQuery] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFlowers();
      setFlowers(data);
    })();
  }, []);

  let filteredFlowers = flowers.filter(
    (flower) =>
      flower.name.toLowerCase().includes(query) ||
      flower.binomialName.toLowerCase().includes(query),
  );

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {filteredFlowers?.length > 0 ? (
        <div className={classes.home}>
          {filteredFlowers.map((flower) => (
            <FlowerCard flower={flower} key={flower.id} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No hay flores</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
