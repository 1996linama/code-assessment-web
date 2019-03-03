import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";
import { Container, Col, Row } from "react-bootstrap";

const App = () => (
  <Container fluid className="app">
    <Row>
      <Col>
        <h1>Shopping Cart Example</h1>
      </Col>
      <Col className="cart-link-container">Cart</Col>
    </Row>

    <hr />
    <Row>
      <ProductsContainer />
    </Row>

    <CartContainer />
  </Container>
);

export default App;
