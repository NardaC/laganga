import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./search.css";
import Item from "./../Item/Item"
import {
    useParams
} from "react-router-dom";

const Search = ({ filterSearch }) => {
    let { searchWords } = useParams();
    return (
        <Container className="container-ganga margin-box" >
            <div className="box-search">
                <h4>Resultados de búsqueda: "{searchWords}"</h4>
            </div>
            {
                filterSearch.length !== 0 ? <Row className="justify-content-md-center ">
                    {filterSearch.map((product) => (
                        <Item product={product} key={product._id} />
                    ))}
                </Row> : <p>No se encontraron resultados</p>}

        </Container>
    )
}

export default Search
