import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Item.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Item = ({ product, addInterest }) => {
  const [text, setText] = useState("");
  const [dataNueva, setDataNueva] = useState([]);
  const [dataOriginal, setDataOriginal] = useState([]);
  const [timeLeft, setTimeLeft] = useState("");
  const [timeDays, setTimeDays] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [agotadoProduct, setAgotadoProduct] = useState("");
  const [timeSeconds, setTimeSeconds] = useState(0);
  const dateFuture = "10/10/2020";
  React.useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((datos) => {
        setDataOriginal(datos);
      });
    calculateTimeLeft(product.fechaFinOferta);
    const timer = setInterval(() => {
      calculateTimeLeft(product.fechaFinOferta);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const calculateTimeLeft = (dateFuture) => {
    // let year = new Date().getFullYear();
    const difference = +new Date(dateFuture) - +new Date();
    if (difference > 0) {
      setTimeDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setTimeHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setTimeMinutes(Math.floor((difference / 1000 / 60) % 60));
      setTimeSeconds(Math.floor((difference / 1000) % 60));
    } else {
      setAgotadoProduct("Promoción Agotada");
    }
  };

  return (
    <div className="col-12 col-sm-4 col-lg-3 mb-4">
      <Card className={"border-" + product.categoria}>
        {/* <div className="tag-offer">
          -{product.descuento}%
        </div> */}

        {product.tipoDescuento === 'freeShipping' ?
        <div className="box-tag-offer">
          <div className="box-free-shipping">
            <div className="letter-free">free</div>
            <div className="box-letter-free">shipping</div>
          </div>
        </div>
          : product.tipoDescuento === '3x2' ?
        <div className="box-tag-offer">
          <div className="box-x">
            3x2
          </div>
        </div>
        :
        <div className="box-tag-offer">
          <div className="box-porcent">
            -{product.descuento}%
          </div>
        </div>
        }



        <div className="group-btn-like">
          <a>
            <FontAwesomeIcon
              icon={faHeart}
              className={product.like ? "btn-like-active" : "btn-like"}
              onClick={() => addInterest(product)}
            />
          </a>
        </div>
        <div className="box-img-item">
          <Card.Img variant="top" src={product.imagenMarcaURL} />
        </div>
        <a href={"/item-especific/" + product._id} className="link body-card">
          <div className="group-time-item">
            <FontAwesomeIcon icon={faClock} />
            {agotadoProduct === "" ? (
              <div className=" item-chronometer">
                {timeDays}D {timeHours}H {timeMinutes}M
              </div>
            ) : (
              <div className=" item-chronometer">{agotadoProduct}</div>
            )}
          </div>
          <Card.Body>
            <Card.Title className="title-item">{product.nombre}</Card.Title>
            <Card.Text className="subtitle-item">
              {product.descripcion}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default Item;
