import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Home.css";
import Container from "react-bootstrap/Container";
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import GangaDelDia from '../GangaDelDia/GangaDelDia';
import OfertasDelDia from '../OfertasDelDia/OfertasDelDia';
import AllItems from '../AllItems/AllItems';
import banner from "../../images/banner/banner-bottom.png";
import { Helmet } from "react-helmet";
const Home = ({ products, addInterest }) => {
    return (
        <Container className="container-ganga box-home fade-in animated">
            <Helmet>
                <title>La Ganga - Home</title>
                <link rel="canonical" href="https://henribarrett.com/case-of-study" />

                <meta
                    name="description"
                    content="EVE VALKYRIE Play Station 4 compra online con ofertas y descuento en Linio Perú. Encuentra distintos modelos y estrena hoy - CC296EL1FRE7QLPE"
                />
                {/* 
<!-- Google / Search Engine Tags --> */}
                <meta
                    itemprop="name"
                    content="EVE VALKYRIE Play Station 4 | Linio Perú - CC296EL1FRE7QLPE"
                />
                <meta
                    itemprop="description"
                    content="EVE VALKYRIE Play Station 4 compra online con ofertas y descuento en Linio Perú. Encuentra distintos modelos y estrena hoy - CC296EL1FRE7QLPE"
                />
                <meta
                    itemprop="image"
                    content="http://i.linio.com/p/8e694f0c3caf29f0736852b9e3fea933-product.jpg"
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta
                    property="og:url"
                    content="https://henribarrett.com/case-of-study"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="EVE VALKYRIE Play Station 4 | Linio Perú - CC296EL1FRE7QLPE"
                />
                <meta
                    property="og:description"
                    content="EVE VALKYRIE Play Station 4 compra online con ofertas y descuento en Linio Perú. Encuentra distintos modelos y estrena hoy - CC296EL1FRE7QLPE"
                />
                <meta
                    property="og:image"
                    content="http://i.linio.com/p/8e694f0c3caf29f0736852b9e3fea933-product.jpg"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="EVE VALKYRIE Play Station 4 | Linio Perú - CC296EL1FRE7QLPE"
                />
                <meta
                    name="twitter:description"
                    content="EVE VALKYRIE Play Station 4 compra online con ofertas y descuento en Linio Perú. Encuentra distintos modelos y estrena hoy - CC296EL1FRE7QLPE"
                />
                <meta
                    name="twitter:image"
                    content="http://i.linio.com/p/8e694f0c3caf29f0736852b9e3fea933-product.jpg"
                />
            </Helmet>
            <CarouselBanner />
            <GangaDelDia addInterest={addInterest} />
            <OfertasDelDia addInterest={addInterest} />
            <AllItems products={products} addInterest={addInterest} />
            <figure className="m-0">
                <img src={banner} alt="banner" className="w-100" />
            </figure>
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fvolar.org.pe%2Faprendamos%2Fcuidador%2Frutina%2Ftips&layout=button&size=large&appId=673817230042707&width=103&height=28" width="103" height="28" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </Container>
    )
}

export default Home
