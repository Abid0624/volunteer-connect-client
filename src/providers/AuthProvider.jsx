import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = async (name, photoURL) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
    }
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currrentUser) => {
      console.log("State captured Current user", currrentUser);
      if (currrentUser?.email) {
        setUser(currrentUser);
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currrentUser?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
      } else {
        setUser(currrentUser);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,

          { withCredentials: true }
        );
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    updateUserProfile,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
