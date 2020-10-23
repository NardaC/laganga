import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./ItemSpecific.css";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import banner from "../../images/banner/banner-bottom.png";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PromoSimilar from "../PromoSimilar/PromoSimilar";

const ItemSpecific = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    //const res = await axios.get(`http://localhost:3000/products/${productId}`);
    const res = await axios.get(
      `https://la-ganga-api.herokuapp.com/products/${productId}`
    );
    setproduct(res.data.product);
    //setCategory(res.data.product.categoria);
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <Container className="pt-4 box-home container-ganga fade-in animated">
      <h4 className="title-ganga title-especific">{product.nombre}</h4>
      <div className="box-details margin-box">
        <figure className="figure-product-especific">
          <img src={product.imagenURL} alt="" className="w-100" />
          <div className="grup-btn-especific">
            <div className="btn-cirle-especific">
              <FontAwesomeIcon
                icon={faShareAlt}
                className="btn-share-especific"
              />
            </div>
            <div className="btn-cirle-especific">
              <FontAwesomeIcon icon={faHeart} className="btn-like-especific" />
            </div>
          </div>
          {product.tipoDescuento === "freeShipping" ? (
            <div className="box-tag-offer-especific">
              <div className="box-free-shipping">
                <div className={
                  "letter-free" + " " + "letter-free-cl-" + product.categoria
                }>free</div>
                <div className={
                  "box-letter-free" +
                  " " +
                  "box-letter-free-bg-" +
                  product.categoria
                }>shipping</div>
              </div>
            </div>
          ) : product.tipoDescuento === "3x2" ? (
            <div className="box-tag-offer-especific">
              <div className={"box-x" + " " + "box-x-" + product.categoria}>3x2</div>
            </div>
          ) : (
            <div className="box-tag-offer-especific">
              <div
              className={
                "box-porcent" + " " + "box-porcent-" + product.categoria
              }
            >
              -{product.descuento}%
            </div>
            </div>
          )}
          <img src={product.imagenMarcaURL} alt="" className="marca-especific"/>
        </figure>
        <div></div>
        <div className="box-details-especific">
          <h3 className="title-ganga subtitle-especific">
            {product.descripcion}
          </h3>
          <div className="group-time">
            <FontAwesomeIcon icon={faClock} className="img-clock" />
            <div className="ml-2">5D 4h 1M</div>
          </div>
          <div className="description-especific">{product.descripcion}</div>
          <Button className="btn-ir-web">Ir a la web</Button>
        </div>
      </div>
      <div>
        <div className="box-gangaDelDia margin-box">
          <h1 className="title-producto-similar">Productos similares</h1>
          <PromoSimilar category={product.categoria} />
        </div>
        <Row className="justify-content-md-center ">
          {/*<Item />
          <Item />
          <Item />
          <Item />*/}
        </Row>
      </div>
      <figure className="m-0">
        <img src={banner} alt="banner" className="w-100" />
      </figure>
    </Container>
  );
};

export default ItemSpecific;
