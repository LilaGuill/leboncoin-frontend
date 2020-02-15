import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const SearchBar = ({ search, setSearch, setOffers, setCount }) => {
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3000/search", {
      search
    });
    setOffers(response.data.offers);
    setCount(response.data.count);
  };

  return (
    <div className="search">
      <div className="background-search"></div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <FontAwesomeIcon icon="search" className="icon-grey" />
            <input
              type="text"
              placeholder="Que recherchez-vous ?"
              value={search}
              onChange={event => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="search-button">
            Rechercher
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
