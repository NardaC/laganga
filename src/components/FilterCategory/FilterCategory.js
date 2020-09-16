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

const FilterCategory = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <figure>
                                <img src={categoryRopa} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryDeportes} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryTecnologia} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryCalzado} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryHogar} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryJuguetes} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryElectroHogar} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryBelleza} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryNuevos} alt="banner" className="w-20" />
                            </figure>
                            <figure>
                                <img src={categoryOficina} alt="banner" className="w-20" />
                            </figure>
                        </div>
                    </div>
                    <div className="box-filter">
                        <h5>MARCAS</h5>
                        <hr />
                        <div>
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
                        </div>
                        <div className="box-marcas">
                        <Button variant="dark">ADIDAS</Button>
                        <Button variant="dark">FILA</Button>
                        <Button variant="dark">PUMA</Button>
                        <Button variant="dark">TOMMY HILFIGER</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                   
                    <button className="btn-category" variant="primary" onClick={handleClose}>
                        CONTINUAR
          </button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default FilterCategory;
