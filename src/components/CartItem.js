import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const CartItem = ({ product, onRemoveFromCartClicked, onUpdateCart }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      productTitle={product.productTitle} 
      price={product.price}
      quantity={product.quantity}
      key={product.id} />
    
    <input onBlur={onUpdateCart} placeholder="Quantity"/> 
    {' '}
    <button
      onClick={onRemoveFromCartClicked}>X</button>

  </div>

)

CartItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onUpdateCart: PropTypes.func.isRequired
}

export default CartItem
