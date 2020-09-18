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
        <Container className="container-ganga box-home fade-in animated">
            <CarouselBanner/>
            <GangaDelDia/>
            <OfertasDelDia/>
            <AllItems/>
            <figure className="m-0">
                <img src={banner} alt="banner" className="w-100"/>
            </figure>
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fvolar.org.pe%2Faprendamos%2Fcuidador%2Frutina%2Ftips&layout=button&size=large&appId=673817230042707&width=103&height=28" width="103" height="28" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </Container>
    )
}

export default Home
