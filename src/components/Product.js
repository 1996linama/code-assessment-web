import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, productTitle }) => (
  <div>
    {productTitle} - &#36;{price.value}{inventory ? ` x ${inventory}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
  inventory: PropTypes.number,
  productTitle: PropTypes.string
}

export default Product
