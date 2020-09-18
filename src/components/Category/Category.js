import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Item from "./../Item/Item"
import { useParams } from "react-router-dom";


const Category = () => {
    const [products, setProducts] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const { category } = useParams();

    const getProductsDay = async () => {
        //const res = await axios.get('http://localhost:3000/products');
        const res = await axios.get('https://la-ganga-api.herokuapp.com/products');
        setProducts(res.data.products);
    };
    useEffect(() => {
        getProductsDay();
        const filter = products.filter(
            product => product.categoria === "deporte"
        )
        setFilterCategory(filter)
    }, [products]);

    return (
        <Container className="container-ganga margin-box">
            <div className="box-category">
                <h4>Categoría: {category}</h4>
            </div>
            <Row className="justify-content-md-center ">
                { filterCategory.map(
                    (product) => (
                        <Item product={product} key={product._id} />
                    )
                )}
            </Row>
        </Container>
    )
}

export default Category
