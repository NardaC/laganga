import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import logo from "../../images/logo-ganga.svg";
import burger from "../../images/menu-icons/burger-menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";

const MenuNuevo = (props) => {
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
    const res = await axios.get("https://la-ganga-api.herokuapp.com/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const width = window.innerWidth;
  const breakpoint = 768;


  return (
    <div className="container-ganga">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="box-logo">
          <img src={logo} alt="logo la ganga" className="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={props.drawerClickHandler}>
          <img
            src={burger}
            alt="burger menu la ganga"
            className="burger-menu"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto w-100 navbar-desktop">
            <Form inline className="search-container " onSubmit={filterForm}>
              <FormControl
                type="text"
                type="search"
                placeholder="Ingresa lo que estas buscando"
                aria-label="Search"
                onChange={(e) => setSearchWord(e.target.value)}
                value={searchWord}
                autoComplete="off"
                autoCorrect="off"
                maxLength="100"
              />
              <Button variant="outline-success" >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="icon-searh-mobile"
                />
              </Button>
            </Form>
            <Nav.Link href="/interest" className="mr-3 ">
              <FontAwesomeIcon
                icon={faHeart}
                className="btn-like-menu"
                onClick={goToRoute}
              />
            </Nav.Link>
            <Nav.Link href="#" className="ml-3 ">
              <FontAwesomeIcon icon={faUserCircle} className="btn-like-user " />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
            <FontAwesomeIcon icon={faSearch} className="icon-searh-mobile" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuNuevo;
