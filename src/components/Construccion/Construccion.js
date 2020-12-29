import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import mujer from "../../images/mujer.png";

import "./Construccion.css";

import bg from "../../images/pagina-mantenimiento.png";
const Construccion = () => {
  return (
    <Container className="container-ganga fade-in animated ">
      <div className="bg-mantenimiento">
        <div className="img-bg">
          <h5 className="title-mantenimento">Página en mantenimiento</h5>
          <div className="div-btn-mantenimiento">
            <Link to="/" className="btn-matenimiento">Ir a la página de inicio</Link>
          </div>
        <img src={mujer} className="mujer-mantenimiento"/>
          
        </div>
      </div>
    </Container>
  );
};

export default Construccion;
