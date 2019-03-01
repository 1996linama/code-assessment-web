import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  UPDATE_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
    case REMOVE_FROM_CART:
      return state.filter((value) => {
        return value !== action.productId
      })
    case UPDATE_CART:
      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  const { changeQuantity } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1 //adding one into the cart
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        [productId]: 0 // setting quantity to 0
      }
    case UPDATE_CART:
      return {
        ...state,
        [productId]: action.changeQuantity //currently remains the same. BUT we want to increase or decrease based on desired quantity
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
