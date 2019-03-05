import { combineReducers } from "redux";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";

export default combineReducers({
  cart,
  products
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
export const getCheckoutFailed = state => fromCart.getCheckoutFailed(state.cart);
export const getCartShowing = state => fromCart.getCartShowing(state.cart);

export const getSubtotal = state =>
  getAddedIds(state)
    .reduce(
      (subtotal, id) =>
        subtotal + getProduct(state, id).price.value * getQuantity(state, id),
      0);

export const getTaxes = (state) =>
getAddedIds(state)
.reduce(
  (subtotal, id) =>
    subtotal + getProduct(state, id).price.value * getQuantity(state, id),
  0) * 0.08

export const getTotal = (state) => (getSubtotal(state) + getTaxes(state)).toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));
