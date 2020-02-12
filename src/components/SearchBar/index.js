import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="background-search"></div>
      <div className="search-bar">
        <form>
          <div className="input">
            <FontAwesomeIcon icon="search" className="icon-grey" />
            <input type="text" placeholder="Que recherchez-vous ?" />
          </div>
          <button>Rechercher</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
