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

const Menu = ({ functionFilterSearch }) => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  let history = useHistory();
  const filterForm = (e) => {
    e.preventDefault();
    const textInput = searchWord;
    const dataInput = products;
    const newData = dataInput.filter(function(item) {
      const itemData = item.nombre.toUpperCase();
      const itemDataDescp = item.categoria.toUpperCase();
      const campo = itemData + " " + itemDataDescp;
      const textData = textInput.toUpperCase();

      return campo.indexOf(textData) > -1;
    });

    functionFilterSearch(newData, textInput);
    console.log(products, "juju");
    history.push("/buscar/" + textInput);
  };

  const getProducts = async () => {
    //const res = await axios.get('http://localhost:3000/products');
    const res = await axios.get("https://la-ganga-api.herokuapp.com/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="container-ganga">
      <nav className="navbar navbar-light bg-light justify-content-between ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo la ganga" className="logo-ganga" />
        </Link>
        <form className="search-container" onSubmit={filterForm}>
          <input
            className="search-bar"
            type="search"
            placeholder="Ingresa lo que estas buscando"
            aria-label="Search"
            onChange={(e) => setSearchWord(e.target.value)}
            value={searchWord}
            autoComplete="off"
            autoCorrect="off"
            maxLength="100"
          />
          <button className="btn  my-2 my-sm-0  search-icon" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <FontAwesomeIcon icon={faHeart} className="btn-like-menu" />
        <FontAwesomeIcon icon={faUserCircle} className="btn-like-user" />
      </nav>
    </Container>
  );
};

export default Menu;
