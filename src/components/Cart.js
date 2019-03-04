import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Modal, Button } from "react-bootstrap";

const Cart = ({ products, total, removeFromCart, updateCart, checkout }) => {
  const nodes = products.map(product => (
    <CartItem
      key={product.id}
      product={product}
      maxInventory={product.inventory + product.quantity}
      onRemoveFromCartClicked={() =>
        removeFromCart(product.id, product.quantity)
      }
      onUpdateCartClicked={value =>
        updateCart(product.id, product.quantity, value)
      }
    />
  ));

  return (
    <div>
      {nodes}
      <hr />
      <div>
        <p>Total: &#36;{total}</p>
        <Button block id="checkout" onClick={() => checkout(products)}>
          Checkout
        </Button>
      </div>
    </div>
  );
};
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string
};

export default Cart;
