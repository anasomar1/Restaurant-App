import React, { useState, useEffect } from "react";
import { LoggedIn, NotLoggedIn } from "../components/Login/Login";
import { auth } from "../services/firebase";

const Checkout = ({ history }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let unmounted = false;
    auth.onAuthStateChanged(function (user) {
      if (user && !unmounted) {
        const { displayName, email, emailVerified } = user;
        setUser({
          displayName,
          email,
          emailVerified,
        });
      }
    });
    return () => {
      unmounted = true;
    };
  }, [user]);

  return user.emailVerified ? (
    <LoggedIn user={user} history={history} />
  ) : (
    <NotLoggedIn />
  );
};

export default Checkout;
