import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import List from "../components/List";

const Home = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000");
    setOffers(response.data);
  };
  return (
    <div>
      <SearchBar />
      <List offers={offers} />
    </div>
  );
};

export default Home;
