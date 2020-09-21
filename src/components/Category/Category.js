import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Item from "./../Item/Item"
import { useParams } from "react-router-dom";


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const { category } = useParams();

    const getCategory = async () => {
        //const res = await axios.get('http://localhost:3000/products');
        const res = await axios.get(`https://la-ganga-api.herokuapp.com/category/${category}`);
        setCategories(res.data.categories);
    };
    useEffect(() => {
        getCategory();
        /*const filter = products.filter(
            product => product.categoria === "deporte"
        )
        setFilterCategory(filter)*/
    }, [categories]);

    return (
        <Container className="container-ganga margin-box">
            <div className="box-category">
                <h4>Categoría: {categories}</h4>
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
