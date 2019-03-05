import cart from "./cart";

describe("reducers", () => {
  describe("cart", () => {
    const initialState = {
      addedIds: [],
      isCartShowing: false,
      quantityById: {}
    };

    it("should provide the initial state", () => {
      expect(cart(undefined, {})).toEqual(initialState);
    });

    it("should handle CHECKOUT_REQUEST action", () => {
      expect(cart({}, { type: "CHECKOUT_REQUEST" })).toEqual({
        addedIds: [],
        failed: false,
        isCartShowing: false,
        quantityById: {}
      });
    });

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(cart({}, { type: 'CHECKOUT_FAILURE', cart: {} })).toEqual({failed: true})
    })

    it("should handle ADD_TO_CART action", () => {
      expect(cart(initialState, { type: "ADD_TO_CART", productId: 1 })).toEqual(
        {
          addedIds: [1],
          isCartShowing: false,
          quantityById: { 1: 1 }
        }
      );
    });

    describe("when product is already in cart", () => {
      const initialState = {
        addedIds: [1, 2],
        failed: false,
        isCartShowing: false,
        quantityById: { 1: 1, 2: 1 }
      };

      const multipleQuantityState = {
        addedIds: [1, 2],
        isCartShowing: false,
        quantityById: { 1: 2, 2: 3 }
      };

      it("should handle ADD_TO_CART action", () => {
        expect(
          cart(initialState, { type: "ADD_TO_CART", productId: 2 })
        ).toEqual({
          addedIds: [1, 2],
          isCartShowing: false,
          quantityById: { 1: 1, 2: 2 }
        });
      });

      it("should handle REMOVE_FROM_CART action", () => {
        expect(
          cart(initialState, {
            type: "REMOVE_FROM_CART",
            productId: 1,
            productQuantity: 1
          })
        ).toEqual({
          addedIds: [2],
          isCartShowing: false,
          quantityById: { 1: 0, 2: 1 }
        });
      });

      it("should handle UPDATE_CART action (updating quantity less than the current product quantity)", () => {
        expect(
          cart(multipleQuantityState, {
            type: "UPDATE_CART",
            productId: 1,
            productQuantity: 2,
            changeQuantity: 1
          })
        ).toEqual({
          addedIds: [1, 2],
          isCartShowing: false,
          quantityById: { 1: 1, 2: 3 }
        });
      });

      it("should handle UPDATE_CART action (updating quantity to be more than the current product quantity)", () => {
        expect(
          cart(multipleQuantityState, {
            type: "UPDATE_CART",
            productId: 2,
            productQuantity: 3,
            changeQuantity: 4
          })
        ).toEqual({
          addedIds: [1, 2],
          isCartShowing: false,
          quantityById: { 1: 2, 2: 4 }
        });
      });

      it("should handle UPDATE_CART action when desired quantity is 0 and should also REMOVE item from cart", () => {
        expect(
          cart(multipleQuantityState, {
            type: "UPDATE_CART",
            productId: 1,
            productQuantity: 2,
            changeQuantity: 0
          })
        ).toEqual({
          addedIds: [2],
          isCartShowing: false,
          quantityById: { 1: 0, 2: 3 }
        });
      });
    });
  });
});
