import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const CartItem = ({ product, onRemoveFromCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      key={product.id} />
    <button
      onClick={onRemoveFromCartClicked}>X</button>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default CartItem
