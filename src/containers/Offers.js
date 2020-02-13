import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import Pagination from "../components/Pagination";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000");
    setOffers(response.data);
    setIsloading(false);
  };
  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <>
          <List offers={offers} />
          <Pagination pages={offers.length} />
        </>
      )}
    </>
  );
};

export default Home;
