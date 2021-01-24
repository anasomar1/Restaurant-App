import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../constants/constants";
export const cartReducer = (cartItems = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (cartItems.includes(action.data)) {
        return cartItems;
      } else {
        return [...cartItems, action.data];
      }
    case REMOVE_FROM_CART:
      return cartItems.filter((cartItem) => action.data.name !== cartItem.name);
    case INCREMENT:
      cartItems.forEach((cartItem) =>
        cartItem.name === action.data.name
          ? cartItem.count > 10
            ? cartItem.count
            : cartItem.count++
          : cartItem.count
      );
      return [...cartItems];
    case DECREMENT:
      cartItems.map((cartItem) =>
        cartItem.name === action.data.name
          ? cartItem.count <= 1
            ? (cartItem.count = 1)
            : cartItem.count--
          : cartItem.count
      );
      return [...cartItems];

    default:
      return cartItems;
  }
};
