import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import {
  getTotal,
  getCartProducts,
  getCartShowing,
  getCheckoutFailed
} from "../reducers";
import { removeFromCart, updateCart, toggleCartModal } from "../actions";
import Cart from "../components/Cart";
import EmptyCart from "../components/EmptyCart";
import ErrorCart from "../components/ErrorCart";
import { Modal } from "react-bootstrap";

const CartContainer = ({
  products,
  total,
  isCartShowing,
  didCheckoutFail,
  checkout,
  removeFromCart,
  updateCart,
  toggleCartModal
}) => {
  let body = null;
  if (didCheckoutFail) {
    body = <ErrorCart />;
  } else if (products.length === 0) {
    body = <EmptyCart />;
  } else {
    body = (
      <Cart
        products={products}
        total={total}
        removeFromCart={removeFromCart}
        updateCart={updateCart}
        checkout={checkout}
      />
    );
  }
  return (
    <Modal size="lg" show={isCartShowing} onHide={toggleCartModal}>
      <Modal.Header closeButton>
        <Modal.Title> Your Cart </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productTitle: PropTypes.string.isRequired,
      price: PropTypes.shape({
        value: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isCartShowing: getCartShowing(state),
  didCheckoutFail: getCheckoutFailed(state)
});

export default connect(
  mapStateToProps,
  { checkout, removeFromCart, updateCart, toggleCartModal }
)(CartContainer);
