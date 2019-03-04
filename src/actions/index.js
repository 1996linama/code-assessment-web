import shop from "../api/shop";
import * as types from "../constants/ActionTypes";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

const removeFromCartUnsafe = (productId, productQuantity) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  productQuantity
});

const updateCartUnsafe = (productId, productQuantity, changeQuantity) => ({
  type: types.UPDATE_CART,
  productId,
  productQuantity,
  changeQuantity
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const removeFromCart = (productId, productQuantity) => (
  dispatch,
  getState
) => {
  dispatch(removeFromCartUnsafe(productId, productQuantity));
};

export const updateCart = (productId, productQuantity, changeQuantity) => (
  dispatch,
  getState
) => {
  dispatch(updateCartUnsafe(productId, productQuantity, changeQuantity));
};

export const toggleCartModal = () => (dispatch, getState) => {
  dispatch({
    type: types.TOGGLE_CART
  });
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};
