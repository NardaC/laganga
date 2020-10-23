import React, { useEffect, useState } from "react";
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
import { useLocalStorage } from "./components/Custom/useLocalStorage";
import MenuMobile from "./components/Menu/MenuMobile";
import PromoSimilar from "./components/PromoSimilar/PromoSimilar";
import Construccion from "./components/Construccion/Construccion";

function App() {
  const [filterSearch, setFilterSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [arrayInterest, setArrayInterest] = useState(() => {
    try {
      const item = window.localStorage.getItem("arrayInterestLocal");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const addInterest = (product) => {
    let registerInterest;

    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === product._id) {
        registerInterest = product;
        registerInterest.like = true;
        product.like = true;
      }
    }
    for (let i = 0; i < arrayInterest.length; i++) {
      if (arrayInterest[i]._id === registerInterest._id) {
        registerInterest.like = false;
        product.like = false;
        return setArrayInterest(
          arrayInterest.filter(
            (product) => product._id !== registerInterest._id
          )
        );
      }
    }
    setArrayInterest((arrayInterest) => [...arrayInterest, registerInterest]);
  };
  localStorage.setItem("arrayInterestLocal", JSON.stringify(arrayInterest));

  const getProductsDay = async () => {
    //const res = await axios.get('http://localhost:3000/products');
    const res = await axios.get("https://la-ganga-api.herokuapp.com/products");
    const arrayProducts= res.data.products;
   const filterProducts= arrayProducts.filter(product => new Date().getTime() >= new Date(product.fechaInicioOferta).getTime() )
    setProducts(filterProducts);
    console.log(filterProducts, "JUDITH")
  };

  useEffect(() => {
    getProductsDay();
  }, []);
  const functionFilterSearch = (arrayFilter) => {
    setFilterSearch(arrayFilter);
  };

  const width = window.innerWidth;
  const breakpoint = 768;

  return (
    <Router className="box-home">
      <Menu functionFilterSearch={functionFilterSearch} />
      <FilterCategory />
      <Switch>
        <Route path="/" exact>
          <Home products={products} addInterest={addInterest} />
        </Route>
        <Route path="/interest" exact>
          <Interest products={products} addInterest={addInterest} />
        </Route>
        <Route path="/item-especific/:productId" exact>
          <ItemSpecific />
        </Route>
        <Route path="/en-construccion" exact>
        <Construccion></Construccion>
        </Route>
        <Route path="/buscar/:searchWords" exact>
          <Search filterSearch={filterSearch} />
        </Route>
        <Route path="/category/:category?&:marca?">
          <Category />
          <PromoSimilar/>
        </Route>
        {/* <Route path="/category/:category">
          <Category />
          <PromoSimilar/>
        </Route>
        <Route path="/category/:marca">
          <Category />
          <PromoSimilar/>
        </Route> */}
      </Switch>
      {width < breakpoint ? <MenuMobile /> : <Footer />}
    </Router>
  );
}

export default App;
