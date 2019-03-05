import { getTotal, getCartProducts } from './index'

describe('selectors', () => {

  describe('getTotal', () => {
    it('should return price total', () => {
      const state = {
        cart: {
          addedIds: [ 1, 2, 3 ],
          quantityById: {
            1: 4,
            2: 2,
            3: 1
          }
        },
        products: {
          byId: {
            1: {
              id: 1,
              price: {
                value: 1.99,
                currency: 'USD'
              }
            },
            2: {
              id: 1,
              price: {
                value: 4.99,
                currency: 'USD'
              }
            },
            3: {
              id: 1,
              price: {
                value: 9.99,
                currency: 'USD'
              }
            }
          }
        }
      }
      expect(getTotal(state)).toBe("30.16")
    })
  })

  describe('getCartProducts', () => {
    it('should return products with quantity', () => {
      const state = {
        cart: {
          addedIds: [ 1, 2, 3 ],
          quantityById: {
            1: 4,
            2: 2,
            3: 1
          }
        },
        products: {
          byId: {
            1: {
              id: 1,
              price: 1.99
            },
            2: {
              id: 1,
              price: 4.99
            },
            3: {
              id: 1,
              price: 9.99
            }
          }
        }
      }

      expect(getCartProducts(state)).toEqual([
        {
          id: 1,
          price: 1.99,
          quantity: 4
        },
        {
          id: 1,
          price: 4.99,
          quantity: 2
        },
        {
          id: 1,
          price: 9.99,
          quantity: 1
        }
      ])
    })
  })
})
