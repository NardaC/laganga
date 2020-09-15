import React from "react";

import Carousel from "react-bootstrap/Carousel";
import banner1M from "../../images/banner/banner1-mobile.png";
import banner2M from "../../images/banner/banner2-mobile.png";
import banner3M from "../../images/banner/banner3-mobile.png";
import banner1D from "../../images/banner/banner1-desktop.png";
import banner2D from "../../images/banner/banner2-desktop.png";
import banner3D from "../../images/banner/banner3-desktop.png";

const CarouselBanner = () => {
  const width = window.innerWidth;
  const breakpoint = 768;
  return (
    <>
      <Carousel>
        <Carousel.Item>
          {width < breakpoint ? (
            <img className="d-block w-100" src={banner1M} alt="First slide" />
          ) : (
            <img className="d-block w-100" src={banner1D} alt="First slide" />
          )}
        </Carousel.Item>
        <Carousel.Item>
          {width < breakpoint ? (
            <img className="d-block w-100" src={banner2M} alt="Second slide" />
          ) : (
            <img className="d-block w-100" src={banner2D} alt="Second slide"  />
          )}
        </Carousel.Item>
        <Carousel.Item>
          {width < breakpoint ? (
            <img className="d-block w-100" src={banner3M} alt="Third slide" />
          ) : (
            <img className="d-block w-100" src={banner3D} alt="Third slide" />
          )}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselBanner;
