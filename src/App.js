import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

library.add(faSearch, faPlusSquare, faUser);

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const myToken = Cookies.get("token");
    setToken(myToken);
  }, []);

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Switch>
        <Route path="/offer/:id">
          <Offer t />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup setToken={setToken} />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
