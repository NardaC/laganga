import React, { useEffect, useState }  from "react";
import Item from "../Item/Item";
import axios from 'axios';

import "./GangaDelDia.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clienteAxiosBusiness from "../config/axiosBusiness";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GangaDelDia = (props) => {
  const [products, setProducts] = useState([]);

  const getProductsDay = async () => {
    const res = await clienteAxiosBusiness.get('/productsLast24');
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProductsDay();
  }, []);

  return (
    <div className="margin-box">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">La ganga del día</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
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
            <Item product={product}   products={products}  addInterest={props.addInterest}/>
          </div>
        ))}
      </Carousel>
    </div >
  );
};

export default GangaDelDia;
