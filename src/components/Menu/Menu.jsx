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

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo la ganga"  className="logo-ganga"/>
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <FontAwesomeIcon icon={faUserCircle} />
      </nav>
    </>
  );
};

export default Menu;
