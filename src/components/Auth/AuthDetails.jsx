import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div id="signInDetails">
          <p>Signed In as <span id="userEmail">{`${authUser.email}`}</span></p>
          <button onClick={userSignOut}>Sign Out</button>
        </div>
      ) : (
        <div id="signInDetails">
          <p>Signed Out</p>
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
