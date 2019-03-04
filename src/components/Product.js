import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";

const Product = ({ price, inventory, productTitle }) => (
  <Col>
    <Row>
      <Card.Title>{productTitle}</Card.Title>
      <Card.Text className="price">&#36;{price.value}</Card.Text>
    </Row>
    <Row>
      <Card.Subtitle>
        {inventory ? `${inventory} remaining` : null}
      </Card.Subtitle>
    </Row>
  </Col>
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
