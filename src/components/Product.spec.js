import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

describe('Product component', () => {
  it('should render title and price', () => {
    const { component } = setup({ productTitle: 'Test Product', price: {value: 9.99, currency: 'USD'} })
    expect(component.text()).toBe('Test Product - $9.99')
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { component } = setup({ productTitle: 'Test Product', price: {value: 9.99, currency: 'USD'}, inventory: 6 })
      expect(component.text()).toBe('Test Product - $9.99 x 6')
    })
  })
})
