import React from "react";
import PropTypes from "prop-types";
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
        key={product.id}
        product={product}
        maxInventory={product.inventory + product.quantity}
        onRemoveFromCartClicked={() =>
          removeFromCart(product.id, product.quantity)
        }
        onUpdateCartClicked={(event) => 
          updateCart(product.id,product.quantity,parseInt(event.target.value, 10))
        }
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
