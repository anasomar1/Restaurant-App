import React, { useState, useEffect } from "react";
import { LoggedIn, NotLoggedIn } from "../components/Login/Login";
import { auth } from "../services/firebase";

const Checkout = ({ history }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const { displayName, email, emailVerified } = user;
        setUser({
          displayName,
          email,
          emailVerified,
        });
      }
    });
  }, [user]);

  return user.emailVerified ? (
    <LoggedIn user={user} history={history} />
  ) : (
    <NotLoggedIn />
  );
};

export default Checkout;
