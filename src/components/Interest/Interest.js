import React from 'react';
import Row from "react-bootstrap/Row";
import Item from "../Item/Item";

const Interest = ({addInterest}) => {
    return (
        <div className="mb-3 margin-box">
            <div className="box-gangaDelDia">
                <h1 className="title-ganga">Promociones que te interesan</h1>
                <h5 className="subtitle-ganga">
                    Aprovecha las mejores marcas, con el descuento que tú deseas.
                 </h5>
            </div>
            <Row className="justify-content-md-center ">
                {JSON.parse(localStorage.getItem("arrayInterestLocal")).map((product) => (
                    <Item product={product} key={product._id} addInterest={addInterest} />
                ))}
            </Row>
        </div>
    )
}

export default Interest
