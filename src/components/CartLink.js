import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getCartProducts } from "../reducers";
import { toggleCartModal } from "../actions";

const CartLink = ({ products, toggleCartModal }) => {
  let cartQuantity = 0;
  products.forEach(product => {
    cartQuantity += product.quantity;
  });

  return (
    <Button variant="link" onClick={toggleCartModal}>
      <span className="fa fa-shopping-cart" />{" "}
      {cartQuantity === 0 ? `Your cart is empty` : cartQuantity}
    </Button>
  );
};

CartLink.propTypes = {
  products: PropTypes.array
};

const mapStateToProps = state => ({
  products: getCartProducts(state)
});

export default connect(
  mapStateToProps,
  { toggleCartModal }
)(CartLink);
