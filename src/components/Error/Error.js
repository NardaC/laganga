import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import error from "../../images/error.svg";
import "./Error.css";

const Error = () => {
  return (
    <Container className="container-ganga fade-in animated ">
      <div className="bg-error">
        <div className="img-bg-error">
          <img src={error} className="img-error" />
        </div>
      </div>
    </Container>
  );
};

export default Error;
