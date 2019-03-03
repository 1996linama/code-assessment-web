import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";

const Product = ({ price, inventory, productTitle }) => (
  <div>
    <Row md="auto">
      <Col>
        <Card.Title>{productTitle}</Card.Title>
      </Col>
      <Col>
        <Card.Text>&#36;{price.value}</Card.Text>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card.Subtitle>
          {inventory ? `${inventory} remaining` : null}
        </Card.Subtitle>
      </Col>
    </Row>
  </div>
);

Product.propTypes = {
  price: PropTypes.shape({
    value: PropTypes.number,
    currency: PropTypes.string
  }),
  inventory: PropTypes.number,
  productTitle: PropTypes.string
};

export default Product;
