import { useEffect, useState } from "react";
import firebaseInitialization from "./../firebase/firebase.init";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// firebase initialize
firebaseInitialization();

// providers
const GoogleProvider = new GoogleAuthProvider();

const auth = getAuth();

const UseFirebase = () => {
  // all states
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // get the currently sign in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    return () => unsubscribe;
  }, []);

  // sign out

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    logOut,
    signInWithGoogle,
  };
};

export default UseFirebase;
