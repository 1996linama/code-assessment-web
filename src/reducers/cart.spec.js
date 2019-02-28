import cart from './cart'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: [],
      quantityById: {}
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_REQUEST action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual(initialState)
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(cart({}, { type: 'CHECKOUT_FAILURE', cart: 'cart state' })).toEqual('cart state')
    })

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
        addedIds: [1],
        quantityById: { 1: 1 }
      })
    })

    describe('when product is already in cart', () => {
      const initialState = {
        addedIds: [1, 2],
        quantityById: { 1: 1, 2: 1}
      }

      it('should handle ADD_TO_CART action', () => {

        expect(cart(initialState, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 2 }
        })
      })


      it('should handle REMOVE_FROM_CART action', () => {
        expect(cart(initialState, { type: 'REMOVE_FROM_CART', productId: 1, productQuantity: 1 })).toEqual({
          addedIds: [2],
          quantityById: { 1: 0 , 2: 1 }
        })
      })
    })
  })
})
