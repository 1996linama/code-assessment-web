import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { Button, Card, Col, Row } from "react-bootstrap";
import img from "../images/index.jpeg";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Card>
    <Row md="auto">
      <Col sm={4}>
        <Card.Img src={img} />
      </Col>
      <Col sm={8}>
        <Card.Body>
          <Product
            productTitle={product.productTitle}
            price={product.price}
            inventory={product.inventory}
          />
          <Button
            variant="primary"
            size="sm"
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? "" : "disabled"} >
            {product.inventory > 0 ? "Add to cart" : "Sold Out"}
          </Button>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
