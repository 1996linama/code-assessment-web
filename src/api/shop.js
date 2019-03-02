import $ from "jquery";

const TIMEOUT = 100;

export default {
  getProducts: (cb, timeout) =>
    $.getJSON("http://tech.work.co/shopping-cart/products.json", data => {
      cb(data);
    }),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT)
};
