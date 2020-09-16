import React from 'react'
import "./Home.css"
import Container from "react-bootstrap/Container";
import CarouselBanner from '../CarouselBanner/CarouselBanner'
import GangaDelDia from '../GangaDelDia/GangaDelDia'
import OfertasDelDia from '../OfertasDelDia/OfertasDelDia'
import AllItems from '../AllItems/AllItems'
import banner from "../../images/banner/banner-bottom.png"

const Home = () => {
    return (
        <Container className="container-ganga box-home">
            <CarouselBanner/>
            <GangaDelDia/>
            <OfertasDelDia/>
            <AllItems/>
            <figure>
                <img src={banner} alt="banner" className="w-100"/>
            </figure>
        </Container>
    )
}

export default Home
