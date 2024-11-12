import React, { useState, useEffect } from "react";

import FlowerCard from "../components/FlowerCard";
import SearchBar from "../components/SearchBar";
import classes from "./Home.module.scss";

const FLOWER_API_URL = `https://dulces-petalos.jakala.es/api/product`;
const Home = () => {
  const [flowers, setFlowers] = useState([]);
  const getFlowers = async () => {
    const response = await fetch(`${FLOWER_API_URL}`);
    const data = await response.json();
    setFlowers(data);
  };
  useEffect(() => {
    getFlowers();
  }, []);

  return (
    <div>
      <SearchBar />
      {flowers?.length > 0 ? (
        <div className={classes.home}>
          {flowers.map((flower) => (
            <FlowerCard flower={flower} />
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
