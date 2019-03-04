import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import img from "../images/index.jpeg";

const CartItem = ({
  product,
  maxInventory,
  onRemoveFromCartClicked,
  onUpdateCartClicked
}) => (
  <Card>
    <Card.Body>
      <Row>
        <Col md={4} sm={5} xs={5}>
          <Card.Img src={img} />
        </Col>
        <Col md={4} sm={7} xs={7}>
          <Card.Title>{product.productTitle}</Card.Title>
          <Card.Subtitle>&#36;{product.price.value}</Card.Subtitle>

          <Button variant="link" className="remove" onClick={onRemoveFromCartClicked}>
            Remove
          </Button>
        </Col>
        <Col md={4} sm={12} xs={12}>
          <ButtonGroup>
            <Button
              variant="secondary"
              onClick={() => onUpdateCartClicked(product.quantity - 1)}
            >
              -
            </Button>
            <Button variant="text">{product.quantity}</Button>
            <Button
              variant="secondary"
              onClick={() => onUpdateCartClicked(product.quantity + 1)}
              disabled={product.quantity === maxInventory}
            >
              +
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onUpdateCartClicked: PropTypes.func.isRequired
};

export default CartItem;
