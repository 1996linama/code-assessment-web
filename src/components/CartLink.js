import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getCartProducts } from "../reducers";
import { toggleCartModal } from "../actions";

const CartLink = ({ products, toggleCartModal }) => (
  <Button variant="link" onClick={toggleCartModal}>
    <span className="fa fa-shopping-cart" />{" "}
    {products.length === 0 ? `Your cart is empty` : products.length}
  </Button>
);

CartLink.propTypes = {
  products: PropTypes.array
};

const mapStateToProps = state => ({
  products: getCartProducts(state)
});

export default connect(mapStateToProps, {toggleCartModal})(CartLink);
