import React, { useEffect, useState }  from "react";
import Item from "../Item/Item";
import axios from 'axios';

import "./GangaDelDia.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

const GangaDelDia = () => {
  const [products, setProducts] = useState([]);

  const getProductsDay = async () => {
    const res = await axios.get('http://localhost:3000/productsLast24');
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProductsDay();
  }, []);

  return (
    <Container className="">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">La ganga del día</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      <Row className="justify-content-md-center ">
        {products.map((product) => (
          <Item product={product} key={product._id}/>
        ))}
      </Row>
    </Container >
  );
};

export default GangaDelDia;
