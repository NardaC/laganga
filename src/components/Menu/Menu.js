import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css"

import logo from "../../images/logo-ganga.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";

const Menu = () => {
  return (
    <Container className="container-ganga">
      <nav className="navbar navbar-light bg-light justify-content-between ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo la ganga"  className="logo-ganga"/>
        </Link>
        <form className="search-container">
          <input
            className="search-bar"
            type="search"
            placeholder="Ingresa lo que estas buscando"
            aria-label="Search"
            autoComplete="off"
            maxLength="100"
          />
          <button
            className="btn  my-2 my-sm-0  search-icon"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <FontAwesomeIcon icon={faUserCircle} />
      </nav>
    </Container>
  );
};

export default Menu;
