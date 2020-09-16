import axios from "axios";
import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

const AllItems = () => {
  const [products, setProducts] = useState([]);

  const getProductsDay = async () => {
    const res = await axios.get('http://localhost:3000/products');
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProductsDay();
  }, []);

  return (
    <div className="mb-3 margin-box container-ganga">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Todos</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      <Row className="justify-content-md-center ">
        {products.map((product) => (
          <Item product={product} key={product._id}/>
        ))}
      </Row>
    </div>
  );
};

export default AllItems;
