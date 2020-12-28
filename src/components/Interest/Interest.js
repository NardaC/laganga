import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Item from "../Item/Item";

const Interest = ({ addInterest }) => {
  return (
    <Container className="mb-3 margin-box container-ganga">
      <div className="box-gangaDelDia">
        <h1 className="title-ganga">Promociones que te interesan</h1>
        <h5 className="subtitle-ganga">
          Aprovecha las mejores marcas, con el descuento que tú deseas.
        </h5>
      </div>
      <Row className="justify-content-md-center ">
        {JSON.parse(localStorage.getItem("arrayInterestLocal")).map((product) =>
           <Item product={product} products={JSON.parse(localStorage.getItem("arrayInterestLocal"))} key={product._id} addInterest={addInterest} />
        
        )}
      </Row>
    </Container>
  );
};

export default Interest;
