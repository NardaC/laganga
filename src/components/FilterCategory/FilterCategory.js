import React, { useState } from "react";
import "./filterCategory.css";
import Container from "react-bootstrap/Container";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import clienteAxiosBusinessLocal from "./../config/axiosBusinessLocal";

const FilterCategory = () => {
    let history = useHistory();
    const [options1, setOptions1] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [show, setShow] = useState(false);
    const [valueCategory, setValueCategory] = useState("category=''");
    const [valueMarca, setValueMarca] = useState("marca=''");
    const handleClose = () => {
        setShow(false);
        setSelectedOption(null)
    };

    const handleShowFilterCategory = () => {
        setShow(true);
        optionsMarca();
    };

    const optionsMarca = async () => {
        await clienteAxiosBusinessLocal
            .get("/marca/get-all/user")
            .then((res) => {
                const dataMarca = res.data;
                const arrayOptions = [];
                dataMarca.forEach((items) => {
                    console.log("items", items);
                    arrayOptions.push({
                        value: items.marca._id,
                        label: items.marca.name,
                        urlImage: items.imagen[0].url,
                    });
                });

                setOptions1(arrayOptions);
            })
            .catch((error) => {
                console.log("****************Error", error);
            });
    };
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setValueMarca(`marca=${selectedOption.label}`);
        console.log(`Option selected:`, selectedOption);
    };
    console.log(`value:`, valueMarca);

    const sendFilter = (e) => {
        e.preventDefault();
        history.push(`/category/${valueCategory}&${valueMarca}`);
        setValueCategory("category=''");
        setValueMarca("marca=''");
        handleClose()

    }
    const handleInputChangeCategory = (e) => {
        setValueCategory(`category=${e.target.value}`);
    }
    // const handleInputChangeMarca = (e) => {
    //     setValueMarca(`marca=${e.target.value}`);
    // }

    return (
        <Container className="container-ganga">
            <div className="fixed-filter" onClick={handleShowFilterCategory}>
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
                            </label>
                            <input type="radio" id="category_deporte" value="deporte" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category deporte"
                                htmlFor="category_deporte"
                            >
                            </label>
                            <input type="radio" id="category_tecnologia" value="tecnologia" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category tecnologia"
                                htmlFor="category_tecnologia"
                            >
                            </label>
                            <input type="radio" id="category_calzado" value="calzado" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category calzado"
                                htmlFor="category_calzado"
                            >
                            </label>
                            <input type="radio" id="category_hogar" value="hogar" name="category" onChange={handleInputChangeCategory} />
                            <label className="card-category hogar" htmlFor="category_hogar">
                            </label>
                            <input type="radio" id="category_juguetes" value="juguete" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category juguetes"
                                htmlFor="category_juguetes"
                            >
                            </label>
                            <input type="radio" id="category_electroHogar" value="electroHogar" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category electroHogar"
                                htmlFor="category_electroHogar"
                            >
                            </label>
                            <input type="radio" id="category_belleza" value="belleza" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category belleza"
                                htmlFor="category_belleza"
                            >
                            </label>
                            <input type="radio" id="category_nuevos" value="nuevo" name="category" onChange={handleInputChangeCategory} />
                            <label className="card-category nuevos" htmlFor="category_nuevos">
                            </label>
                            <input type="radio" id="category_oficina" value="escolarOficina" name="category" onChange={handleInputChangeCategory} />
                            <label
                                className="card-category oficina"
                                htmlFor="category_oficina"
                            >
                            </label>
                        </div>
                    </div>
                    <div className="box-filter">
                        <h5>MARCAS</h5>
                        <hr />
                        <div className="box-marcas">
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                name="marca"
                                options={options1}
                                className="select-marca"
                                placeholder="Selecciona una marca"
                                noOptionsMessage={() => "Cargando marcas"}
                                required
                            />
                            {/* <input type="radio" name="marcas" value="Adidas jashjgjsd" id="adidas" onChange={handleInputChangeMarca} />
                            <label htmlFor="adidas">Adidas</label>
                            <input type="radio" name="marcas" value="fila" id="fila" onChange={handleInputChangeMarca} />
                            <label htmlFor="fila">Fila</label>
                            <input type="radio" name="marcas" value="puma" id="puma" onChange={handleInputChangeMarca} />
                            <label htmlFor="puma">Puma</label>
                            <input type="radio" name="marcas" value="casaideas" id="casaideas" onChange={handleInputChangeMarca} />
                            <label htmlFor="casaideas">Casaideas</label> */}
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
