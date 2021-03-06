import reducer, * as products from './products'
import { shallow } from 'enzyme';

describe('reducers', () => {
  describe('products', () => {
    let state

    describe('when products are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_PRODUCTS',
          products: [
            {
              id: 1,
              title: 'Product 1',
              inventory: 2
            },
            {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ]
        })
      })

      it('contains the products from the action', () => {
        expect(products.getProduct(state, 1)).toEqual({
          id: 1,
          title: 'Product 1',
            inventory: 2
        })
        expect(products.getProduct(state, 2)).toEqual({
          id: 2,
          title: 'Product 2',
            inventory: 1
        })
      })

      it ('contains no other products', () => {
        expect(products.getProduct(state, 3)).toEqual(undefined)
      })

      it('lists all of the products as visible', () => {
        expect(products.getVisibleProducts(state)).toEqual([
          {
            id: 1,
            title: 'Product 1',
            inventory: 2
          }, {
            id: 2,
            title: 'Product 2',
            inventory: 1
          }
        ])
      })

      describe('when an item is added to the cart', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'ADD_TO_CART', productId: 1 })
        })

        it('the inventory is reduced', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              inventory: 1
            }, {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ])
        })

      })

      describe('when an item is removed from the cart', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'REMOVE_FROM_CART', productId: 1 , productQuantity: 2})
        })

        it('the inventory is added back', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              inventory: 4
            }, {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ])
        })

      })


      describe('when an item quantity is updated in the cart, desired quantity is more than current product quantity', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'UPDATE_CART', productId: 1 , productQuantity: 1, changeQuantity: 2 })
        })

        it('the inventory is added back', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              inventory: 1
            }, {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ])
        })

      })

      describe('when an item quantity is updated in the cart, desired quantity is less than current product quantity', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'UPDATE_CART', productId: 1 , productQuantity: 1, changeQuantity: 0 })
        })

        it('the inventory is added back', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              inventory: 3
            }, {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ])
        })

      })

    })
  })
})
