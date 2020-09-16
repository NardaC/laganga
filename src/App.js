import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FilterCategory from "./components/FilterCategory/FilterCategory";
import ItemSpecific from "./components/ItemSpecific/ItemSpecific";

function App() {
  return (
    <Router className="App">
      <Menu />
      <FilterCategory/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/item-especific/:productId">
          <ItemSpecific />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
