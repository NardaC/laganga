import axios from "axios";
import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

const OfertasDelDia = () => {
  const [products, setProducts] = useState([]);

  const getProductsDay = async () => {
    const res = await axios.get('http://localhost:3000/productsBiggerDiscount');
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProductsDay();
  }, []);

  return (
    <Container className="">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Ofertas del día</h1>
      </div>
      <Row className="justify-content-md-center ">
        {products.map((product) => (
          <Item product={product} key={product._id}/>
        ))}
      </Row>
    </Container>
  );
};

export default OfertasDelDia;
