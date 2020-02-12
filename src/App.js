import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
library.add(faSearch, faPlusSquare, faUser);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
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
