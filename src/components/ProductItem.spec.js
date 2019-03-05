
import { shallow } from 'enzyme'
import React from 'react'
import Product from './Product'
import ProductItem from './ProductItem'
import setupTests from '../setupTests'
import { Button } from 'react-bootstrap'

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find(Button), //Button bootstrap component
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      productTitle: 'Product 1',
      price: {
        value: 9.99,
        currency: 'USD'},
      inventory: 6
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ productTitle: 'Product 1', price: {value: 9.99, currency: 'USD'}, inventory: 6 })
  })

  it('should render Add To Cart message', () => {
    const { button } = setup(productProps)
    expect(button.text()).toMatch(/^Add to cart/)
  })

  it('should not disable button', () => {
    const { button } = setup(productProps)
    expect(button.prop('disabled')).toEqual('')
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(productProps)
    button.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  describe('when product inventory is 0', () => {
    beforeEach(() => {
      productProps.inventory = 0
    })

    it('should render Sold Out message', () => {
      const { button } = setup(productProps)
      expect(button.text()).toMatch(/^Sold Out/)
    })

    it('should disable button', () => {
      const { button } = setup(productProps)
      expect(button.prop('disabled')).toEqual('disabled')
    })
  })
})
