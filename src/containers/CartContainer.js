import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import { getTotal, getCartProducts, getCartShowing } from "../reducers";
import { removeFromCart, updateCart, toggleCartModal } from "../actions";
import Cart from "../components/Cart";
import { Modal, Button } from "react-bootstrap";

const CartContainer = ({
  products,
  total,
  isCartShowing,
  checkout,
  removeFromCart,
  updateCart,
  toggleCartModal
}) => (
  <Modal size="lg" show={isCartShowing} onHide={toggleCartModal}>
    <Modal.Body>
      <Cart
        products={products}
        total={total}
        removeFromCart={removeFromCart}
        updateCart={updateCart}
      />
      {products.length > 0 ? (
        <div>
          <p>Total: &#36;{total}</p>
          <Button id="checkout" onClick={() => checkout(products)}>
            Checkout
          </Button>
        </div>
      ) : null}
    </Modal.Body>
  </Modal>
);

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
  isCartShowing: getCartShowing(state)
});

export default connect(
  mapStateToProps,
  { checkout, removeFromCart, updateCart, toggleCartModal }
)(CartContainer);
