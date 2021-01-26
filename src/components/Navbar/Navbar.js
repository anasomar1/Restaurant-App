import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementCounter,
  decrementCounter,
  calculateTotal,
} from "../../actions/action";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const foods = useSelector((state) => state.cartReducer);
  const total = useSelector((state) => state.totalReducer);
  console.log(total);

  const dispatch = useDispatch();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };

  const removeHandler = (food) => {
    dispatch(removeFromCart(food));
  };
  useEffect(() => {
    dispatch(calculateTotal(foods));
  }, [foods, dispatch]);
  return (
    <>
      <nav>
        <div className="logo">
          <h3>Fastelcious</h3>
          <i className="fas fa-utensils"></i>
        </div>
        <ul className={toggle ? "active" : ""}>
          <li>
            <Link onClick={boxHandler} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div
          className="shopping-cart"
          onClick={() => setToggleCart(!toggleCart)}
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="items-count">{foods.length}</span>
        </div>

        <div className="toggle-button">
          <i
            onClick={handleToggle}
            className={toggle ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
      {toggleCart && (
        <div className="items-container">
          <h3>Current Items</h3>

          {foods.map((food) => {
            const { name, price, image, _id, count } = food;
            return (
              <div className="added-item" key={_id.$oid}>
                <img src={image} alt={name} />
                <div className="item-info">
                  <h5>{name}</h5>
                  <h6>{price * count}$</h6>
                  <div className="counter">
                    <button
                      className="counter-btn"
                      onClick={() => dispatch(incrementCounter(food))}
                    >
                      +
                    </button>
                    <p>{count}</p>

                    <button
                      className="counter-btn"
                      onClick={() => dispatch(decrementCounter(food))}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeHandler(food)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
          <h4 className="total">
            Total Price <p>{total}$</p>
          </h4>
          <Link
            to="/checkout"
            className="checkout"
            onClick={() => setToggleCart(false)}
          >
            Checkout
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
