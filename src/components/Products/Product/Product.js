import React from "react";
import "./Product.css";
import { addToCart } from "../../../actions/action";
import { useDispatch } from "react-redux";

const Product = ({ food }) => {
  const { description, image, name, price } = food;
  let dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addToCart(food));
  };
  return (
    <div className="product">
      <div className="product-info">
        <h3>{name}</h3>
      </div>
      <div className="product-img">
        <img src={image} alt={name} />
      </div>
      <p className="product-description">{description}</p>
      <div className="buy">
        <button onClick={addItemHandler} className="btn">
          Add to cart
        </button>
        <h4>{price}$</h4>
      </div>
    </div>
  );
};

export default Product;
