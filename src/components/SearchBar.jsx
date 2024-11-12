import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={classes.search}>
      <div className={classes.search__content}>
        <input
          value={searchTerm}
          //onChange={(e) => {}}
          placeholder="Busca Flores"
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SearchBar;
