import axios from "axios";
import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

const AllItems = ({products, addInterest, like}) => {

  return (
    <div className="mb-3 margin-box">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Todos</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      <Row className="justify-content-md-center ">
        {products.map((product) => (
          <Item product={product} key={product._id} addInterest={addInterest} like= {like} />
        ))}
      </Row>
    </div>
  );
};

export default AllItems;
