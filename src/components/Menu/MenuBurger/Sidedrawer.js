import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import "./MenuBurger.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import cerrar from "../../../images/menu-icons/cerrar-burger.svg";
import inicio from "../../../images/menu-icons/home-burger.svg";
import categoria from "../../../images/menu-icons/categoria-burger.svg";
import favorito from "../../../images/menu-icons/favorito-burger.svg";
import ganga from "../../../images/menu-icons/ganga-burger.svg";
import iniciar from "../../../images/menu-icons/iniciar-burger.svg";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <>
      <nav className={drawerClasses}>
        <ul className="list-sidedraw">
          <div className="box-flecha" onClick={props.ocultarMenuMobile}>
            <figure>
              <img src={cerrar} className="w-100"></img>
            </figure>
          </div>

          <li>
            <NavLink
              to="/"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
              exact={true}
            >
              <img src={inicio} className="w-15 mr-2" />
              Inicio
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/nosotros"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <img src={categoria} className="w-15 mr-2" />
              Categorias
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/interest"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <img src={favorito} className="w-15 mr-2" />
              Favoritos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/en-construccion"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <img src={ganga} className="w-15 mr-2" />
              La ganga de la ganga
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/en-construccion"
              onClick={props.ocultarMenuMobile}
              activeClassName="is-activeHomeMobile"
            >
              <img src={iniciar} className="w-15 mr-2" />
              Iniciar sesión
            </NavLink>
          </li>
          <div className="box-links-mobile">
            <hr className="linea-mobile"/>
            <div className="mt-1">
              <a href="mailto:hola@mycupon.com">
                <FontAwesomeIcon icon={faEnvelope} className="" />
                hola@mycupon.com
              </a>
            </div>
            <div className="mt-1">
              <a href="tel:+51987654321">
                <FontAwesomeIcon icon={faPhone} className="" />
                +51 987-654-321
              </a>
            </div>
            <div className="mt-1">
              <a href="/" >
                <FontAwesomeIcon icon={faFacebookF} className="" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} className="" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} className="" />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faWhatsapp} className="" />
              </a>
            </div>
            <p className="mt-3">
                <a href="/">Términos y Condiciones</a>
              </p>
          </div>
        </ul>
      </nav>
    </>
  );
};
export default withRouter(SideDrawer);
