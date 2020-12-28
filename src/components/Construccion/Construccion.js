import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import "./Construccion.css";

import bg from "../../images/pagina-mantenimiento.png";
const Construccion = () => {
  return (
    <div className="bg-mantenimiento">
      <div className="img-bg">
        <h5 className="title-mantenimento">Página en mantenimiento</h5>
        <div className="div-btn-mantenimiento"> 
        <Link className="btn-matenimiento">Ir a la página de inicio</Link>

        </div>
      </div>
    </div>
  );
};

export default Construccion;
