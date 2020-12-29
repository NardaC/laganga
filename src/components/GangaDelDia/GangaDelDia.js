import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import axios from 'axios';

import "./GangaDelDia.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clienteAxiosBusinessLocal from "../config/axiosBusinessLocal";
import PreloaderCards from "../preloader/PreloaderCards"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 991 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const GangaDelDia = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProductsWeek = async () => {
    await clienteAxiosBusinessLocal.get("/get-promotion/new/user")
      .then((res) => {
        if (res.data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setProducts([]);
        } else {
          setProducts(res.data.nuevasPromociones);
        }

        setLoading(false);
      })
      .catch((e) => {
        console.log(e, "error");
      })
  };

  useEffect(() => {
    if (isLoading === false) {
      setLoading(true);
    }
    getProductsWeek();
  }, []);

  return (
    <div className="margin-box">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Ofertas de la Semana</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      {
        isLoading &&
        <PreloaderCards />
      }
      {
        !isLoading &&
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2800}
          deviceType={props.deviceType}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={false}
          draggable={false}
          showDots={false}
        >
          {products.map((product, index) => (
            <div className="item-carousel" key={index}>

              <Item product={product} products={products} addInterest={props.addInterest} />

            </div>
          ))}
        </Carousel>
      }
    </div >
  );
};

export default GangaDelDia;
