import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Modal, Button } from "react-bootstrap";

const Cart = ({ products, total, removeFromCart, updateCart }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <CartItem
        key={product.id}
        product={product}
        maxInventory={product.inventory + product.quantity}
        onRemoveFromCartClicked={() =>
          removeFromCart(product.id, product.quantity)
        }
        onUpdateCartClicked={event =>
          updateCart(
            product.id,
            product.quantity,
            parseInt(event.target.value, 10)
          )
        }
      />
    ))
  ) : (
    <Modal.Body>
      <em>Please add some products to cart.</em>
    </Modal.Body>
  );

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title> Your Cart </Modal.Title>
      </Modal.Header>
      <div>{nodes}</div>
    </div>
  );
};
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string
};

export default Cart;
