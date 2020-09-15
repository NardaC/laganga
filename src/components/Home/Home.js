import React from 'react'
import "./Home.css"

import CarouselBanner from '../CarouselBanner/CarouselBanner'
import GangaDelDia from '../GangaDelDia/GangaDelDia'
import OfertasDelDia from '../OfertasDelDia/OfertasDelDia'
import AllItems from '../AllItems/AllItems'
import banner from "../../images/banner/banner-bottom.png"

const Home = () => {
    return (
        <div>
            <CarouselBanner/>
            <GangaDelDia/>
            <OfertasDelDia/>
            <AllItems/>
            <figure>
                <img src={banner} alt="banner" className="w-100"/>
            </figure>
        </div>
    )
}

export default Home
