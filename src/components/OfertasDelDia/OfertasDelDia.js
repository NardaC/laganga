import axios from "axios";
import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clienteAxiosBusiness from "../config/axiosBusiness";
import Item from "../Item/Item";

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

const OfertasDelDia = (props) => {
  const [products, setProducts] = useState([]);

  const getProductsDay = async () => {
    //const res = await axios.get('http://localhost:3000/productsBiggerDiscount');
    // const res = await axios.get("https://la-ganga-api.herokuapp.com/productsBiggerDiscount");
    const res = await clienteAxiosBusiness.get("/productsBiggerDiscount");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProductsDay();
  }, []);

  return (
    <div className="margin-box">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Ofertas del día</h1>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2500}
        deviceType={props.deviceType}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable={true}
        draggable={false}
        showDots={false}
      >
        {products.map((product) => (
          <div className="item-carousel" key={product._id} >
            <Item product={product}  addInterest={props.addInterest}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OfertasDelDia;
