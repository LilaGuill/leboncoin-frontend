import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://le-bon-coin.herokuapp.com/");
    console.log("data", response);
  };
  return (
    <div>
      Home
      <Link to="/offer">Offer</Link>
    </div>
  );
};

export default Home;
