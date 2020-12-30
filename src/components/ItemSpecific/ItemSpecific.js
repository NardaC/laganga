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
import clienteAxiosBusiness from "../config/axiosBusiness";
import clienteAxiosBusinessLocal from "../config/axiosBusinessLocal";

const ItemSpecific = ({ addInterest, products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [interest, setInterest] = useState(false);

  const getProduct = async () => {
    await clienteAxiosBusinessLocal
      .get(`/get-promotion/${productId}`)
      .then((res) => {
        console.log(res.data, "judith °°°-°°°");
        setProduct(res.data[0]);
      })
      .catch((error) => {
        console.log(error, "njkh");
      });
  };

  console.log(productId, "id-ju");
  const arrayLocalStorage = JSON.parse(
    localStorage.getItem("arrayInterestLocal")
  );
  console.log(
    "🚀 ~ file: ItemSpecific.js ~ line 36 ~ ItemSpecific ~  arrayLocalStorage",
    arrayLocalStorage
  );
  useEffect(() => {
    getProduct();
    setInterest(
      arrayLocalStorage.some((item) => item.promocion._id === productId)
    );
  }, [productId]);

  const addInterestEspecific = () => {
    addInterest(products, product);
    window.location.reload();
  };

  return (
    <div>
      {!product ? (
        ""
      ) : (
        <Container className="pt-4 box-home container-ganga fade-in animated">
          <h4 className="title-ganga title-especific">Ver mas detalles:</h4>
          <div className="box-details margin-box">
            <figure className="figure-product-especific">
              <img
                src={
                  product.imagenes[1].typeImage === "O"
                    ? product.imagenes[1].url
                    : product.imagenes[0].url
                }
                alt=""
                className="w-100"
              />
              <div className="grup-btn-especific">
                <div className="btn-cirle-especific">
                  <FontAwesomeIcon
                    icon={faShareAlt}
                    className="btn-share-especific"
                  />
                </div>
                <div className="btn-cirle-especific">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={
                      interest
                        ? "btn-like-especific-active"
                        : "btn-like-especific"
                    }
                    onClick={addInterestEspecific}
                  />
                </div>
             
              </div>
              {product.promocion.tipoDescuento === "freeShipping" ? (
                <div className="box-tag-offer-especific">
                  <div className="box-free-shipping">
                    <div
                      className={
                        "letter-free" +
                        " " +
                        "letter-free-cl-" +
                        product.promocion.categoria
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
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-x" + " " + "box-x-" + product.promocion.categoria
                    }
                  >
                    2x1
                  </div>
                </div>
              ) : product.promocion.tipoDescuento === "3x2" ? (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-x" + " " + "box-x-" + product.promocion.categoria
                    }
                  >
                    3x2
                  </div>
                </div>
              ) : product.promocion.descuentoOtros === "otros" ? (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-x" + " " + "box-x-" + product.promocion.categoria
                    }
                  >
                    {product.promocion.descuentoOtros}
                  </div>
                </div>
              ) : (
                <div className="box-tag-offer-especific">
                  <div
                    className={
                      "box-porcent" +
                      " " +
                      "box-porcent-" +
                      product.promocion.categoria
                    }
                  >
                    -{product.promocion.descuento}%
                  </div>
                </div>
              )}
              <img
                src={
                  product.imagenes[1].typeImage === "M"
                    ? product.imagenes[1].url
                    : product.imagenes[0].url
                }
                alt=""
                className="marca-especific"
              />
            </figure>
            <div></div>
            <div className="box-details-especific">
              <h3 className="title-ganga subtitle-especific">
                {product.promocion.nombre}
              </h3>
              <div className="group-time">
                <FontAwesomeIcon icon={faClock} className="img-clock" />
                <div className="ml-2">5D 4h 1M</div>
              </div>
              <div className="description-especific">
                {product.promocion.descripcion}
                {product.promocion.categoria}
              </div>
              <Button className="btn-ir-web">Ir a la web</Button>
            </div>
          </div>
          <div>
            <div className="box-gangaDelDia ">
              <h1 className="title-producto-similar">Productos similares</h1>
              <PromoSimilar
                addInterest={addInterest}
                products={products}
                category={product.promocion.categoria}
              />
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
      )}
    </div>
  );
};

export default ItemSpecific;
