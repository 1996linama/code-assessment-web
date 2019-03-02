import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, productTitle }) => (
  <div>
    {productTitle} - &#36;{price.value}{inventory ? ` x ${inventory}` : null} 
  </div>
)

Product.propTypes = {
  price: PropTypes.shape({
    value: PropTypes.number,
    currency: PropTypes.string,
  }),
  inventory: PropTypes.number,
  productTitle: PropTypes.string
}

export default Product
