import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Item from "./../Item/Item"
import { useParams } from "react-router-dom";
import "./category.css"


const Category = () => {
    const [filterCategoriesMarca, setfilterCategoriesMarca] = useState([]);
    const {category} = useParams();
    const {marca} = useParams();
  

    const getProductsDay = async () => {
        //const res = await axios.get('http://localhost:3000/products');
        // if(category!=="" &&  marca!==""  ){
            // if(category===undefined){
            //     const res = await axios.get(`https://la-ganga-api.herokuapp.com/filterCategoryMarca/category=""&marca=${marca}`);
            // return    setfilterCategoriesMarca(res.data.categoriaYmarca);
            // }
            // if(marca===undefined){
                const res = await axios.get(`https://la-ganga-api.herokuapp.com/filterCategoryMarca/${category}&${marca}`);
                setfilterCategoriesMarca(res.data.categoriaYmarca);
            //     const res = await axios.get(`https://la-ganga-api.herokuapp.com/filterCategoryMarca/category=${category}&marca=""`);
            //  return    setfilterCategoriesMarca(res.data.categoriaYmarca);
            // }

            // const res = await axios.get(`https://la-ganga-api.herokuapp.com/filterCategoryMarca/${category ? category : " "}&${marca ? marca : " "}`);
            
            // setfilterCategoriesMarca(res.data.categoriaYmarca);
            // console.log(res.data, "Homer12")
            console.log(category, "category");
            console.log(marca, "marca")
        
        // } else  if( marca!=="" ){
            // const res = await axios.get(`https://la-ganga-api.herokuapp.com/filterMarca/Adidas`);
            // setfilterCategoriesMarca(res.data.marca);
            //   console.log(res.data, "nardaMarca")
        // }else if  (category!==""){
        //     const res = await axios.get(`https://la-ganga-api.herokuapp.com/filterCategory/${category}`);
        //     setfilterCategoriesMarca(res.data.category);
        //     console.log(res.data, "narda")
        // }
    };

    useEffect(() => {
        getProductsDay();
       

    },[category,marca]);

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