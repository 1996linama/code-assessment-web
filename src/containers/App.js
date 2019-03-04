import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import CartLink from "../components/CartLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "../css/custom.css";
import { Container, Col, Row } from "react-bootstrap";

const App = () => (
  <Container fluid className="app">
    <Row>
      <Col>
        <h1>Acme Store</h1>
      </Col>
      <Col className="cart-link-container">
        <CartLink />
      </Col>
    </Row>
    <hr />
    <Row>
      <ProductsContainer />
    </Row>

    <CartContainer />
  </Container>
);

export default App;
