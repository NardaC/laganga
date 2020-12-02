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
import MenuNuevo from "./components/Menu/MenuNuevo";
import Sidedrawer from "./components/Menu/MenuBurger/Sidedrawer";
import Backdrop from "./components/Menu/MenuBurger/Backdrop";
import clienteAxiosBusiness from "./components/config/axiosBusiness";

function App() {
  const [filterSearch, setFilterSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [menuBurgerOpen, setmenuBurgerOpen] = React.useState(false);
  const [arrayInterest, setArrayInterest] = useState(
    //   [() => {
    //   try {
    //     const item = window.localStorage.getItem("arrayInterestLocal");
    //     return item ? JSON.parse(item) : [];
    //   } catch (error) {
    //     return [];
    //   }
    // }]
    window.localStorage.getItem("arrayInterestLocal") == null
      ? []
      : JSON.parse(window.localStorage.getItem("arrayInterestLocal"))
  );

  // console.log(arrayInterest, "array")
  // console.log(JSON.parse(window.localStorage.getItem("arrayInterestLocal")), "itemInicial")
  useEffect(() => {
    getProductsDay();
  }, []);

  const getProductsDay = async () => {
    //const res = await axios.get('http://localhost:3000/products');
    //const res = await axios.get("https://la-ganga-api.herokuapp.com/products");
    const res = await clienteAxiosBusiness.get("/products");
    console.log('con .env', res)
    const arrayProducts = res.data.products;
    // const filterProducts = arrayProducts.filter(
    //   (product) =>
    //     new Date().getTime() >= new Date(product.fechaInicioOferta).getTime()
    // );
    setProducts(arrayProducts);
    // console.log(filterProducts, "JUDITH")
  };


  const addInterest = (products,product) => {
    //Solo guardará en interest productos totales//
    let registerInterest;

    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === product._id) {
        registerInterest = product;
        registerInterest.liked = true;
        product.liked = true;
      }
    }
    console.log(registerInterest, "°°°°")

    console.log(arrayInterest.length, "janira3");
    for (let i = 0; i < arrayInterest.length; i++) {
      if (arrayInterest[i]._id === registerInterest._id) {
        registerInterest.liked = false;
        product.liked = false;
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

  const functionFilterSearch = (arrayFilter) => {
    setFilterSearch(arrayFilter);
  };

  const drawerToggleClickHandler = () => {
    setmenuBurgerOpen(true);
  };

  const ocultarMenuMobile = () => {
    console.log("cerraooo");
    setmenuBurgerOpen(false);
  };
  let backdrop;
  if (menuBurgerOpen) {
    backdrop = <Backdrop click={ocultarMenuMobile} />;
  }

  const width = window.innerWidth;
  const breakpoint = 768;

  return (
    <Router className="box-home">
      {/* <Menu functionFilterSearch={functionFilterSearch} /> */}
      <MenuNuevo
        functionFilterSearch={functionFilterSearch}
        ocultarMenuMobile={ocultarMenuMobile}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <Sidedrawer
        show={menuBurgerOpen}
        ocultarMenuMobile={ocultarMenuMobile}
      ></Sidedrawer>
      {backdrop}
      <FilterCategory />
      <Switch>
        <Route path="/" exact>
          <Home products={products} addInterest={addInterest} />
        </Route>
        {/* <Route path="/home" exact>
          <Home products={products} addInterest={addInterest} />
        </Route> */}
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
          <PromoSimilar />
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
