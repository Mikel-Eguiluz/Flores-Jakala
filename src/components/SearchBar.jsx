import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ setQuery }) => {
  // const [query, setQuery] = useState("");
  return (
    <div className={classes.search}>
      <div className={classes.search__content}>
        <input
          // value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca Flores"
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SearchBar;
