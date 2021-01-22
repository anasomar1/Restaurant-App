import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/action";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const results = useSelector((addedItems) => addedItems);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };

  const removeHandler = (result) => {
    dispatch(removeFromCart(result));
  };

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
          <span className="items-count">{results.cartReducer.length}</span>
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

          {results.cartReducer.map((result) => {
            const { name, price, image } = result;
            return (
              <div className="added-item" key={name}>
                <img src={image} alt={name} />
                <div className="item-info">
                  <h5>{name}</h5>
                  <h6>{price}$</h6>
                  <button
                    className="remove-btn"
                    onClick={() => removeHandler(result)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
