import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <Container className="container-ganga">
            <footer className="box-footer">
                <div>
                    <h4>Contacto</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatibus voluptatem perspiciatis quis accusamus facilis? Eum inventore nisi eveniet quam sunt aliquam, recusandae expedita, dolor doloribus incidunt et odit quas.</p>
                </div>
                <div>
                    <ul className="style-none-list padding-top-bottom">
                        <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:hola@laganga.com" className="decoration-none-ancla padding-left">hola@laganga.com</a></li>
                        <li><FontAwesomeIcon icon={faPhone} /><a href="tel:+51987654321" className="decoration-none-ancla padding-left">+51 987-654-321</a></li>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /><a className="decoration-none-ancla padding-left">123 Los Robles, Miraflores. Lima - Perú</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="style-none-list social-networks">
                        <li><FontAwesomeIcon icon={faFacebookF} className="icon-social" /></li>
                        <li><FontAwesomeIcon icon={faTwitter} className="icon-social" /></li>
                        <li><FontAwesomeIcon icon={faInstagram} className="icon-social" /></li>
                        <li><FontAwesomeIcon icon={faWhatsapp} className="icon-social" /></li>
                    </ul>

                </div>
            </footer>
        </Container>
    );
};

export default Footer;
