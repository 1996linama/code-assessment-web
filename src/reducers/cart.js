import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  UPDATE_CART,
  TOGGLE_CART
} from "../constants/ActionTypes";

const initialState = {
  addedIds: [],
  quantityById: {},
  isCartShowing: false
};

const cartShowing = (state = initialState.isCartShowing, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      state = !state;
      return state;
    default:
      return state;
  }
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_FROM_CART:
      return state.filter(value => {
        return value !== action.productId;
      });
    case UPDATE_CART:
      if (action.changeQuantity === 0) {
        return state.filter(value => {
          return value !== action.productId;
        });
      }
      return state;
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        [productId]: 0 // sets quantity to 0
      };
    case UPDATE_CART:
      return {
        ...state,
        [productId]: action.changeQuantity
      };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedIds;

export const getCartShowing = state => state.isCartShowing;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        isCartShowing: cartShowing(state.isCartShowing, action)
      };
  }
};

export default cart;
