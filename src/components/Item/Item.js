import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Item.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const Item = ({ products, product, addInterest }) => {
  const [text, setText] = useState("");
  const [dataNueva, setDataNueva] = useState([]);
  const [dataOriginal, setDataOriginal] = useState([]);
  const [timeLeft, setTimeLeft] = useState("");
  const [timeDays, setTimeDays] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [agotadoProduct, setAgotadoProduct] = useState("");
  const [timeSeconds, setTimeSeconds] = useState(0);
  const dateFuture = "2020/12/01";
  // console.log(products)
  React.useEffect(() => {

    let arrayMeInteresa = JSON.parse(localStorage.getItem("arrayInterestLocal"));
    
    console.log(arrayMeInteresa,"arrayMeInteresa")
    // let suma = 0
    for ( let i = 0; i < arrayMeInteresa.length; i++) {
      if (product.promocion._id === arrayMeInteresa[i].promocion._id) {
        product.promocion.liked = true
      } 
    }
    // localStorage.setItem("arrayInterestLocal", JSON.stringify(arrayInterest));
    // console.log(arrayMeInteresa, "array")y
    // console.log(product, "editado :)")
    // calculateTimeLeft(product.fechaFinOferta);
    const fechaFinalInputISOString = new Date(product.promocion.fechaFinOferta).toISOString();
    const fechaFinalInputInstancia = new Date(fechaFinalInputISOString);
    const fechaFinalOutput = new Date(fechaFinalInputInstancia.getTime() + (fechaFinalInputInstancia.getTimezoneOffset() * 60000));
    const fechaInicioInputISOString = new Date(product.promocion.fechaInicioOferta).toISOString();
    const fechaInicioInputInstancia = new Date(fechaInicioInputISOString);
    const fechaInicioOutput = new Date(fechaInicioInputInstancia.getTime() + (fechaInicioInputInstancia.getTimezoneOffset() * 60000));


    if (fechaInicioOutput.getTime() > new Date()) {
      setAgotadoProduct("Promoción por empezar");
    }
    calculateTimeLeft(fechaFinalOutput);
    const timer = setInterval(() => {
      // calculateTimeLeft(product.fechaFinOferta);
      calculateTimeLeft(fechaFinalOutput);
    }, 1000);
    return () => clearTimeout(timer);
  }, [product]);

  const calculateTimeLeft = (dateFuture) => {
    // let year = new Date().getFullYear();
    const difference = +new Date(dateFuture) - +new Date();
    // console.log(difference, "narda")
    // console.log(new Date(dateFuture), "narda1")
    if (difference > 0) {
      setTimeDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setTimeHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setTimeMinutes(Math.floor((difference / 1000 / 60) % 60));
      setTimeSeconds(Math.floor((difference / 1000) % 60));
    } else {
      setAgotadoProduct("Promoción Agotada");
    }
   
  };

  // console.log(new Date(dateFuture).getMonth() )
  // console.log(new Date(dateFuture).getDate() )
  // console.log(new Date(dateFuture).getFullYear() )
  //  console.log(new Date(), "hora")
  //  console.log(new Date(dateFuture) , "hora2")
  //  console.log(new Date(dateFuture) , "hora3")
  //  console.log(new Date(dateFuture).getDate() , "hora4")
  //  console.log(monthDayYear, "hora5")
  //  console.log(new Date('10/17/2020').getTime(), "holitas")
 
  return (
    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3  mb-4">
      <Card className={"border-" + product.promocion.categoria}>
        {/* <div className="tag-offer">
          -{product.descuento}%
        </div> */}

        {product.promocion.tipoDescuento === "freeShipping" ? (
          <div className="box-tag-offer">
            <div className="box-free-shipping">
              <div
                className={
                  "letter-free" + " " + "letter-free-cl-" + product.promocion.categoria
                }
              >
                free
              </div>
              <div
                className={
                  "box-letter-free" +
                  " " +
                  "box-letter-free-bg-" +
                  product.promocion.categoria
                }
              >
                shipping
              </div>
            </div>
          </div>
        ) : product.promocion.tipoDescuento === "2x1" ? (
          <div className="box-tag-offer">
            <div
              className={
                "box-x" + " " + "box-x-" + product.promocion.categoria
              }
            >
              2x1
            </div>
          </div>
        ) : product.promocion.tipoDescuento === "3x2" ? (
          <div className="box-tag-offer">
            <div className={"box-x" + " " + "box-x-" + product.promocion.categoria}>
              3x2
            </div>
          </div>
        ) : product.promocion.tipoDescuento === "otros" ? (
          <div className="box-tag-offer">
            <div
              className={
                "box-x" + " " + "box-x-" + product.promocion.categoria
              }
            >
              {product.promocion.descuentoOtros}
            </div>
          </div>
        ) : (
                  <div className="box-tag-offer">
                    <div
                      className={
                        "box-porcent" + " " + "box-porcent-" + product.promocion.categoria
                      }
                    >
                      -{product.promocion.descuento}%
            </div>
                  </div>
                )}

        <div className="group-btn-like">
          <a>
            <FontAwesomeIcon
              icon={faHeart}
              className={product.promocion.liked ? "btn-like-active" : "btn-like"}
              onClick={() => addInterest(products, product)}
            />
          </a>
        </div>
        <div className="box-img-item">
          <Card.Img variant="top" src={product.imagenes[1].typeImage === "M" ? product.imagenes[1].url : product.imagenes[0].url} />
        </div>
        <a href={"/item-especific/" + product.promocion._id} className="link body-card">
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
            <Card.Title className="title-item">{product.promocion.nombre}</Card.Title>
            <Card.Text className="subtitle-item">
              {`${product.promocion.descripcion.substr(0, 70)}...`}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default Item;
