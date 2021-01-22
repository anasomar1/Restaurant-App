import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/constants";

export const cartReducer = (cartItems = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...cartItems, action.data];
    case REMOVE_FROM_CART:
      return cartItems.filter((cartItem) => action.data.name !== cartItem.name);
    default:
      return cartItems;
  }
};
