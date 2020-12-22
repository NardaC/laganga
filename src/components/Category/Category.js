import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Item from "./../Item/Item"
import { useParams } from "react-router-dom";
import "./category.css"
import clienteAxiosBusiness from "../config/axiosBusiness";
import clienteAxiosBusinessLocal from "../config/axiosBusinessLocal"

const Category = () => {
    const [filterCategoriesMarca, setfilterCategoriesMarca] = useState([]);
    const { category } = useParams();
    const { marca } = useParams();



    const getProductsDay = async () => {
        await clienteAxiosBusinessLocal.get(`/filterCategoryMarca/${category}&${marca}`)
        .then((res) => {
            if(res.data.MensajeRespuesta === "NO EXISTEN DATOS" ){
                setfilterCategoriesMarca([]);
            } else {
                setfilterCategoriesMarca(res.data.promocionesFilterCategoriaMarca); 
        }
            // setLoading(false);
        })
        .catch((e) => {
            console.log(e, "error");
        });
    };

    useEffect(() => {
        getProductsDay();


    }, [category, marca]);

    return (
        <Container className="container-ganga margin-box">
            <div className="box-category">
                <h4 className="title-ganga">Categoría: {category} {marca}</h4>
            </div>
            <Row className="justify-content-md-center ">
                {filterCategoriesMarca.map(
                    (product) => (
                        <Item product={product} key={product._id} />
                    )
                )}
            </Row>
        </Container>
    )
}

export default Category