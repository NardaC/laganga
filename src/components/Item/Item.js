import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const item = ({product}) => {
  return (
    <Link className="col-12 col-sm-4 col-lg-3 mb-4" to={"/item-especific/" + product._id}>
      <Card className={product.categoria == 'deporte' ? 'border-card-red' : product.categoria == 'calzado' ? 'border-card-blue' : 'border-card-green' }>
        <div className="tag-offer">-{product.descuento}% Sale</div>
        <div className="group-btn-like">
          <a href="https://react-bootstrap.netlify.app/components/alerts/#additional-content">
            <FontAwesomeIcon icon={faShareAlt} className="btn-share" />
          </a>
          <a href="https://react-bootstrap.netlify.app/components/alerts/#additional-content">
            <FontAwesomeIcon icon={faHeart} className="btn-like" />
          </a>
        </div>
        <div className="box-img-item">
          <Card.Img variant="top" src={product.imagenMarcaURL} />
        </div>
        <div className="group-time-item">
          <FontAwesomeIcon icon={faClock} />
          <div className="ml-2">5D 4h 1M</div>
        </div>
        <Card.Body>
          <Card.Title className="title-item">{product.nombre}</Card.Title>
          <Card.Text className="subtitle-item">
            {product.descripcion}
          </Card.Text>
          {/* <Button variant="primary">Ver más</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default item;
