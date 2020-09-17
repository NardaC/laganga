import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FilterCategory from "./components/FilterCategory/FilterCategory";
import ItemSpecific from "./components/ItemSpecific/ItemSpecific";
import Search from "./components/Search/Search"

function App() {
const [filterSearch, setFilterSearch] = React.useState([]);
  const functionFilterSearch =  (arrayFilter) => {
    setFilterSearch(arrayFilter);
  }
  return (
    <Router className="box-home">
      <Menu functionFilterSearch={functionFilterSearch}/>
      <FilterCategory/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/item-especific/:productId">
          <ItemSpecific />
        </Route>
        <Route path="/buscar/:searchWords">
          <Search filterSearch={filterSearch}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
