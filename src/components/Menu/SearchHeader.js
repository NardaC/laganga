import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchHeader = ({ functionFilterSearch }) => {
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


  return (
    <>
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
        <button className="btn  my-2 my-sm-0  search-icon search-icon-mobile" type="submit">
          <FontAwesomeIcon icon={faSearch} className="" />
        </button>
      </form>
    </>
  );
};

export default SearchHeader;
