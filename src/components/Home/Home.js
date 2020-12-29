import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Home.css";
import Container from "react-bootstrap/Container";
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import GangaDelDia from '../GangaDelDia/GangaDelDia';
import OfertasDelDia from '../OfertasDelDia/OfertasDelDia';
import AllItems from '../AllItems/AllItems';
import banner from "../../images/banner/banner-bottom.png";

const Home = ({ products, addInterest }) => {
    console.log(products, "productos:)1")
    return (
        <Container className="container-ganga box-home fade-in animated">
            <CarouselBanner />
            <OfertasDelDia addInterest={addInterest} />
            <GangaDelDia addInterest={addInterest} />
            <figure className="m-0">
                <img src={banner} alt="banner" className="w-100" />
            </figure>
            <AllItems products={products} addInterest={addInterest} />
        </Container>
    )
}

export default Home
