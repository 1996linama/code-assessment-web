import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import setupTests from '../setupTests'


const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component
  }
}

//expects output to match the values, formatting cannot be tested due to ui design
describe('Product component', () => {
  it('should render title and price', () => {
    const { component } = setup({ productTitle: 'Test Product', price: {value: 1.33, currency: 'USD'} })
    expect(component.text()).toBe('Test Product'+'$1.33')
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { component } = setup({ productTitle: 'Test Product', price: {value: 9.99, currency: 'USD'}, inventory: 6 })
      expect(component.text()).toBe('Test Product'+'$9.99'+'6 remaining')
    })
  })
})
