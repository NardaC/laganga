import React, { useEffect, useState, useMemo } from "react";
import { useHistory, NavLink } from "react-router-dom";
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
import clienteAxiosBusiness from "../config/axiosBusiness";
import clienteAxiosBusinessLocal from "../config/axiosBusinessLocal";

const MenuNuevo = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  let history = useHistory();

  const filterForm = (e) => {
    e.preventDefault()
    const searchFilter = searchWord.toLowerCase();
    const dataInput = products;
    if (searchFilter === "") {
      return history.push("/");
    } else {
      const newData = dataInput.filter((item)=> {
        const matchName = item.promocion.nombre.toLowerCase().includes(searchFilter);
        const matchCategory = item.promocion.categoria.toLowerCase().includes(searchFilter);
        const matchDescription= item.promocion.descripcion.toLowerCase().includes(searchFilter);
        return matchName || matchCategory || matchDescription
      });
      localStorage.setItem("searchFilterLocalStorage", JSON.stringify(newData));
      //  functionFilterSearch(newData);
      history.push("/buscar/" + searchFilter);
    }
  };




  const goToRoute = (e) => {
    e.preventDefault();
    return history.push("/interest");
  };
  const getProducts = async () => {
    await clienteAxiosBusinessLocal.get("/get-promotion-all/user")
    .then((res) => {
      if (res.data.MensajeRespuesta === "NO EXISTEN DATOS") {
        setProducts([]);
        // setTotalPromotions(0)
      } else {
        // setProducts(res.data.promocionesGeneral);
        // setProducts(res.data.promociones);
           setProducts(res.data);
        console.log(res.data,"dataj")
        // setTotalPromotions(res.data.totalDePromociones)
      }
      // setLoading(false);
    })
    .catch((e) => {
      console.log(e, "error:)");
    })
  };
  
  useEffect(() => {
    getProducts();
  }, []);
  const width = window.innerWidth;
  const breakpoint = 768;


  return (
    <div className="container-ganga">
      <Navbar bg="light" expand="lg">
        <NavLink to="/" className="box-logo">
          <img src={logo} alt="logo la ganga" className="logo-ganga" />
        </NavLink>
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
                className="input-search-menu"
              />
              <Button variant="outline-success btn-search-menu" >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="icon-searh-mobile"
                />
              </Button>
            </Form>
            <NavLink to="/interest"  exact="true" className="mr-3 " activeClassName='is-active'>
              <FontAwesomeIcon
                icon={faHeart}
                className="btn-like-menu"
                onClick={goToRoute}
              />
            </NavLink>
            <NavLink to="/error" className="ml-3 " activeClassName='is-active'>
              <FontAwesomeIcon icon={faUserCircle} className="btn-like-user " />
            </NavLink>
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
