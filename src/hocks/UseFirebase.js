import { useEffect, useState } from "react";
import firebaseInitialization from "./../firebase/firebase.init";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// firebase initialize
firebaseInitialization();

// providers
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const auth = getAuth();

const UseFirebase = () => {
  // all states
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

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

  // sign in with facebook
  const signInWithFacebook = () => {
    signInWithPopup(auth, FacebookProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign up with email
  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserNameAndImage(); // for set user name and image
        emailVerification(); // for email verification
        alert("User has been created");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // set user name and profile URL
  const setUserNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // Email Verification
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert(
        `Verification mail has been sent to ${email}. Please check your mail box.`
      );
    });
  };

  // Sign in with email
  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // reset password
  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email has been sent. Please check your mail box");
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

  // get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  // get password
  const getPhotoURL = (e) => {
    setPhotoURL(e?.target?.value);
  };

  return {
    user,
    error,
    logOut,
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmail,
    registerUser,
    resetPassword,
    getName,
    getEmail,
    getPassword,
    getPhotoURL,
  };
};

export default UseFirebase;
