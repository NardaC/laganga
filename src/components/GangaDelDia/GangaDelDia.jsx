import React from "react";

import "./GangaDelDia.css";

import Item from "../Item/Item";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

const GangaDelDia = () => {
  return (
    <Container className="">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">La ganga del día</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      <Row className="justify-content-md-center ">
        {/* <Col xs={12} md={4} lg={3} xl={3}>
            <Item />
          </Col>
          <Col xs={12} md={4} lg={3} xl={3}>
            <Item />
          </Col>
          <Col xs={12} md={4} lg={3} xl={3}>
            <Item />
          </Col>
          <Col xs={12} md={4} lg={3} xl={3}>
            <Item />
          </Col> */}
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Container >
  );
};

export default GangaDelDia;
