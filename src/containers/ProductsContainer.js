import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
