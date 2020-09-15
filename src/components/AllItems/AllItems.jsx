import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

const AllItems = () => {
  return (
    <Container className="mb-3">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Todos</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      <Row className="justify-content-md-center ">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Container>
  );
};

export default AllItems;
