import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const Cart = ({ products, total, taxes, subtotal, removeFromCart, updateCart, checkout }) => {
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
        <p id="subtotal">Subtotal: &#36;{Number(subtotal).toFixed(2)}</p>
        <p id="taxes">Taxes: &#36;{Number(taxes).toFixed(2)}</p>
        <hr />
        <p id="total">Total: &#36;{total}</p>

        <Button block id="checkout" onClick={() => checkout(products)}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  subtotal: PropTypes.number,
  taxes: PropTypes.number,
  total: PropTypes.string,
  checkout: PropTypes.func
};

export default Cart;
