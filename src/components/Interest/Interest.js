import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Item from "../Item/Item";
import mujer from "../../images/mujer.png";
import "./interest.css";

const Interest = ({ addInterest }) => {
  const arrayMeInterest = JSON.parse(
    localStorage.getItem("arrayInterestLocal")
  );

  return (
    <Container className="mb-3 margin-box container-ganga">
      {/* <Row className="justify-content-md-center "> */}
        {arrayMeInterest.length == 0 ? (
          <div className="box-mujer-interest">
            <div className="box-gangaDelDia">
              <h1 className="title-ganga">Aún no tienes ofertas favoritas</h1>
            </div>
            <img className="mujer-interest" src={mujer} />
          </div>
        ) : (
          <>
          
            <div className="box-gangaDelDia">
              <h1 className="title-ganga">Promociones que te interesan</h1>
              <h5 className="subtitle-ganga">
                Aprovecha las mejores marcas, con el descuento que tú deseas.
              </h5>
            </div>
            <Row className="justify-content-md-center ">
           { arrayMeInterest.map((product) => (
            <Item
              product={product}
              products={JSON.parse(localStorage.getItem("arrayInterestLocal"))}
              key={product._id}
              addInterest={addInterest}
            />
            ))}
            </Row>

          </>
        )}
      {/* </Row> */}
    </Container>
  );
};

export default Interest;
