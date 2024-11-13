import React from "react";
import searchIcon from "../assets/search.svg";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ setQuery }) => {
  return (
    <div className={classes.search}>
      <div className={classes.search__content}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca Flores"
        />
        <img src={searchIcon} alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
