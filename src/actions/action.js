import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  CALCULATE_TOTAL,
} from "../constants/constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const incrementCounter = (data) => {
  return {
    type: INCREMENT,
    data,
  };
};
export const decrementCounter = (data) => {
  return {
    type: DECREMENT,
    data,
  };
};

export const calculateTotal = (data) => {
  return {
    type: CALCULATE_TOTAL,
    data,
  };
};
