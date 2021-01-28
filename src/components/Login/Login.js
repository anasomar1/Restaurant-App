import React from "react";
import "./Login.css";
import { signInWithGoogle, signOutFromGoogle } from "../../services/firebase";
import { useSelector } from "react-redux";

export const LoggedIn = ({ user, history }) => {
  const total = useSelector((state) => state.totalReducer);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/submitted");
  };

  return (
    <div className="not-logged-in">
      <h3>
        {user.displayName}, fill in the information below to confirm your order
      </h3>
      <h2 className="total-price">Total Price = {total}</h2>

      <form className="information-form" onSubmit={submitHandler} action="">
        <div className="form-group" hidden>
          <input
            type="text"
            name="name"
            defaultValue={user.displayName}
            hidden
          />
        </div>
        <div className="form-group">
          <input type="email" name="email" defaultValue={user.email} hidden />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number</label>
          <input type="number" id="number" name="number" required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Payment Method</label>
          <input type="radio" id="cod" name="payment" value="cod" required />
          <label htmlFor="cod">Cash On Delivery</label>
        </div>
        <button type="submit" className="btn">
          Place your order
        </button>
      </form>
      <button className="logout-button" onClick={signOutFromGoogle}>
        Logout
      </button>
    </div>
  );
};

export const NotLoggedIn = () => {
  return (
    <div className="login">
      <h3>Sign in to be able to proceed</h3>
      <button className="btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
