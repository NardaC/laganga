import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

const OfertasDelDia = () => {
  return (
    <Container className="">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Ofertas del día</h1>
      </div>
      <Row className="justify-content-md-center ">
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Container>
  );
};

export default OfertasDelDia;
