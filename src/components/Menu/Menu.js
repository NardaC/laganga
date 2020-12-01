import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

import "./Menu.css";

import logo from "../../images/logo-ganga.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";

import burger from "../../images/menu-icons/burger-menu.svg";
import clienteAxiosBusiness from "../config/axiosBusiness";

const Menu = ({ functionFilterSearch }) => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  let history = useHistory();

  const filterForm = (e) => {
    e.preventDefault();
    const textInput = searchWord;
    const dataInput = products;
    if (textInput === "") {
      return history.push("/");
    } else {
      const newData = dataInput.filter(function(item) {
        const itemData = item.nombre.toUpperCase();
        const itemDataDescp = item.categoria.toUpperCase();
        const campo = itemData + " " + itemDataDescp;
        const textData = textInput.toUpperCase();

        return campo.indexOf(textData) > -1;
      });
      localStorage.setItem("searchFilterLocalStorage", JSON.stringify(newData));
      //  functionFilterSearch(newData);
      history.push("/buscar/" + textInput);
    }
  };

  const goToRoute = (e) => {
    e.preventDefault();
    return history.push("/interest");
  };
  const getProducts = async () => {
    //const res = await axios.get('http://localhost:3000/products');
    // const res = await axios.get("https://la-ganga-api.herokuapp.com/products");
    const res = await clienteAxiosBusiness.get("/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const width = window.innerWidth;
  const breakpoint = 768;

  return (
    <>
      {width < breakpoint ? (
        <Container className="navbar-mobile">
          <nav className="navbar navbar-light bg-light justify-content-between ">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo la ganga" className="logo-ganga" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <img
              src={burger}
              alt="burger menu la ganga"
              className="burger-menu"
            />
          </nav>
          <div className="box-search-mobile">
            <form className="search-container" onSubmit={filterForm}>
              <input
                className="search-bar search-bar-mobile"
                type="search"
                placeholder="Ingresa lo que estas buscando"
                aria-label="Search"
                onChange={(e) => setSearchWord(e.target.value)}
                value={searchWord}
                autoComplete="off"
                autoCorrect="off"
                maxLength="100"
              />
              <button
                className="btn  my-2 my-sm-0  search-icon search-icon-mobile"
                type="submit"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="icon-searh-mobile"
                />
              </button>
            </form>
          </div>
        </Container>
      ) : (
        <Container className="container-ganga navbar-desktop">
          <nav className="navbar navbar-light bg-light justify-content-between ">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo la ganga" className="logo-ganga" />
            </Link>
            <form className="search-container" onSubmit={filterForm}>
              <input
                className="search-bar "
                type="search"
                placeholder="Ingresa lo que estas buscando"
                aria-label="Search"
                onChange={(e) => setSearchWord(e.target.value)}
                value={searchWord}
                autoComplete="off"
                autoCorrect="off"
                maxLength="100"
              />
              <button className="btn  my-2 my-sm-0  search-icon " type="submit">
                <FontAwesomeIcon icon={faSearch} className="" />
              </button>
            </form>
            <FontAwesomeIcon
              icon={faHeart}
              className="btn-like-menu"
              onClick={goToRoute}
            />
            <FontAwesomeIcon icon={faUserCircle} className="btn-like-user" />
          </nav>
        </Container>
      )}
    </>
  );
};

export default Menu;
