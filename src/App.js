import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FilterCategory from "./components/FilterCategory/FilterCategory";
import ItemSpecific from "./components/ItemSpecific/ItemSpecific";
import Search from "./components/Search/Search";
import Category from "./components/Category/Category";
import Interest from "./components/Interest/Interest";

function App() {
  const [filterSearch, setFilterSearch] = React.useState([]);
  const [products, setProducts] = useState([]);
  const [arrayInterest, setArrayInterest] = useState(JSON.parse(localStorage.getItem("arrayInterestLocal")));

  const addInterest = (product) => {
    let registerInterest;

  
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === product._id) {
        registerInterest = products[i]
        registerInterest.like= true
      }
    }
    for (let i = 0; i < arrayInterest.length; i++) {
      if (arrayInterest[i]._id === registerInterest._id) {
        registerInterest.like= false
        return setArrayInterest(arrayInterest.filter(product => product._id !== registerInterest._id))
      }
    }
    setArrayInterest(arrayInterest => [...arrayInterest, registerInterest])
  };
  localStorage.setItem("arrayInterestLocal", JSON.stringify(arrayInterest))
  console.log(arrayInterest, "judith")
  const getProductsDay = async () => {
    //const res = await axios.get('http://localhost:3000/products');
    const res = await axios.get('https://la-ganga-api.herokuapp.com/products');
    setProducts(res.data.products);
  };
  useEffect(() => {
    getProductsDay();
  }, []);
  const functionFilterSearch = (arrayFilter) => {
    setFilterSearch(arrayFilter);
  }

  return (
    <Router className="box-home">
      <Menu functionFilterSearch={functionFilterSearch} />
      <FilterCategory />
      <Switch>
        <Route path="/" exact>
          <Home products={products} addInterest={addInterest}/>
        </Route>
        <Route path="/interest" exact>
          <Interest products={products} addInterest={addInterest} />
        </Route>
        <Route path="/item-especific/:productId">
          <ItemSpecific />
        </Route>
        <Route path="/buscar/:searchWords">
          <Search filterSearch={filterSearch} />
        </Route>
        <Route path="/category/:category">
          <Category />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
