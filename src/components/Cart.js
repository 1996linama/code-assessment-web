import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import CartItem from "./CartItem";

const Cart = ({
  products,
  total,
  onCheckoutClicked,
  removeFromCart,
  updateCart
}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <CartItem
        product={product}
        onRemoveFromCartClicked={() =>
          removeFromCart(product.id, product.quantity)
        }
        onUpdateCart={(event) => {
          !Number.isInteger(event.target.value) &&
            alert("Please enter a valid quantity.");
          product.inventory + product.quantity >= event.target.value
            ? updateCart(
                product.id,
                product.quantity,
                parseInt(event.target.value, 10)
              )
            : alert("Requested quantity is unavailable.");
        }}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button
        id="checkout"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
