import React,{useEffect, useState} from "react";

import Carousel from "react-bootstrap/Carousel";
import banner1M from "../../images/banner/banner1-mobile.png";
import banner2M from "../../images/banner/banner2-mobile.png";
import banner3M from "../../images/banner/banner3-mobile.png";
import banner1D from "../../images/banner/banner1-desktop.png";
import banner2D from "../../images/banner/banner2-desktop.png";
import banner3D from "../../images/banner/banner3-desktop.png";
import clienteAxiosBusinessLocal from "../../components/config/axiosBusinessLocal";

const CarouselBanner = () => {
  const width = window.innerWidth;
  const [bannerImage,setBannerImage] = useState([])
  const breakpoint = 768;
  useEffect (()=>{
    getBanner()

  },[])
  const getBanner = async () => {
    await clienteAxiosBusinessLocal
      .get("/banner/get-all/user")
      .then((res) => {
        if (res.data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setBannerImage([]);
        } else {
          setBannerImage(res.data);
          console.log(res.data, "banner");
        }
      })
      .catch((e) => {
        console.log(e, "error:)");
      });
  };
  return (
    <>
      <Carousel>
        {
          bannerImage.map(item => (
            <Carousel.Item>
            {width < breakpoint ? (
              <img className="d-block w-100" src={item.imagen[0].typeImage==="BM" ? item.imagen[0].url : item.imagen[1].url } alt="First slide" />
            ) : (
              <img className="d-block w-100" src={item.imagen[0].typeImage==="BD" ? item.imagen[0].url : item.imagen[1].url } alt="First slide" />
            )}
          </Carousel.Item>
          ))
        }
      
        {/* <Carousel.Item>
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
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default CarouselBanner;
