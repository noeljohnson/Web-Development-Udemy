import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

function Loader(){
  const divStyle={
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "inherit",
    "backgroundColor": "white",
  }
  return (
    <div style={divStyle} className="mt-4 mb-4">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
