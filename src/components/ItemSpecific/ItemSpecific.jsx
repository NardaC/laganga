import React from "react";
import { Link } from "react-router-dom";

import "./ItemSpecific.css";

import foto from "../../images/banner/banner1-mobile.png";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";
import banner from "../../images/banner/banner-bottom.png"

const ItemSpecific = () => {
  return (
    <div className="mt-4">
      <h4 className="title-ganga title-especific">titulo de la promo</h4>
      <Container className="box-details">
        <figure className="w-50 p-3">
          <img src={foto} alt="" className="w-100" />
        </figure>
        <div className="box-details-especific">
          <h3 className="title-ganga subtitle-especific">detalles</h3>
          <div className="group-time">
            <FontAwesomeIcon icon={faClock} />
            <div className="ml-2">5D 4h 1M</div>
          </div>
          <div className="description-especific">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            omnis, commodi quaerat quos veniam, voluptatem, modi id debitis
            accusantium ipsa alias odio et! Veniam, quam molestiae est
            laudantium accusamus ipsum?
          </div>
          <Button>Ir a la web</Button>
        </div>
      </Container>
      <Container>
      <div className="box-gangaDelDia">
          <h1 className="title-ganga">Productos similares</h1>
        </div>
        <Row className="justify-content-md-center ">
          <Item />
          <Item />
          <Item />
          <Item />
        </Row>
      </Container>
      <figure>
                <img src={banner} alt="banner" className="w-100"/>
            </figure>
    </div>
  );
};

export default ItemSpecific;
