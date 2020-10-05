import React, { useState } from "react";

import "./Menu.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faHeart } from "@fortawesome/free-solid-svg-icons";

import category from "../../images/menu-icons/category.svg";
import categoryOn from "../../images/menu-icons/category-on.svg";
import heart from "../../images/menu-icons/heart.svg";
import heartOn from "../../images/menu-icons/heart-on.svg";
import fire from "../../images/menu-icons/fire.svg";
import fireOn from "../../images/menu-icons/fire-on.svg";
import search from "../../images/menu-icons/search.svg";
import searchOn from "../../images/menu-icons/search-on.svg";
import { Modal } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";

const MenuMobile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
  e.preventDefault();
  setShow(true)}
  const [valueCategory, setValueCategory] = useState("");
  const [valueMarca, setValueMarca] = useState("");
  let history = useHistory();

  const handleInputChangeCategory = (e) => {
    setValueCategory(e.target.value);
  };
  const handleInputChangeMarca = (e) => {
    setValueMarca(e.target.value);
  };

  const sendFilter = (e) => {
    history.push(`/category/${valueCategory} ${valueMarca}`);
    setValueCategory("");
    setValueMarca("");
    handleClose();
  };
  return (
    <>
      <nav class="navbar fixed-bottom navbar-light bg-light">
        
        <NavLink class="" to="/" onClick={handleShow} activeClassName="menu-on">
          {/* <FontAwesomeIcon icon={faPlusSquare} className="menu-off"/> */}
          <img src={category} alt="" className="menu-off" />
          {/* <p className="menu-off">a</p> */}
        </NavLink>
        <NavLink class=" " to="/interest" activeClassName="heartOn">
          {/* <img src={heart} alt="" className="menu-off" /> */}
          {/* <FontAwesomeIcon icon={faHeart} className="menu-off"/> */}
          <div className="heart"></div>
          {/* <p className="menu-off">e</p> */}
        </NavLink>
        <NavLink class="" to="/en-cosntruccion" activeClassName="menu-on">
          <img src={fire} alt="" className="menu-off" />
          {/* <img src={fireOn} alt="" className="" /> */}
          {/* <p className="menu-off">i</p> */}
        </NavLink>
        <NavLink class="" to="/iu"  activeClassName="menu-on">
          <img src={search} alt="" className="menu-off" />
          {/* <img src={searchOn} alt="" className="" /> */}
          {/* <p className="menu-off">o</p> */}
        </NavLink>
        
      </nav>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h5>CATEGORIAS</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="box-filter">
            {/* <h5>CATEGORIAS</h5>
            <hr /> */}
            <div className="icon-category">
              <input
                type="radio"
                id="category_ropa"
                value="ropa"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label className="card-category ropa" htmlFor="category_ropa">
                {/* <figure className="" onClick={filterCategoryRopa}>
                                    <img src={categoryRopa} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_deporte"
                value="deporte"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category deporte"
                htmlFor="category_deporte"
              >
                {/* <figure className="" onClick={filterCategoryDeporte}>
                                    <img src={categoryDeportes} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_tecnologia"
                value="tecnologia"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category tecnologia"
                htmlFor="category_tecnologia"
              >
                {/* <figure className="" onClick={filterCategoryTecnologia}>
                                    <img src={categoryTecnologia} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_calzado"
                value="calzado"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category calzado"
                htmlFor="category_calzado"
              >
                {/* <figure className="" onClick={filterCategoryCalzado}>
                                    <img src={categoryCalzado} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_hogar"
                value="hogar"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label className="card-category hogar" htmlFor="category_hogar">
                {/* <figure className="" onClick={filterCategoryHogar}>
                                    <img src={categoryHogar} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_juguetes"
                value="juguete"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category juguetes"
                htmlFor="category_juguetes"
              >
                {/* <figure className="" onClick={filterCategoryJuguetes}>
                                    <img src={categoryJuguetes} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_electroHogar"
                value="electroHogar"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category electroHogar"
                htmlFor="category_electroHogar"
              >
                {/* <figure className="" onClick={filterCategoryElectroHogar}>
                                    <img src={categoryElectroHogar} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_belleza"
                value="belleza"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category belleza"
                htmlFor="category_belleza"
              >
                {/* <figure className="" onClick={filterCategoryBelleza}>
                                    <img src={categoryBelleza} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_nuevos"
                value="nuevo"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label className="card-category nuevos" htmlFor="category_nuevos">
                {/* <figure className="" onClick={filterCategoryNuevos}>
                                    <img src={categoryNuevos} alt="banner" className="w-70" />
                                </figure> */}
              </label>
              <input
                type="radio"
                id="category_oficina"
                value="escolarOficina"
                name="category"
                onChange={handleInputChangeCategory}
              />
              <label
                className="card-category oficina"
                htmlFor="category_oficina"
              >
                {/* <figure className="" onClick={filterCategoryOficina}>
                                    <img src={categoryOficina} alt="banner" className="w-70" />
                                </figure> */}
              </label>
            </div>
          </div>
          <div className="box-filter">
            <h5>MARCAS</h5>
            <hr />
            {/* <div>
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
                        </div> */}
            <div className="box-marcas">
              <input
                type="radio"
                name="marcas"
                value="adidas"
                id="adidas"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="adidas">Adidas</label>
              <input
                type="radio"
                name="marcas"
                value="fila"
                id="fila"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="fila">Fila</label>
              <input
                type="radio"
                name="marcas"
                value="puma"
                id="puma"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="puma">Puma</label>
              <input
                type="radio"
                name="marcas"
                value="casaideas"
                id="casaideas"
                onChange={handleInputChangeMarca}
              />
              <label htmlFor="casaideas">Casaideas</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="send-filter"
            variant="primary"
            onClick={sendFilter}
          >
            CONTINUAR
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuMobile;
