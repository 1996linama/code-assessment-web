import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Product from './Product'
import CartItem from './CartItem'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    checkoutButton: component.find('#checkout'),
    cartItems: component.find(CartItem),
    em: component.find('em'),
    p: component.find('p')
  }
}

describe('Cart component', () => {
  it('should display total', () => {
    const { p } = setup('76')
    expect(p.text()).toMatch(/^Total: \$76/)
  })

  it('should display add some products message', () => {
    const { em } = setup()
    expect(em.text()).toMatch(/^Please add some products to cart/)
  })

  it('should disable button', () => {
    const { checkoutButton } = setup()
    expect(checkoutButton.prop('disabled')).toEqual('disabled')
  })

  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: {
          value: 9.99,
          currency: 'USD'
        },
        quantity: 1
      }
    ]

    it('should render products', () => {
      const { cartItems } = setup('9.99', product)
      const props = {
        title: product[0].title,
        price: product[0].price,
        quantity: product[0].quantity,
        id: product[0].id
      }

      expect(cartItems.prop('product')).toEqual(props)
    })

    it('should not disable button', () => {
      const { checkoutButton } = setup('9.99', product)
      expect(checkoutButton.prop('disabled')).toEqual('')
    })

    it('should call action on checkout button click', () => {
      const { checkoutButton, actions } = setup('9.99', product)
      checkoutButton.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
