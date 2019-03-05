
import { shallow } from 'enzyme';
import React from 'react'
import EmptyCart from './EmptyCart'
import Product from './Product'
import CartItem from './CartItem'

const setup = (total, products = []) => {
  const component = shallow(
    <EmptyCart />
  )

  return {
    component: component,
    em: component.find('em')
  }
}

describe('Empty Cart component', () => {

  it('should display add some products message', () => {
    const { em } = setup()
    expect(em.text()).toMatch(/^Please add some products to your cart./)
  })
})
