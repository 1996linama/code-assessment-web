import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { Modal } from "react-bootstrap"

const CartItem = ({
  product,
  maxInventory,
  onRemoveFromCartClicked,
  onUpdateCartClicked
}) => {
  let quantityAvailable = [];

  for (let i = 1; i <= maxInventory; i++) {
    quantityAvailable.push(i);
  }

  return (
    <div><Product
        productTitle={product.productTitle}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
      <select onChange={onUpdateCartClicked} value={product.quantity}>
        {quantityAvailable.map((num) =>
        <option value={num}>{num}</option>)}
      </select>{" "}
      <button onClick={onRemoveFromCartClicked}>Remove</button>
      </div>
  );
};

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
