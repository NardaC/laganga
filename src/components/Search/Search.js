import React from "react";
import { Container, Row } from "react-bootstrap";
import "./search.css";
import Item from "./../Item/Item";
import { useParams } from "react-router-dom";

const Search = ({ filterSearch }) => {
<<<<<<< HEAD
    let { searchWords } = useParams();
    console.log(JSON.parse(localStorage.getItem("searchFilterLocalStorage")))
    return (
        <Container className="container-ganga margin-box" >
            <div className="box-search">
                <h4>Resultados de búsqueda: "{searchWords}"</h4>
            </div>
            {
                JSON.parse(localStorage.getItem("searchFilterLocalStorage")).length !== 0 ? <Row className="justify-content-md-center ">
                    {JSON.parse(localStorage.getItem("searchFilterLocalStorage")).map((product) => (
                        <Item product={product} key={product._id} />
                    ))}
                </Row> : <p>No se encontraron resultados</p>}
=======
  let { searchWords } = useParams();
  console.log(JSON.parse(localStorage.getItem("searchFilterLocalStorage")));
  console.log(filterSearch, "judith13");
  return (
    <Container className="container-ganga margin-box">
      <div className="box-search">
        <h4>Resultados de búsqueda: "{searchWords}"</h4>
      </div>
      {JSON.parse(localStorage.getItem("searchFilterLocalStorage")).length !==
      0 ? (
        <Row className="justify-content-md-center ">
          {JSON.parse(localStorage.getItem("searchFilterLocalStorage")).map(
            (product) => (
              <Item product={product} key={product._id} />
            )
          )}
        </Row>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </Container>
  );
};
>>>>>>> 05e2cabe1a5a7a684521d33231b3d3d5772b712f

export default Search;
