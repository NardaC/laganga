import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

import logo from "../../images/logo-ganga.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import axios from "axios";
import SearchHeader from "./SearchHeader";

const Menu = () => {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  const goToRoute = (e) => {
    e.preventDefault();
    return history.push("/interest");
  };
  const getProducts = async () => {
    //const res = await axios.get('http://localhost:3000/products');
    const res = await axios.get("https://la-ganga-api.herokuapp.com/products");
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
        <Container>
          <nav className="navbar navbar-light bg-light justify-content-between ">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo la ganga" className="logo-ganga" />
            </Link>
            <FontAwesomeIcon
              icon={faHeart}
              className="btn-like-menu"
              onClick={goToRoute}
            />
            <FontAwesomeIcon icon={faUserCircle} className="btn-like-user" />
          </nav>
          <div className="box-search-mobile">
          <SearchHeader />
          </div>
        </Container>
      ) : (
        <Container className="container-ganga">
          <nav className="navbar navbar-light bg-light justify-content-between ">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo la ganga" className="logo-ganga" />
            </Link>
            <SearchHeader />
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
