import React, { useState } from "react";
import "./filterCategory.css";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import categoryRopa from "./../../images/categoria-ropa.png";
import categoryDeportes from "./../../images/categoria-deportes.png";
import categoryTecnologia from "./../../images/categoria-tecnologia.png";
import categoryCalzado from "./../../images/categoria-calzado.png";
import categoryHogar from "./../../images/categoria-hogar.png";
import categoryJuguetes from "./../../images/categoria-juguetes.png";
import categoryElectroHogar from "./../../images/categoria-electrohogar.png";
import categoryBelleza from "./../../images/categoria-belleza.png";
import categoryNuevos from "./../../images/categoria-nuevos.png";
import categoryOficina from "./../../images/categoria-oficina.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const FilterCategory = () => {
    const [show, setShow] = useState(false);
    const [valueCategory, setValueCategory] = useState("");
    const [valueMarca, setValueMarca] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();
    const filterCategoryRopa = () => {
        // history.push("/category/ropa");
        // handleClose();
    };
    const filterCategoryDeporte = () => {
        history.push("/category/deporte");
        handleClose();
    };
    const filterCategoryTecnologia = () => {
        history.push("/category/tecnologia");
        handleClose();
    };
    const filterCategoryCalzado = () => {
        history.push("/category/calzado");
        handleClose();
    };
    const filterCategoryHogar = () => {
        history.push("/category/hogar");
        handleClose();
    };
    const filterCategoryJuguetes = () => {
        history.push("/category/juguete");
        handleClose();
    };
    const filterCategoryElectroHogar = () => {
        history.push("/category/electroHogar");
        handleClose();
    };
    const filterCategoryBelleza = () => {
        history.push("/category/belleza");
        handleClose();
    };
    const filterCategoryOficina = () => {
        history.push("/category/escolarOficina");
        handleClose();
    };
    const filterCategoryNuevos = () => {
        history.push("/category/nuevo");
        handleClose();
    };
    const sendFilter = (e) => {
        history.push(`/category/${valueCategory} ${valueMarca}`);
        setValueCategory("");
        setValueMarca("");
        handleClose()

    }
    const handleInputChangeCategory = (e) => {
        setValueCategory(e.target.value);
    }
    const handleInputChangeMarca = (e) => {
        setValueMarca(e.target.value);
    }
    console.log(valueCategory, "juju")
    console.log(valueMarca, "jmarca")
    return (
        <Container className="container-ganga">
            <div className="fixed-filter" onClick={handleShow}>
                <p>CATEGORIAS</p>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="box-filter">
                        <h5>CATEGORIAS</h5>
                        <hr />
                        <div className="icon-category">
                            <input type="radio" id="category_ropa" value="ropa" name="category" onChange={handleInputChangeCategory} />
                            <label className="card-category ropa" htmlFor="category_ropa">
                                {/* <figure className="" onClick={filterCategoryRopa}>
                                    <img src={categoryRopa} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_deporte" value="deporte" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category deporte"
                                htmlFor="category_deporte"
                            >
                                {/* <figure className="" onClick={filterCategoryDeporte}>
                                    <img src={categoryDeportes} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_tecnologia" value="tecnologia" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category tecnologia"
                                htmlFor="category_tecnologia"
                            >
                                {/* <figure className="" onClick={filterCategoryTecnologia}>
                                    <img src={categoryTecnologia} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_calzado" value="calzado" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category calzado"
                                htmlFor="category_calzado"
                            >
                                {/* <figure className="" onClick={filterCategoryCalzado}>
                                    <img src={categoryCalzado} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_hogar" value="hogar" name="category" onChange={handleInputChangeCategory} />
                            <label className="card-category hogar" htmlFor="category_hogar">
                                {/* <figure className="" onClick={filterCategoryHogar}>
                                    <img src={categoryHogar} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_juguetes" value="juguete" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category juguetes"
                                htmlFor="category_juguetes"
                            >
                                {/* <figure className="" onClick={filterCategoryJuguetes}>
                                    <img src={categoryJuguetes} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_electroHogar" value="electroHogar" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category electroHogar"
                                htmlFor="category_electroHogar"
                            >
                                {/* <figure className="" onClick={filterCategoryElectroHogar}>
                                    <img src={categoryElectroHogar} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_belleza" value="belleza" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category belleza"
                                htmlFor="category_belleza"
                            >
                                {/* <figure className="" onClick={filterCategoryBelleza}>
                                    <img src={categoryBelleza} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_nuevos" value="nuevo" name="category" onChange={handleInputChangeCategory} />
                            <label className="card-category nuevos" htmlFor="category_nuevos">
                                {/* <figure className="" onClick={filterCategoryNuevos}>
                                    <img src={categoryNuevos} alt="banner" className="w-70" />
                                </figure> */}
                            </label>
                            <input type="radio" id="category_oficina" value="escolarOficina" name="category" onChange={handleInputChangeCategory} />
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
                            <input type="radio" name="marcas" value="adidas" id="adidas" onChange={handleInputChangeMarca} />
                            <label htmlFor="adidas">Adidas</label>
                            <input type="radio" name="marcas" value="fila" id="fila" onChange={handleInputChangeMarca} />
                            <label htmlFor="fila">Fila</label>
                            <input type="radio" name="marcas" value="puma" id="puma" onChange={handleInputChangeMarca} />
                            <label htmlFor="puma">Puma</label>
                            <input type="radio" name="marcas" value="casaideas" id="casaideas" onChange={handleInputChangeMarca} />
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
        </Container>
    );
};

export default FilterCategory;
